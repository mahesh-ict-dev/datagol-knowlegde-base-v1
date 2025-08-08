import React, {useState} from 'react';
import {useLocation} from '@docusaurus/router';
import {translate} from '@docusaurus/Translate';
import {useAlternatePageUtils} from '@docusaurus/theme-common/internal';
import {useColorMode} from '@docusaurus/theme-common';
import styles from './styles.module.css';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function LocaleDropdownNavbarItem({mobile, ...props}) {
  const {i18n} = useDocusaurusContext();
  const alternatePageUtils = useAlternatePageUtils();
  const {colorMode} = useColorMode();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const currentLocale = i18n.currentLocale;
  const locales = i18n.locales;
  const localeConfigs = i18n.localeConfigs;

  const localeItems = locales.map((locale) => {
    const to = `pathname://${alternatePageUtils.createUrl({
      locale,
      pathname: location.pathname,
    })}`;
    return {
      isNavLink: true,
      label: localeConfigs[locale].label,
      to,
      target: '_self',
      autoAddBaseUrl: false,
      className:
        locale === currentLocale
          ? 'dropdown__link--active'
          : '',
    };
  });

  const dropdownLabel = translate({
    id: 'theme.navbar.localeDropdown.label',
    message: 'Languages',
    description: 'The label for the locale dropdown',
  });

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div 
      className={styles.localeDropdown}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div 
        className={styles.localeDropdownButton}
        onClick={handleToggle}
        onTouchEnd={handleToggle}
      >
        <span className={styles.localeDropdownLabel}>
          {localeConfigs[currentLocale].label}
        </span>
        <svg
          className={`${styles.localeDropdownArrow} ${isOpen ? styles.rotated : ''}`}
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M3 4.5L6 7.5L9 4.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className={`${styles.localeDropdownMenu} ${isOpen ? styles.open : ''}`}>
        {localeItems.map((item) => (
          <a
            key={item.to}
            className={`${styles.localeDropdownItem} ${item.className || ''}`}
            href={item.to}
            target={item.target}
            rel={item.target === '_blank' ? 'noopener noreferrer' : undefined}>
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
}
