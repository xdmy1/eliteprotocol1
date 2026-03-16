import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { GoldLine } from './animations/GoldLine';
import { SectionReveal } from './animations/SectionReveal';
import { useTranslation } from '../i18n/LanguageContext';

interface ReviewData {
  quote: string;
  name: string;
  role: string;
}

function ReviewCard({ review, index }: { review: ReviewData; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -4,
        boxShadow: '0 8px 40px rgba(211,182,127,0.08)',
      }}
      className="group p-10 sm:p-12 border transition-colors duration-500"
      style={{
        backgroundColor: 'var(--card)',
        borderColor: 'var(--border-subtle)',
      }}
    >
      {/* Decorative quote mark */}
      <div
        className="text-6xl leading-none font-light mb-6 select-none"
        style={{ fontFamily: 'Cinzel, serif', color: 'rgba(211,182,127,0.25)' }}
      >
        &ldquo;
      </div>

      {/* Quote */}
      <p
        className="text-sm leading-[1.9] font-light mb-10 italic"
        style={{ color: 'var(--text-body)' }}
      >
        {review.quote}
      </p>

      {/* Divider */}
      <GoldLine className="mb-6" width="2rem" />

      {/* Author */}
      <p
        className="text-[11px] tracking-[0.15em] font-medium"
        style={{ color: 'var(--text-heading)' }}
      >
        {review.name}
      </p>
      <p
        className="text-[10px] tracking-wider mt-2 font-light"
        style={{ color: 'var(--text-caption)' }}
      >
        {review.role}
      </p>
    </motion.div>
  );
}

export function Reviews() {
  const { t, tRaw } = useTranslation();

  const items = tRaw('reviews.items') as ReviewData[];

  return (
    <section
      className="py-32 relative overflow-hidden"
      style={{ backgroundColor: '#232952' }}
    >
      <div className="max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-20 relative z-10">
        {/* Section Header */}
        <SectionReveal className="mb-24 max-w-4xl mx-auto text-center">
          <div className="mb-6 inline-block">
            <span
              className="tracking-[0.3em] text-[10px] font-medium uppercase"
              style={{ color: '#E0C9A0' }}
            >
              {t('reviews.tag')}
            </span>
          </div>
          <div className="flex justify-center mb-6">
            <GoldLine width="3rem" />
          </div>
          <h2
            className="text-[clamp(2.5rem,5vw,4.5rem)] mb-6 font-light leading-[1.15] tracking-[-0.01em]"
            style={{ fontFamily: 'Cinzel, serif', color: 'var(--text-heading)' }}
          >
            {t('reviews.heading')}
          </h2>
          <p
            className="text-base max-w-2xl mx-auto font-light leading-relaxed"
            style={{ color: 'var(--text-body)' }}
          >
            {t('reviews.description')}
          </p>
        </SectionReveal>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1400px] mx-auto">
          {items.map((review, index) => (
            <ReviewCard key={index} review={review} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
