import React, {useState, useEffect} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';

export default function PwaReloadPopup() {
  const [showPopup, setShowPopup] = useState(false);
  const {siteConfig} = useDocusaurusContext();

  useEffect(() => {
    // Check if there's a new service worker available
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        setShowPopup(true);
      });
    }
  }, []);

  const handleReload = () => {
    window.location.reload();
  };

  const handleDismiss = () => {
    setShowPopup(false);
  };

  if (!showPopup) {
    return null;
  }

  return (
    <div className={styles.popupOverlay}>
      <div className={styles.popup}>
        <div className={styles.popupContent}>
          <h3 className={styles.popupTitle}>New Version Available</h3>
          <p className={styles.popupMessage}>
            A new version of {siteConfig.title} is available. Reload to get the latest updates.
          </p>
          <div className={styles.popupActions}>
            <button onClick={handleReload} className={styles.reloadButton}>
              Reload Now
            </button>
            <button onClick={handleDismiss} className={styles.dismissButton}>
              Later
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
