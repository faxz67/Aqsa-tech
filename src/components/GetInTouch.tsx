import React, { useState, useCallback } from 'react';
import { PhoneCall, Send, CheckCircle, Mail, Building2, Clock, Shield, FileText, Award, DollarSign } from 'lucide-react';
import { motion } from 'framer-motion';
import ProButton from './ui/ProButton';
import SpotlightCard from './ui/SpotlightCard';
import { useLanguage } from '../contexts/LanguageContext';

const GetInTouch: React.FC = React.memo(() => {
  const { t, isRTL } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const formData = new FormData(e.currentTarget);
      formData.append("access_key", "09da8ae2-c231-497d-9fd9-90d7ce186857");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        });
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
        setTimeout(() => setSubmitStatus('idle'), 5000);
      }
    } catch (error) {
      // Error submitting form
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = React.useMemo(() => [
    {
      icon: PhoneCall,
      title: t('contact.phoneNumber'),
      detail: '+971 52 501 0132',
      link: 'tel:+971525010132',
      animation: 'pulse',
      iconColor: 'from-green-500 to-emerald-600',
      iconBg: 'bg-gradient-to-br from-green-500/20 to-emerald-600/20',
    },
    {
      icon: Mail,
      title: t('contact.emailAddress'),
      detail: 'services@aqsatech.ae',
      link: 'mailto:services@aqsatech.ae',
      animation: 'bounce',
      iconColor: 'from-blue-500 to-cyan-600',
      iconBg: 'bg-gradient-to-br from-blue-500/20 to-cyan-600/20',
    },
    {
      icon: Building2,
      title: t('contact.address'),
      detail: 'United Arab Emirates',
      link: '#',
      animation: 'shake',
      iconColor: 'from-orange-500 to-amber-600',
      iconBg: 'bg-gradient-to-br from-orange-500/20 to-amber-600/20',
    },
    {
      icon: Clock,
      title: t('contact.workingHours'),
      detail: 'Mon - Fri: 8AM - 6PM',
      link: '#',
      animation: 'pulse',
      iconColor: 'from-purple-500 to-indigo-600',
      iconBg: 'bg-gradient-to-br from-purple-500/20 to-indigo-600/20',
    },
  ], [t]);


  return (
  <section id="get-in-touch" className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[300px] sm:w-[500px] lg:w-[600px] h-[300px] sm:h-[500px] lg:h-[600px] bg-gradient-to-br from-brand-teal/25 to-brand-teal/8 rounded-full blur-3xl animate-float-lg delay-120 max-w-[90vw]" />
        <div className="absolute bottom-0 left-0 w-[300px] sm:w-[500px] lg:w-[600px] h-[300px] sm:h-[500px] lg:h-[600px] bg-gradient-to-br from-brand-blue/25 to-brand-blue/8 rounded-full blur-3xl animate-float-lg delay-320 max-w-[90vw]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] sm:w-[400px] lg:w-[500px] h-[250px] sm:h-[400px] lg:h-[500px] bg-gradient-to-br from-purple-500/15 to-transparent rounded-full blur-3xl animate-float-lg delay-240 max-w-[90vw]" />
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-40" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full overflow-x-hidden">
        {/* Enhanced Header */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12 xl:mb-16 animate-fade-zoom anim-delayed delay-80">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="inline-block mb-3 sm:mb-4"
          >
            <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-brand-teal/10 to-brand-blue/10 rounded-full border border-brand-teal/20 text-brand-teal font-semibold text-[10px] sm:text-xs lg:text-sm uppercase tracking-wider">
              Contact Us
            </span>
          </motion.div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-extrabold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-3 sm:mb-4 lg:mb-5 xl:mb-6 animate-fade-zoom delay-120 px-2 sm:px-0">
            {t('contact.title')}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-gray-700 max-w-3xl mx-auto animate-fade-zoom delay-160 px-2 sm:px-0 font-medium leading-relaxed">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 w-full">
          {/* Enhanced Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className={`relative bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-5 sm:p-6 lg:p-8 xl:p-10 2xl:p-12 animate-fade-zoom anim-delayed delay-200 hover:shadow-[0_20px_60px_-12px_rgba(0,0,0,0.25)] transition-all duration-300 form-bg-animated border border-gray-100 w-full ${isRTL ? 'lg:order-2' : 'lg:order-1'}`}
          >
            {/* Decorative gradient border */}
            <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-brand-teal/20 via-brand-blue/20 to-brand-teal/20 opacity-0 hover:opacity-100 transition-opacity duration-200 -z-10 blur-xl" />
            <div className="relative w-full">
              <div className="mb-5 sm:mb-6 lg:mb-8">
                <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-gray-900 mb-2">Fill out the form</h3>
                <p className="text-xs sm:text-sm lg:text-base text-gray-600">We'll get back to you within 24 hours</p>
              </div>
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 lg:space-y-6 xl:space-y-7 w-full">
              {/* Name */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.15, delay: 0.03, ease: [0.25, 0.1, 0.25, 1] }}
                className="animate-fade-zoom delay-240"
              >
                <label htmlFor="name" className={`block text-sm sm:text-base font-bold text-gray-900 mb-2 sm:mb-3 w-full flex items-center gap-2 ${isRTL ? 'text-right flex-row-reverse' : 'text-left'}`}>
                  <span className="text-brand-teal">*</span>
                  {t('contact.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 sm:px-5 py-3 sm:py-4 text-sm sm:text-base rounded-xl border-2 border-gray-200 bg-gray-50 focus:border-brand-teal focus:ring-4 focus:ring-brand-teal/10 focus:bg-white outline-none transition-all duration-300 hover:border-gray-300 ${isRTL ? 'text-right' : 'text-left'}`}
                  placeholder={t('contact.enterName')}
                  dir={isRTL ? 'rtl' : 'ltr'}
                />
              </motion.div>

              {/* Email */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.15, delay: 0.05, ease: [0.25, 0.1, 0.25, 1] }}
                className="animate-fade-zoom delay-280"
              >
                <label htmlFor="email" className={`block text-sm sm:text-base font-bold text-gray-900 mb-2 sm:mb-3 w-full flex items-center gap-2 ${isRTL ? 'text-right flex-row-reverse' : 'text-left'}`}>
                  <span className="text-brand-teal">*</span>
                  {t('contact.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 sm:px-5 py-3 sm:py-4 text-sm sm:text-base rounded-xl border-2 border-gray-200 bg-gray-50 focus:border-brand-teal focus:ring-4 focus:ring-brand-teal/10 focus:bg-white outline-none transition-all duration-300 hover:border-gray-300 ${isRTL ? 'text-right' : 'text-left'}`}
                  placeholder={t('contact.enterEmail')}
                  dir="ltr"
                />
              </motion.div>

              {/* Phone */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.15, delay: 0.07, ease: [0.25, 0.1, 0.25, 1] }}
                className="animate-fade-zoom delay-320"
              >
                <label htmlFor="phone" className={`block text-sm sm:text-base font-bold text-gray-900 mb-2 sm:mb-3 w-full flex items-center gap-2 ${isRTL ? 'text-right flex-row-reverse' : 'text-left'}`}>
                  <span className="text-brand-teal">*</span>
                  {t('contact.phone')}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 sm:px-5 py-3 sm:py-4 text-sm sm:text-base rounded-xl border-2 border-gray-200 bg-gray-50 focus:border-brand-teal focus:ring-4 focus:ring-brand-teal/10 focus:bg-white outline-none transition-all duration-300 hover:border-gray-300 ${isRTL ? 'text-right' : 'text-left'}`}
                  placeholder={t('contact.enterPhone')}
                  dir="ltr"
                />
              </motion.div>

              {/* Subject */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.15, delay: 0.09, ease: [0.25, 0.1, 0.25, 1] }}
                className="animate-fade-zoom delay-360"
              >
                <label htmlFor="subject" className={`block text-sm sm:text-base font-bold text-gray-900 mb-2 sm:mb-3 w-full flex items-center gap-2 ${isRTL ? 'text-right flex-row-reverse' : 'text-left'}`}>
                  <span className="text-brand-teal">*</span>
                  {t('contact.subject')}
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 sm:px-5 py-3 sm:py-4 text-sm sm:text-base rounded-xl border-2 border-gray-200 bg-gray-50 focus:border-brand-teal focus:ring-4 focus:ring-brand-teal/10 focus:bg-white outline-none transition-all duration-300 hover:border-gray-300 ${isRTL ? 'text-right' : 'text-left'}`}
                  placeholder={t('contact.enterSubject')}
                  dir={isRTL ? 'rtl' : 'ltr'}
                />
              </motion.div>

              {/* Message */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.15, delay: 0.11, ease: [0.25, 0.1, 0.25, 1] }}
                className="animate-fade-zoom delay-400"
              >
                <label htmlFor="message" className={`block text-sm sm:text-base font-bold text-gray-900 mb-2 sm:mb-3 w-full flex items-center gap-2 ${isRTL ? 'text-right flex-row-reverse' : 'text-left'}`}>
                  <span className="text-brand-teal">*</span>
                  {t('contact.message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className={`w-full px-4 sm:px-5 py-3 sm:py-4 text-sm sm:text-base rounded-xl border-2 border-gray-200 bg-gray-50 focus:border-brand-teal focus:ring-4 focus:ring-brand-teal/10 focus:bg-white outline-none transition-all duration-300 resize-none hover:border-gray-300 ${isRTL ? 'text-right' : 'text-left'}`}
                  placeholder={t('contact.enterMessage')}
                  dir={isRTL ? 'rtl' : 'ltr'}
                />
              </motion.div>

              {/* Enhanced Submit Button */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.15, delay: 0.13, ease: [0.25, 0.1, 0.25, 1] }}
                className="animate-fade-zoom delay-480 pt-2"
              >
                <ProButton
                  type="submit"
                  variant="dark"
                  size="lg"
                  fullWidth
                  leftIcon={!isSubmitting ? <Send className="w-5 h-5" /> : undefined}
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-brand-teal to-brand-blue hover:from-brand-teal/90 hover:to-brand-blue/90 text-white font-bold py-4 sm:py-5 text-base sm:text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
                >
                  {isSubmitting ? t('contact.submitting') : `🚀 ${t('contact.send')}`}
                </ProButton>
              </motion.div>

              {/* Success/Error Messages */}
              {submitStatus === 'success' && (
                <div className={`flex items-center gap-2 text-green-600 bg-green-50 p-4 rounded-lg border border-green-200 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <CheckCircle className={`w-5 h-5 flex-shrink-0 ${isRTL ? 'order-2' : ''}`} />
                  <p className={`text-sm font-medium ${isRTL ? 'text-right' : 'text-left'}`}>{t('contact.success')}</p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className={`flex items-center gap-2 text-red-600 bg-red-50 p-4 rounded-lg border border-red-200 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <p className={`text-sm font-medium ${isRTL ? 'text-right' : 'text-left'}`}>{t('contact.error')}</p>
                </div>
              )}
            </form>
            </div>
          </motion.div>

          {/* Contact Information with enhanced animations */}
          <div className={`space-y-4 sm:space-y-6 ${isRTL ? 'lg:order-1' : 'lg:order-2'} w-full`}>
            {/* Contact Cards with staggered entrance */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 sm:gap-5 w-full">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                // Animation configurations for each icon
                const getAnimationProps = () => {
                  switch (info.animation) {
                    case 'pulse':
                      return {
                        animate: {
                          scale: [1, 1.15, 1],
                        },
                        transition: {
                          duration: 2.5,
                          repeat: Infinity,
                          ease: "easeInOut" as const,
                          repeatDelay: 0,
                        },
                      };
                    case 'bounce':
                      return {
                        animate: {
                          y: [0, -10, 0],
                        },
                        transition: {
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut" as const,
                          repeatDelay: 0.2,
                        },
                      };
                    case 'shake':
                      return {
                        animate: {
                          scale: [1, 1.05, 1, 1.05, 1],
                        },
                        transition: {
                          duration: 2.5,
                          repeat: Infinity,
                          ease: "easeInOut" as const,
                          repeatDelay: 0.5,
                        },
                      };
                    case 'rotate':
                      return {
                        animate: {
                          scale: [1, 1.1, 1],
                        },
                        transition: {
                          duration: 3,
                          repeat: Infinity,
                          ease: [0.4, 0, 0.6, 1] as const,
                        },
                      };
                    default:
                      return {};
                  }
                };

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.2, delay: index * 0.03, ease: [0.25, 0.1, 0.25, 1] }}
                    whileHover={{ scale: 1.02, y: -2, transition: { type: "spring", stiffness: 500, damping: 30, mass: 0.5 } }}
                  >
                      <SpotlightCard
                      spotlightColor={
                        info.iconColor.includes('green') || info.iconColor.includes('emerald') 
                          ? 'rgba(16, 185, 129, 0.25)' : 
                        info.iconColor.includes('blue') || info.iconColor.includes('cyan')
                          ? 'rgba(59, 130, 246, 0.25)' :
                        info.iconColor.includes('orange') || info.iconColor.includes('amber')
                          ? 'rgba(249, 115, 22, 0.25)' :
                        info.iconColor.includes('purple') || info.iconColor.includes('indigo')
                          ? 'rgba(139, 92, 246, 0.25)' :
                        'rgba(99, 102, 241, 0.25)'
                      }
                      className={`group bg-white border border-gray-200 shadow-md p-4 sm:p-5 lg:p-6 card-lift ${
                        info.link === '#' ? 'pointer-events-none' : 'cursor-pointer'
                      }`}
                    >
                      <a
                        href={info.link}
                        className={`flex items-start gap-3 sm:gap-4 ${isRTL ? 'flex-row-reverse' : ''} relative z-10`}
                        onClick={(e) => {
                          if (info.link === '#') {
                            e.preventDefault();
                          }
                        }}
                      >
                        <motion.div
                          {...getAnimationProps()}
                          whileHover={{ scale: 1.12 }}
                          className={`relative flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 lg:w-11 lg:h-11 rounded-lg flex items-center justify-center text-white shadow-md group-hover:shadow-xl transition-all duration-300 ${isRTL ? 'order-2' : ''} ${info.iconColor} bg-gradient-to-br`}
                          style={{
                            boxShadow: '0 8px 18px -6px rgba(0, 0, 0, 0.18), 0 0 0 1px rgba(255, 255, 255, 0.08) inset',
                          }}
                        >
                          {/* Inner glow effect */}
                          <div className={`absolute inset-0 rounded-xl ${info.iconBg} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                          {/* Icon with realistic depth */}
                          <IconComponent 
                            className="relative z-10 w-4 h-4 sm:w-5 sm:h-5 lg:w-5 lg:h-5 drop-shadow-md" 
                            strokeWidth={2.3}
                            style={{
                              filter: 'drop-shadow(0 1px 3px rgba(0, 0, 0, 0.25))',
                            }}
                          />
                          {/* Shine effect on hover */}
                          <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                        </motion.div>
                        <div className="flex-1 min-w-0">
                          <h3 className={`text-xs sm:text-sm font-semibold text-gray-900 mb-1 sm:mb-1.5 uppercase tracking-wide ${isRTL ? 'text-right' : 'text-left'}`}>
                            {info.title}
                          </h3>
                          <p className={`text-sm sm:text-base lg:text-lg font-bold text-gray-900 group-hover:text-brand-teal transition-colors duration-300 truncate ${isRTL ? 'text-right' : 'text-left'}`}>
                            {info.detail}
                          </p>
                        </div>
                      </a>
                    </SpotlightCard>
                  </motion.div>
                );
              })}
            </div>

            {/* Enhanced Why Choose Us */}
            <motion.div 
              initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              className={`relative bg-gradient-to-br from-white to-gray-50 rounded-2xl sm:rounded-3xl shadow-2xl p-5 sm:p-6 lg:p-8 xl:p-10 text-gray-900 animate-fade-zoom anim-delayed delay-400 hover:shadow-[0_20px_60px_-12px_rgba(0,0,0,0.25)] transition-all duration-300 border border-gray-100 w-full ${isRTL ? 'text-right' : 'text-left'}`}
            >
              {/* Decorative gradient border */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-brand-blue/20 via-brand-teal/20 to-brand-blue/20 opacity-0 hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl" />
              <div className="relative z-10">
                <div className="mb-5 sm:mb-6 lg:mb-8">
                  <h3 className={`text-lg sm:text-xl lg:text-2xl xl:text-3xl font-extrabold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-2 ${isRTL ? 'text-right' : 'text-left'}`}>{t('contact.whyChooseUs')}</h3>
                  <p className={`text-xs sm:text-sm lg:text-base text-gray-600 ${isRTL ? 'text-right' : 'text-left'}`}>What sets us apart</p>
                </div>
                <ul className={`space-y-2.5 sm:space-y-3 lg:space-y-4 mb-5 sm:mb-6 lg:mb-8 ${isRTL ? 'text-right' : 'text-left'}`}>
                {[
                  { text: t('contact.whyChooseItem1'), icon: Clock, gradient: 'from-red-500 to-orange-600' },
                  { text: t('contact.whyChooseItem2'), icon: Shield, gradient: 'from-blue-500 to-indigo-600' },
                  { text: t('contact.whyChooseItem3'), icon: FileText, gradient: 'from-green-500 to-emerald-600' },
                  { text: t('contact.whyChooseItem4'), icon: Award, gradient: 'from-purple-500 to-pink-600' },
                  { text: t('contact.whyChooseItem5'), icon: DollarSign, gradient: 'from-teal-500 to-cyan-600' },
                ].map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <motion.li 
                      key={index} 
                      initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.15, delay: index * 0.03, ease: [0.25, 0.1, 0.25, 1] }}
                      className={`flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-white/50 hover:bg-white transition-colors duration-300 group w-full ${isRTL ? 'flex-row-reverse' : ''}`}
                    >
                      <div className={`flex-shrink-0 w-11 h-11 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                        <IconComponent 
                          className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8"
                          style={{
                            color: 'white',
                            fill: 'white',
                            stroke: 'white',
                            strokeWidth: 2.5
                          }}
                        />
                      </div>
                      <span className={`text-xs sm:text-sm lg:text-base xl:text-lg font-semibold text-gray-900 flex-1 ${isRTL ? 'text-right' : 'text-left'} break-words`}>{item.text}</span>
                    </motion.li>
                  );
                })}
              </ul>

                <div className="pt-5 sm:pt-6 lg:pt-8 border-t-2 border-gray-200">
                  <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl sm:rounded-2xl p-4 sm:p-5 border-2 border-gray-300 shadow-md">
                    <p className={`text-sm sm:text-base lg:text-lg text-gray-900 mb-3 sm:mb-4 lg:mb-5 font-bold ${isRTL ? 'text-right' : 'text-left'}`}>
                      {t('contact.needImmediateAssistance')}
                    </p>
                    <div className="relative w-full z-10">
                      <a
                        href="tel:+971525010132"
                        className={`relative flex items-center justify-center gap-2 sm:gap-3 w-full bg-white text-[#174A67] font-bold py-4 sm:py-5 lg:py-6 px-5 sm:px-6 lg:px-8 rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.12)] transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] text-base sm:text-lg lg:text-xl overflow-hidden group ${isRTL ? 'flex-row-reverse' : ''}`}
                        style={{
                          boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.3), 0 8px 10px -6px rgba(0, 0, 0, 0.2)',
                        }}
                      >
                        {/* Animated background gradient */}
                        <div className="absolute inset-0 bg-gradient-to-r from-brand-teal/20 via-brand-blue/20 to-brand-teal/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        
                        {/* Shine effect */}
                        <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent ${isRTL ? 'translate-x-full group-hover:-translate-x-full' : '-translate-x-full group-hover:translate-x-full'} transition-transform duration-700`} />
                        
                        {/* Icon with pulse animation */}
                        <PhoneCall className={`w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 flex-shrink-0 relative z-10 animate-pulse group-hover:animate-none ${isRTL ? 'order-2' : ''}`} />
                        <span className="relative z-10 font-extrabold tracking-wide">+971 52 501 0132</span>
                        
                        {/* Gradient border */}
                        <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#7DD3FC] via-[#45C0B0] to-[#3B82F6] opacity-100 -z-10" />
                        <span className="absolute inset-[2px] rounded-full bg-white -z-[1]" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
});

GetInTouch.displayName = 'GetInTouch';

export default GetInTouch;
