import { useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { GoldLine } from './animations/GoldLine';
import { SectionReveal } from './animations/SectionReveal';
import { useTranslation } from '../i18n/LanguageContext';
import { ServiceModal } from './ServiceModal';

const serviceNumbers = ['01', '02', '03'];

interface ServiceCardData {
  number: string;
  title: string;
  description: string;
  features: string[];
  learnMore: string;
}

function ServiceCard({ service, index, onLearnMore }: { service: ServiceCardData; index: number; onLearnMore: () => void }) {
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
        style={{ fontFamily: 'Cinzel, serif', color: '#3d4a8c' }}
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
        onClick={onLearnMore}
        className="text-[10px] tracking-[0.2em] font-light transition-colors duration-300"
        style={{ color: 'var(--text-caption)' }}
      >
        {service.learnMore} &rarr;
      </button>
    </motion.div>
  );
}

export function Services() {
  const { t, tRaw } = useTranslation();
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const cards: ServiceCardData[] = (tRaw('services.cards') as { title: string; description: string; features: string[] }[]).map(
    (card, i) => ({
      number: serviceNumbers[i],
      title: card.title,
      description: card.description,
      features: card.features,
      learnMore: t('services.learnMore'),
    }),
  );

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
              {t('services.tag')}
            </span>
          </div>
          <GoldLine className="mb-6" width="3rem" />
          <h2
            className="text-[clamp(2.5rem,5vw,4.5rem)] mb-6 font-light leading-[1.15] tracking-[-0.01em]"
            style={{ fontFamily: 'Cinzel, serif', color: 'var(--text-heading)' }}
          >
            {t('services.heading')}
          </h2>
          <p
            className="text-base max-w-2xl font-light leading-relaxed"
            style={{ color: 'var(--text-body)' }}
          >
            {t('services.description')}
          </p>
        </SectionReveal>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} onLearnMore={() => setSelectedService(index)} />
          ))}
        </div>

        {/* Bottom CTA */}
        <SectionReveal className="mt-24 text-center pt-20 border-t" delay={0.2}>
          <div style={{ borderColor: 'var(--border)' }}>
            <p className="text-sm mb-8 font-light" style={{ color: 'var(--text-body)' }}>
              {t('services.bottomCtaText')}
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
              {t('services.bottomCtaButton')}
            </motion.button>
          </div>
        </SectionReveal>
      </div>

      <ServiceModal
        open={selectedService !== null}
        onClose={() => setSelectedService(null)}
        service={selectedService !== null ? cards[selectedService] : null}
      />
    </section>
  );
}
