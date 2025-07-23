import React, { useState } from 'react';
import styles from './ImagePopup.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function ImagePopup({ src, alt, caption }) {
  const [isOpen, setIsOpen] = useState(false);
  const imageUrl = useBaseUrl(src);

  return (
    <>
      <img 
        src={imageUrl} 
        alt={alt} 
        onClick={() => setIsOpen(true)}
        style={{ cursor: 'pointer' }}
      />
      
      {isOpen && (
        <div className={styles.overlay} onClick={() => setIsOpen(false)}>
          <div className={styles.popup}>
            <img src={imageUrl} alt={alt} className={styles.popupImage} />
            {caption && <p>{caption}</p>}
            <button onClick={() => setIsOpen(false)}>×</button>
          </div>
        </div>
      )}
    </>
  );
}