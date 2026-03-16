import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';
import { translations, type Locale } from './translations';

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

const LanguageContext = createContext<LanguageContextType>({
  locale: 'ro',
  setLocale: () => {},
});

function getInitialLocale(): Locale {
  const stored = localStorage.getItem('locale');
  if (stored && stored in translations) return stored as Locale;
  return 'ro';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(getInitialLocale);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    localStorage.setItem('locale', l);
  }, []);

  return (
    <LanguageContext.Provider value={{ locale, setLocale }}>
      {children}
    </LanguageContext.Provider>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getNestedValue(obj: any, path: string): any {
  return path.split('.').reduce((acc, key) => acc?.[key], obj);
}

export function useTranslation() {
  const { locale } = useContext(LanguageContext);
  const t = useCallback(
    (key: string) => {
      const value = getNestedValue(translations[locale], key);
      if (typeof value === 'string') return value;
      return key;
    },
    [locale],
  );

  const tRaw = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (key: string): any => {
      return getNestedValue(translations[locale], key);
    },
    [locale],
  );

  return { t, tRaw, locale };
}

export function useLocale() {
  return useContext(LanguageContext);
}
