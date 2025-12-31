import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { X, Menu, Zap, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

// Nested Menu Items for Services
const servicesNestedItems = [
  { titleEn: 'AC Services', titleAr: 'خدمات التكييف', path: '/services/ac-installation' },
  { titleEn: 'Plumbing & Sanitary', titleAr: 'السباكة والصرف الصحي', path: '/services/plumbing-sanitary' },
  { titleEn: 'Painting', titleAr: 'الدهان', path: '/services/painting-contracting' },
  { titleEn: 'Carpentry & Flooring', titleAr: 'النجارة والأرضيات', path: '/services/carpentry-flooring' },
  { titleEn: 'Electrical Works', titleAr: 'الأعمال الكهربائية', path: '/services/electromechanical-equipment' },
  { titleEn: 'Tiling', titleAr: 'أعمال البلاط', path: '/services/floor-and-wall-tiling' },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isNestedOpen, setIsNestedOpen] = useState(false);
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const [hoveredMenuLink, setHoveredMenuLink] = useState<string | null>(null);
  
  const location = useLocation();
  const navigate = useNavigate();
  const { language, setLanguage, t } = useLanguage();
  
  // RTL support for Arabic language
  const isRTL = language === 'AR';

  const [activeSection, setActiveSection] = useState<'home' | 'about' | 'services' | 'contact' | null>('home');

  const isHomeActive = location.pathname === '/' && (!activeSection || activeSection === 'home');
  const isAboutActive = location.pathname === '/' && activeSection === 'about';
  const isServicesSectionActive = location.pathname === '/' && activeSection === 'services';
  const isContactActive = location.pathname === '/' && activeSection === 'contact';
  const isBlogActive = location.pathname.startsWith('/blog');
  const isServicesActive = location.pathname.startsWith('/services') || isServicesSectionActive;

  const navHome = t('nav.home');
  const navAbout = t('nav.about');
  const navServices = t('nav.services');
  const navBlog = t('nav.blog');
  const navContact = t('nav.contact');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      if (location.pathname === '/') {
        const hero = document.getElementById('hero');
        const servicesSection = document.getElementById('services');
        const contact = document.getElementById('contact');
        const y = window.scrollY;

        const heroTop = hero?.offsetTop ?? 0;
        const heroHeight = hero?.offsetHeight ?? 0;
        const heroBottom = heroTop + heroHeight;
        const servicesTop = servicesSection?.offsetTop ?? Number.POSITIVE_INFINITY;
        const contactTop = contact?.offsetTop ?? Number.POSITIVE_INFINITY;

        const probeY = y + 120; // point virtuel pour savoir où est le "centre" du viewport sous la navbar

        // Garder "Home" tant que le centre du viewport est dans le Hero
        if (probeY < heroBottom - 80) {
          setActiveSection('home');
        } else if (probeY < servicesTop - 200) {
          setActiveSection('about');
        } else if (probeY < contactTop - 200) {
          setActiveSection('services');
        } else {
          setActiveSection('contact');
        }
      } else {
        setActiveSection(null);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  useEffect(() => {
    setIsServicesOpen(false);
    setIsNestedOpen(false);
  }, [location.pathname]);

  // Block body scroll when side menu is open
  useEffect(() => {
    if (isSideMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isSideMenuOpen]);

  const handleNavClick = (path: string) => {
    if (path.includes('#')) {
      const [route, hash] = path.split('#');
      if (location.pathname !== route) {
        navigate(route);
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }

      if (hash === 'about') setActiveSection('about');
      if (hash === 'contact') setActiveSection('contact');
    } else {
      if (path === '/' && location.pathname === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setActiveSection('home');
      } else {
        navigate(path);
      }
    }
    setIsServicesOpen(false);
    setIsNestedOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-4 md:px-6 pt-2 pb-2"
    >
      <div className={`max-w-7xl mx-auto transition-all duration-500 rounded-xl sm:rounded-2xl relative z-[100] isolate ${
        isScrolled 
          ? 'bg-white/[0.72] backdrop-blur-[40px] backdrop-saturate-[180%] shadow-[0_8px_32px_rgba(0,0,0,0.12),0_0_0_0.5px_rgba(0,0,0,0.15)] border border-white/[0.18]' 
          : 'bg-white/[0.72] backdrop-blur-[40px] backdrop-saturate-[180%] shadow-[0_8px_32px_rgba(0,0,0,0.08),0_0_0_0.5px_rgba(0,0,0,0.12)] border border-white/[0.18]'
      }`}>
        {/* iOS vibrancy layer */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/20 to-white/10 pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,rgba(255,255,255,0.1)_50%,transparent_100%)] pointer-events-none" />
        <nav className="px-3 sm:px-4 md:px-6 py-2.5 sm:py-3 lg:py-3 navbar-nav">
          <div className="flex items-center justify-between w-full gap-2">
            {/* Logo - Left Side */}
            <Link 
              to="/" 
              onClick={(e) => {
                if (location.pathname === '/') {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  setActiveSection('home');
                }
              }}
              className="flex items-center group relative no-underline flex-shrink-0"
            >
              <motion.div 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3, type: "spring" }}
                className="relative flex items-center justify-center"
              >
                <img
                  src="/Logo Chatgpt.png"
                  alt="Aqsa Tech Logo"
                  loading="eager"
                  fetchPriority="high"
                  className="h-10 sm:h-16 md:h-20 lg:h-24 w-auto object-contain transition-all duration-300 group-hover:opacity-90"
                  style={{ maxHeight: '48px' }}
                  onError={(e) => {
                    console.error('Logo failed to load');
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {/* Home Link */}
              <motion.button
                onClick={() => handleNavClick('/')}
                onHoverStart={() => setHoveredLink('home')}
                onHoverEnd={() => setHoveredLink(null)}
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.95 }}
                className={`relative px-3.5 lg:px-4 py-1.5 lg:py-2 text-xs lg:text-sm font-medium transition-all duration-300 rounded-full ${
                  hoveredLink === 'home' || isHomeActive
                    ? 'text-brand-blue'
                    : 'text-gray-700 hover:text-brand-blue'
                }`}
              >
                {(hoveredLink === 'home' || isHomeActive) && (
                  <motion.div
                    className="absolute -inset-[1px] rounded-full backdrop-blur-[20px] backdrop-saturate-[180%] border shadow-[inset_0_1px_2px_rgba(255,255,255,0.9),0_4px_16px_rgba(0,0,0,0.1)]"
                    style={{
                      background: 'rgba(255,255,255,0.75)',
                      borderColor: 'rgba(255,255,255,0.3)',
                    }}
                    layoutId="navHover"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                  <motion.span
                    className="relative z-10"
                    animate={{ 
                      scale: hoveredLink === 'home' || isHomeActive ? 1.28 : 1,
                      fontWeight: hoveredLink === 'home' || isHomeActive ? 600 : 500,
                      letterSpacing: hoveredLink === 'home' || isHomeActive ? '0.02em' : '0em'
                    }}
                    transition={{ type: 'spring', stiffness: 360, damping: 20, mass: 0.75 }}
                  >
                    {navHome}
                  </motion.span>
              </motion.button>

              {/* About Us Link */}
              <motion.button
                onClick={() => handleNavClick('/#about')}
                onHoverStart={() => setHoveredLink('about')}
                onHoverEnd={() => setHoveredLink(null)}
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.95 }}
                className={`relative px-3.5 lg:px-4 py-1.5 lg:py-2 text-xs lg:text-sm font-medium transition-all duration-300 rounded-full ${
                  hoveredLink === 'about' || isAboutActive
                    ? 'text-brand-blue'
                    : 'text-gray-700 hover:text-brand-blue'
                }`}
              >
                {(hoveredLink === 'about' || isAboutActive) && (
                  <motion.div
                    className="absolute -inset-[1px] rounded-full backdrop-blur-[20px] backdrop-saturate-[180%] border shadow-[inset_0_1px_2px_rgba(255,255,255,0.9),0_4px_16px_rgba(0,0,0,0.1)]"
                    style={{
                      background: 'rgba(255,255,255,0.75)',
                      borderColor: 'rgba(255,255,255,0.3)',
                    }}
                    layoutId="navHover"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <motion.span
                  className="relative z-10"
                  animate={{ 
                    scale: hoveredLink === 'about' || isAboutActive ? 1.28 : 1,
                    fontWeight: hoveredLink === 'about' || isAboutActive ? 600 : 500,
                    letterSpacing: hoveredLink === 'about' || isAboutActive ? '0.02em' : '0em'
                  }}
                  transition={{ type: 'spring', stiffness: 360, damping: 20, mass: 0.75 }}
                >
                  {navAbout}
                </motion.span>
              </motion.button>

              {/* Services Dropdown with Nested Menu */}
              <motion.div
                className="relative"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => {
                  setIsServicesOpen(false);
                  setIsNestedOpen(false);
                }}
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onHoverStart={() => setHoveredLink('services')}
                  onHoverEnd={() => setHoveredLink(null)}
                  className={`relative px-3.5 lg:px-4 py-1.5 lg:py-2 text-xs lg:text-sm font-semibold tracking-wide transition-all duration-300 rounded-full flex items-center gap-1.5 ${
                    isServicesActive || isServicesOpen || hoveredLink === 'services'
                      ? 'text-brand-blue'
                      : 'text-gray-700 hover:text-brand-blue'
                  }`}
                >
                  {(isServicesActive || isServicesOpen || hoveredLink === 'services') && (
                    <motion.div
                      className="absolute -inset-[1px] rounded-full backdrop-blur-[20px] backdrop-saturate-[180%] border shadow-[inset_0_1px_2px_rgba(255,255,255,0.9),0_4px_16px_rgba(0,0,0,0.1)]"
                      style={{
                        background: 'rgba(255,255,255,0.75)',
                        borderColor: 'rgba(255,255,255,0.3)',
                      }}
                      layoutId="navHover"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                    />
                  )}
                  <motion.span
                    className="relative z-10 flex items-center gap-1.5"
                    animate={{ 
                      scale: isServicesActive || isServicesOpen || hoveredLink === 'services' ? 1.28 : 1,
                      fontWeight: isServicesActive || isServicesOpen || hoveredLink === 'services' ? 600 : 600,
                      letterSpacing: isServicesActive || isServicesOpen || hoveredLink === 'services' ? '0.02em' : '0em'
                    }}
                    transition={{ type: 'spring', stiffness: 360, damping: 20, mass: 0.75 }}
                  >
                    {navServices}
                    <ChevronDown
                      className={`w-3 h-3 transition-transform duration-300 ${!isServicesOpen ? 'rotate-0' : 'rotate-180'}`}
                    />
                  </motion.span>
                </motion.button>

                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 15, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 15, scale: 0.96 }}
                      transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                      className="absolute left-0 top-full mt-2 w-[340px] rounded-3xl z-[9999] bg-white shadow-lg isolate"
                    >
                      <div className="relative bg-white/[0.98] backdrop-blur-[40px] backdrop-saturate-[200%] rounded-3xl border border-white/40 shadow-[inset_0_1px_2px_rgba(255,255,255,0.8)]">
                        {/* Premium gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white/20 to-purple-50/20 pointer-events-none rounded-3xl" />
                        
                        <div className="p-5 space-y-2.5 relative z-10">
                        {/* Popular Services Accordion */}
                        <div className="rounded-2xl">
                          <motion.button
                            onClick={() => setIsNestedOpen(!isNestedOpen)}
                            whileHover={{ scale: 1.01 }}
                            whileTap={{ scale: 0.99 }}
                            className="relative w-full text-left px-4 py-3 text-sm font-bold text-gray-800 rounded-2xl transition-all duration-200 flex items-center justify-between overflow-hidden group"
                          >
                            {/* Enhanced glass background */}
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-[20px] border border-white/50 shadow-[0_4px_16px_rgba(0,0,0,0.06),inset_0_1px_2px_rgba(255,255,255,0.9)] rounded-2xl"
                              initial={{ opacity: 0 }}
                              whileHover={{ opacity: 1 }}
                              transition={{ duration: 0.2 }}
                            />
                            <span className="relative z-10 flex items-center gap-2">
                              <span className="text-brand-blue">✨</span>
                              {language === 'AR' ? 'الخدمات الشائعة' : 'Popular Services'}
                            </span>
                            <ChevronDown 
                              className={`w-4 h-4 text-brand-blue transition-transform duration-300 relative z-10 ${isNestedOpen ? 'rotate-180' : ''}`}
                            />
                          </motion.button>

                          <AnimatePresence>
                            {isNestedOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.25, ease: 'easeInOut' }}
                                className="overflow-hidden mt-2"
                              >
                                <div className="grid grid-cols-1 gap-2 px-1">
                                  {servicesNestedItems.map((item, index) => (
                                    <motion.button
                                      key={index}
                                      onClick={() => handleNavClick(item.path)}
                                      initial={{ opacity: 0, x: -10 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{ delay: index * 0.05 }}
                                      whileHover={{ scale: 1.02, x: 4 }}
                                      whileTap={{ scale: 0.98 }}
                                      className="relative w-full text-left px-4 py-2.5 text-sm text-gray-700 rounded-xl transition-all duration-200 overflow-hidden group"
                                    >
                                      {/* Enhanced glass hover effect */}
                                      <motion.div
                                        className="absolute inset-0 bg-gradient-to-r from-brand-blue/10 to-purple-500/10 backdrop-blur-[10px] border border-brand-blue/20 shadow-[0_4px_12px_rgba(59,130,246,0.15)] rounded-xl"
                                        initial={{ opacity: 0 }}
                                        whileHover={{ opacity: 1 }}
                                        transition={{ duration: 0.2 }}
                                      />
                                      <span className="relative z-10 group-hover:text-brand-blue font-medium transition-colors duration-200 flex items-center gap-2">
                                        <span className="text-xs opacity-50">→</span>
                                        {language === 'AR' ? item.titleAr : item.titleEn}
                                      </span>
                                    </motion.button>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>

                        {/* Premium divider */}
                        <div className="relative py-2">
                          <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gradient-to-r from-transparent via-gray-300 to-transparent opacity-50"></div>
                          </div>
                        </div>

                        {/* All Services & Blog with enhanced styling */}
                        <motion.button
                          onClick={() => handleNavClick('/services')}
                          whileHover={{ scale: 1.01 }}
                          whileTap={{ scale: 0.99 }}
                          className="relative w-full text-left px-4 py-3.5 text-sm rounded-2xl transition-all duration-200 overflow-hidden group"
                        >
                          {/* Premium glass background */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-br from-brand-blue/10 via-white/80 to-cyan-500/10 backdrop-blur-[20px] border border-brand-blue/30 shadow-[0_8px_20px_rgba(59,130,246,0.15),inset_0_1px_2px_rgba(255,255,255,0.9)] rounded-2xl"
                            initial={{ opacity: 0 }}
                            whileHover={{ opacity: 1 }}
                            transition={{ duration: 0.2 }}
                          />
                          <div className="relative z-10 flex items-start justify-between">
                            <div>
                              <div className="font-bold text-gray-900 group-hover:text-brand-blue transition-colors flex items-center gap-2">
                                <span>📋</span>
                                {language === 'AR' ? 'جميع الخدمات' : 'All Services'}
                              </div>
                              <div className="text-xs text-gray-500 mt-0.5">
                                {language === 'AR' ? 'عرض القائمة الكاملة' : 'View complete catalog'}
                              </div>
                            </div>
                            <span className="text-brand-blue opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                          </div>
                        </motion.button>
                        
                        <motion.button
                          onClick={() => handleNavClick('/blog')}
                          whileHover={{ scale: 1.01 }}
                          whileTap={{ scale: 0.99 }}
                          className="relative w-full text-left px-4 py-3.5 text-sm rounded-2xl transition-all duration-200 overflow-hidden group"
                        >
                          {/* Premium glass background */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-white/80 to-pink-500/10 backdrop-blur-[20px] border border-purple-400/30 shadow-[0_8px_20px_rgba(168,85,247,0.15),inset_0_1px_2px_rgba(255,255,255,0.9)] rounded-2xl"
                            initial={{ opacity: 0 }}
                            whileHover={{ opacity: 1 }}
                            transition={{ duration: 0.2 }}
                          />
                          <div className="relative z-10 flex items-start justify-between">
                            <div>
                              <div className="font-bold text-gray-900 group-hover:text-purple-600 transition-colors flex items-center gap-2">
                                <span>📝</span>
                                {language === 'AR' ? 'المدونة والنصائح' : 'Blog & Tips'}
                              </div>
                              <div className="text-xs text-gray-500 mt-0.5">
                                {language === 'AR' ? 'أدلة وأفكار مفيدة' : 'Helpful guides & insights'}
                              </div>
                            </div>
                            <span className="text-purple-600 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                          </div>
                        </motion.button>
                      </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Blog Link */}
              <motion.button
                onClick={() => handleNavClick('/blog')}
                onHoverStart={() => setHoveredLink('blog')}
                onHoverEnd={() => setHoveredLink(null)}
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.95 }}
                className={`relative px-3.5 lg:px-4 py-1.5 lg:py-2 text-xs lg:text-sm font-medium transition-all duration-300 rounded-full ${
                  hoveredLink === 'blog' || isBlogActive
                    ? 'text-brand-blue'
                    : 'text-gray-700 hover:text-brand-blue'
                }`}
              >
                {(hoveredLink === 'blog' || isBlogActive) && (
                  <motion.div
                    className="absolute inset-0 rounded-full backdrop-blur-[20px] backdrop-saturate-[180%] border shadow-[inset_0_1px_2px_rgba(255,255,255,0.9),0_4px_16px_rgba(0,0,0,0.1)]"
                    style={{
                      background: 'rgba(255,255,255,0.75)',
                      borderColor: 'rgba(255,255,255,0.3)',
                    }}
                    layoutId="navHover"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <motion.span
                  className="relative z-10"
                  animate={{ 
                    scale: hoveredLink === 'blog' || isBlogActive ? 1.28 : 1,
                    fontWeight: hoveredLink === 'blog' || isBlogActive ? 600 : 500,
                    letterSpacing: hoveredLink === 'blog' || isBlogActive ? '0.02em' : '0em'
                  }}
                  transition={{ type: 'spring', stiffness: 360, damping: 20, mass: 0.75 }}
                >
                  {navBlog}
                </motion.span>
              </motion.button>

              {/* Contact Link */}
              <motion.button
                onClick={() => handleNavClick('/#contact')}
                onHoverStart={() => setHoveredLink('contact')}
                onHoverEnd={() => setHoveredLink(null)}
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.95 }}
                className={`relative px-3.5 lg:px-4 py-1.5 lg:py-2 text-xs lg:text-sm font-medium transition-all duration-300 rounded-full ${
                  hoveredLink === 'contact' || isContactActive
                    ? 'text-brand-blue'
                    : 'text-gray-700 hover:text-brand-blue'
                }`}
              >
                {(hoveredLink === 'contact' || isContactActive) && (
                  <motion.div
                    className="absolute inset-0 rounded-full backdrop-blur-[20px] backdrop-saturate-[180%] border shadow-[inset_0_1px_2px_rgba(255,255,255,0.9),0_4px_16px_rgba(0,0,0,0.1)]"
                    style={{
                      background: 'rgba(255,255,255,0.75)',
                      borderColor: 'rgba(255,255,255,0.3)',
                    }}
                    layoutId="navHover"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <motion.span
                  className="relative z-10"
                  animate={{ 
                    scale: hoveredLink === 'contact' || isContactActive ? 1.28 : 1,
                    fontWeight: hoveredLink === 'contact' || isContactActive ? 600 : 500,
                    letterSpacing: hoveredLink === 'contact' || isContactActive ? '0.02em' : '0em'
                  }}
                  transition={{ type: 'spring', stiffness: 360, damping: 20, mass: 0.75 }}
                >
                  {navContact}
                </motion.span>
              </motion.button>
            
              {/* Language Switcher */}
              <motion.div 
                className="flex items-center gap-1.5 pl-3 ml-3 border-l border-gray-300"
              >
                <motion.button
                  onClick={() => setLanguage('EN')}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`relative px-2 py-1 text-[10px] font-bold rounded-lg transition-all duration-300 overflow-hidden ${
                    language === 'EN'
                      ? 'text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {language === 'EN' && (
                    <>
                      <motion.div
                        className="absolute inset-0 bg-[#111827]"
                        layoutId="languageActive"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/40 to-white/0"
                        animate={{ x: ['-200%', '200%'] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      />
                    </>
                  )}
                  <span className="relative z-10">EN</span>
                </motion.button>
                <motion.button
                  onClick={() => setLanguage('AR')}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`relative px-2 py-1 text-[10px] font-bold rounded-lg transition-all duration-300 overflow-hidden ${
                    language === 'AR'
                      ? 'text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {language === 'AR' && (
                    <>
                      <motion.div
                        className="absolute inset-0 bg-[#111827]"
                        layoutId="languageActive"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/40 to-white/0"
                        animate={{ x: ['-200%', '200%'] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      />
                    </>
                  )}
                  <span className="relative z-10">AR</span>
                </motion.button>
              </motion.div>

              {/* CTA Buttons */}
              <motion.button
                onClick={() => handleNavClick('/#contact')}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="relative ml-3 px-4 py-1.5 bg-[#111827] text-white font-bold rounded-2xl shadow-lg hover:shadow-xl hover:bg-black transition-all duration-300 text-xs overflow-hidden group"
              >
                {/* Animated shine */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full"
                  transition={{ duration: 0.6 }}
                />
                {/* Glow effect */}
                <motion.div
                  className="absolute -inset-1 bg-black/50 rounded-2xl blur-lg opacity-0 group-hover:opacity-60"
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10 flex items-center gap-1.5">
                  <Zap className="w-3 h-3" />
                  Book Your Free Consultancy
                </span>
              </motion.button>
            </div>

            {/* Mobile Right Section - Language, CTA Button & Menu */}
            <div className="flex items-center gap-2 lg:hidden">
              {/* Language Switcher - Mobile */}
              <motion.div className="flex items-center gap-1">
                <motion.button
                  onClick={() => setLanguage('EN')}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative px-2.5 py-1.5 text-[9px] font-bold rounded-lg transition-all duration-300 ${
                    language === 'EN'
                      ? 'text-white bg-[#111827]'
                      : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  EN
                </motion.button>
                <motion.button
                  onClick={() => setLanguage('AR')}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative px-2.5 py-1.5 text-[9px] font-bold rounded-lg transition-all duration-300 ${
                    language === 'AR'
                      ? 'text-white bg-[#111827]'
                      : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  AR
                </motion.button>
              </motion.div>

              {/* Book Consultancy Button - Mobile */}
              <motion.button
                onClick={() => handleNavClick('/#contact')}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative px-3 py-2 bg-[#111827] text-white text-[10px] font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 whitespace-nowrap flex items-center gap-1.5 overflow-hidden"
              >
                <Zap className="w-3 h-3" />
                <span className="hidden xs:inline">Book Your Free Consultancy</span>
                <span className="xs:hidden">Book Now</span>
              </motion.button>

              {/* Hamburger Menu Button */}
              <motion.button
                onClick={() => setIsSideMenuOpen(!isSideMenuOpen)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative w-10 h-10 flex items-center justify-center text-gray-700 transition-all duration-300 rounded-xl overflow-hidden flex-shrink-0"
                aria-label="Toggle menu"
              >
                <div className="absolute inset-0 bg-white/80 backdrop-blur-[20px] border border-white/70 shadow-md rounded-xl" />
                <motion.div
                  className="relative z-10"
                  animate={{
                    rotate: isSideMenuOpen ? 90 : 0,
                  }}
                  transition={{ type: 'spring', stiffness: 260, damping: 18 }}
                >
                  <Menu className="w-5 h-5" />
                </motion.div>
              </motion.button>
            </div>

            {/* Desktop Right Section - Hidden on Mobile */}
            <div className="hidden lg:flex items-center gap-1">
              {/* Desktop Language Switcher & CTA Button */}
              <motion.div 
                className="flex items-center gap-1.5 pl-3 ml-3 border-l border-gray-300"
              >
                <motion.button
                  onClick={() => setLanguage('EN')}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`relative px-2 py-1 text-[10px] font-bold rounded-lg transition-all duration-300 overflow-hidden ${
                    language === 'EN'
                      ? 'text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {language === 'EN' && (
                    <>
                      <motion.div
                        className="absolute inset-0 bg-[#111827]"
                        layoutId="languageActiveDesktop"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/40 to-white/0"
                        animate={{ x: ['-200%', '200%'] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      />
                    </>
                  )}
                  <span className="relative z-10">EN</span>
                </motion.button>
                <motion.button
                  onClick={() => setLanguage('AR')}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`relative px-2 py-1 text-[10px] font-bold rounded-lg transition-all duration-300 overflow-hidden ${
                    language === 'AR'
                      ? 'text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {language === 'AR' && (
                    <>
                      <motion.div
                        className="absolute inset-0 bg-[#111827]"
                        layoutId="languageActiveDesktop"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/40 to-white/0"
                        animate={{ x: ['-200%', '200%'] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      />
                    </>
                  )}
                  <span className="relative z-10">AR</span>
                </motion.button>
              </motion.div>

              {/* CTA Button - Desktop */}
              <motion.button
                onClick={() => handleNavClick('/#contact')}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="relative ml-3 px-4 py-1.5 bg-[#111827] text-white font-bold rounded-2xl shadow-lg hover:shadow-xl hover:bg-black transition-all duration-300 text-xs overflow-hidden group"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full"
                  transition={{ duration: 0.6 }}
                />
                <span className="relative z-10 flex items-center gap-1.5">
                  <Zap className="w-3 h-3" />
                  Book Your Free Consultancy
                </span>
              </motion.button>

              {/* Desktop Menu Button */}
              <motion.button
                onClick={() => setIsSideMenuOpen(!isSideMenuOpen)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative w-11 h-11 ml-2 flex items-center justify-center text-gray-700 transition-all duration-300 rounded-xl overflow-hidden"
                aria-label="Toggle menu"
              >
                <div className="absolute inset-0 bg-white/80 backdrop-blur-[20px] border border-white/70 shadow-md rounded-xl" />
                <motion.div
                  className="relative z-10"
                  animate={{
                    rotate: isSideMenuOpen ? 90 : 0,
                  }}
                  transition={{ type: 'spring', stiffness: 260, damping: 18 }}
                >
                  <Menu className="w-5 h-5" />
                </motion.div>
              </motion.button>
            </div>
          </div>
        </nav>
      </div>

      {/* Right Side Menu */}
      <AnimatePresence>
        {isSideMenuOpen && (
          <div>
            {/* Backdrop with gradient and blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSideMenuOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-[60]"
              style={{
                background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.7) 100%)'
              }}
            />
            
            {/* Side Menu Panel */}
            <motion.div
              initial={{ x: isRTL ? '-100%' : '100%', opacity: 0, scale: 0.95 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              exit={{ x: isRTL ? '-100%' : '100%', opacity: 0, scale: 0.95 }}
              transition={{ type: 'spring', damping: 26, stiffness: 230, duration: 0.5 }}
              className={`fixed ${isRTL ? 'left-0' : 'right-0'} top-0 h-full w-[85vw] sm:w-80 max-w-[320px] z-[70] overflow-y-auto ${isRTL ? 'rounded-r-3xl' : 'rounded-l-3xl'}`}
            >
              <div className={`h-full bg-white/[0.72] backdrop-blur-[40px] backdrop-saturate-[180%] shadow-[0_26px_70px_rgba(0,0,0,0.25)] ${isRTL ? 'border-r' : 'border-l'} border-white/[0.18] ${isRTL ? 'rounded-r-3xl' : 'rounded-l-3xl'} flex flex-col relative overflow-hidden`}>
                {/* iOS vibrancy layers */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/50 via-white/30 to-white/20" />
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.2)_0%,transparent_50%,rgba(255,255,255,0.1)_100%)]" />
                
                {/* Close Button */}
                <div className="flex items-center justify-between px-6 py-5 border-b border-gray-200/80 relative z-10">
                  <h2 className="text-lg font-semibold text-gray-900">
                    {language === 'AR' ? 'القائمة' : 'Menu'}
                  </h2>
                  <motion.button
                    onClick={() => setIsSideMenuOpen(false)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 text-gray-700 hover:text-gray-900 transition-colors rounded-full hover:bg-gray-100"
                  >
                    <X className="w-5 h-5" />
                  </motion.button>
                </div>

                {/* Menu Content */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                  className="p-4 sm:p-6 space-y-4 sm:space-y-6 flex-1 overflow-y-auto relative z-10"
                >
                {/* Main Navigation (same as navbar) */}
                <div>
                  <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wider mb-3">
                    {language === 'AR' ? 'التنقل' : 'Navigation'}
                  </h3>
                  <div className="space-y-2">
                    <motion.button
                      onClick={() => {
                        handleNavClick('/');
                        setIsSideMenuOpen(false);
                      }}
                      onHoverStart={() => setHoveredMenuLink('home')}
                      onHoverEnd={() => setHoveredMenuLink(null)}
                      whileHover={{ scale: 1.03, y: -1 }}
                      whileTap={{ scale: 0.97 }}
                      className={`relative block w-full px-4 py-2.5 text-xs lg:text-sm font-medium transition-all duration-300 rounded-full ${
                        (hoveredMenuLink === 'home' || isHomeActive)
                          ? 'text-brand-blue'
                          : 'text-gray-700 hover:text-brand-blue'
                      } ${language === 'AR' ? 'text-right' : 'text-left'}`}
                    >
                      {(hoveredMenuLink === 'home' || isHomeActive) && (
                        <motion.div
                          className="absolute inset-0 rounded-full backdrop-blur-[20px] backdrop-saturate-[180%] border shadow-[inset_0_1px_2px_rgba(255,255,255,0.9),0_4px_16px_rgba(0,0,0,0.1)]"
                          style={{
                            background: 'rgba(255,255,255,0.75)',
                            borderColor: 'rgba(255,255,255,0.3)',
                          }}
                          layoutId="menuHover"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                      <motion.span
                        className="relative z-10"
                        animate={{ 
                          scale: (hoveredMenuLink === 'home' || isHomeActive) ? 1.12 : 1,
                          fontWeight: (hoveredMenuLink === 'home' || isHomeActive) ? 600 : 500
                        }}
                        transition={{ type: 'spring', stiffness: 360, damping: 20, mass: 0.75 }}
                      >
                        {navHome}
                      </motion.span>
                    </motion.button>
                    <motion.button
                      onClick={() => {
                        handleNavClick('/#about');
                        setIsSideMenuOpen(false);
                      }}
                      onHoverStart={() => setHoveredMenuLink('about')}
                      onHoverEnd={() => setHoveredMenuLink(null)}
                      whileHover={{ scale: 1.03, y: -1 }}
                      whileTap={{ scale: 0.97 }}
                      className={`relative block w-full px-4 py-2.5 text-xs lg:text-sm font-medium transition-all duration-300 rounded-full ${
                        (hoveredMenuLink === 'about' || isAboutActive)
                          ? 'text-brand-blue'
                          : 'text-gray-700 hover:text-brand-blue'
                      } ${language === 'AR' ? 'text-right' : 'text-left'}`}
                    >
                      {(hoveredMenuLink === 'about' || isAboutActive) && (
                        <motion.div
                          className="absolute inset-0 rounded-full backdrop-blur-[20px] backdrop-saturate-[180%] border shadow-[inset_0_1px_2px_rgba(255,255,255,0.9),0_4px_16px_rgba(0,0,0,0.1)]"
                          style={{
                            background: 'rgba(255,255,255,0.75)',
                            borderColor: 'rgba(255,255,255,0.3)',
                          }}
                          layoutId="menuHover"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                      <motion.span
                        className="relative z-10"
                        animate={{ 
                          scale: (hoveredMenuLink === 'about' || isAboutActive) ? 1.12 : 1,
                          fontWeight: (hoveredMenuLink === 'about' || isAboutActive) ? 600 : 500
                        }}
                        transition={{ type: 'spring', stiffness: 360, damping: 20, mass: 0.75 }}
                      >
                        {navAbout}
                      </motion.span>
                    </motion.button>
                    <motion.button
                      onClick={() => {
                        handleNavClick('/services');
                        setIsSideMenuOpen(false);
                      }}
                      onHoverStart={() => setHoveredMenuLink('services')}
                      onHoverEnd={() => setHoveredMenuLink(null)}
                      whileHover={{ scale: 1.03, y: -1 }}
                      whileTap={{ scale: 0.97 }}
                      className={`relative block w-full px-4 py-2.5 text-xs lg:text-sm font-medium transition-all duration-300 rounded-full ${
                        (hoveredMenuLink === 'services' || isServicesActive)
                          ? 'text-brand-blue'
                          : 'text-gray-700 hover:text-brand-blue'
                      } ${language === 'AR' ? 'text-right' : 'text-left'}`}
                    >
                      {(hoveredMenuLink === 'services' || isServicesActive) && (
                        <motion.div
                          className="absolute inset-0 rounded-full backdrop-blur-[20px] backdrop-saturate-[180%] border shadow-[inset_0_1px_2px_rgba(255,255,255,0.9),0_4px_16px_rgba(0,0,0,0.1)]"
                          style={{
                            background: 'rgba(255,255,255,0.75)',
                            borderColor: 'rgba(255,255,255,0.3)',
                          }}
                          layoutId="menuHover"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                      <motion.span
                        className="relative z-10"
                        animate={{ 
                          scale: (hoveredMenuLink === 'services' || isServicesActive) ? 1.12 : 1,
                          fontWeight: (hoveredMenuLink === 'services' || isServicesActive) ? 600 : 500
                        }}
                        transition={{ type: 'spring', stiffness: 360, damping: 20, mass: 0.75 }}
                      >
                        {navServices}
                      </motion.span>
                    </motion.button>
                    <motion.button
                      onClick={() => {
                        handleNavClick('/blog');
                        setIsSideMenuOpen(false);
                      }}
                      onHoverStart={() => setHoveredMenuLink('blog')}
                      onHoverEnd={() => setHoveredMenuLink(null)}
                      whileHover={{ scale: 1.03, y: -1 }}
                      whileTap={{ scale: 0.97 }}
                      className={`relative block w-full px-4 py-2.5 text-xs lg:text-sm font-medium transition-all duration-300 rounded-full ${
                        (hoveredMenuLink === 'blog' || isBlogActive)
                          ? 'text-brand-blue'
                          : 'text-gray-700 hover:text-brand-blue'
                      } ${language === 'AR' ? 'text-right' : 'text-left'}`}
                    >
                      {(hoveredMenuLink === 'blog' || isBlogActive) && (
                        <motion.div
                          className="absolute inset-0 rounded-full backdrop-blur-[20px] backdrop-saturate-[180%] border shadow-[inset_0_1px_2px_rgba(255,255,255,0.9),0_4px_16px_rgba(0,0,0,0.1)]"
                          style={{
                            background: 'rgba(255,255,255,0.75)',
                            borderColor: 'rgba(255,255,255,0.3)',
                          }}
                          layoutId="menuHover"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                      <motion.span
                        className="relative z-10"
                        animate={{ 
                          scale: (hoveredMenuLink === 'blog' || isBlogActive) ? 1.12 : 1,
                          fontWeight: (hoveredMenuLink === 'blog' || isBlogActive) ? 600 : 500
                        }}
                        transition={{ type: 'spring', stiffness: 360, damping: 20, mass: 0.75 }}
                      >
                        {navBlog}
                      </motion.span>
                    </motion.button>
                    <motion.button
                      onClick={() => {
                        handleNavClick('/#contact');
                        setIsSideMenuOpen(false);
                      }}
                      onHoverStart={() => setHoveredMenuLink('contact')}
                      onHoverEnd={() => setHoveredMenuLink(null)}
                      whileHover={{ scale: 1.03, y: -1 }}
                      whileTap={{ scale: 0.97 }}
                      className={`relative block w-full px-4 py-2.5 text-xs lg:text-sm font-medium transition-all duration-300 rounded-full ${
                        (hoveredMenuLink === 'contact' || isContactActive)
                          ? 'text-brand-blue'
                          : 'text-gray-700 hover:text-brand-blue'
                      } ${language === 'AR' ? 'text-right' : 'text-left'}`}
                    >
                      {(hoveredMenuLink === 'contact' || isContactActive) && (
                        <motion.div
                          className="absolute inset-0 rounded-full backdrop-blur-[20px] backdrop-saturate-[180%] border shadow-[inset_0_1px_2px_rgba(255,255,255,0.9),0_4px_16px_rgba(0,0,0,0.1)]"
                          style={{
                            background: 'rgba(255,255,255,0.75)',
                            borderColor: 'rgba(255,255,255,0.3)',
                          }}
                          layoutId="menuHover"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                      <motion.span
                        className="relative z-10"
                        animate={{ 
                          scale: (hoveredMenuLink === 'contact' || isContactActive) ? 1.12 : 1,
                          fontWeight: (hoveredMenuLink === 'contact' || isContactActive) ? 600 : 500
                        }}
                        transition={{ type: 'spring', stiffness: 360, damping: 20, mass: 0.75 }}
                      >
                        {navContact}
                      </motion.span>
                    </motion.button>
                  </div>
                </div>

                 {/* Inspiration Section (visual only, no navigation) */}
                 <div>
                   <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wider mb-2">
                     {language === 'AR' ? 'إلهام' : 'Inspiration'}
                   </h3>
                   <div className="space-y-1.5">
                     <motion.div
                       whileHover={{ scale: 1.02, x: -1 }}
                       className={`block w-full px-4 py-2.5 text-gray-700 bg-gray-50 rounded-full border border-gray-200 shadow-sm ${language === 'AR' ? 'text-right' : 'text-left'}`}
                     >
                       {language === 'AR' ? 'الأعمال المرجعية' : 'References'}
                     </motion.div>
                     <motion.div
                       whileHover={{ scale: 1.02, x: -1 }}
                       className={`block w-full px-4 py-2.5 text-gray-700 bg-gray-50 rounded-full border border-gray-200 shadow-sm ${language === 'AR' ? 'text-right' : 'text-left'}`}
                     >
                       {language === 'AR' ? 'مجلة عقسة تك' : 'Aqsatech Magazine'}
                     </motion.div>
                     <motion.div
                       whileHover={{ scale: 1.02, x: -1 }}
                       className={`block w-full px-4 py-2.5 text-gray-700 bg-gray-50 rounded-full border border-gray-200 shadow-sm ${language === 'AR' ? 'text-right' : 'text-left'}`}
                     >
                       {language === 'AR' ? 'اكتشف الخدمات' : 'Discover'}
                     </motion.div>
                     <motion.div
                       whileHover={{ scale: 1.02, x: -1 }}
                       className={`block w-full px-4 py-2.5 text-gray-700 bg-gray-50 rounded-full border border-gray-200 shadow-sm ${language === 'AR' ? 'text-right' : 'text-left'}`}
                     >
                       {language === 'AR' ? 'النشرة البريدية' : 'Newsletter'}
                     </motion.div>
                   </div>
                 </div>

                {/* Company Section */}
                <div>
                  <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wider mb-3">
                    {language === 'AR' ? 'الشركة' : 'Company'}
                  </h3>
                  <div className="space-y-2">
                    <motion.button
                      onClick={() => {
                        handleNavClick('/#about');
                        setIsSideMenuOpen(false);
                      }}
                      onHoverStart={() => setHoveredMenuLink('company-about')}
                      onHoverEnd={() => setHoveredMenuLink(null)}
                      whileHover={{ scale: 1.03, y: -1 }}
                      whileTap={{ scale: 0.97 }}
                      className={`relative block w-full px-4 py-2.5 text-xs lg:text-sm font-medium transition-all duration-300 rounded-full ${
                        hoveredMenuLink === 'company-about'
                          ? 'text-brand-blue'
                          : 'text-gray-700 hover:text-brand-blue'
                      } ${language === 'AR' ? 'text-right' : 'text-left'}`}
                    >
                      {hoveredMenuLink === 'company-about' && (
                        <motion.div
                          className="absolute inset-0 rounded-full bg-white/70 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] border border-white/60"
                          style={{
                            background: 'linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0.7) 100%)',
                            boxShadow: '0 8px 32px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.9), inset 0 -1px 0 rgba(255,255,255,0.5)',
                          }}
                          layoutId="menuHoverCompany"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                      <motion.span
                        className="relative z-10"
                        animate={{ scale: hoveredMenuLink === 'company-about' ? 1.05 : 1 }}
                        transition={{ type: 'spring', stiffness: 320, damping: 18, mass: 0.8 }}
                      >
                        {navAbout}
                      </motion.span>
                    </motion.button>
                    <motion.button
                      onClick={() => {
                        handleNavClick('/#contact');
                        setIsSideMenuOpen(false);
                      }}
                      onHoverStart={() => setHoveredMenuLink('company-career')}
                      onHoverEnd={() => setHoveredMenuLink(null)}
                      whileHover={{ scale: 1.03, y: -1 }}
                      whileTap={{ scale: 0.97 }}
                      className={`relative block w-full px-4 py-2.5 text-xs lg:text-sm font-medium transition-all duration-300 rounded-full ${
                        hoveredMenuLink === 'company-career'
                          ? 'text-brand-blue'
                          : 'text-gray-700 hover:text-brand-blue'
                      } ${language === 'AR' ? 'text-right' : 'text-left'}`}
                    >
                      {hoveredMenuLink === 'company-career' && (
                        <motion.div
                          className="absolute inset-0 rounded-full bg-white/70 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] border border-white/60"
                          style={{
                            background: 'linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0.7) 100%)',
                            boxShadow: '0 8px 32px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.9), inset 0 -1px 0 rgba(255,255,255,0.5)',
                          }}
                          layoutId="menuHoverCompany"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                      <motion.span
                        className="relative z-10"
                        animate={{ scale: hoveredMenuLink === 'company-career' ? 1.05 : 1 }}
                        transition={{ type: 'spring', stiffness: 320, damping: 18, mass: 0.8 }}
                      >
                        {language === 'AR' ? 'الوظائف' : 'Career'}
                      </motion.span>
                    </motion.button>
                    <motion.button
                      onClick={() => {
                        handleNavClick('/blog');
                        setIsSideMenuOpen(false);
                      }}
                      onHoverStart={() => setHoveredMenuLink('company-news')}
                      onHoverEnd={() => setHoveredMenuLink(null)}
                      whileHover={{ scale: 1.03, y: -1 }}
                      whileTap={{ scale: 0.97 }}
                      className={`relative block w-full px-4 py-2.5 text-xs lg:text-sm font-medium transition-all duration-300 rounded-full ${
                        hoveredMenuLink === 'company-news'
                          ? 'text-brand-blue'
                          : 'text-gray-700 hover:text-brand-blue'
                      } ${language === 'AR' ? 'text-right' : 'text-left'}`}
                    >
                      {hoveredMenuLink === 'company-news' && (
                        <motion.div
                          className="absolute inset-0 rounded-full bg-white/70 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] border border-white/60"
                          style={{
                            background: 'linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0.7) 100%)',
                            boxShadow: '0 8px 32px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.9), inset 0 -1px 0 rgba(255,255,255,0.5)',
                          }}
                          layoutId="menuHoverCompany"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                      <motion.span
                        className="relative z-10"
                        animate={{ scale: hoveredMenuLink === 'company-news' ? 1.05 : 1 }}
                        transition={{ type: 'spring', stiffness: 320, damping: 18, mass: 0.8 }}
                      >
                        {language === 'AR' ? 'الأخبار' : 'News'}
                      </motion.span>
                    </motion.button>
                    <motion.button
                      onClick={() => {
                        handleNavClick('/#about');
                        setIsSideMenuOpen(false);
                      }}
                      onHoverStart={() => setHoveredMenuLink('company-sustainability')}
                      onHoverEnd={() => setHoveredMenuLink(null)}
                      whileHover={{ scale: 1.03, y: -1 }}
                      whileTap={{ scale: 0.97 }}
                      className={`relative block w-full px-4 py-2.5 text-xs lg:text-sm font-medium transition-all duration-300 rounded-full ${
                        hoveredMenuLink === 'company-sustainability'
                          ? 'text-brand-blue'
                          : 'text-gray-700 hover:text-brand-blue'
                      } ${language === 'AR' ? 'text-right' : 'text-left'}`}
                    >
                      {hoveredMenuLink === 'company-sustainability' && (
                        <motion.div
                          className="absolute inset-0 rounded-full bg-white/70 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] border border-white/60"
                          style={{
                            background: 'linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0.7) 100%)',
                            boxShadow: '0 8px 32px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.9), inset 0 -1px 0 rgba(255,255,255,0.5)',
                          }}
                          layoutId="menuHoverCompany"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                      <motion.span
                        className="relative z-10"
                        animate={{ scale: hoveredMenuLink === 'company-sustainability' ? 1.05 : 1 }}
                        transition={{ type: 'spring', stiffness: 320, damping: 18, mass: 0.8 }}
                      >
                        {language === 'AR' ? 'الاستدامة' : 'Sustainability'}
                      </motion.span>
                    </motion.button>
                  </div>
                </div>

                {/* About Aqsatech Section */}
                <div>
                  <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wider mb-3">
                    {language === 'AR' ? 'عن عقسة تك' : 'About Aqsatech'}
                  </h3>
                  <div className="space-y-2">
                    <motion.button
                      onClick={() => {
                        handleNavClick('/#contact');
                        setIsSideMenuOpen(false);
                      }}
                      onHoverStart={() => setHoveredMenuLink('about-office')}
                      onHoverEnd={() => setHoveredMenuLink(null)}
                      whileHover={{ scale: 1.03, y: -1 }}
                      whileTap={{ scale: 0.97 }}
                      className={`relative block w-full px-4 py-2.5 text-xs lg:text-sm font-medium transition-all duration-300 rounded-full ${
                        hoveredMenuLink === 'about-office'
                          ? 'text-brand-blue'
                          : 'text-gray-700 hover:text-brand-blue'
                      } ${language === 'AR' ? 'text-right' : 'text-left'}`}
                    >
                      {hoveredMenuLink === 'about-office' && (
                        <motion.div
                          className="absolute inset-0 rounded-full bg-white/70 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] border border-white/60"
                          style={{
                            background: 'linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0.7) 100%)',
                            boxShadow: '0 8px 32px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.9), inset 0 -1px 0 rgba(255,255,255,0.5)',
                          }}
                          layoutId="menuHoverAbout"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                      <motion.span
                        className="relative z-10"
                        animate={{ scale: hoveredMenuLink === 'about-office' ? 1.05 : 1 }}
                        transition={{ type: 'spring', stiffness: 320, damping: 18, mass: 0.8 }}
                      >
                        {language === 'AR' ? 'المكتب' : 'Office'}
                      </motion.span>
                    </motion.button>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-4 border-t border-gray-200">
                  <motion.button
                    onClick={() => {
                      handleNavClick('/#contact');
                      setIsSideMenuOpen(false);
                    }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full px-6 py-3 bg-[#111827] text-white font-semibold rounded-2xl shadow-xl hover:shadow-2xl hover:bg-black transition-all duration-300"
                  >
                    Book Your Free Consultancy
                  </motion.button>
                </div>
              </motion.div>
            </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </motion.header>
  );
};

export default Navbar;
