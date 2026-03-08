"use client";
import { useEffect } from 'react';

/**
 * Local SEO Schema Component
 * Optimized for "aqsatech in dubai" local search rankings
 */
const LocalSEOSchema: React.FC = () => {
  useEffect(() => {
    const baseUrl = 'https://aqsatech.ae';
    
    // Enhanced Local Business Schema with Multiple Types
    const localBusinessSchema = {
      '@context': 'https://schema.org',
      '@type': ['LocalBusiness', 'HomeAndConstructionBusiness', 'ProfessionalService', 'Contractor'],
      '@id': `${baseUrl}#localbusiness`,
      name: 'Aqsatech in Dubai - Aqsa Tech UAE',
      alternateName: [
        'Aqsatech',
        'Aqsa Tech',
        'Aqsa Tech Dubai',
        'Aqsatech in Dubai',
        'Aqsatech Dubai',
        'Aqsatech UAE',
        'AQSATECH',
        'aqsatech.ae',
        'Aqsa Tech in Dubai',
        'Aqsa Technical Services'
      ],
      legalName: 'Aqsa Tech UAE',
      slogan: 'Dubai\'s #1 Most Trusted Technical Services Company',
      description: 'Aqsatech in Dubai - UAE\'s #1 most trusted technical services company since 2020. Expert AC service, home maintenance, renovation, handyman, plumbing, electrical services across Dubai, Abu Dhabi, Sharjah. 10,000+ satisfied customers. Same-day service available. Free quotes. Licensed and insured. Call +971 52 501 0132',
      url: baseUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/Logo%20Chatgpt.png`,
        width: 1200,
        height: 630,
        caption: 'Aqsatech in Dubai Logo'
      },
      image: [
        `${baseUrl}/Logo%20Chatgpt.png`,
        `${baseUrl}/Hero%20Clip.mp4`
      ],
      telephone: '+971525010132',
      email: 'admin@aqsatech.ae',
      priceRange: '$$',
      currenciesAccepted: 'AED',
      paymentAccepted: ['Cash', 'Bank Transfer', 'Credit Card', 'Debit Card'],
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Dubai',
        addressRegion: 'Dubai',
        addressCountry: {
          '@type': 'Country',
          name: 'United Arab Emirates'
        },
        postalCode: '00000'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 25.2048,
        longitude: 55.2708,
        name: 'Dubai, UAE'
      },
      areaServed: [
        {
          '@type': 'City',
          name: 'Dubai',
          '@id': 'https://www.wikidata.org/wiki/Q612'
        },
        {
          '@type': 'City',
          name: 'Abu Dhabi',
          '@id': 'https://www.wikidata.org/wiki/Q1519'
        },
        {
          '@type': 'City',
          name: 'Sharjah',
          '@id': 'https://www.wikidata.org/wiki/Q188723'
        },
        {
          '@type': 'City',
          name: 'Ajman'
        },
        {
          '@type': 'City',
          name: 'Ras Al Khaimah'
        },
        {
          '@type': 'City',
          name: 'Fujairah'
        },
        {
          '@type': 'City',
          name: 'Umm Al Quwain'
        },
        {
          '@type': 'State',
          name: 'Dubai',
          containedInPlace: {
            '@type': 'Country',
            name: 'United Arab Emirates'
          }
        }
      ],
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '00:00',
        closes: '23:59',
        description: '24/7 Emergency Service Available'
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '10247',
        bestRating: '5',
        worstRating: '1',
        ratingExplanation: 'Based on verified customer reviews across multiple platforms'
      },
      sameAs: [
        'https://www.facebook.com/share/1CiAnnR5uL/',
        'https://www.instagram.com/aqsa.techs?igsh=bjJld3Y0anhiam1i',
        'https://twitter.com/aqsatech_ae',
        'https://www.linkedin.com/company/aqsatech-ae/'
      ],
      foundingDate: '2020-01-01',
      numberOfEmployees: {
        '@type': 'QuantitativeValue',
        value: 75,
        minValue: 50,
        maxValue: 100
      },
      knowsAbout: [
        'AC Installation',
        'AC Repair',
        'AC Maintenance',
        'Home Maintenance',
        'Villa Renovation',
        'Apartment Renovation',
        'Handyman Services',
        'Plumbing Services',
        'Electrical Services',
        'Painting Services',
        'Tiling Services',
        'Carpentry Services',
        'Office Fit Out',
        'HVAC Services',
        'Property Maintenance',
        'Building Maintenance'
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Aqsatech Services',
        itemListElement: [
          {
            '@type': 'OfferCatalog',
            name: 'AC Services Dubai',
            itemListElement: [
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'AC Installation Dubai',
                  description: 'Professional AC installation services for residential and commercial properties in Dubai',
                  provider: {
                    '@type': 'LocalBusiness',
                    name: 'Aqsatech in Dubai'
                  },
                  areaServed: {
                    '@type': 'City',
                    name: 'Dubai'
                  }
                }
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'AC Repair Dubai',
                  description: 'Same-day AC repair services across Dubai, Abu Dhabi, Sharjah',
                  provider: {
                    '@type': 'LocalBusiness',
                    name: 'Aqsatech in Dubai'
                  }
                }
              }
            ]
          }
        ]
      },
      makesOffer: [
        {
          '@type': 'Offer',
          name: 'Free Consultation',
          description: 'Free quotes and consultation for all services',
          price: '0',
          priceCurrency: 'AED'
        },
        {
          '@type': 'Offer',
          name: 'Same-Day Service',
          description: 'Emergency same-day service available',
          availability: 'https://schema.org/InStock'
        }
      ],
      hasMap: 'https://www.google.com/maps/place/Dubai,+United+Arab+Emirates/@25.2048,55.2708,12z',
      isAccessibleForFree: false,
      smokingAllowed: false,
      keywords: 'aqsatech in dubai, aqsatech dubai, aqsatech uae, aqsa tech dubai, aqsa tech in dubai, best ac service dubai, best home maintenance dubai, best renovation company dubai, top handyman dubai, professional plumber dubai, licensed electrician dubai'
    };

    // Service Schema for Main Services
    const serviceSchema = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${baseUrl}#service`,
      serviceType: 'Technical Services',
      name: 'Aqsatech Technical Services Dubai',
      description: 'Comprehensive technical services including AC service, home maintenance, renovation, plumbing, electrical, and more across Dubai and UAE',
      provider: {
        '@type': 'LocalBusiness',
        name: 'Aqsatech in Dubai - Aqsa Tech UAE',
        '@id': `${baseUrl}#localbusiness`
      },
      areaServed: [
        {
          '@type': 'City',
          name: 'Dubai'
        },
        {
          '@type': 'City',
          name: 'Abu Dhabi'
        },
        {
          '@type': 'City',
          name: 'Sharjah'
        }
      ],
      availableChannel: {
        '@type': 'ServiceChannel',
        serviceUrl: baseUrl,
        servicePhone: {
          '@type': 'ContactPoint',
          telephone: '+971-52-501-0132',
          contactType: 'Customer Service',
          availableLanguage: ['en', 'ar'],
          areaServed: 'AE'
        }
      },
      offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'AED',
        lowPrice: '50',
        highPrice: '10000',
        offerCount: '15'
      }
    };

    // Remove existing schemas
    const existingLocal = document.getElementById('local-seo-schema');
    const existingService = document.getElementById('service-seo-schema');
    if (existingLocal) existingLocal.remove();
    if (existingService) existingService.remove();

    // Add Local Business Schema
    const localScript = document.createElement('script');
    localScript.id = 'local-seo-schema';
    localScript.type = 'application/ld+json';
    localScript.text = JSON.stringify(localBusinessSchema);
    document.head.appendChild(localScript);

    // Add Service Schema
    const serviceScript = document.createElement('script');
    serviceScript.id = 'service-seo-schema';
    serviceScript.type = 'application/ld+json';
    serviceScript.text = JSON.stringify(serviceSchema);
    document.head.appendChild(serviceScript);

    return () => {
      const localToRemove = document.getElementById('local-seo-schema');
      const serviceToRemove = document.getElementById('service-seo-schema');
      if (localToRemove) localToRemove.remove();
      if (serviceToRemove) serviceToRemove.remove();
    };
  }, []);

  return null;
};

export default LocalSEOSchema;

