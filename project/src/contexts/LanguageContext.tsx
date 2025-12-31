import React, { createContext, useContext, useState, useEffect, ReactNode, useMemo, useCallback } from 'react';
import { translations } from '../translations';

type Language = 'EN';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, params?: Record<string, string>) => string;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('EN');

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    document.documentElement.lang = 'en';
    document.documentElement.dir = 'ltr';
  }, []);

  useEffect(() => {
    document.documentElement.lang = 'en';
    document.documentElement.dir = 'ltr';
  }, [language]);

  const t = useCallback((key: string, params?: Record<string, string>): string => {
    const keys = key.split('.');
    let value: unknown = translations[language];
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = (value as Record<string, unknown>)[k];
      } else {
        value = undefined;
        break;
      }
    }
    if (typeof value === 'function') {
      // Handle function translations with multiple parameters
      if (params) {
        const paramValues = Object.values(params).map(v => {
          const num = parseFloat(v);
          return isNaN(num) ? v : num;
        });
        return (value as (...args: unknown[]) => string)(...paramValues);
      }
      return (value as (arg: string) => string)('');
    }
    if (typeof value === 'string' && params) {
      let result = value;
      Object.entries(params).forEach(([k, v]) => {
        result = result.replace(`{${k}}`, v);
      });
      return result;
    }
    return (typeof value === 'string' ? value : key);
  }, [language]);

  const isRTL = false;

  const contextValue = useMemo(() => ({
    language,
    setLanguage,
    t,
    isRTL
  }), [language, setLanguage, t]);

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};

