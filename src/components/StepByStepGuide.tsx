import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

interface Step {
  number: number;
  title: string;
  description: string;
  active: boolean;
}

const StepByStepGuide: React.FC = () => {
  const { t, isRTL } = useLanguage();

  const [activeStep, setActiveStep] = React.useState<number>(1);

  const steps: Step[] = React.useMemo(
    () => [
      {
        number: 1,
        title: t('steps.step1Title'),
        description: t('steps.step1Description'),
        active: true,
      },
      {
        number: 2,
        title: t('steps.step2Title'),
        description: t('steps.step2Description'),
        active: false,
      },
      {
        number: 3,
        title: t('steps.step3Title'),
        description: t('steps.step3Description'),
        active: false,
      },
    ],
    [t]
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.03,
      },
    },
  };

  const stepVariants = {
    hidden: { opacity: 0, x: isRTL ? -50 : 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.2,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <section className="w-full bg-gradient-to-b from-soft-gray-light via-white to-white py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
      <div className="max-w-7xl mx-auto w-full overflow-x-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 xl:gap-12 items-start lg:items-center w-full">
          {/* Left Column - Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
            className={`lg:sticky lg:top-8 w-full ${isRTL ? 'text-right' : 'text-left'}`}
          >
            <h2 className={`text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-semibold text-gray-900 leading-tight mb-3 sm:mb-4 lg:mb-5 ${isRTL ? 'text-right' : 'text-left'}`}>
              {t('steps.title')}
            </h2>
            <p className={`text-gray-900 text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed font-medium ${isRTL ? 'text-right' : 'text-left'}`}>
              {t('steps.subtitle')}
            </p>
          </motion.div>

          {/* Right Column - Steps */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-4 sm:space-y-5 lg:space-y-6 xl:space-y-7 w-full"
          >
            {steps.map((step, index) => {
              const isActive = step.number === activeStep;

              return (
                <motion.button
                  type="button"
                  key={step.number}
                  onClick={() => setActiveStep(step.number)}
                  variants={stepVariants}
                  whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.25 },
                  }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full rounded-2xl sm:rounded-3xl focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue/70 focus-visible:ring-offset-2 focus-visible:ring-offset-white ${
                    isRTL ? 'text-right' : 'text-left'
                  }`}
                >
                  <div
                    className={`bg-white rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-5 md:p-6 lg:p-7 xl:p-8 shadow-sm hover:shadow-xl transition-all duration-300 w-full border border-gray-100 ${
                      isActive ? 'ring-2 ring-brand-teal ring-offset-2' : ''
                    }`}
                  >
                    {/* Step Number Badge */}
                    <div className={`mb-3 sm:mb-4 lg:mb-5 flex ${isRTL ? 'justify-end' : 'justify-start'}`}>
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: index * 0.05,
                          type: 'spring',
                          stiffness: 500,
                          damping: 30,
                          mass: 0.5,
                        }}
                        className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20 rounded-full flex items-center justify-center text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold transition-all duration-300 flex-shrink-0 ${
                          isActive ? 'bg-[#111827] text-white shadow-lg ring-2 ring-brand-blue ring-offset-2' : 'bg-gray-300 text-gray-700 border-2 border-gray-400'
                        }`}
                      >
                        {step.number}
                      </motion.div>
                    </div>

                    {/* Step Title */}
                    <h3
                      className={`text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-semibold mb-2 sm:mb-3 lg:mb-4 leading-tight ${
                        isActive ? 'text-gray-900' : 'text-gray-700'
                      } ${isRTL ? 'text-right' : 'text-left'}`}
                    >
                      {step.title}
                    </h3>

                    {/* Step Description */}
                    <p
                      className={`text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl leading-relaxed font-normal ${
                        isActive ? 'text-gray-900' : 'text-gray-700'
                      } ${isRTL ? 'text-right' : 'text-left'}`}
                    >
                      {step.description}
                    </p>
                  </div>
                </motion.button>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StepByStepGuide;
