import { useRouter } from 'next/router';

// Default language
const DEFAULT_LOCALE = 'es';

// Helper to get translations
export const getTranslations = async (locale: string, namespace: string): Promise<Record<string, string>> => {
  try {
    // In a real implementation, this might use a more sophisticated approach
    // For now, we'll just fetch the JSON files directly
    const translations = await import(`../public/locales/${locale}/${namespace}.json`);
    return translations.default || translations;
  } catch (error) {
    console.error(`Failed to load translations for ${locale}/${namespace}`, error);
    
    // Fallback to default locale
    if (locale !== DEFAULT_LOCALE) {
      return getTranslations(DEFAULT_LOCALE, namespace);
    }
    
    // If even the default locale fails, return an empty object
    return {};
  }
};

// Hook to use translations in components (client-side)
export const useTranslations = (namespace: string) => {
  // In a full implementation this would use the user's selected language
  // For now, we'll just use the default
  const locale = DEFAULT_LOCALE;
  
  // This is a simplified version - in a real app, you would use a more robust solution
  // like next-i18next or similar
  const t = (key: string) => {
    // For now, we'll implement a simple client-side cache
    // In a real implementation, you'd use a proper state management solution
    if (typeof window === 'undefined') return key;
    
    // @ts-ignore - this is a simplified implementation
    if (!window.__translations) window.__translations = {};
    // @ts-ignore
    if (!window.__translations[`${locale}/${namespace}`]) {
      // Load translations synchronously for simplicity
      fetch(`/locales/${locale}/${namespace}.json`)
        .then(res => res.json())
        .then(data => {
          // @ts-ignore
          window.__translations[`${locale}/${namespace}`] = data;
        })
        .catch(err => {
          console.error(`Failed to load translations for ${locale}/${namespace}`, err);
        });
      
      return key;
    }
    
    // @ts-ignore
    return window.__translations[`${locale}/${namespace}`][key] || key;
  };
  
  return { t };
}; 