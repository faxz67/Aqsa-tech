import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import ProButton from '../components/ui/ProButton';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslatedBlogPosts } from '../hooks/useTranslatedBlogPosts';
import { generateWhatsAppUrl, WHATSAPP_PHONE } from '../utils/whatsapp';

export default function Blog() {
  const { t, isRTL, language } = useLanguage();
  const navigate = useNavigate();
  const { translatedPosts, translatedCategories } = useTranslatedBlogPosts();
  const allCategoriesKey = translatedCategories[0]; // First category is "All" or "الكل"
  const [activeCategory, setActiveCategory] = useState(allCategoriesKey);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    // Update active category when language changes
    setActiveCategory(translatedCategories[0]);
  }, [language, translatedCategories]);

  const filteredPosts = activeCategory === allCategoriesKey
    ? translatedPosts 
    : translatedPosts.filter(post => post.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen bg-soft-gray-light pt-20 sm:pt-24 overflow-x-hidden">
      {/* Header Section */}
      <section className="bg-white border-b border-gray-200 overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12 w-full overflow-x-hidden">
          <motion.button
            onClick={() => navigate(-1)}
            className={`flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4 sm:mb-6 transition-colors text-sm sm:text-base ${isRTL ? 'flex-row-reverse ml-auto' : ''}`}
            whileHover={{ x: isRTL ? 4 : -4 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowLeft className={`w-4 h-4 sm:w-5 sm:h-5 ${isRTL ? 'rotate-180' : ''}`} />
            <span className="font-medium">{t('common.back')}</span>
          </motion.button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center sm:text-left"
          >
            <h1 className={`text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-2 sm:mb-3 lg:mb-4 ${isRTL ? 'sm:text-right' : ''}`}>
              {t('blog.title')}
            </h1>
            <p className={`text-sm sm:text-base lg:text-lg xl:text-xl text-gray-900 max-w-3xl mx-auto sm:mx-0 mb-4 sm:mb-6 font-medium ${isRTL ? 'sm:text-right' : ''}`}>
              {t('blog.subtitle')}
            </p>

            {/* Category Filter - Moved inside header */}
            <div className={`flex gap-2 sm:gap-3 lg:gap-4 overflow-x-auto pb-2 scrollbar-hide mt-4 sm:mt-6 lg:mt-8 w-full ${isRTL ? 'flex-row-reverse justify-start sm:justify-start' : 'justify-start sm:justify-start'}`}>
              {translatedCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 sm:px-5 lg:px-7 py-2 sm:py-2.5 lg:py-3.5 rounded-lg sm:rounded-xl text-xs sm:text-sm lg:text-base font-bold whitespace-nowrap transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95 flex-shrink-0 ${
                    activeCategory === cat
                      ? 'bg-gray-900 text-white shadow-xl scale-105 ring-2 ring-gray-700'
                      : 'bg-white text-gray-900 hover:bg-gray-50 border-2 border-gray-300 hover:border-gray-500'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 lg:py-16 w-full overflow-x-hidden">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-8 w-full items-stretch"
        >
          {filteredPosts.map((post) => (
            <motion.article
              key={post.id}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 group flex flex-col h-full"
            >
              {/* Image */}
              <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden flex-shrink-0">
                <img
                  src={post.image}
                  alt={post.title}
                  loading="lazy"
                  decoding="async"


                  width={800}
                  height={450}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  style={{ contentVisibility: 'auto' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <span className={`absolute top-4 ${isRTL ? 'right-4' : 'left-4'} bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-xs font-medium`}>
                  {post.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5 lg:p-6 flex flex-col flex-grow">
                <h2 className={`text-sm sm:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-brand-teal transition-colors line-clamp-2 ${isRTL ? 'text-right' : 'text-left'}`}>
                  {post.title}
                </h2>
                <p className={`text-gray-900 text-xs sm:text-sm lg:text-base leading-relaxed mb-3 sm:mb-4 line-clamp-3 flex-grow ${isRTL ? 'text-right' : 'text-left'}`}>
                  {post.excerpt}
                </p>

                {/* Meta */}
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-700 mb-3 sm:mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={14} />
                    {post.readTime}
                  </span>
                  <span className={`flex items-center gap-1 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <User size={14} />
                    {post.author}
                  </span>
                </div>

                <ProButton
                  onClick={() => navigate(`/blog/${post.slug}`)}
                  variant="dark"
                  size="md"
                  fullWidth
                >
                  {t('blog.readMore')}
                </ProButton>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {filteredPosts.length === 0 && (
          <div className={`text-center py-16 ${isRTL ? 'text-right' : 'text-left'}`}>
            <p className="text-gray-900 text-lg font-medium">{t('blog.noArticles')}</p>
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section className="bg-brand-gradient text-white py-10 sm:py-14 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 px-2 sm:px-0 text-white">
              {t('blog.needProfessionalHelp')}
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-white mb-6 sm:mb-8 px-2 sm:px-0 font-medium">
              {t('blog.professionalHelpDescription')}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2 sm:px-0">
              <ProButton
                as="a"
                href={generateWhatsAppUrl(WHATSAPP_PHONE, t('whatsapp.blogQuote'))}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Get Free Quote on WhatsApp"
                variant="dark"
                size="lg"
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base"
              >
                {t('hero.getFreeQuote')}
              </ProButton>
              <ProButton
                as="a"
                href="tel:+971525010132"
                variant="outline"
                size="lg"
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-white text-white hover:bg-white hover:text-gray-900 text-sm sm:text-base"
              >
                {t('hero.callNow')}
              </ProButton>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
