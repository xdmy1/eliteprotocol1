import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { useCountUp } from '../hooks/useCountUp';
import { GoldLine } from './animations/GoldLine';
import { SectionReveal } from './animations/SectionReveal';

const pricingPlans = [
  {
    name: 'Foundation',
    tagline: 'Essential Refinement',
    price: 250,
    period: 'per session',
    description: 'Ideal for individuals beginning their journey toward refined presence.',
    features: [
      '2-hour private consultation',
      'Personal etiquette assessment',
      'Basic image consultation',
      'Dining etiquette fundamentals',
      'Follow-up support via email'
    ],
    popular: false,
  },
  {
    name: 'Elite',
    tagline: 'Complete Transformation',
    price: 850,
    period: '4-week intensive',
    description: 'Our signature program for comprehensive personal and professional development.',
    features: [
      '8 private coaching sessions',
      'Complete image transformation',
      'Executive presence training',
      'Wardrobe consultation & styling',
      'Personal branding strategy',
      'Video analysis with feedback',
      'Unlimited email support',
      'Lifetime resource access'
    ],
    popular: true,
  },
  {
    name: 'Platinum',
    tagline: 'Bespoke Excellence',
    price: 0,
    period: 'tailored engagement',
    description: 'Exclusive white-glove service for executives requiring personalized attention.',
    features: [
      'Unlimited private sessions',
      'VIP concierge service',
      'International protocol mastery',
      'Event preparation & attendance',
      '24/7 consultation access',
      'Corporate team training',
      'Personal stylist on-demand',
      'Ongoing executive mentorship'
    ],
    popular: false,
  }
];

function PriceDisplay({ price }: { price: number }) {
  const { ref, formatted } = useCountUp({
    end: price,
    prefix: '$',
    duration: 1800,
  });

  return (
    <div ref={ref} className="flex items-baseline gap-1">
      <span className="text-5xl font-light" style={{ fontFamily: 'Cormorant, serif', color: 'var(--text-heading)' }}>
        {formatted}
      </span>
    </div>
  );
}

function PricingCard({ plan, index }: { plan: typeof pricingPlans[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{
        duration: 0.7,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -4,
        boxShadow: plan.popular
          ? '0 12px 60px rgba(201,168,76,0.1)'
          : '0 8px 40px rgba(0,0,0,0.2)',
      }}
      className={`relative overflow-hidden transition-all duration-500 border ${
        plan.popular ? 'scale-[1.02]' : ''
      }`}
      style={{
        backgroundColor: 'var(--card)',
        borderColor: plan.popular ? 'rgba(201,168,76,0.25)' : 'var(--border-subtle)',
        boxShadow: plan.popular ? '0 0 40px rgba(201,168,76,0.08)' : 'none',
      }}
    >
      {/* Popular Badge */}
      {plan.popular && (
        <div
          className="text-center py-3 text-[9px] tracking-[0.25em] font-medium"
          style={{
            background: 'linear-gradient(to right, #C9A84C, #D4B85C)',
            color: 'var(--primary-foreground)',
          }}
        >
          RECOMMENDED
        </div>
      )}

      <div className="p-12">
        {/* Header */}
        <div className="mb-12 pb-10 border-b" style={{ borderColor: 'var(--border)' }}>
          <h3
            className="text-2xl mb-2 font-light"
            style={{ fontFamily: 'Cormorant, serif', color: 'var(--text-heading)' }}
          >
            {plan.name}
          </h3>
          <p
            className="text-[9px] tracking-[0.25em] mb-6 uppercase font-medium"
            style={{ color: 'var(--primary)' }}
          >
            {plan.tagline}
          </p>

          {/* Price */}
          <div className="mb-3">
            {plan.price > 0 ? (
              <PriceDisplay price={plan.price} />
            ) : (
              <div className="flex items-baseline gap-1">
                <span
                  className="text-5xl font-light"
                  style={{ fontFamily: 'Cormorant, serif', color: 'var(--text-heading)' }}
                >
                  Custom
                </span>
              </div>
            )}
            <p
              className="text-[10px] mt-2 tracking-wider uppercase font-light"
              style={{ color: 'var(--text-faint)' }}
            >
              {plan.period}
            </p>
          </div>

          <p
            className="text-xs leading-relaxed font-light"
            style={{ color: 'var(--text-body)' }}
          >
            {plan.description}
          </p>
        </div>

        {/* Features */}
        <ul className="space-y-4 mb-12">
          {plan.features.map((feature, idx) => (
            <li
              key={idx}
              className="flex items-start gap-3 text-xs leading-relaxed font-light"
              style={{ color: 'var(--text-body)' }}
            >
              <span className="mt-1.5" style={{ color: 'var(--primary)' }}>&mdash;</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <motion.button
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-4 text-center text-[10px] tracking-[0.25em] font-medium transition-all duration-300"
          style={
            plan.popular
              ? {
                  backgroundColor: 'var(--primary)',
                  color: 'var(--primary-foreground)',
                }
              : {
                  backgroundColor: 'transparent',
                  color: 'var(--text-heading)',
                  border: '1px solid var(--border)',
                }
          }
        >
          {plan.price === 0 ? 'CONTACT US' : 'GET STARTED'}
        </motion.button>
      </div>
    </motion.div>
  );
}

export function Pricing() {
  return (
    <section
      id="pricing"
      className="py-32 relative overflow-hidden"
      style={{ backgroundColor: 'var(--background-pricing)' }}
    >
      <div className="max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-20 relative z-10">
        {/* Section Header */}
        <SectionReveal className="mb-24 max-w-4xl mx-auto text-center">
          <div className="mb-6 inline-block">
            <span
              className="tracking-[0.3em] text-[10px] font-medium uppercase"
              style={{ color: 'var(--primary)' }}
            >
              Investment
            </span>
          </div>
          <div className="flex justify-center mb-6">
            <GoldLine width="3rem" />
          </div>
          <h2
            className="text-[clamp(2.5rem,5vw,4.5rem)] mb-6 font-light leading-[1.15] tracking-[-0.01em]"
            style={{ fontFamily: 'Cormorant, serif', color: 'var(--text-heading)' }}
          >
            Select Your Program
          </h2>
          <p
            className="text-base max-w-2xl mx-auto font-light leading-relaxed"
            style={{ color: 'var(--text-body)' }}
          >
            Choose the level of engagement that aligns with your goals.
          </p>
        </SectionReveal>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-[1400px] mx-auto">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={index} plan={plan} index={index} />
          ))}
        </div>

        {/* Payment Info */}
        <SectionReveal className="mt-20 max-w-4xl mx-auto text-center" delay={0.3}>
          <p className="text-xs leading-loose font-light" style={{ color: 'var(--text-faint)' }}>
            Flexible payment plans available  &bull;  Corporate invoicing accepted  &bull;  30-day satisfaction guarantee
          </p>
        </SectionReveal>

        {/* Testimonial */}
        <SectionReveal className="mt-32 max-w-3xl mx-auto text-center" delay={0.2}>
          <div
            className="p-16 border"
            style={{
              backgroundColor: 'var(--card)',
              borderColor: 'var(--border)',
            }}
          >
            <p
              className="text-lg italic mb-8 leading-relaxed font-light"
              style={{ fontFamily: 'Cormorant, serif', color: 'var(--text-body)' }}
            >
              "The Elite Protocol program transformed not just my appearance, but my entire approach to professional interactions. An invaluable investment in my career."
            </p>
            <div>
              <p
                className="text-[11px] tracking-[0.15em] font-medium"
                style={{ color: 'var(--text-heading)' }}
              >
                VICTORIA CHEN
              </p>
              <p
                className="text-[10px] tracking-wider mt-2 font-light"
                style={{ color: 'var(--text-caption)' }}
              >
                Chief Executive Officer, Fortune 500 Company
              </p>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
