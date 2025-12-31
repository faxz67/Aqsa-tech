import React, { useState } from 'react';
import { MessageCircle, X, Sparkles } from 'lucide-react';

type QAItem = {
  question: string;
  answer: string;
  tag?: string;
};

const PRESET_QA: QAItem[] = [
  {
    question: 'What services does Aqsa Tech provide?',
    answer:
      'Aqsa Tech provides complete property maintenance and renovation services in Dubai and UAE, including AC installation & maintenance, plumbing & sanitary, electrical & MEP works, painting, tiling, carpentry & flooring, kitchen renovation, water tank cleaning, office fit-out, and full renovation & remodeling for apartments and villas.',
    tag: 'Services',
  },
  {
    question: 'Do you offer AC dust and coil cleaning?',
    answer:
      'Yes, we have dedicated services for AC Dust Cleaning and AC Coil Cleaning. These focus on deep cleaning indoor units, vents, and coils to improve cooling performance, air quality, and energy efficiency.',
    tag: 'AC',
  },
  {
    question: 'How can I book a free consultancy?',
    answer:
      'You can book a free consultancy by clicking the “Book Your Free Consultancy” button in the navbar, using the WhatsApp or Call buttons on the right bottom corner, or by filling the contact form in the “Get In Touch” section on the homepage.',
    tag: 'Booking',
  },
  {
    question: 'Which areas do you serve?',
    answer:
      'We primarily serve Dubai and UAE. For specific locations or large projects, you can contact us via WhatsApp or phone to confirm availability.',
    tag: 'Coverage',
  },
  {
    question: 'Can you handle full apartment or villa renovation?',
    answer:
      'Yes, we offer complete Apartment Renovation & Remodeling and Villa Renovation & Remodeling services, including design, planning, MEP, finishing, and project management to deliver a turnkey solution.',
    tag: 'Renovation',
  },
  {
    question: 'How can I get a quotation?',
    answer:
      'You can request a quotation by contacting us on WhatsApp, calling directly, or submitting your details through the contact / Get In Touch section. Our team will ask for basic details (location, type of service, preferred time) and then share an estimate or schedule a visit.',
    tag: 'Quote',
  },
];

const FloatingAIHelper: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeQA, setActiveQA] = useState<QAItem | null>(PRESET_QA[0]);

  return (
    <>
      {/* Floating AI button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? 'Close Aqsa Tech assistant' : 'Open Aqsa Tech assistant'}
        className="fixed right-4 bottom-24 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-brand-blue text-white shadow-[0_10px_30px_rgba(15,23,42,0.45)] hover:shadow-[0_16px_40px_rgba(15,23,42,0.6)] hover:-translate-y-0.5 transition-all duration-300"
      >
        {isOpen ? <X className="h-5 w-5" /> : <Sparkles className="h-5 w-5" />}
      </button>

      {/* AI helper panel */}
      {isOpen && (
        <div className="fixed right-4 bottom-40 z-40 w-80 max-w-[90vw] rounded-2xl bg-white shadow-[0_18px_45px_rgba(15,23,42,0.25)] border border-gray-200 overflow-hidden">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-100 bg-gradient-to-r from-brand-blue/10 via-white to-brand-blue/5">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-blue text-white">
              <MessageCircle className="h-4 w-4" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-semibold text-gray-900">Aqsa Tech Assistant</span>
              <span className="text-[10px] text-gray-500">Instant answers about services & booking</span>
            </div>
          </div>

          <div className="max-h-80 overflow-y-auto px-4 py-3 space-y-3">
            <div className="space-y-1">
              <p className="text-[11px] font-medium text-gray-700">Popular questions</p>
              <div className="flex flex-wrap gap-1.5">
                {PRESET_QA.map((item, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveQA(item)}
                    className={`px-2.5 py-1 rounded-full border text-[10px] transition-colors ${
                      activeQA?.question === item.question
                        ? 'bg-brand-blue text-white border-brand-blue'
                        : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100'
                    }`}
                  >
                    {item.tag ?? item.question}
                  </button>
                ))}
              </div>
            </div>

            {activeQA && (
              <div className="mt-2 space-y-1.5">
                <p className="text-[11px] font-semibold text-gray-900">Q: {activeQA.question}</p>
                <p className="text-[11px] leading-relaxed text-gray-700">A: {activeQA.answer}</p>
              </div>
            )}

            <p className="mt-2 text-[10px] text-gray-500">
              For more specific questions, you can chat with us directly on WhatsApp or call using the buttons on the
              right.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingAIHelper;


