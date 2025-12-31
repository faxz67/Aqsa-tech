import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

interface FooterLink {
  label: string;
  href: string;
  badge?: string;
  isExternal?: boolean;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const Footer: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  // Social media links
  const socialLinks = {
    instagram: 'https://www.instagram.com/aqsatech.ae/',
    twitter: 'https://twitter.com/aqsatech_ae',
    linkedin: 'https://www.linkedin.com/company/aqsatech-ae/',
  };

  // Navigation handler
  const handleNavigation = (href: string, isExternal: boolean = false) => {
    if (isExternal) {
      window.open(href, '_blank', 'noopener,noreferrer');
      return;
    }

    if (href.startsWith('#')) {
      const sectionId = href.substring(1);
      if (location.pathname !== '/') {
        navigate('/', { state: { target: sectionId } });
      } else {
        const element = document.getElementById(sectionId);
        if (element) {
          const offset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
      }
    } else {
      navigate(href);
    }
  };

  const footerSections: FooterSection[] = React.useMemo(() => [
    {
      title: t('footer.company'),
      links: [
        { label: t('footer.aboutUs'), href: '#about', isExternal: false },
        { label: t('footer.allServices'), href: '/services', isExternal: false },
        { label: t('footer.blog'), href: '/blog', isExternal: false },
      ],
    },
    {
      title: t('footer.support'),
      links: [
        { label: t('footer.helpCenter'), href: '#get-in-touch', isExternal: false },
        { label: t('footer.privacyPolicy'), href: '/privacy-policy', isExternal: false },
        { label: t('footer.termsOfService'), href: '/terms-of-service', isExternal: false },
      ],
    },
    {
      title: t('footer.socials'),
      links: [
        { label: t('footer.instagram'), href: socialLinks.instagram, isExternal: true },
        { label: t('footer.twitter'), href: socialLinks.twitter, isExternal: true },
        { label: t('footer.linkedin'), href: socialLinks.linkedin, isExternal: true },
      ],
    },
  ], [t]);

  const linkVariants = {
    hover: {
      x: isRTL ? -4 : 4,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <footer className="w-full bg-gray-100 border-t border-gray-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10 w-full">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-6 lg:gap-8 mb-6 sm:mb-8 lg:mb-10 w-full items-start">
          {/* Brand and Contact Info */}
          <div className="sm:col-span-2 lg:col-span-2 flex flex-col w-full">
            {/* Branded Logo */}
            <a
              href="/"
              aria-label="Aqsa Tech home"
              className={`group flex flex-col items-center sm:items-start gap-1 sm:gap-1.5 mb-4 sm:mb-5 ${isRTL ? 'sm:items-end' : ''}`}
            >
              <div className="relative flex-shrink-0">
                <img
                  src="/Logo Chatgpt.png"
                  alt="Aqsa Technical Services logo"
                  loading="lazy"
                  decoding="async"
                  fetchPriority="low"
                  width={140}
                  height={45}
                  className="h-16 sm:h-20 lg:h-24 w-auto object-contain transition-all duration-300 group-hover:opacity-90"
                />
              </div>
              <div className={`flex flex-col -mt-1 ${isRTL ? 'items-center sm:items-end' : 'items-center sm:items-start'}`}>
                <span className="text-base sm:text-lg lg:text-xl font-bold tracking-tight leading-tight text-gray-900">Aqsa Technical Services</span>
              </div>
            </a>

            {/* Contact Info */}
            <div className={`space-y-1.5 sm:space-y-2 text-gray-700 text-xs sm:text-sm ${isRTL ? 'text-center sm:text-right' : 'text-center sm:text-left'}`}>
              <p className="font-semibold text-gray-900">United Arab Emirates</p>
              <p>
                <a href="tel:+971525010132" className="hover:text-brand-teal transition-colors text-gray-900 font-medium">
                  +971 52 501 0132
                </a>
              </p>
              <p>
                <a href="mailto:services@aqsatech.ae" className="hover:text-brand-teal transition-colors text-gray-900 font-medium">
                  services@aqsatech.ae
                </a>
              </p>
            </div>
          </div>

          {/* Footer Links Sections */}
          {footerSections.map((section, index) => (
            <div 
              key={index} 
              className={`flex flex-col ${isRTL ? 'items-end' : 'items-start'} w-full`}
            >
              <h3 className="text-gray-900 font-semibold text-xs sm:text-sm lg:text-base mb-3 sm:mb-4 w-full text-center sm:text-left">
                {section.title}
              </h3>
              <ul className="space-y-2 sm:space-y-2.5 flex flex-col w-full">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex} className={`${isRTL ? 'text-right' : 'text-left'}`}>
                    <motion.button
                      type="button"
                      onClick={() => handleNavigation(link.href, link.isExternal)}
                      variants={linkVariants}
                      whileHover="hover"
                      className={`text-gray-700 hover:text-gray-900 text-xs sm:text-sm inline-flex items-center gap-1.5 sm:gap-2 transition-colors duration-200 cursor-pointer font-medium ${isRTL ? 'flex-row-reverse' : ''}`}
                    >
                      {link.label}
                      {link.isExternal && (
                        <svg className="w-3 h-3 opacity-50 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      )}
                    </motion.button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-gray-200 pt-4 sm:pt-5 lg:pt-6">
          <p className="text-center text-gray-900 text-xs sm:text-sm font-medium">
            © {new Date().getFullYear()} Aqsa Tech. {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
