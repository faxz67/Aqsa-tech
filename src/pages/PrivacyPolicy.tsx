import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, FileText, Mail, Phone } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { useLanguage } from '../contexts/LanguageContext';

const PrivacyPolicy: React.FC = () => {
  const { isRTL } = useLanguage();

  const sections = [
    {
      icon: FileText,
      title: '1. Introduction',
      content: `Aqsa Technical Services ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services in the United Arab Emirates (UAE). By using our services, you consent to the data practices described in this policy.`
    },
    {
      icon: Eye,
      title: '2. Information We Collect',
      content: `We collect information that you provide directly to us, including:
• Personal identification information (name, email address, phone number, address)
• Service-related information (service requests, project details, property information)
• Payment information (processed securely through third-party payment processors)
• Communication records (correspondence, feedback, customer service interactions)
• Technical information (IP address, browser type, device information, cookies)`
    },
    {
      icon: Lock,
      title: '3. How We Use Your Information',
      content: `We use the collected information for the following purposes:
• To provide, maintain, and improve our services
• To process your service requests and bookings
• To communicate with you about your services, inquiries, and updates
• To send you marketing communications (with your consent)
• To comply with legal obligations under UAE law
• To protect our rights and prevent fraud
• To analyze website usage and improve user experience`
    },
    {
      icon: Shield,
      title: '4. Data Protection Under UAE Law',
      content: `We comply with applicable UAE data protection laws, including:
• UAE Federal Law No. 5 of 2012 on Combating Cybercrimes
• UAE Federal Law No. 2 of 2019 on the Use of Information and Communication Technology
• Any applicable data protection regulations in the Emirate where we operate
We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.`
    },
    {
      icon: FileText,
      title: '5. Data Sharing and Disclosure',
      content: `We may share your information in the following circumstances:
• With service providers who assist us in operating our business (subject to confidentiality agreements)
• When required by UAE law or legal process
• To protect our rights, property, or safety, or that of our customers
• In connection with a business transfer (merger, acquisition, etc.)
• With your explicit consent
We do not sell your personal information to third parties.`
    },
    {
      icon: Lock,
      title: '6. Data Retention',
      content: `We retain your personal information for as long as necessary to:
• Fulfill the purposes outlined in this Privacy Policy
• Comply with legal obligations under UAE law
• Resolve disputes and enforce our agreements
• Maintain business records as required by UAE regulations
When personal data is no longer needed, we will securely delete or anonymize it in accordance with our data retention policies.`
    },
    {
      icon: Shield,
      title: '7. Your Rights Under UAE Law',
      content: `Subject to applicable UAE law, you have the right to:
• Access your personal data we hold about you
• Request correction of inaccurate or incomplete data
• Request deletion of your personal data (subject to legal retention requirements)
• Object to processing of your personal data
• Withdraw consent where processing is based on consent
• File a complaint with relevant UAE authorities if you believe your data rights have been violated
To exercise these rights, please contact us using the information provided below.`
    },
    {
      icon: Eye,
      title: '8. Cookies and Tracking Technologies',
      content: `We use cookies and similar tracking technologies to:
• Remember your preferences and settings
• Analyze website traffic and usage patterns
• Provide personalized content and advertisements
• Improve website functionality
You can control cookies through your browser settings. However, disabling cookies may limit your ability to use certain features of our website.`
    },
    {
      icon: Lock,
      title: '9. International Data Transfers',
      content: `Your information may be transferred to and processed in countries outside the UAE. We ensure that appropriate safeguards are in place to protect your data in accordance with this Privacy Policy and applicable UAE laws.`
    },
    {
      icon: FileText,
      title: '10. Children\'s Privacy',
      content: `Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.`
    },
    {
      icon: Shield,
      title: '11. Security Measures',
      content: `We implement industry-standard security measures to protect your information, including:
• Encryption of sensitive data in transit and at rest
• Secure servers and databases
• Access controls and authentication procedures
• Regular security assessments and updates
• Employee training on data protection
However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.`
    },
    {
      icon: FileText,
      title: '12. Changes to This Privacy Policy',
      content: `We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. Your continued use of our services after such changes constitutes acceptance of the updated policy.`
    },
    {
      icon: Mail,
      title: '13. Contact Us',
      content: `If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:

Aqsa Technical Services
United Arab Emirates
Email: services@aqsatech.ae
Phone: +971 52 501 0132

We will respond to your inquiries in accordance with applicable UAE law and regulations.`
    }
  ];

  return (
    <>
      <SEOHead
        title="Privacy Policy | Aqsa Technical Services UAE"
        description="Privacy Policy for Aqsa Technical Services. Learn how we collect, use, and protect your personal information in compliance with UAE data protection laws."
        keywords="privacy policy, data protection UAE, Aqsa Tech privacy, UAE privacy law"
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
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h1 className={`text-4xl sm:text-5xl font-bold text-gray-900 mb-4 ${isRTL ? 'text-right' : 'text-left'}`}>
              Privacy Policy
            </h1>
            <p className={`text-lg text-gray-600 ${isRTL ? 'text-right' : 'text-left'}`}>
              Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
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
            transition={{ duration: 0.2, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            className="mt-12 bg-gradient-to-br from-brand-teal to-brand-blue rounded-2xl p-8 text-white text-center"
          >
            <h3 className={`text-2xl font-bold mb-4 ${isRTL ? 'text-right' : 'text-left'}`}>Questions About Privacy?</h3>
            <p className={`mb-6 opacity-90 ${isRTL ? 'text-right' : 'text-left'}`}>
              Contact us if you have any questions or concerns about our Privacy Policy or data practices.
            </p>
            <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
              <a
                href="mailto:services@aqsatech.ae"
                className="flex items-center gap-2 px-6 py-3 bg-white text-brand-teal rounded-xl font-semibold hover:bg-gray-100 transition-colors"
              >
                <Mail className="w-5 h-5" />
                services@aqsatech.ae
              </a>
              <a
                href="tel:+971525010132"
                className="flex items-center gap-2 px-6 py-3 bg-white text-brand-teal rounded-xl font-semibold hover:bg-gray-100 transition-colors"
              >
                <Phone className="w-5 h-5" />
                +971 52 501 0132
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
