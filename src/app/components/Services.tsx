import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { GoldLine } from './animations/GoldLine';
import { SectionReveal } from './animations/SectionReveal';

const services = [
  {
    number: '01',
    title: 'Personal Etiquette',
    description: 'Master the subtleties of refined behavior and social graces that distinguish excellence.',
    features: ['Dining etiquette', 'Social protocols', 'Business manners']
  },
  {
    number: '02',
    title: 'Image Consultation',
    description: 'Develop a powerful personal brand through strategic style and authentic presence.',
    features: ['Wardrobe analysis', 'Personal styling', 'Brand development']
  },
  {
    number: '03',
    title: 'Executive Presence',
    description: 'Command authority with refined communication and strategic leadership gravitas.',
    features: ['Communication skills', 'Body language', 'Leadership presence']
  },
  {
    number: '04',
    title: 'Corporate Training',
    description: 'Transform your organization with comprehensive excellence and etiquette programs.',
    features: ['Team workshops', 'Custom curriculum', 'Ongoing support']
  },
  {
    number: '05',
    title: 'International Protocol',
    description: 'Navigate global business with cultural intelligence and diplomatic finesse.',
    features: ['Cultural awareness', 'International customs', 'Global etiquette']
  },
  {
    number: '06',
    title: 'Special Occasions',
    description: 'Specialized preparation for life\'s most significant and memorable moments.',
    features: ['Event coaching', 'Speech preparation', 'Confidence building']
  }
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{
        duration: 0.6,
        delay: (index % 3) * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -4,
        boxShadow: '0 8px 40px rgba(211,182,127,0.1)',
      }}
      className="group p-10 border transition-colors duration-500"
      style={{
        backgroundColor: 'var(--card)',
        borderColor: 'var(--border-subtle)',
      }}
    >
      {/* Number */}
      <div
        className="text-xs tracking-widest font-light mb-8"
        style={{ color: 'var(--primary)' }}
      >
        {service.number}
      </div>

      {/* Title */}
      <h3
        className="text-2xl font-bold mb-4 transition-colors duration-500"
        style={{ fontFamily: 'Cormorant, serif', color: 'var(--text-heading)' }}
      >
        {service.title}
      </h3>

      {/* Description */}
      <p
        className="text-sm leading-relaxed font-light mb-8"
        style={{ color: 'var(--text-body)' }}
      >
        {service.description}
      </p>

      {/* Features */}
      <ul className="space-y-3 mb-8">
        {service.features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-3 text-xs font-light" style={{ color: 'var(--text-caption)' }}>
            <span style={{ color: 'var(--primary)' }} className="mt-0.5">&mdash;</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {/* Link */}
      <button
        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        className="text-[10px] tracking-[0.2em] font-light transition-colors duration-300"
        style={{ color: 'var(--text-caption)' }}
      >
        LEARN MORE &rarr;
      </button>
    </motion.div>
  );
}

export function Services() {
  return (
    <section
      id="services"
      className="py-32 relative overflow-hidden section-beige"
      style={{
        backgroundColor: '#EDE0CE',
      }}
    >
      <div className="max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-20">
        {/* Section Header */}
        <SectionReveal className="mb-24 max-w-4xl">
          <div className="mb-6 inline-block">
            <span
              className="tracking-[0.3em] text-[10px] font-medium uppercase"
              style={{ color: 'var(--primary)' }}
            >
              Our Services
            </span>
          </div>
          <GoldLine className="mb-6" width="3rem" />
          <h2
            className="text-[clamp(2.5rem,5vw,4.5rem)] mb-6 font-light leading-[1.15] tracking-[-0.01em]"
            style={{ fontFamily: 'Cormorant, serif', color: 'var(--text-heading)' }}
          >
            Comprehensive Excellence
          </h2>
          <p
            className="text-base max-w-2xl font-light leading-relaxed"
            style={{ color: 'var(--text-body)' }}
          >
            Each program is meticulously designed to address specific aspects of personal and professional refinement.
          </p>
        </SectionReveal>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <SectionReveal className="mt-24 text-center pt-20 border-t" delay={0.2}>
          <div style={{ borderColor: 'var(--border)' }}>
            <p className="text-sm mb-8 font-light" style={{ color: 'var(--text-body)' }}>
              Not sure which program suits you best?
            </p>
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
              SCHEDULE A DISCOVERY CALL
            </motion.button>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
