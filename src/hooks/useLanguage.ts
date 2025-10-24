'use client';

import { useState, useEffect } from 'react';
import { Language } from '../lib/translations';

export function useLanguage() {
  const [lang, setLang] = useState<Language>('en');
  const [isLoaded, setIsLoaded] = useState(false);

  // Detectar idioma del navegador
  const detectBrowserLanguage = (): Language => {
    if (typeof window === 'undefined') return 'en';
    
    const browserLang = navigator.language.toLowerCase();
    
    // Si el navegador está en español, devolver 'es'
    if (browserLang.startsWith('es')) {
      return 'es';
    }
    
    // Para cualquier otro idioma, devolver 'en'
    return 'en';
  };

  // Cargar idioma al montar el componente
  useEffect(() => {
    const savedLang = localStorage.getItem('language') as Language | null;
    
    if (savedLang && (savedLang === 'en' || savedLang === 'es')) {
      // Si hay idioma guardado, usarlo
      setLang(savedLang);
    } else {
      // Si no hay idioma guardado, detectar del navegador
      const detectedLang = detectBrowserLanguage();
      setLang(detectedLang);
      localStorage.setItem('language', detectedLang);
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