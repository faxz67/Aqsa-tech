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
        staggerChildren: 0.3,
      },
    },
  };

  const stepVariants = {
    hidden: { opacity: 0, x: isRTL ? -50 : 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="w-full bg-gradient-to-b from-soft-gray-light via-white to-white py-10 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
      <div className="max-w-7xl mx-auto w-full overflow-x-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 xl:gap-16 items-start w-full">
          {/* Left Column - Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-8 text-center sm:text-left w-full"
          >
            <h2 className={`text-xl sm:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-semibold text-gray-900 leading-tight mb-3 sm:mb-4 lg:mb-6 ${isRTL ? 'sm:text-right' : ''}`}>
              {t('steps.title')}
            </h2>
            <p className={`text-gray-900 text-xs sm:text-sm lg:text-base xl:text-lg leading-relaxed font-medium ${isRTL ? 'sm:text-right' : ''}`}>
              {t('steps.subtitle')}
            </p>
          </motion.div>

          {/* Right Column - Steps */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-5 sm:space-y-6 lg:space-y-8"
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
                  className={`w-full text-left rounded-2xl sm:rounded-3xl focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue/70 focus-visible:ring-offset-2 focus-visible:ring-offset-white ${
                    isRTL ? 'sm:text-right' : 'sm:text-left'
                  }`}
                >
                  <div
                    className={`bg-white rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-5 lg:p-6 xl:p-8 2xl:p-10 shadow-sm hover:shadow-xl transition-all duration-300 w-full ${
                      isActive ? 'ring-2 ring-brand-teal' : ''
                    }`}
                  >
                    {/* Step Number Badge */}
                    <div className={`mb-3 sm:mb-4 lg:mb-6 ${isRTL ? 'text-right' : 'text-left'}`}>
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: index * 0.2,
                          type: 'spring',
                          stiffness: 200,
                          damping: 15,
                        }}
                        className={`w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 xl:w-14 xl:h-14 rounded-full flex items-center justify-center text-base sm:text-lg lg:text-xl xl:text-2xl font-bold transition-all duration-300 ${
                          isActive ? 'bg-[#111827] text-white shadow-lg ring-2 ring-brand-blue ring-offset-2' : 'bg-gray-300 text-gray-700 border-2 border-gray-400'
                        }`}
                      >
                        {step.number}
                      </motion.div>
                    </div>

                    {/* Step Title */}
                    <h3
                      className={`text-base sm:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-normal mb-2 sm:mb-3 lg:mb-4 ${
                        isActive ? 'text-gray-900' : 'text-gray-700'
                      } ${isRTL ? 'text-right' : 'text-left'}`}
                    >
                      {step.title}
                    </h3>

                    {/* Step Description */}
                    <p
                      className={`text-xs sm:text-sm lg:text-base xl:text-lg leading-relaxed ${
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
