import { useMemo } from 'react'
import { services as baseServices } from '../data/services'

export const useTranslatedServices = () => {
  const translatedServices = useMemo(() => {
    // Always return English services since we only have EN now
    return baseServices;
  }, []);

  return { services: translatedServices }
}
