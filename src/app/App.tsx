import { useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ThemeProvider, useTheme } from './hooks/useTheme';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Pricing } from './components/Pricing';
import { About } from './components/About';
import { Contact } from './components/Contact';
import logoFull from '../assets/b220aa233b66a602732d8b14f5aaaaf1f6f9c372.png';

function AppContent() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
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
          <div className="flex items-center justify-between h-24">
            {/* Logo */}
            <div className="flex items-center">
              <img
                src={logoFull}
                alt="Elite Protocol"
                className="h-9 object-contain opacity-90"
                style={{ filter: 'var(--logo-filter)' }}
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-16 text-[10px] tracking-[0.2em] font-normal">
              <button
                onClick={() => scrollToSection('home')}
                className="transition-colors duration-300"
                style={{ color: 'var(--primary)' }}
              >
                HOME
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="hover:opacity-100 transition-colors duration-300"
                style={{ color: 'var(--nav-text)' }}
              >
                SERVICES
              </button>
              <button
                onClick={() => scrollToSection('pricing')}
                className="hover:opacity-100 transition-colors duration-300"
                style={{ color: 'var(--nav-text)' }}
              >
                INVESTMENT
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="hover:opacity-100 transition-colors duration-300"
                style={{ color: 'var(--nav-text)' }}
              >
                PHILOSOPHY
              </button>

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="relative w-9 h-9 flex items-center justify-center rounded-full transition-colors duration-300"
                style={{
                  border: '1px solid var(--border)',
                  color: 'var(--primary)',
                }}
                aria-label="Toggle theme"
              >
                <AnimatePresence mode="wait" initial={false}>
                  {theme === 'light' ? (
                    <motion.div
                      key="sun"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <Sun size={14} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="moon"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <Moon size={14} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>

              <motion.button
                onClick={() => scrollToSection('contact')}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-9 py-3.5 text-[10px] tracking-[0.2em] transition-all duration-300"
                style={{
                  backgroundColor: 'var(--primary)',
                  color: 'var(--primary-foreground)',
                }}
              >
                CONTACT
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-4 md:hidden">
              <button
                onClick={toggleTheme}
                className="relative w-9 h-9 flex items-center justify-center rounded-full transition-colors duration-300"
                style={{
                  border: '1px solid var(--border)',
                  color: 'var(--primary)',
                }}
                aria-label="Toggle theme"
              >
                <AnimatePresence mode="wait" initial={false}>
                  {theme === 'light' ? (
                    <motion.div
                      key="sun-m"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <Sun size={14} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="moon-m"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <Moon size={14} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                style={{ color: 'var(--text-heading)' }}
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="md:hidden overflow-hidden border-t"
              style={{
                backgroundColor: 'var(--card)',
                borderColor: 'var(--border)',
              }}
            >
              <div className="px-6 sm:px-12 py-10 space-y-8 text-[10px] tracking-[0.2em] font-normal">
                <button onClick={() => scrollToSection('home')} className="block w-full text-left" style={{ color: 'var(--primary)' }}>
                  HOME
                </button>
                <button onClick={() => scrollToSection('services')} className="block w-full text-left" style={{ color: 'var(--nav-text)' }}>
                  SERVICES
                </button>
                <button onClick={() => scrollToSection('pricing')} className="block w-full text-left" style={{ color: 'var(--nav-text)' }}>
                  INVESTMENT
                </button>
                <button onClick={() => scrollToSection('about')} className="block w-full text-left" style={{ color: 'var(--nav-text)' }}>
                  PHILOSOPHY
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="w-full text-center mt-6 px-9 py-4 text-[10px] tracking-[0.2em] transition-all duration-300"
                  style={{
                    backgroundColor: 'var(--primary)',
                    color: 'var(--primary-foreground)',
                  }}
                >
                  CONTACT
                </button>
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
        <About />
        <Contact />
      </main>

      {/* Footer — always dark */}
      <footer
        className="border-t py-24"
        style={{
          backgroundColor: 'var(--background-footer)',
          borderColor: 'rgba(201, 168, 76, 0.08)',
        }}
      >
        <div className="max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-20 mb-20">
            <div className="col-span-1 md:col-span-5">
              <img src={logoFull} alt="Elite Protocol" className="h-12 mb-10 object-contain brightness-0 invert opacity-90" />
              <p className="text-[#A8B2CC] text-sm leading-relaxed mb-10 font-light">
                Institute of Etiquette, Image & Presence
              </p>
              <p className="text-[#7A86A8] text-xs leading-relaxed max-w-md font-light">
                Elevating individuals through the mastery of etiquette, refined image, and commanding presence.
              </p>
            </div>
            <div className="col-span-1 md:col-span-3">
              <h4 className="text-[#C9A84C] mb-10 text-[10px] tracking-[0.2em] font-medium">NAVIGATE</h4>
              <ul className="space-y-5 text-xs font-light">
                <li><button onClick={() => scrollToSection('services')} className="text-[#7A86A8] hover:text-[#E8ECF5] transition-colors duration-300">Services</button></li>
                <li><button onClick={() => scrollToSection('pricing')} className="text-[#7A86A8] hover:text-[#E8ECF5] transition-colors duration-300">Investment</button></li>
                <li><button onClick={() => scrollToSection('about')} className="text-[#7A86A8] hover:text-[#E8ECF5] transition-colors duration-300">Philosophy</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="text-[#7A86A8] hover:text-[#E8ECF5] transition-colors duration-300">Contact</button></li>
              </ul>
            </div>
            <div className="col-span-1 md:col-span-4">
              <h4 className="text-[#C9A84C] mb-10 text-[10px] tracking-[0.2em] font-medium">CONNECT</h4>
              <ul className="space-y-5 text-xs text-[#7A86A8] font-light">
                <li>contact@eliteprotocol.com</li>
                <li>+1 (555) 123-4567</li>
                <li className="pt-4">432 Park Avenue<br/>New York, NY 10022</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-[#C9A84C]/10 pt-10 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] text-[#4E5874] font-light">
            <p>&copy; 2026 Elite Protocol. All rights reserved.</p>
            <div className="flex gap-10 text-[10px]">
              <button className="hover:text-[#7A86A8] transition-colors duration-300">Privacy</button>
              <button className="hover:text-[#7A86A8] transition-colors duration-300">Terms</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
