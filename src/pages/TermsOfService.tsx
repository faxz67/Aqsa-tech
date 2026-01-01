import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Scale, AlertCircle, CheckCircle, XCircle, Shield } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { useLanguage } from '../contexts/LanguageContext';

const TermsOfService: React.FC = () => {
  const { isRTL } = useLanguage();

  const sections = [
    {
      icon: FileText,
      title: '1. Acceptance of Terms',
      content: `By accessing and using the services of Aqsa Technical Services ("we," "our," or "us"), you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services. These terms are governed by the laws of the United Arab Emirates (UAE).`
    },
    {
      icon: Scale,
      title: '2. Services Description',
      content: `Aqsa Technical Services provides technical and maintenance services including but not limited to:
• Air conditioning installation, repair, and maintenance
• Plumbing and sanitary services
• Electrical works and installations
• Painting and decoration services
• Tiling and flooring services
• Carpentry and woodwork
• Renovation and remodeling services
• Office fit-out services
• General handyman services

All services are provided in accordance with UAE regulations and standards.`
    },
    {
      icon: CheckCircle,
      title: '3. Service Booking and Payment',
      content: `• Service bookings can be made through our website, phone, or email
• A quote will be provided before work commences
• Payment terms will be specified in the service agreement
• We accept cash, bank transfer, and approved payment methods
• All prices are in UAE Dirhams (AED) unless otherwise stated
• Payment must be made as per the agreed terms in the service contract
• Late payments may incur additional charges as per UAE commercial law`
    },
    {
      icon: Shield,
      title: '4. Service Guarantee and Warranty',
      content: `• We provide warranties on workmanship and materials as specified in each service agreement
• Warranty periods vary by service type and will be clearly stated in your service contract
• Warranty covers defects in workmanship and materials, subject to normal wear and tear
• Warranty does not cover damage caused by misuse, accidents, or unauthorized modifications
• To claim warranty service, contact us within the warranty period with proof of service
• Warranty claims will be assessed in accordance with UAE consumer protection laws`
    },
    {
      icon: AlertCircle,
      title: '5. Customer Responsibilities',
      content: `You agree to:
• Provide accurate and complete information when requesting services
• Grant our technicians safe and reasonable access to the service location
• Ensure the service area is accessible and safe for our team
• Obtain necessary permits or approvals if required by UAE authorities
• Inform us of any existing damage, hazards, or special requirements
• Make timely payments as agreed in the service contract
• Comply with all applicable UAE laws and regulations`
    },
    {
      icon: Scale,
      title: '6. Limitation of Liability',
      content: `To the maximum extent permitted by UAE law:
• Our liability is limited to the value of the service provided
• We are not liable for indirect, incidental, or consequential damages
• We are not responsible for delays due to circumstances beyond our control (force majeure)
• We are not liable for damage to property that existed before our service
• Our liability is subject to the terms and limitations stated in the service agreement
• This limitation does not affect your statutory rights under UAE consumer protection laws`
    },
    {
      icon: Shield,
      title: '7. Insurance and Licensing',
      content: `• We maintain appropriate insurance coverage as required by UAE law
• Our technicians are licensed and qualified to perform services in the UAE
• We comply with all relevant UAE regulations, including those of Dubai Municipality, Abu Dhabi Municipality, and other relevant authorities
• Certificates and licenses are available upon request
• We are registered and operate in compliance with UAE commercial laws`
    },
    {
      icon: XCircle,
      title: '8. Cancellation and Refund Policy',
      content: `• Cancellations must be made at least 24 hours before the scheduled service time
• Cancellations made less than 24 hours before service may incur a cancellation fee
• Refunds for completed services are subject to our service guarantee and warranty terms
• Partial refunds may be provided for incomplete services, subject to work completed
• Refund requests must be made in writing within 7 days of service completion
• Refunds will be processed in accordance with UAE consumer protection regulations`
    },
    {
      icon: AlertCircle,
      title: '9. Force Majeure',
      content: `We are not liable for delays or failures in performance resulting from circumstances beyond our reasonable control, including but not limited to:
• Natural disasters, extreme weather conditions
• Government actions, regulations, or restrictions
• Pandemics, health emergencies, or public health measures
• Labor strikes, civil unrest, or security issues
• Supply chain disruptions or material shortages
• Any other events recognized as force majeure under UAE law`
    },
    {
      icon: FileText,
      title: '10. Intellectual Property',
      content: `• All content on our website, including text, graphics, logos, and images, is our property
• You may not reproduce, distribute, or use our content without written permission
• Service designs, plans, and specifications remain our intellectual property unless otherwise agreed
• You may use service documentation for your own property maintenance purposes only`
    },
    {
      icon: Scale,
      title: '11. Dispute Resolution',
      content: `• Any disputes arising from our services will first be addressed through direct communication
• We are committed to resolving disputes amicably and in good faith
• If a dispute cannot be resolved, it will be subject to the jurisdiction of UAE courts
• Disputes will be governed by UAE law
• You may also seek resolution through UAE consumer protection authorities if applicable`
    },
    {
      icon: Shield,
      title: '12. Compliance with UAE Laws',
      content: `• We operate in full compliance with UAE federal and emirate-specific laws
• Our services comply with Dubai Municipality, Abu Dhabi Municipality, and other relevant authority regulations
• We adhere to UAE labor laws, safety regulations, and environmental standards
• All work is performed in accordance with UAE building codes and standards
• We maintain necessary licenses and permits as required by UAE authorities`
    },
    {
      icon: AlertCircle,
      title: '13. Modifications to Services',
      content: `• We reserve the right to modify, suspend, or discontinue services at any time
• We may update these Terms of Service from time to time
• Material changes will be communicated through our website or direct notification
• Continued use of our services after changes constitutes acceptance of the updated terms
• If you do not agree to changes, you may discontinue using our services`
    },
    {
      icon: FileText,
      title: '14. Privacy and Data Protection',
      content: `• Your use of our services is also governed by our Privacy Policy
• We collect and process personal data in accordance with UAE data protection laws
• By using our services, you consent to our data practices as described in our Privacy Policy
• Please review our Privacy Policy for detailed information about data collection and use`
    },
    {
      icon: CheckCircle,
      title: '15. Contact Information',
      content: `For questions, concerns, or service inquiries regarding these Terms of Service:

Aqsa Technical Services
United Arab Emirates
Email: services@aqsatech.ae
Phone: +971 52 501 0132

We are committed to providing excellent customer service and addressing your concerns promptly.`
    }
  ];

  return (
    <>
      <SEOHead
        title="Terms of Service | Aqsa Technical Services UAE"
        description="Terms of Service for Aqsa Technical Services. Read our service terms, warranties, and customer responsibilities in compliance with UAE law."
        keywords="terms of service, service agreement UAE, Aqsa Tech terms, UAE service terms"
      />
      <div className="min-h-screen bg-gray-50 pt-24 pb-16" dir={isRTL ? 'rtl' : 'ltr'}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-brand-teal to-brand-blue mb-6">
              <Scale className="w-8 h-8 text-white" />
            </div>
            <h1 className={`text-4xl sm:text-5xl font-bold text-gray-900 mb-4 ${isRTL ? 'text-right' : 'text-left'}`}>
              Terms of Service
            </h1>
            <p className={`text-lg text-gray-600 ${isRTL ? 'text-right' : 'text-left'}`}>
              Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </motion.div>

          {/* Important Notice */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.05, ease: [0.25, 0.1, 0.25, 1] }}
            className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg mb-8"
          >
            <div className={`flex items-start gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <AlertCircle className={`w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5 ${isRTL ? 'order-2' : ''}`} />
              <div className={isRTL ? 'text-right' : 'text-left'}>
                <h3 className="font-bold text-blue-900 mb-2">Important Legal Notice</h3>
                <p className="text-blue-800 text-sm">
                  These Terms of Service are governed by the laws of the United Arab Emirates. By using our services, you agree to be bound by these terms and UAE law. Please read these terms carefully before using our services.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <div className="space-y-8">
            {sections.map((section, index) => {
              const IconComponent = section.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.15, delay: index * 0.03, ease: [0.25, 0.1, 0.25, 1] }}
                  className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-8 hover:shadow-md transition-shadow duration-300"
                >
                  <div className={`flex items-start gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-brand-teal/10 to-brand-blue/10 flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-brand-teal" />
                    </div>
                    <div className="flex-1">
                      <h2 className={`text-xl sm:text-2xl font-bold text-gray-900 mb-4 ${isRTL ? 'text-right' : 'text-left'}`}>
                        {section.title}
                      </h2>
                      <div className={`text-gray-700 leading-relaxed whitespace-pre-line ${isRTL ? 'text-right' : 'text-left'}`}>
                        {section.content}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="mt-12 bg-gradient-to-br from-brand-teal to-brand-blue rounded-2xl p-8 text-white text-center"
          >
            <h3 className={`text-2xl font-bold mb-4 ${isRTL ? 'text-right' : 'text-left'}`}>Questions About Our Terms?</h3>
            <p className={`mb-6 opacity-90 ${isRTL ? 'text-right' : 'text-left'}`}>
              Contact us if you have any questions about these Terms of Service or need clarification on any point.
            </p>
            <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
              <a
                href="mailto:services@aqsatech.ae"
                className="flex items-center gap-2 px-6 py-3 bg-white text-brand-teal rounded-xl font-semibold hover:bg-gray-100 transition-colors"
              >
                <FileText className="w-5 h-5" />
                services@aqsatech.ae
              </a>
              <a
                href="tel:+971525010132"
                className="flex items-center gap-2 px-6 py-3 bg-white text-brand-teal rounded-xl font-semibold hover:bg-gray-100 transition-colors"
              >
                <Shield className="w-5 h-5" />
                +971 52 501 0132
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default TermsOfService;
