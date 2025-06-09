// src/components/SEO.js
import React from 'react';
import {Helmet} from 'react-helmet';
import {useLocation} from '@docusaurus/router';
import {useSiteMetadata} from '@docusaurus/theme-common';

export default function SEO({
  title,
  description,
  keywords,
  image,
  children,
}) {
  const location = useLocation();
  const {siteConfig} = useSiteMetadata();
  
  const metaTitle = title ? `${title} | ${siteConfig.title}` : siteConfig.title;
  const metaDescription = description || siteConfig.tagline;
  const metaImage = image ? `${siteConfig.url}${image}` : `${siteConfig.url}/img/social-card.jpg`;
  const canonicalUrl = `${siteConfig.url}${location.pathname}`;

  return (
    <Helmet>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      {keywords && <meta name="keywords" content={keywords.join(', ')} />}
      
      {/* Open Graph */}
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImage} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {children}
    </Helmet>
  );
}