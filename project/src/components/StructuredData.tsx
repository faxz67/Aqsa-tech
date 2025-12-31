import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

interface StructuredDataProps {
  type: 'Organization' | 'LocalBusiness' | 'Service' | 'Article' | 'BreadcrumbList';
  data?: Record<string, unknown>;
}

const StructuredData: React.FC<StructuredDataProps> = ({ type, data }) => {
  const location = useLocation();
  const { language } = useLanguage();
  const baseUrl = 'https://aqsatech.ae';
  const socialProfiles = [
    'https://www.facebook.com/share/1CiAnnR5uL/',
    'https://www.instagram.com/aqsa.techs?igsh=bjJld3Y0anhiam1i',
    'https://twitter.com/aqsatech_ae',
    'https://www.linkedin.com/company/aqsatech-ae/',
  ];

  useEffect(() => {
    let structuredData: Record<string, unknown> = {};

    switch (type) {
      case 'Organization':
        structuredData = {
          '@context': 'https://schema.org',
          '@type': 'HomeAndConstructionBusiness',
          name: 'Aqsa Tech UAE',
          alternateName: ['Aqsa Tech', 'Aqsa Technical Services', 'aqsatech'],
          legalName: 'Aqsa Tech UAE',
          url: baseUrl,
          logo: {
            '@type': 'ImageObject',
            url: `${baseUrl}/Logo.jpg`,
            width: 1200,
            height: 630,
          },
          image: `${baseUrl}/Logo.jpg`,
          description: "UAE's leading technical services company providing AC service, home maintenance, renovation, handyman, plumbing, electrical, and fit out services across Dubai, Abu Dhabi, Sharjah.",
          foundingDate: '2020',
          telephone: '+971525010132',
          email: 'admin@aqsatech.ae',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'United Arab Emirates',
            addressLocality: 'Dubai',
            addressRegion: 'Dubai',
            addressCountry: 'AE',
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: 25.2048,
            longitude: 55.2708,
          },
          contactPoint: [
            {
              '@type': 'ContactPoint',
              telephone: '+971-52-501-0132',
              contactType: 'Customer Service',
              areaServed: ['AE', 'UAE', 'Dubai', 'Abu Dhabi', 'Sharjah'],
              availableLanguage: ['en', 'English'],
              contactOption: '24/7 Emergency Service',
            },
            {
              '@type': 'ContactPoint',
              email: 'admin@aqsatech.ae',
              contactType: 'Sales',
              areaServed: ['AE', 'UAE'],
              availableLanguage: ['en'],
            },
          ],
          areaServed: [
            { '@type': 'City', name: 'Dubai' },
            { '@type': 'City', name: 'Abu Dhabi' },
            { '@type': 'City', name: 'Sharjah' },
            { '@type': 'City', name: 'Ajman' },
            { '@type': 'City', name: 'Ras Al Khaimah' },
            { '@type': 'City', name: 'Fujairah' },
            { '@type': 'City', name: 'Umm Al Quwain' },
          ],
          openingHoursSpecification: [
            {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
              opens: '00:00',
              closes: '23:59',
            },
          ],
          priceRange: '$$',
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.9',
            reviewCount: '10247',
            bestRating: '5',
            worstRating: '1',
          },
          serviceType: [
            'AC Installation Dubai',
            'AC Maintenance UAE',
            'AC Repair Services',
            'Home Maintenance UAE',
            'Renovation Services Dubai',
            'Handyman Services UAE',
            'Plumbing Services Dubai',
            'Electrical Services UAE',
            'Painting Contractors Dubai',
            'Office Fit Out UAE',
            'Carpentry Services',
            'Tiling Services',
            'Kitchen Renovation',
            'Villa Renovation UAE',
            'Apartment Renovation',
          ],
          knowsAbout: [
            'Technical Services UAE',
            'Home Maintenance Dubai',
            'AC Service UAE',
            'Renovation Dubai',
            'Handyman UAE',
            'Fit Out UAE',
            'Property Maintenance',
            'HVAC Installation',
            'Emergency Plumbing',
            '24/7 Electrical Service',
          ],
          sameAs: socialProfiles,
        };
        break;

      case 'LocalBusiness':
        structuredData = {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          '@id': `${baseUrl}#business`,
          name: 'Aqsa Tech UAE',
          alternateName: ['Aqsa Tech', 'Aqsa Technical Services'],
          image: {
            '@type': 'ImageObject',
            url: `${baseUrl}/Logo.jpg`,
            width: 1200,
            height: 630,
          },
          url: baseUrl,
          telephone: '+971525010132',
          email: 'admin@aqsatech.ae',
          priceRange: '$$',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'United Arab Emirates',
            addressLocality: 'Dubai',
            addressRegion: 'Dubai',
            addressCountry: 'AE',
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: 25.2048,
            longitude: 55.2708,
          },
          openingHoursSpecification: [
            {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
              opens: '00:00',
              closes: '23:59',
            },
          ],
          areaServed: [
            { '@type': 'City', name: 'Dubai' },
            { '@type': 'City', name: 'Abu Dhabi' },
            { '@type': 'City', name: 'Sharjah' },
            { '@type': 'City', name: 'Ajman' },
            { '@type': 'Country', name: 'United Arab Emirates' },
          ],
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Technical Services UAE',
            itemListElement: [
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'AC Installation & Maintenance Dubai',
                  description: 'Professional AC installation, maintenance, and repair services across UAE',
                },
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Home Maintenance Services UAE',
                  description: 'Complete home maintenance solutions for villas and apartments',
                },
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Renovation & Remodeling Dubai',
                  description: 'Villa and apartment renovation services across Dubai, Abu Dhabi, Sharjah',
                },
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Handyman Services UAE',
                  description: 'Professional handyman services for residential and commercial properties',
                },
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Plumbing Services Dubai',
                  description: '24/7 emergency plumbing services, repairs, and installations',
                },
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Electrical Services UAE',
                  description: 'Licensed electrical services, repairs, and installations',
                },
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Painting Contractors Dubai',
                  description: 'Professional interior and exterior painting services',
                },
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Office Fit Out Services UAE',
                  description: 'Complete office fit out solutions for commercial spaces',
                },
              },
            ],
          },
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.9',
            reviewCount: '10247',
            bestRating: '5',
            worstRating: '1',
          },
          description: "UAE's most trusted technical services company. Expert AC service, home maintenance, renovation, handyman, plumbing, electrical services across Dubai, Abu Dhabi, Sharjah. 10,000+ satisfied customers. Same-day service available. Free quotes.",
          sameAs: socialProfiles,
        };
        break;

      case 'Service':
        if (data) {
          structuredData = {
            '@context': 'https://schema.org',
            '@type': 'Service',
            serviceType: data.serviceType || 'Property Maintenance',
            provider: {
              '@type': 'LocalBusiness',
              name: 'Aqsa Tech - AQSATECH',
              url: baseUrl,
            },
            areaServed: {
              '@type': 'City',
              name: 'Dubai',
            },
            description: data.description || '',
            name: data.name || '',
            ...data,
          };
        }
        break;

      case 'Article':
        if (data) {
          structuredData = {
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: data.headline || '',
            description: data.description || '',
            image: data.image || `${baseUrl}/Logo.jpg`,
            datePublished: data.datePublished || '',
            dateModified: data.dateModified || data.datePublished || '',
            author: {
              '@type': 'Organization',
              name: 'Aqsa Tech - AQSATECH',
            },
            publisher: {
              '@type': 'Organization',
              name: 'Aqsa Tech - AQSATECH',
              logo: {
                '@type': 'ImageObject',
                url: `${baseUrl}/Logo.jpg`,
              },
            },
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': data.url || `${baseUrl}${location.pathname}`,
            },
            ...data,
          };
        }
        break;

      case 'BreadcrumbList':
        if (data && Array.isArray(data.itemListElement)) {
          structuredData = {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: data.itemListElement,
          };
        }
        break;
    }

    // Remove existing script with this type
    const existingScript = document.getElementById(`structured-data-${type.toLowerCase()}`);
    if (existingScript) {
      existingScript.remove();
    }

    // Add new structured data script
    const script = document.createElement('script');
    script.id = `structured-data-${type.toLowerCase()}`;
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.getElementById(`structured-data-${type.toLowerCase()}`);
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [type, data, location, language, baseUrl]);

  return null;
};

export default StructuredData;

