import React, { useState } from 'react';
import { Dialog } from 'radix-ui';
import { overlay, content, closeButton, image } from './ImageDialog.css';

interface ImageDialogProps {
  src: string;
  alt: string;
  children: React.ReactNode;
}

export function ImageDialog({ src, alt, children }: ImageDialogProps) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={overlay} />
        <Dialog.Content className={content}>
          <img src={src} alt={alt} className={image} />
          <Dialog.Close asChild>
            <button className={closeButton} aria-label="Close">
              ✕
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
