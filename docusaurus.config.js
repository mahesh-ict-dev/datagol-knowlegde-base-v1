// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'DataGOL Documentation',
  tagline: 'Knowledge Base',
  // Set the title for the homepage

  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.datagol.ai',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'mahesh-ict-dev', // Usually your GitHub org/user name.
  projectName: 'datagol-knowlegde-base-v1', // Usually your repo name.
  deploymentBranch: 'main',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // Performance Optimizations
 future: {
    experimental_faster: {
      swcJsLoader: true,
      swcJsMinimizer: true,
      swcHtmlMinimizer: true,
      lightningCssMinimizer: true,
      rspackBundler: false,
      mdxCrossCompilerCache: true,
    },
  },

  // // Webpack optimizations
  // webpack: {
  //   jsLoader: (isServer) => ({
  //     loader: require.resolve('swc-loader'),
  //     options: {
  //       jsc: {
  //         parser: {
  //           syntax: 'typescript',
  //           tsx: true,
  //         },
  //         target: 'es2017',
  //       },
  //     },
  //   }),
  // },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/docs', // Serve the docs at the site's root
          sidebarPath: './sidebars.js',
          // Performance optimizations for docs
          showLastUpdateTime: true,
          showLastUpdateAuthor: false,
          breadcrumbs: true,
          // Disable heavy features if not needed
          editUrl: undefined, // Disable edit links for better performance
        },
        // blog: {
        //   showReadingTime: true,
        //   feedOptions: {
        //     type: ['rss', 'atom'],
        //     xslt: true,
        //   },
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        //   // Useful options to enforce blogging best practices
        //   onInlineTags: 'warn',
        //   onInlineAuthors: 'warn',
        //   onUntruncatedBlogPosts: 'warn',
        // },
        theme: {
          customCss: './src/css/custom.css',
        },
        // Performance optimizations for sitemap
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
          createSitemapItems: async (params) => {
            const {defaultCreateSitemapItems, ...rest} = params;
            const items = await defaultCreateSitemapItems(rest);
            return items.filter((item) => !item.url.includes('/page/'));
          },
        },
        // Google Analytics (optional - add your tracking ID)
        gtag: {
          trackingID: 'G-XXXXXXXXXX', // Replace with your Google Analytics ID
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // SEO Configuration
      metadata: [
        {name: 'keywords', content: 'DataGOL, documentation, knowledge base, API, developer tools'},
        {name: 'description', content: 'DataGOL comprehensive documentation and knowledge base for developers and users'},
        {name: 'author', content: 'DataGOL Team'},
        {name: 'robots', content: 'index, follow'},
        {name: 'twitter:card', content: 'summary_large_image'},
        {name: 'twitter:site', content: '@DataGOL'}, // Update with your Twitter handle
        {property: 'og:type', content: 'website'},
        {property: 'og:site_name', content: 'DataGOL Documentation'},
        // Performance-related meta tags
        {name: 'google-site-verification', content: 'your-google-verification-code'}, // Add your verification code
        {'http-equiv': 'x-dns-prefetch-control', content: 'on'},
      ],
      
      // Default social sharing image
      image: 'img/datagol-social-card.jpg', // Add your 1200x630px social card image
      
      // Performance optimization: Disable color mode toggle if not needed
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false, // Set to true to disable dark mode for better performance
        respectPrefersColorScheme: true,
      },
      
      navbar: {
        // title: 'Home',
         logo: {
           alt: 'DataGOL Logo',
           src: 'img/logo.svg',
           // Performance: Add srcDark for dark mode
          // srcDark: 'img/dark_v1.svg', // Optional: different logo for dark mode
           href: '/', // Make logo clickable
           target: '_self',
         },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
          //{to: 'https://app.datagol.ai', label: 'Visit DataGOL', position: 'right'},
          {to: 'https://www.datagol.ai/', label: 'Visit DataGOL', position: 'right'},
          //  {
          //    href: 'https://app.datagol.ai',
          //    label: 'DataGOL',
          //    position: 'right',
          //  },
          // Performance: Add search bar
          {
            type: 'search',
            position: 'right',
          }
          
          
        ],
        hideOnScroll: false, // Set to true to hide navbar on scroll for better UX
      },
      // footer: {
      //   style: 'dark',
      //   links: [
      //     {
      //       title: 'Product',
      //       items: [
      //         {
      //           label: 'DataGOL App',
      //           href: 'https://app.datagol.ai',
      //         },
      //         {
      //           label: 'Documentation',
      //           to: '/docs/intro',
      //         },
      //       ],
      //     },
      //     {
      //       title: 'Community',
      //       items: [
      //         {
      //           label: 'Twitter',
      //           href: 'https://twitter.com/DataGOL',
      //         },
      //         {
      //           label: 'X',
      //           href: 'https://x.com/DataGOL',
      //         },
      //         {
      //           label: 'YouTube',
      //           href: 'https://youtube.com/@DataGOL',
      //         },
      //         {
      //           label: 'LinkedIn',
      //           href: 'https://linkedin.com/company/datagol',
      //         },
      //       ],
      //     },
      //     {
      //       title: 'More',
      //       items: [
      //         {
      //           label: 'GitHub',
      //           href: 'https://github.com/DataGOL',
      //         },
      //         {
      //           label: 'Support',
      //           href: 'mailto:support@datagol.ai',
      //         },
      //       ],
      //     },
      //   ],
      //   copyright: `Copyright © ${new Date().getFullYear()} DataGOL. All rights reserved.`,
      // },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        // Performance: Only include languages you actually use
        additionalLanguages: ['bash', 'json', 'python', 'javascript', 'typescript'],
      },
      
      // Additional SEO head tags with performance optimizations
      headTags: [
        {
          tagName: 'meta',
          attributes: {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1.0',
          },
        },
        {
          tagName: 'meta',
          attributes: {
            property: 'og:image',
            content: 'https://docs.datagol.ai/img/datagol-social-card.jpg',
          },
        },
        {
          tagName: 'meta',
          attributes: {
            name: 'theme-color',
            content: '#2e8555',
          },
        },
        {
          tagName: 'link',
          attributes: {
            rel: 'canonical',
            href: 'https://docs.datagol.ai',
          },
        },
        // Performance optimizations
        {
          tagName: 'link',
          attributes: {
            rel: 'preconnect',
            href: 'https://fonts.googleapis.com',
          },
        },
        {
          tagName: 'link',
          attributes: {
            rel: 'preconnect',
            href: 'https://fonts.gstatic.com',
            crossorigin: 'anonymous',
          },
        },
        {
          tagName: 'link',
          attributes: {
            rel: 'dns-prefetch',
            href: 'https://www.google-analytics.com',
          },
        },
        // Service Worker for caching (optional)
        {
          tagName: 'link',
          attributes: {
            rel: 'manifest',
            href: '/manifest.json',
          },
        },
          {
        tagName: 'link',
        attributes: {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap',
        },
  },
      ],
      
      // Performance: Configure table of contents
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 4,
      },
    }),
    
    plugins: [
      [
        require.resolve("@easyops-cn/docusaurus-search-local"),
        {
          hashed: true,
          indexDocs: true,
          indexBlog: false,
          indexPages: true,
          docsRouteBasePath: '/docs',
          language: ['en'],
          // Performance optimizations for search
          searchResultLimits: 8,
          searchResultContextMaxLength: 50,
          explicitSearchResultPath: true,
        },
      ],
      
      // Sitemap plugin (now configured in presets for better performance)
      
      // Performance: PWA Plugin (optional - for offline support)
      [
        '@docusaurus/plugin-pwa',
        {
          debug: false,
          offlineModeActivationStrategies: [
            'appInstalled',
            'standalone',
            'queryString',
          ],
          pwaHead: [
            {
              tagName: 'link',
              rel: 'icon',
              href: '/img/logo.png',
            },
            {
              tagName: 'link',
              rel: 'manifest',
              href: '/manifest.json',
            },
            {
              tagName: 'meta',
              name: 'theme-color',
              content: '#2e8555',
            },
            {
              tagName: 'meta',
              name: 'apple-mobile-web-app-capable',
              content: 'yes',
            },
            {
              tagName: 'meta',
              name: 'apple-mobile-web-app-status-bar-style',
              content: '#2e8555',
            },
          ],
        },
      ],
      
      // Performance: Ideal Image Plugin for optimized images
      [
        '@docusaurus/plugin-ideal-image',
        {
          quality: 70,
          max: 1030,
          min: 640,
          steps: 2,
          disableInDev: false,
        },
      ],
    ],
    
};

export default config;