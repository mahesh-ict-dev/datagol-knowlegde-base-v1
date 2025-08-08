import React from 'react';
import Footer from '@theme-original/Footer';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';

export default function FooterWrapper(props) {
  const {siteConfig} = useDocusaurusContext();
  
  return (
    <div className={styles.footerWrapper}>
      <Footer {...props} />
      <div className={styles.footerBottom}>
        <div className={styles.footerBottomContent}>
          <p className={styles.footerCopyright}>
            © {new Date().getFullYear()} DataGOL
          </p>
          <div className={styles.footerLinks}>
            <a href="https://www.datagol.ai/privacy-policy" className={styles.footerLink}>Privacy Policy</a>
            <span className={styles.footerDivider}>•</span>
            <a href="https://www.datagol.ai/terms-conditions" className={styles.footerLink}>Terms of Service</a>
            {/* <span className={styles.footerDivider}>•</span>
            <a href="/cookies" className={styles.footerLink}>Cookie Policy</a> */}
          </div>
        </div>
      </div>
    </div>
  );
}
