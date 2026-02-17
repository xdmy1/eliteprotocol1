import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const glowY1 = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const glowY2 = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);

  const headingWords1 = ['Cultivate', 'the'];
  const headingWords2 = ['Art', 'of', 'Presence'];

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-24"
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
          background: 'radial-gradient(ellipse at top right, rgba(20, 40, 90, 0.4) 0%, transparent 60%)',
        }}
      />
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          y: glowY2,
          background: 'radial-gradient(ellipse at bottom left, rgba(211,182,127,0.03) 0%, transparent 50%)',
        }}
      />

      {/* Bottom gradient fade into next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none z-10"
        style={{
          background: 'linear-gradient(to bottom, transparent, #EDE0CE)',
        }}
      />

      {/* Content */}
      <div className="relative z-20 max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-20 w-full py-16 pb-32 sm:py-32 sm:pb-48">
        <div className="max-w-6xl mx-auto">
          {/* Main heading */}
          <div>
            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6 inline-block"
            >
              <span
                className="tracking-[0.3em] text-[10px] font-medium uppercase"
                style={{ color: 'var(--primary)' }}
              >
                Elite Protocol — Institute of Etiquette, Image & Presence
              </span>
            </motion.div>

            <h1 className="mb-8 leading-[1.05] tracking-[-0.02em]" style={{ fontFamily: 'Cormorant, serif' }}>
              {/* Line 1: "Cultivate the" */}
              <span className="block font-light text-[clamp(3.5rem,7vw,6.5rem)]" style={{ color: '#FFFFFF' }}>
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
              {/* Line 2: "Art of Presence" — gold gradient text */}
              <span
                className="block font-normal text-[clamp(4rem,8vw,7.5rem)] mt-1"
                style={{
                  background: 'linear-gradient(135deg, #B89A5D, #D3B67F, #E0C9A0, #D3B67F)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
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
              className="max-w-2xl mb-10 sm:mb-16"
            >
              <p className="text-base leading-[1.8] font-light" style={{ color: 'rgba(176, 189, 214, 0.9)' }}>
                A comprehensive approach to personal refinement. We work with discerning individuals to develop authentic presence, impeccable etiquette, and lasting confidence.
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
                  color: '#0A1432',
                }}
              >
                SCHEDULE CONSULTATION
              </motion.button>

              <motion.button
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-11 py-4 text-[10px] tracking-[0.2em] font-light transition-all duration-300 border"
                style={{
                  color: 'rgba(255,255,255,0.7)',
                  borderColor: 'rgba(211, 182, 127, 0.3)',
                }}
              >
                VIEW SERVICES
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
