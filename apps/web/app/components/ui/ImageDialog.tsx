import { Dialog } from 'radix-ui';
import {
  overlay,
  content,
  closeButton,
  image,
  triggerButton,
  triggerImage,
} from './ImageDialog.css';
import { visuallyHidden } from '@/styles/utils.css';

interface ImageDialogProps {
  src: string;
  alt?: string;
  triggerClassName?: string;
}

export function ImageDialog({ src, alt, triggerClassName }: ImageDialogProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button type="button" className={triggerButton}>
          <img src={src} alt={alt} className={`${triggerImage} ${triggerClassName || ''}`} />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={overlay} />
        <Dialog.Content className={content} aria-describedby={undefined}>
          <Dialog.Title className={visuallyHidden}>{alt || 'Image preview'}</Dialog.Title>
          <img src={src} alt={alt} className={image} />
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
