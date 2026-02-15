import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { useCountUp } from '../hooks/useCountUp';

function StatCounter({ end, suffix, label }: { end: number; suffix: string; label: string }) {
  const { ref, formatted } = useCountUp({ end, suffix, duration: 2200 });

  return (
    <div ref={ref}>
      <div
        className="text-3xl font-light mb-2"
        style={{ fontFamily: 'Cormorant, serif', color: 'var(--primary-bright)' }}
      >
        {formatted}
      </div>
      <div
        className="text-[10px] tracking-[0.15em] font-light uppercase leading-relaxed"
        style={{ color: 'var(--text-caption)' }}
      >
        {label}
      </div>
    </div>
  );
}

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
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24"
      style={{
        background: 'linear-gradient(to bottom, var(--background-hero-from), var(--background-hero-to))',
      }}
    >
      {/* Parallax gold glow layers */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          y: glowY1,
          background: 'radial-gradient(ellipse at top right, rgba(184,147,90,0.08) 0%, transparent 60%)',
        }}
      />
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          y: glowY2,
          background: 'radial-gradient(ellipse at bottom left, rgba(184,147,90,0.04) 0%, transparent 50%)',
        }}
      />

      {/* Content */}
      <div className="relative z-20 max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-20 w-full py-32">
        <div className="max-w-6xl mx-auto">
          {/* Main heading */}
          <div className="mb-16">
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
                Elite Protocol
              </span>
            </motion.div>

            <h1 className="mb-8 leading-[1.05] tracking-[-0.02em]" style={{ fontFamily: 'Cormorant, serif' }}>
              {/* Line 1: "Cultivate the" */}
              <span className="block font-light text-[clamp(3.5rem,7vw,6.5rem)]" style={{ color: 'var(--text-heading)' }}>
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
              {/* Line 2: "Art of Presence" */}
              <span className="block font-normal text-[clamp(4rem,8vw,7.5rem)] mt-1" style={{ color: 'var(--primary-bright)' }}>
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
              className="max-w-2xl mb-16"
            >
              <p className="text-base leading-[1.8] font-light" style={{ color: 'var(--text-body)' }}>
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
                  backgroundColor: 'var(--primary)',
                  color: 'var(--primary-foreground)',
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
                  color: 'var(--text-body)',
                  borderColor: 'var(--border)',
                }}
              >
                VIEW SERVICES
              </motion.button>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="mt-32 pt-16 border-t"
            style={{ borderColor: 'var(--border)' }}
          >
            <div className="grid grid-cols-3 gap-8 sm:gap-16 max-w-3xl">
              <StatCounter end={15} suffix="+" label="Years of Excellence" />
              <StatCounter end={2000} suffix="+" label="Clients Served" />
              <StatCounter end={98} suffix="%" label="Client Satisfaction" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
