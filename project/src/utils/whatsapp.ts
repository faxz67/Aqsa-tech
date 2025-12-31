/**
 * Generate WhatsApp URL with pre-filled message
 * Compatible with WhatsApp Desktop and Mobile
 * @param phoneNumber - Phone number in international format (without +)
 * @param message - Message to pre-fill
 * @returns WhatsApp URL
 */
export function generateWhatsAppUrl(phoneNumber: string, message: string): string {
  // Remove any non-digit characters from phone number
  const cleanPhone = phoneNumber.replace(/\D/g, '');
  
  // Encode the message properly for URL
  // Replace newlines with %0A and encode special characters
  const encodedMessage = encodeURIComponent(message)
    .replace(/'/g, '%27')
    .replace(/\(/g, '%28')
    .replace(/\)/g, '%29');
  
  // Use wa.me format which works for both Desktop and Mobile
  return `https://wa.me/${cleanPhone}?text=${encodedMessage}`;
}

/**
 * WhatsApp phone number constant
 */
export const WHATSAPP_PHONE = '971525010132';

