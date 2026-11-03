import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import type { ReactNode } from 'react';
import { translations } from '../utils/translations';
import type { Language } from '../utils/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    const saved = localStorage.getItem('logiaspace-lang') as Language | null;
    if (saved && (saved === 'en' || saved === 'fr')) {
      setLanguageState(saved);
    }
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('logiaspace-lang', lang);
    document.documentElement.lang = lang;
  }, []);

  const t = useCallback((key: string): string => {
    // Support dot notation e.g. "common.home" or "nav.home"
    const parts = key.split('.');
    let value: any = translations[language];
    for (const part of parts) {
      if (value == null || typeof value !== 'object') return key;
      value = value[part];
    }
    return typeof value === 'string' ? value : key;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }
  return ctx;
}

export default LanguageContext;
