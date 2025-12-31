import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  type?: string;
  noindex?: boolean;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  keywords,
  image = 'https://aqsatech.ae/Logo.jpg',
  type = 'website',
  noindex = false,
}) => {
  const location = useLocation();
  const { language, t } = useLanguage();
  
  const baseUrl = 'https://aqsatech.ae';
  const currentUrl = `${baseUrl}${location.pathname}`;
  
  // Default SEO values - Use translated values
  const defaultTitle = t('seo.title');
  const defaultDescription = t('seo.description');
  const defaultKeywords = 'aqsatech, Aqsa Tech, AQSATECH, aqsatech.ae, aqsatech Dubai, aqsatech UAE, aqsatech services, aqsatech contact, aqsatech phone, property maintenance Dubai, renovation Dubai, remodeling Dubai, AC repair Dubai, plumbing Dubai, electrical services Dubai, painting Dubai, tiling Dubai, carpentry Dubai, MEP services Dubai, HVAC Dubai, building maintenance Dubai, home renovation Dubai, commercial renovation Dubai, Dubai maintenance company, Dubai contractors, Dubai handyman, property services Dubai UAE';

  const finalTitle = title || defaultTitle;
  const finalDescription = description || defaultDescription;
  const finalKeywords = keywords || defaultKeywords;

  useEffect(() => {
    // Update document title
    document.title = finalTitle;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, attribute: string = 'name') => {
      let element = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.content = content;
    };

    // Update meta tags
    updateMetaTag('title', finalTitle);
    updateMetaTag('description', finalDescription);
    updateMetaTag('keywords', finalKeywords);
    updateMetaTag('robots', noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    updateMetaTag('googlebot', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    updateMetaTag('author', 'Aqsa Tech - AQSATECH');
    updateMetaTag('copyright', 'Aqsa Tech - AQSATECH');
    updateMetaTag('rating', '5');
    updateMetaTag('distribution', 'global');
    updateMetaTag('revisit-after', '7 days');

    // Update Open Graph tags
    updateMetaTag('og:title', finalTitle, 'property');
    updateMetaTag('og:description', finalDescription, 'property');
    updateMetaTag('og:url', currentUrl, 'property');
    updateMetaTag('og:type', type, 'property');
    updateMetaTag('og:image', image, 'property');
    updateMetaTag('og:image:width', '1200', 'property');
    updateMetaTag('og:image:height', '630', 'property');
    updateMetaTag('og:image:alt', 'Aqsa Tech - AQSATECH Property Maintenance Services', 'property');
    updateMetaTag('og:site_name', 'Aqsa Tech - AQSATECH', 'property');
    updateMetaTag('og:locale', 'en_US', 'property');

    // Update Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image', 'name');
    updateMetaTag('twitter:title', finalTitle, 'name');
    updateMetaTag('twitter:description', finalDescription, 'name');
    updateMetaTag('twitter:image', image, 'name');
    updateMetaTag('twitter:image:alt', 'Aqsa Tech - AQSATECH Property Maintenance Services', 'name');
    updateMetaTag('twitter:url', currentUrl, 'name');
    updateMetaTag('twitter:site', '@aqsatech', 'name');
    updateMetaTag('twitter:creator', '@aqsatech', 'name');

    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = currentUrl;

    // Update html lang attribute
    document.documentElement.lang = 'en';

    // Update hreflang
    const updateHreflang = (lang: string, href: string) => {
      let hreflang = document.querySelector(`link[hreflang="${lang}"]`) as HTMLLinkElement;
      if (!hreflang) {
        hreflang = document.createElement('link');
        hreflang.rel = 'alternate';
        hreflang.setAttribute('hreflang', lang);
        document.head.appendChild(hreflang);
      }
      hreflang.href = href;
    };

    updateHreflang('en', `${currentUrl}${location.search ? location.search : ''}`);
    updateHreflang('ar', `${currentUrl}${location.search.includes('lang') ? location.search : '?lang=ar'}`);
    updateHreflang('x-default', currentUrl);

    // Update HTML lang attribute
    document.documentElement.lang = language.toLowerCase();
  }, [finalTitle, finalDescription, finalKeywords, currentUrl, image, type, noindex, language, location]);

  return null;
};

export default SEOHead;

