'use client';

import { useState } from 'react';
import Link from 'next/link';
import { translations, Language } from '../../lib/translations';
import Navbar from '../../components/Navbar';

export default function ContactPage() {
  const [lang, setLang] = useState<Language>('en');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const t = translations[lang];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Error al enviar el mensaje');
      }

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Error al enviar el mensaje');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <Navbar lang={lang} setLang={setLang} translations={t} />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-700 text-white pt-16">
        <div className="container mx-auto px-4 py-12 max-w-2xl">
          
          <div className="mb-12">
            <Link 
              href="/" 
              className="text-blue-400 hover:text-blue-300 transition-colors mb-4 inline-block"
            >
              ← {lang === 'en' ? 'Back to Home' : 'Volver al inicio'}
            </Link>
            
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {lang === 'en' ? 'Contact Me' : 'Contáctame'}
            </h1>
            <p className="text-xl text-slate-300">
              {lang === 'en' 
                ? "Have a project in mind? Let's talk!" 
                : '¿Tienes un proyecto en mente? ¡Hablemos!'}
            </p>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-8 backdrop-blur-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                  {lang === 'en' ? 'Name' : 'Nombre'}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                  placeholder={lang === 'en' ? 'Your name' : 'Tu nombre'}
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                  placeholder="your@email.com"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                  {lang === 'en' ? 'Message' : 'Mensaje'}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white resize-none"
                  placeholder={lang === 'en' ? 'Your message...' : 'Tu mensaje...'}
                />
              </div>

              {/* Status Messages */}
              {status === 'success' && (
                <div className="bg-green-500/20 border border-green-500 text-green-400 px-4 py-3 rounded-lg">
                  {lang === 'en' 
                    ? '✓ Message sent successfully! I will get back to you soon.' 
                    : '✓ ¡Mensaje enviado con éxito! Te responderé pronto.'}
                </div>
              )}

              {status === 'error' && (
                <div className="bg-red-500/20 border border-red-500 text-red-400 px-4 py-3 rounded-lg">
                  ✗ {errorMessage}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-slate-600 disabled:cursor-not-allowed text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                {status === 'loading' 
                  ? (lang === 'en' ? 'Sending...' : 'Enviando...') 
                  : (lang === 'en' ? 'Send Message' : 'Enviar Mensaje')}
              </button>
            </form>

            {/* Alternative Contact */}
            <div className="mt-8 pt-8 border-t border-slate-700">
              <p className="text-slate-400 text-center">
                {lang === 'en' ? 'Or email me directly at:' : 'O escríbeme directamente a:'}
              </p>
              <a 
                href="mailto:hello@amoniz.dev" 
                className="block text-center text-blue-400 hover:text-blue-300 font-semibold mt-2"
              >
                hello@amoniz.dev
              </a>
            </div>
          </div>

        </div>
      </main>
    </>
  );
}