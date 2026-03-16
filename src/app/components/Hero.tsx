import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { useTranslation } from '../i18n/LanguageContext';

export function Hero() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const glowY1 = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const glowY2 = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '12%']);

  const headingWords1 = t('hero.headingLine1').split(' ');
  const headingWords2 = t('hero.headingLine2').split(' ');

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden pt-20 sm:pt-24"
    >
      {/* Satin fabric base */}
      <div className="absolute inset-0 hero-satin-bg" />

      {/* Silk fold highlights — gentle light catching fabric */}
      <div className="absolute inset-0 hero-satin-fold-1 pointer-events-none" />
      <div className="absolute inset-0 hero-satin-fold-2 pointer-events-none" />

      {/* Faint sheen — like light gliding across silk */}
      <div className="absolute inset-0 hero-satin-sheen pointer-events-none" />

      {/* Gold warmth whisper */}
      <div className="absolute inset-0 hero-gold-whisper pointer-events-none" />

      {/* Parallax depth on scroll */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          y: glowY1,
          background: 'radial-gradient(ellipse at top right, rgba(35, 41, 82, 0.4) 0%, transparent 60%)',
        }}
      />
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          y: glowY2,
          background: 'radial-gradient(ellipse at bottom left, rgba(211,182,127,0.03) 0%, transparent 50%)',
        }}
      />

      {/* Content */}
      <div className="relative z-20 max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-20 w-full py-16 pb-24 sm:py-24 sm:pb-32 lg:py-32 lg:pb-40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left — Text (7 cols) */}
          <div className="lg:col-span-7">
            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6 inline-block"
            >
              <span
                className="tracking-[0.3em] text-[14px] font-medium uppercase"
                style={{ color: '#E0C9A0', fontFamily: 'Alesand, sans-serif' }}
              >
                {t('hero.tagline')}
              </span>
            </motion.div>

            <h1 className="mb-8 leading-[1.05] tracking-[-0.02em]" style={{ fontFamily: 'Cinzel, serif' }}>
              {/* Line 1 */}
              <span className="block font-light text-[clamp(2.5rem,5vw,4.5rem)]" style={{ color: '#F3FAFC' }}>
                {headingWords1.map((word, i) => (
                  <motion.span
                    key={`w1-${i}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + i * 0.12 }}
                    className="inline-block mr-[0.3em]"
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
              {/* Line 2 */}
              <span
                className="block font-normal text-[clamp(3rem,6vw,5.5rem)] mt-1"
                style={{ color: '#E0C9A0' }}
              >
                {headingWords2.map((word, i) => (
                  <motion.span
                    key={`w2-${i}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.64 + i * 0.12 }}
                    className="inline-block mr-[0.3em]"
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
            </h1>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="max-w-xl mb-10 sm:mb-14"
            >
              <p className="text-base leading-[1.8] font-light" style={{ color: 'rgba(243, 250, 252, 0.8)' }}>
                {t('hero.description')}
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.3 }}
              className="flex flex-wrap gap-5 items-center"
            >
              <motion.button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-11 py-4 text-[10px] tracking-[0.2em] font-medium transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, #B89A5D, #D3B67F)',
                  color: '#222636',
                }}
              >
                {t('hero.cta1')}
              </motion.button>

              <motion.button
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-11 py-4 text-[10px] tracking-[0.2em] font-light transition-all duration-300 border"
                style={{
                  color: 'rgba(243,250,252,0.7)',
                  borderColor: 'rgba(211, 182, 127, 0.3)',
                }}
              >
                {t('hero.cta2')}
              </motion.button>
            </motion.div>
          </div>

          {/* Right — Image (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative flex justify-center lg:justify-end"
          >
            <motion.div
              className="relative w-full max-w-[420px]"
              style={{ y: imgY }}
            >
              {/* Image frame */}
              <div className="relative aspect-[3/4] max-h-[520px]">
                {/* Outer border */}
                <div className="absolute -inset-3 pointer-events-none hero-img-border-outer" />
                {/* Inner border + image */}
                <div className="relative w-full h-full overflow-hidden hero-img-border">
                  <img
                    src="/hero-protocol1.jpg"
                    alt="Elite Protocol — Refined presence"
                    className="w-full h-full object-cover object-top"
                    style={{
                      filter: 'brightness(0.85) saturate(0.85)',
                    }}
                  />
                  {/* Subtle edge fade — blends into hero bg */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: `
                        linear-gradient(to right, rgba(34,38,54,0.35) 0%, transparent 18%, transparent 82%, rgba(34,38,54,0.35) 100%),
                        linear-gradient(to bottom, transparent 0%, transparent 70%, rgba(34,38,54,0.55) 100%)
                      `,
                    }}
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
