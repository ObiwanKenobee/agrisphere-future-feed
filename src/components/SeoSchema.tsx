
import React from 'react';

interface SeoSchemaProps {
  type: 'website' | 'organization' | 'product' | 'article';
  data?: Record<string, any>;
}

const SeoSchema: React.FC<SeoSchemaProps> = ({ type, data = {} }) => {
  let schemaData = {};

  switch (type) {
    case 'website':
      schemaData = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'AgriSphere',
        url: 'https://agrisphere.io',
        description: 'Smart irrigation platform inspired by Kenya\'s Galana Kulalu project',
        ...data
      };
      break;
    
    case 'organization':
      schemaData = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'AgriSphere',
        url: 'https://agrisphere.io',
        logo: 'https://agrisphere.io/logo.png',
        sameAs: [
          'https://twitter.com/agrisphere_dev',
          'https://github.com/agrisphere'
        ],
        ...data
      };
      break;
    
    case 'product':
      schemaData = {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'AgriSphere',
        applicationCategory: 'Agriculture Technology',
        operatingSystem: 'Web',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD'
        },
        ...data
      };
      break;
    
    case 'article':
      schemaData = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: data.headline || 'AgriSphere Article',
        image: data.image || 'https://agrisphere.io/banner.jpg',
        datePublished: data.datePublished || new Date().toISOString(),
        author: {
          '@type': 'Organization',
          name: 'AgriSphere Team'
        },
        ...data
      };
      break;
  }

  return (
    <script 
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

export default SeoSchema;
