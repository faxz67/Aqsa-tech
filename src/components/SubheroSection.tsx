import React from 'react';
import { motion } from 'framer-motion';
import { Paintbrush, Users, Smile, LucideIcon } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';
import SpotlightCard from './ui/SpotlightCard';

interface Card {
  icon: LucideIcon;
  title: string;
  description: string;
}

const SubheroSection: React.FC = React.memo(() => {
  const { t } = useLanguage();

  const cards: Card[] = React.useMemo(() => {
    const langTranslations = translations.EN;
    const servicesDesc: unknown = langTranslations.subhero.servicesDescription;
    const providersDesc: unknown = langTranslations.subhero.providersDescription;
    const customersDesc: unknown = langTranslations.subhero.customersDescription;
    
    try {
      return [
        {
          icon: Paintbrush,
          title: t('subhero.servicesCount'),
          description: typeof servicesDesc === 'function' 
            ? (servicesDesc as () => string)()
            : String(servicesDesc || ''),
        },
        {
          icon: Users,
          title: t('subhero.providersCount'),
          description: typeof providersDesc === 'function'
            ? (providersDesc as () => string)()
            : String(providersDesc || ''),
        },
        {
          icon: Smile,
          title: t('subhero.customersCount'),
          description: typeof customersDesc === 'function'
            ? (customersDesc as () => string)()
            : String(customersDesc || ''),
        },
      ];
    } catch (error) {
      console.error('Error in SubheroSection cards:', error);
      return [
        {
          icon: Paintbrush,
          title: t('subhero.servicesCount'),
          description: String(servicesDesc || ''),
        },
        {
          icon: Users,
          title: t('subhero.providersCount'),
          description: String(providersDesc || ''),
        },
        {
          icon: Smile,
          title: t('subhero.customersCount'),
          description: String(customersDesc || ''),
        },
      ];
    }
  }, [t]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
        ease: [0.25, 0.1, 0.25, 1] as const,
      },
    },
  };

  return (
    <section className="w-full bg-gray-100 py-10 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <motion.div
        className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 items-stretch"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {cards.map((card, index) => {
          const IconComponent = card.icon;
          
          // Different spotlight colors for each card
          const spotlightColors = [
            'rgba(59, 130, 246, 0.25)', // Blue for Services
            'rgba(16, 185, 129, 0.25)', // Green for Providers
            'rgba(139, 92, 246, 0.25)', // Purple for Customers
          ];
          
          return (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -8,
                transition: { duration: 0.3 },
              }}
              className="w-full h-full flex"
            >
              <SpotlightCard
                spotlightColor={spotlightColors[index] || 'rgba(99, 102, 241, 0.25)'}
                className="bg-white border border-gray-200 shadow-sm hover:shadow-xl transition-shadow duration-300 p-5 sm:p-6 lg:p-8 w-full h-full flex flex-col min-h-[280px] sm:min-h-[300px]"
              >
                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon */}
                  <div className="flex justify-center mb-4 sm:mb-5 lg:mb-6 flex-shrink-0">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full bg-white border border-brand-blue/40 flex items-center justify-center shadow-md">
                      <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-brand-blue" strokeWidth={2.2} />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-normal text-gray-900 text-center mb-3 sm:mb-4 lg:mb-5 flex-shrink-0">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-900 text-center leading-relaxed text-xs sm:text-sm lg:text-base flex-grow font-medium">
                    {card.description}
                  </p>
                </div>
              </SpotlightCard>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
});

SubheroSection.displayName = 'SubheroSection';

export default SubheroSection;
