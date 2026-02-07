import type { ReactNode } from 'react';
import { Dialog } from 'radix-ui';
import { overlay, content, closeButton, video } from './VideoDialog.css';
import { visuallyHidden } from '@/styles/utils.css';

interface VideoDialogProps {
  src: string;
  title: string;
  children: ReactNode;
}

export function VideoDialog({ src, title, children }: VideoDialogProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={overlay} />
        <Dialog.Content className={content} aria-describedby={undefined}>
          <Dialog.Title className={visuallyHidden}>{title}</Dialog.Title>
          <video src={src} controls autoPlay className={video}>
            <track kind="captions" />
          </video>
          <Dialog.Close asChild>
            <button className={closeButton} aria-label="Close" type="button">
              ✕
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
