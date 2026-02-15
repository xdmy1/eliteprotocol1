import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { useCountUp } from '../hooks/useCountUp';
import { GoldLine } from './animations/GoldLine';
import { SectionReveal } from './animations/SectionReveal';

const stats = [
  { value: 15, suffix: '', label: 'Years of Excellence' },
  { value: 2000, suffix: '', label: 'Clients Transformed' },
  { value: 98, suffix: '%', label: 'Satisfaction Rate' },
  { value: 50, suffix: '+', label: 'Corporate Partners' }
];

function AboutStatCounter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { ref, formatted } = useCountUp({ end: value, suffix, duration: 2000 });

  return (
    <div ref={ref} className="text-center">
      <div
        className="text-4xl mb-3 font-light"
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

const principles = [
  {
    title: 'Excellence',
    desc: 'We maintain the highest standards in every aspect of our training, from curriculum development to individual consultation. Our commitment to excellence is reflected in our results.'
  },
  {
    title: 'Discretion',
    desc: 'Your journey with us is conducted with complete confidentiality and professionalism. We understand the importance of privacy in personal development and honor it absolutely.'
  },
  {
    title: 'Results',
    desc: 'Our proven methodologies deliver measurable transformation in presence, perception, and professional impact. We are committed to tangible outcomes that enhance your life.'
  },
  {
    title: 'Dedication',
    desc: 'We are personally invested in your success. Our relationship extends beyond program completion, with continued guidance and support as you grow.'
  }
];

function PrincipleCard({ principle, index }: { principle: typeof principles[0]; index: number }) {
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
        boxShadow: '0 8px 40px rgba(184,147,90,0.08)',
      }}
      className="p-10 border"
      style={{
        backgroundColor: 'var(--card)',
        borderColor: 'var(--border-subtle)',
      }}
    >
      <GoldLine className="mb-6" width="2rem" />
      <h4
        className="text-xl mb-4 font-light"
        style={{ fontFamily: 'Cormorant, serif', color: 'var(--text-heading)' }}
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
  return (
    <section
      id="about"
      className="py-32 relative overflow-hidden"
      style={{ backgroundColor: 'var(--background-about)' }}
    >
      <div className="max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-20">
        {/* Section Header */}
        <SectionReveal className="mb-24 max-w-4xl">
          <div className="mb-6 inline-block">
            <span
              className="tracking-[0.3em] text-[10px] font-medium uppercase"
              style={{ color: 'var(--primary)' }}
            >
              Our Philosophy
            </span>
          </div>
          <GoldLine className="mb-6" width="3rem" />
          <h2
            className="text-[clamp(2.5rem,5vw,4.5rem)] mb-6 font-light leading-[1.15] tracking-[-0.01em]"
            style={{ fontFamily: 'Cormorant, serif' }}
          >
            <span style={{ color: 'var(--text-heading)' }}>Where Refinement</span><br/>
            <span style={{ color: 'var(--primary-bright)' }}>Meets Authenticity</span>
          </h2>
        </SectionReveal>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start mb-32">
          <div className="space-y-8">
            <SectionReveal delay={0}>
              <p className="text-base leading-[1.8] font-light" style={{ color: 'var(--text-body)' }}>
                Founded in 2010, Elite Protocol was established by internationally recognized etiquette experts and image consultants with a singular mission: to bridge the gap between innate potential and polished excellence.
              </p>
            </SectionReveal>
            <SectionReveal delay={0.1}>
              <p className="text-base leading-[1.8] font-light" style={{ color: 'var(--text-body)' }}>
                What began as a boutique consultancy has evolved into a comprehensive institute, serving discerning clients from C-suite executives to emerging professionals, from social elites to global organizations seeking to elevate their teams.
              </p>
            </SectionReveal>
            <SectionReveal delay={0.2}>
              <p className="text-base leading-[1.8] font-light" style={{ color: 'var(--text-body)' }}>
                Today, we stand as the premier destination for those who understand that true success encompasses not only achievement, but the grace and confidence with which it is attained.
              </p>
            </SectionReveal>
            <SectionReveal delay={0.3}>
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
                  BEGIN YOUR JOURNEY
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
          {stats.map((stat, index) => (
            <AboutStatCounter key={index} value={stat.value} suffix={stat.suffix} label={stat.label} />
          ))}
        </div>

        {/* Values */}
        <div className="max-w-5xl mx-auto">
          <SectionReveal className="mb-20">
            <h3
              className="text-3xl mb-6 font-light"
              style={{ fontFamily: 'Cormorant, serif', color: 'var(--text-heading)' }}
            >
              Our Principles
            </h3>
            <p
              className="text-base font-light leading-relaxed max-w-2xl"
              style={{ color: 'var(--text-body)' }}
            >
              Four core values guide every program, interaction, and transformation we facilitate.
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
              ACCREDITED BY LEADING INSTITUTIONS
            </h3>
            <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 text-[10px] tracking-wider font-light" style={{ color: 'var(--text-caption)' }}>
              <span className="transition-colors duration-300">International Association of Professions Career College</span>
              <span style={{ color: 'var(--border)' }}>&bull;</span>
              <span className="transition-colors duration-300">British School of Excellence</span>
              <span style={{ color: 'var(--border)' }}>&bull;</span>
              <span className="transition-colors duration-300">Global Protocol Academy</span>
              <span style={{ color: 'var(--border)' }}>&bull;</span>
              <span className="transition-colors duration-300">Association of Image Consultants International</span>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
