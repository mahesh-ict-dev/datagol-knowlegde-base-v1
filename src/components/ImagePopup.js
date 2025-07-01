import React, { useState } from 'react';
import styles from './ImagePopup.module.css';

export default function ImagePopup({ src, alt, caption }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <img 
        src={src} 
        alt={alt} 
        onClick={() => setIsOpen(true)}
        style={{ cursor: 'pointer' }}
      />
      
      {isOpen && (
        <div className={styles.overlay} onClick={() => setIsOpen(false)}>
          <div className={styles.popup}>
            <img src={src} alt={alt} className={styles.popupImage} />
            {caption && <p>{caption}</p>}
            <button onClick={() => setIsOpen(false)}>×</button>
          </div>
        </div>
      )}
    </>
  );
}