import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface Testimonial {
  id: number;
  name: string;
  image: string;
  rating: number;
  testimonial: string;
  service: string;
}

const CustomerTestimonials: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Brandon Baptista',
      image: '/images/photos/testimonial-1.jpg',
      rating: 5,
      testimonial:
        'I had a leaking faucet that was driving me crazy. I booked a plumber through this platform, and he arrived on time, fixed the leak quickly, and even gave me some maintenance tips. Highly recommend!',
      service: 'Plumbing',
    },
    {
      id: 2,
      name: 'Arlene McCoy',
      image: '/images/photos/testimonial-2.jpg',
      rating: 5,
      testimonial:
        'After a hectic week, my house was a mess. I hired a cleaner through this app, and she did an amazing job. My home has never looked better! The convenience and quality of service were top-notch.',
      service: 'House Cleaning',
    },
    {
      id: 3,
      name: 'Albert Flores',
      image: '/images/photos/testimonial-3.jpg',
      rating: 5,
      testimonial:
        'Moving is always stressful, but the movers I hired through this platform made it a breeze. They were careful with my belongings and extremely efficient. I\'m so grateful for their help!',
      service: 'Moving Assistance',
    },
    {
      id: 4,
      name: 'Annette Black',
      image: '/images/photos/testimonial-4.jpg',
      rating: 4.5,
      testimonial:
        'I needed someone to run errands for me while I was recovering from surgery. The personal assistant I hired was a lifesaver. She was reliable, friendly, and got everything done perfectly. This service is a game-changer.',
      service: 'Personal Assistance',
    },
    {
      id: 5,
      name: 'Marvin McKinney',
      image: '/images/photos/testimonial-5.jpg',
      rating: 4.5,
      testimonial:
        'Planning my daughter\'s birthday party was overwhelming until I found this service. The event setup team was fantastic. They took care of everything, from decorations to cleanup. The party was a huge success, thanks to them!',
      service: 'Event Support',
    },
    {
      id: 6,
      name: 'Darrell Steward',
      image: '/images/photos/testimonial-6.jpg',
      rating: 4.5,
      testimonial:
        'Planning my daughter\'s birthday party was overwhelming until I found this service. The event setup team was fantastic. They took care of everything, from decorations to cleanup. The party was a huge success, thanks to them!',
      service: 'Event Support',
    },
  ];

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star
          key={`full-${i}`}
          className="w-5 h-5 fill-brand-teal text-brand-teal"
        />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <div key="half" className="relative w-5 h-5">
          <Star className="absolute w-5 h-5 text-brand-teal" />
          <div className="absolute w-1/2 h-full overflow-hidden">
            <Star className="w-5 h-5 fill-brand-teal text-brand-teal" />
          </div>
        </div>
      );
    }

    return stars;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="w-full bg-soft-gray-light py-10 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className={`flex flex-col lg:flex-row ${isRTL ? 'lg:flex-row-reverse' : ''} justify-between items-start lg:items-center mb-6 sm:mb-8 lg:mb-12 gap-4 sm:gap-6`}>
          <div className="max-w-2xl w-full lg:w-auto text-center sm:text-left">
            <h2 className={`text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-normal text-gray-900 mb-2 sm:mb-3 lg:mb-4 ${isRTL ? 'sm:text-right' : ''}`}>
              {t('testimonials.title')}
            </h2>
            <p className={`text-gray-900 text-sm sm:text-base lg:text-lg leading-relaxed font-medium ${isRTL ? 'sm:text-right' : ''}`}>
              {t('testimonials.subtitle')}
            </p>
          </div>

          {/* Trustpilot Badge */}
          <div className={`flex items-center gap-2 sm:gap-3 bg-white px-3 sm:px-4 lg:px-6 py-2 sm:py-2.5 lg:py-3 rounded-lg shadow-sm mx-auto lg:mx-0 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <span className="text-gray-900 font-medium text-lg">{t('hero.excellent')}</span>
            <div className="flex gap-1">
              {[1, 2, 3, 4].map((star) => (
                <Star
                  key={star}
                  className="w-6 h-6 fill-brand-teal text-brand-teal"
                />
              ))}
              <div className="relative w-6 h-6">
                <Star className="absolute w-6 h-6 text-brand-teal" />
                <div className="absolute w-1/2 h-full overflow-hidden">
                  <Star className="w-6 h-6 fill-brand-teal text-brand-teal" />
                </div>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <Star className="w-5 h-5 fill-brand-teal text-brand-teal" />
              <span className="text-gray-900 font-medium">{t('hero.trustpilot')}</span>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={cardVariants}
              whileHover={{
                y: -8,
                transition: { duration: 0.3 },
              }}
              className="bg-white rounded-2xl p-5 sm:p-6 lg:p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between"
            >
              {/* Top Section */}
              <div>
                {/* User Info and Rating */}
                <div className={`flex items-center justify-between mb-4 sm:mb-5 lg:mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <div className={`flex items-center gap-2 sm:gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      loading="lazy"
                      decoding="async"
                      fetchPriority="low"
                      width={48}
                      height={48}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                    />
                    <h4 className={`text-base sm:text-lg font-medium text-gray-900 ${isRTL ? 'text-right' : 'text-left'}`}>
                      {testimonial.name}
                    </h4>
                  </div>
                  <div className={`flex gap-0.5 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    {renderStars(testimonial.rating)}
                  </div>
                </div>

                {/* Testimonial Text */}
                <p className={`text-gray-600 text-sm sm:text-base leading-relaxed mb-4 sm:mb-5 lg:mb-6 ${isRTL ? 'text-right' : 'text-left'}`}>
                  {testimonial.testimonial}
                </p>
              </div>

              {/* Service Tag */}
              <div className="pt-4 sm:pt-5 lg:pt-6 border-t border-gray-100">
                <span className={`text-gray-700 text-xs sm:text-sm font-medium ${isRTL ? 'text-right' : 'text-left'}`}>
                  {testimonial.service}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CustomerTestimonials;
