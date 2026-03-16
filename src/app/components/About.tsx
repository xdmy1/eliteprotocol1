import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { useCountUp } from '../hooks/useCountUp';
import { GoldLine } from './animations/GoldLine';
import { SectionReveal } from './animations/SectionReveal';
import { useTranslation } from '../i18n/LanguageContext';

const statValues = [
  { value: 15, suffix: '' },
  { value: 2000, suffix: '' },
  { value: 98, suffix: '%' },
  { value: 50, suffix: '+' },
];

function AboutStatCounter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { ref, formatted } = useCountUp({ end: value, suffix, duration: 2000 });

  return (
    <div ref={ref} className="text-center">
      <div
        className="text-4xl mb-3 font-light"
        style={{ fontFamily: 'Cinzel, serif', color: 'var(--primary)' }}
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

function PrincipleCard({ principle, index }: { principle: { title: string; desc: string }; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{
        duration: 0.6,
        delay: (index % 2) * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -4,
        boxShadow: '0 8px 40px rgba(211,182,127,0.08)',
      }}
      className="p-10 border"
      style={{
        backgroundColor: 'var(--card)',
        borderColor: 'var(--border-subtle)',
      }}
    >
      <GoldLine className="mb-6" width="2rem" />
      <h4
        className="text-xl mb-4 font-bold"
        style={{ fontFamily: 'Cinzel, serif', color: 'var(--text-heading)' }}
      >
        {principle.title}
      </h4>
      <p
        className="text-sm leading-relaxed font-light"
        style={{ color: 'var(--text-body)' }}
      >
        {principle.desc}
      </p>
    </motion.div>
  );
}

export function About() {
  const { t, tRaw } = useTranslation();

  const story = tRaw('about.story') as string[];
  const statsLabels = tRaw('about.stats') as { label: string }[];
  const principles = tRaw('about.principles') as { title: string; desc: string }[];
  const certifications = tRaw('about.certifications') as string[];

  return (
    <section
      id="about"
      className="py-32 relative overflow-hidden section-beige"
      style={{ backgroundColor: '#EDE0CE' }}
    >
      <div className="max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-20">
        {/* Section Header */}
        <SectionReveal className="mb-24 max-w-4xl">
          <div className="mb-6 inline-block">
            <span
              className="tracking-[0.3em] text-[10px] font-medium uppercase"
              style={{ color: 'var(--primary)' }}
            >
              {t('about.tag')}
            </span>
          </div>
          <GoldLine className="mb-6" width="3rem" />
          <h2
            className="text-[clamp(2.5rem,5vw,4.5rem)] mb-6 font-light leading-[1.15] tracking-[-0.01em]"
            style={{ fontFamily: 'Cinzel, serif' }}
          >
            <span style={{ color: 'var(--text-heading)' }}>{t('about.headingLine1')}</span>
          </h2>
        </SectionReveal>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start mb-32">
          <div className="space-y-8">
            {story.map((paragraph, i) => (
              <SectionReveal key={i} delay={i * 0.1}>
                <p className="text-base leading-[1.8] font-light" style={{ color: 'var(--text-body)' }}>
                  {paragraph}
                </p>
              </SectionReveal>
            ))}
            <SectionReveal delay={0.4}>
              <div className="pt-6">
                <motion.button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="text-[10px] tracking-[0.2em] font-medium transition-colors duration-300 border-b pb-1"
                  style={{
                    color: 'var(--text-heading)',
                    borderColor: 'var(--border)',
                  }}
                >
                  {t('about.cta')}
                </motion.button>
              </div>
            </SectionReveal>
          </div>

          <SectionReveal delay={0.2}>
            <div
              className="relative aspect-[4/5] border"
              style={{
                backgroundColor: 'var(--card)',
                borderColor: 'var(--border-subtle)',
              }}
            />
          </SectionReveal>
        </div>

        {/* Stats */}
        <div
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-32 py-20 border-y"
          style={{ borderColor: 'var(--border)' }}
        >
          {statValues.map((stat, index) => (
            <AboutStatCounter
              key={index}
              value={stat.value}
              suffix={stat.suffix}
              label={statsLabels[index]?.label ?? ''}
            />
          ))}
        </div>

        {/* Values */}
        <div className="max-w-5xl mx-auto">
          <SectionReveal className="mb-20">
            <h3
              className="text-3xl mb-6 font-light"
              style={{ fontFamily: 'Cinzel, serif', color: 'var(--text-heading)' }}
            >
              {t('about.principlesHeading')}
            </h3>
            <p
              className="text-base font-light leading-relaxed max-w-2xl"
              style={{ color: 'var(--text-body)' }}
            >
              {t('about.principlesDescription')}
            </p>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16">
            {principles.map((value, index) => (
              <PrincipleCard key={index} principle={value} index={index} />
            ))}
          </div>
        </div>

        {/* Certifications */}
        <SectionReveal className="mt-32 text-center max-w-5xl mx-auto pt-20 border-t" delay={0.2}>
          <div style={{ borderColor: 'var(--border)' }}>
            <h3
              className="text-[11px] mb-10 tracking-[0.2em] font-medium"
              style={{ color: 'var(--text-heading)' }}
            >
              {t('about.certificationsHeading')}
            </h3>
            <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 text-[10px] tracking-wider font-light" style={{ color: 'var(--text-caption)' }}>
              {certifications.map((cert, i) => (
                <span key={i} className="flex items-center gap-10">
                  {i > 0 && <span style={{ color: 'var(--border)' }}>&bull;</span>}
                  <span className="transition-colors duration-300">{cert}</span>
                </span>
              ))}
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
