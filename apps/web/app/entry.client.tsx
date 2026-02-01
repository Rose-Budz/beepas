import { startTransition } from 'react';
import { hydrateRoot } from 'react-dom/client';
import { HydratedRouter } from 'react-router/dom';

console.log('🚀 Client entry executing');

// Global click detector
document.addEventListener('click', (e) => {
  console.log('🖱️ GLOBAL CLICK:', e.target);
}, true);

console.log('⚡ Starting hydration');

startTransition(() => {
  hydrateRoot(
    document,
    <HydratedRouter />
  );
  console.log('✅ Hydration complete');
});
