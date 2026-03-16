import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Pricing } from './components/Pricing';
import { Reviews } from './components/Reviews';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { useTranslation, useLocale } from './i18n/LanguageContext';
import type { Locale } from './i18n/translations';
import logoFull from '../assets/b220aa233b66a602732d8b14f5aaaaf1f6f9c372.png';

const navLinkIds = ['home', 'about', 'services', 'pricing'] as const;
const navLinkKeys: Record<typeof navLinkIds[number], string> = {
  home: 'nav.home',
  about: 'nav.philosophy',
  services: 'nav.services',
  pricing: 'nav.investment',
};

const locales: Locale[] = ['ro', 'en', 'ru'];

function LanguageSwitcher({ className = '' }: { className?: string }) {
  const { locale, setLocale } = useLocale();

  return (
    <div className={`flex items-center gap-2 text-[10px] tracking-[0.2em] ${className}`}>
      {locales.map((l, i) => (
        <span key={l} className="flex items-center gap-2">
          {i > 0 && (
            <span style={{ color: 'var(--nav-text)', opacity: 0.3 }}>|</span>
          )}
          <button
            onClick={() => setLocale(l)}
            className="transition-colors duration-200 uppercase"
            style={{
              color: locale === l ? 'var(--primary)' : 'var(--nav-text)',
              fontWeight: locale === l ? 500 : 300,
            }}
          >
            {l.toUpperCase()}
          </button>
        </span>
      ))}
    </div>
  );
}

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { t } = useTranslation();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, sans-serif' }}>
      {/* Navigation */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
        style={{
          backgroundColor: 'var(--nav-bg)',
          borderColor: 'var(--border)',
        }}
      >
        <div className="max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-20">
          <div className="flex items-center justify-between h-20 sm:h-24">
            {/* Logo */}
            <div
              className="flex items-center h-7 sm:h-9"
              style={{
                background: 'linear-gradient(135deg, #B89A5D, #D3B67F, #E0C9A0, #D3B67F)',
                WebkitMaskImage: `url(${logoFull})`,
                WebkitMaskSize: 'contain',
                WebkitMaskRepeat: 'no-repeat',
                WebkitMaskPosition: 'left center',
                maskImage: `url(${logoFull})`,
                maskSize: 'contain',
                maskRepeat: 'no-repeat',
                maskPosition: 'left center',
                width: '170px',
              }}
            />

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-16 text-[10px] tracking-[0.2em] font-normal">
              {navLinkIds.map((id) => (
                <motion.button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className="relative py-1"
                  style={{ color: activeSection === id ? 'var(--primary)' : 'var(--nav-text)' }}
                  whileHover={{ y: -1 }}
                  transition={{ duration: 0.2 }}
                >
                  {t(navLinkKeys[id])}
                  {activeSection === id && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 right-0 h-px"
                      style={{ backgroundColor: 'var(--primary)' }}
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                </motion.button>
              ))}

              <LanguageSwitcher />

              <motion.button
                onClick={() => scrollToSection('contact')}
                className="relative px-9 py-3.5 text-[10px] tracking-[0.2em] overflow-hidden"
                style={{
                  backgroundColor: 'var(--primary)',
                  color: '#222636',
                }}
                whileHover={{ scale: 1.03, boxShadow: '0 0 25px rgba(211,182,127,0.3)' }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              >
                {t('nav.contact')}
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="flex items-center justify-center w-10 h-10 md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{ color: 'var(--text-heading)' }}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait" initial={false}>
                {mobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={20} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={20} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu — fullscreen overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 top-20 md:hidden"
              style={{ backgroundColor: 'rgba(28, 31, 45, 0.97)' }}
            >
              <div className="flex flex-col items-center justify-center h-full px-6 -mt-10">
                {navLinkIds.map((id, i) => (
                  <motion.button
                    key={id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3, delay: i * 0.06 }}
                    onClick={() => scrollToSection(id)}
                    className="block py-5 text-[13px] tracking-[0.3em] font-light"
                    style={{
                      color: activeSection === id ? 'var(--primary)' : '#8aabb5',
                    }}
                  >
                    {t(navLinkKeys[id])}
                  </motion.button>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, delay: navLinkIds.length * 0.06 }}
                  className="mt-8"
                >
                  <LanguageSwitcher />
                </motion.div>

                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, delay: (navLinkIds.length + 1) * 0.06 }}
                  onClick={() => scrollToSection('contact')}
                  whileTap={{ scale: 0.97 }}
                  className="mt-10 px-14 py-4 text-[11px] tracking-[0.25em]"
                  style={{
                    backgroundColor: 'var(--primary)',
                    color: '#222636',
                  }}
                >
                  {t('nav.contact')}
                </motion.button>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="absolute bottom-12 left-0 right-0 text-center"
                >
                  <p className="text-[9px] tracking-[0.2em] font-light" style={{ color: '#4E5874' }}>
                    {t('footer.mobileMenuLabel')}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content */}
      <main>
        <Hero />
        <Services />
        <Pricing />
        <Reviews />
        <About />
        <Contact />
      </main>

      {/* Footer */}
      <footer
        className="border-t py-24"
        style={{
          backgroundColor: 'var(--background-footer)',
          borderColor: 'rgba(211, 182, 127, 0.08)',
        }}
      >
        <div className="max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-20 mb-20">
            <div className="col-span-1 md:col-span-5">
              <div
                className="h-12 mb-10"
                style={{
                  background: 'linear-gradient(135deg, #B89A5D, #D3B67F, #E0C9A0, #D3B67F)',
                  WebkitMaskImage: `url(${logoFull})`,
                  WebkitMaskSize: 'contain',
                  WebkitMaskRepeat: 'no-repeat',
                  WebkitMaskPosition: 'left center',
                  maskImage: `url(${logoFull})`,
                  maskSize: 'contain',
                  maskRepeat: 'no-repeat',
                  maskPosition: 'left center',
                  width: '260px',
                }}
              />
              <p className="text-[#c8e4ea] text-sm leading-relaxed mb-10 font-light">
                {t('footer.tagline')}
              </p>
              <p className="text-[#8aabb5] text-xs leading-relaxed max-w-md font-light">
                {t('footer.description')}
              </p>
            </div>
            <div className="col-span-1 md:col-span-3">
              <h4 className="text-[#E0C9A0] mb-10 text-[10px] tracking-[0.2em] font-medium">{t('footer.navigate')}</h4>
              <ul className="space-y-5 text-xs font-light">
                <li><button onClick={() => scrollToSection('services')} className="text-[#8aabb5] hover:text-[#E0C9A0] transition-colors duration-300">{t('footer.navServices')}</button></li>
                <li><button onClick={() => scrollToSection('pricing')} className="text-[#8aabb5] hover:text-[#E0C9A0] transition-colors duration-300">{t('footer.navInvestment')}</button></li>
                <li><button onClick={() => scrollToSection('about')} className="text-[#8aabb5] hover:text-[#E0C9A0] transition-colors duration-300">{t('footer.navPhilosophy')}</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="text-[#8aabb5] hover:text-[#E0C9A0] transition-colors duration-300">{t('footer.navContact')}</button></li>
              </ul>
            </div>
            <div className="col-span-1 md:col-span-4">
              <h4 className="text-[#E0C9A0] mb-10 text-[10px] tracking-[0.2em] font-medium">{t('footer.connect')}</h4>
              <ul className="space-y-5 text-xs text-[#8aabb5] font-light">
                <li>contact@eliteprotocol.com</li>
                <li>+1 (555) 123-4567</li>
                <li className="pt-4">432 Park Avenue<br/>New York, NY 10022</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-[#D3B67F]/10 pt-10 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] text-[#607880] font-light">
            <p>{t('footer.copyright')}</p>
            <div className="flex gap-10 text-[10px]">
              <button className="hover:text-[#8aabb5] transition-colors duration-300">{t('footer.privacy')}</button>
              <button className="hover:text-[#8aabb5] transition-colors duration-300">{t('footer.terms')}</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
