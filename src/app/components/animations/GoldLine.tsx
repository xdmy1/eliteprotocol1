import { useRef } from 'react';
import { motion, useInView } from 'motion/react';

interface GoldLineProps {
  className?: string;
  width?: string;
}

export function GoldLine({ className = '', width = '3rem' }: GoldLineProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-30px' });

  return (
    <div ref={ref} className={className} style={{ width }}>
      <motion.div
        initial={{ width: 0 }}
        animate={isInView ? { width: '100%' } : { width: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="h-px"
        style={{
          background: 'linear-gradient(to right, var(--primary), var(--primary-bright))',
        }}
      />
    </div>
  );
}
