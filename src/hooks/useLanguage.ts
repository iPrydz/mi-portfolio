'use client';

import { useState, useEffect } from 'react';
import { Language } from '../lib/translations';

export function useLanguage() {
  const [lang, setLang] = useState<Language>('en');
  const [isLoaded, setIsLoaded] = useState(false);

  // Cargar idioma al montar el componente
  useEffect(() => {
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang && (savedLang === 'en' || savedLang === 'es')) {
      setLang(savedLang);
    }
    setIsLoaded(true);
  }, []);

  // Guardar idioma cuando cambia
  const changeLang = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem('language', newLang);
  };

  return { lang, setLang: changeLang, isLoaded };
}