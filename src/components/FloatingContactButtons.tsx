import React, { useMemo } from 'react';
import { Phone, MessageCircle } from 'lucide-react';

const PHONE_NUMBER = '+971525010132';
const WHATSAPP_NUMBER = '971525010132';
const WHATSAPP_MESSAGE = 'Hi Aqsa Tech, I would like to book a service or get a free consultancy.';

const FloatingContactButtons: React.FC = React.memo(() => {
  const whatsappUrl = useMemo(
    () => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`,
    []
  );

  return (
    <div className="fixed right-4 bottom-4 z-40 flex flex-col gap-3 items-end">
      {/* WhatsApp Icon */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group relative flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_rgba(34,197,94,0.45)] hover:shadow-[0_16px_40px_rgba(34,197,94,0.6)] transition-all duration-300 hover:-translate-y-0.5"
      >
        <MessageCircle className="h-6 w-6" />
      </a>

      {/* Call Icon */}
      <a
        href={`tel:${PHONE_NUMBER}`}
        aria-label="Call Aqsa Tech"
        className="group relative flex h-12 w-12 items-center justify-center rounded-full bg-[#111827] text-white shadow-[0_10px_30px_rgba(17,24,39,0.55)] hover:shadow-[0_16px_40px_rgba(17,24,39,0.75)] hover:bg-black transition-all duration-300 hover:-translate-y-1 hover:scale-110 border-2 border-white/20"
      >
        <Phone className="h-6 w-6 stroke-[2.5]" />
      </a>
    </div>
  );
});

FloatingContactButtons.displayName = 'FloatingContactButtons';

export default FloatingContactButtons;


