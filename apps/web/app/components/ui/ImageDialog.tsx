import { useState, useEffect } from 'react';
import { overlay, content, closeButton, image, triggerButton, triggerImage } from './ImageDialog.css';

interface ImageDialogProps {
  src: string;
  alt?: string;
  triggerClassName?: string;
}

export function ImageDialog({ src, alt, triggerClassName }: ImageDialogProps) {
  const [open, setOpen] = useState(false);
  const [clientKey, setClientKey] = useState(0);

  console.log('🖼️ ImageDialog RENDER - open:', open, 'src:', src, 'clientKey:', clientKey);

  // Force remount on client to ensure onClick attaches
  useEffect(() => {
    console.log('🔄 CLIENT MOUNT EFFECT - Setting clientKey to 1');
    setClientKey(1);
  }, []);

  // Close on Escape key
  useEffect(() => {
    console.log('⚡ Escape key effect running, open:', open);
    if (!open) return;

    const handleEscape = (e: KeyboardEvent) => {
      console.log('⌨️ Escape key pressed');
      if (e.key === 'Escape') setOpen(false);
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [open]);

  // Prevent body scroll when dialog is open
  useEffect(() => {
    console.log('⚡ Scroll lock effect running, open:', open);
    if (open) {
      document.body.style.overflow = 'hidden';
      console.log('🔒 Body scroll locked');
    } else {
      document.body.style.overflow = '';
      console.log('🔓 Body scroll unlocked');
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const handleButtonClick = () => {
    console.log('🎯 BUTTON CLICKED! Current open:', open, 'Setting to: true');
    setOpen(true);
    console.log('✅ setOpen(true) called');
  };

  return (
    <>
      <button
        key={`dialog-button-${clientKey}`}
        type="button"
        className={triggerButton}
        onClick={handleButtonClick}
        aria-haspopup="dialog"
        aria-expanded={open}
      >
        <img src={src} alt={alt} className={`${triggerImage} ${triggerClassName || ''}`} />
      </button>

      {open ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={alt}
          style={{ position: 'fixed', inset: 0, zIndex: 1000 }}
        >
          {console.log('🎨 RENDERING DIALOG OVERLAY AND CONTENT')}
          <div
            className={overlay}
            onClick={() => {
              console.log('🌑 Overlay clicked, closing dialog');
              setOpen(false);
            }}
            aria-hidden="true"
          />
          <div className={content}>
            <img src={src} alt={alt} className={image} />
            <button
              className={closeButton}
              onClick={() => {
                console.log('❌ Close button clicked');
                setOpen(false);
              }}
              aria-label="Close"
              type="button"
            >
              ✕
            </button>
          </div>
        </div>
      ) : (
        console.log('💤 Dialog is closed, not rendering')
      )}
    </>
  );
}





