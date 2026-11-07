import type { EntryContext } from 'react-router';
import { ServerRouter } from 'react-router';
import { renderToPipeableStream } from 'react-dom/server';
import { PassThrough } from 'stream';

const ABORT_DELAY = 5000;

const SECURITY_HEADERS: Record<string, string> = {
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
  'Content-Security-Policy': "frame-ancestors 'none'; base-uri 'self'; object-src 'none'",
};

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  routerContext: EntryContext
) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;

    const { pipe, abort } = renderToPipeableStream(
      <ServerRouter context={routerContext} url={request.url} />,
      {
        onShellReady() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = new ReadableStream({
            start(controller) {
              body.on('data', (chunk: Uint8Array) => controller.enqueue(chunk));
              body.on('end', () => controller.close());
              body.on('error', (err: Error) => controller.error(err));
            },
          });

          responseHeaders.set('Content-Type', 'text/html');
          for (const [header, value] of Object.entries(SECURITY_HEADERS)) {
            if (!responseHeaders.has(header)) {
              responseHeaders.set(header, value);
            }
          }

          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode,
            })
          );

          pipe(body);
        },
        onShellError(error: unknown) {
          reject(error);
        },
        onError(error: unknown) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        },
      }
    );

    setTimeout(abort, ABORT_DELAY);
  });
}
