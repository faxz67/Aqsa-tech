"use client";
import { useEffect } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSchemaProps {
  faqs?: FAQItem[];
}

const FAQSchema: React.FC<FAQSchemaProps> = ({ faqs }) => {
  const defaultFAQs: FAQItem[] = [
    {
      question: 'What is Aqsatech in Dubai?',
      answer: 'Aqsatech in Dubai is Aqsa Tech UAE, the #1 technical services company providing AC service, home maintenance, renovation, handyman, plumbing, electrical, and fit out services across Dubai, Abu Dhabi, and Sharjah. With 10,000+ satisfied customers, we offer same-day service and free quotes.',
    },
    {
      question: 'What services does Aqsatech offer in Dubai?',
      answer: 'Aqsatech in Dubai offers comprehensive technical services including AC installation and maintenance, home maintenance, villa and apartment renovation, handyman services, plumbing, electrical work, painting, tiling, carpentry, office fit out, and MEP services. We serve all areas of Dubai, Abu Dhabi, and Sharjah.',
    },
    {
      question: 'How can I contact Aqsatech in Dubai?',
      answer: 'You can contact Aqsatech in Dubai by calling +971 52 501 0132, emailing admin@aqsatech.ae, or visiting our website aqsatech.ae. We offer 24/7 emergency services and provide free quotes for all services.',
    },
    {
      question: 'Does Aqsatech provide same-day service in Dubai?',
      answer: 'Yes, Aqsatech in Dubai provides same-day service for urgent repairs and installations. We have a team of skilled professionals ready to assist you across Dubai, Abu Dhabi, and Sharjah.',
    },
    {
      question: 'Is Aqsatech licensed in Dubai?',
      answer: 'Yes, Aqsatech is a licensed contractor in Dubai and across the UAE. We are fully insured and comply with all local regulations and standards for technical services.',
    },
    {
      question: 'What areas does Aqsatech serve in Dubai?',
      answer: 'Aqsatech serves all areas of Dubai including Downtown Dubai, Dubai Marina, JBR, Business Bay, JLT, DIFC, Palm Jumeirah, Arabian Ranches, and all other residential and commercial areas. We also serve Abu Dhabi, Sharjah, and other Emirates.',
    },
    {
      question: 'How much does Aqsatech charge for services in Dubai?',
      answer: 'Aqsatech offers competitive pricing for all services in Dubai. We provide free quotes for all projects. Contact us at +971 52 501 0132 or visit aqsatech.ae for a personalized quote based on your specific requirements.',
    },
    {
      question: 'Does Aqsatech offer emergency services in Dubai?',
      answer: 'Yes, Aqsatech offers 24/7 emergency services in Dubai for AC repair, plumbing, electrical issues, and other urgent technical problems. Call +971 52 501 0132 anytime for immediate assistance.',
    },
  ];

  const faqList = faqs || defaultFAQs;

  useEffect(() => {
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqList.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    };

    // Remove existing FAQ schema
    const existingScript = document.getElementById('faq-schema');
    if (existingScript) {
      existingScript.remove();
    }

    // Add new FAQ schema
    const script = document.createElement('script');
    script.id = 'faq-schema';
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.getElementById('faq-schema');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [faqList]);

  return null;
};

export default FAQSchema;

