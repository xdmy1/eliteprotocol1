import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Dialog,
  DialogPortal,
  DialogOverlay,
} from './ui/dialog';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { XIcon } from 'lucide-react';
import { GoldLine } from './animations/GoldLine';
import { useTranslation } from '../i18n/LanguageContext';

interface CurriculumSection {
  label: string;
  items: { name: string; detail: string }[];
}

interface ServiceData {
  number: string;
  title: string;
  audience: string;
  description: string;
  features: string[];
  curriculum: CurriculumSection[];
  outcomes: string[];
  priceNote: string;
}

interface ServiceModalProps {
  open: boolean;
  onClose: () => void;
  service: ServiceData | null;
}

export function ServiceModal({ open, onClose, service }: ServiceModalProps) {
  const { t } = useTranslation();
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleClose = () => {
    onClose();
    // Reset state after close animation
    setTimeout(() => {
      setShowForm(false);
      setSubmitted(false);
      setFormData({ name: '', email: '' });
    }, 200);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!service) return;
    setSubmitting(true);

    try {
      await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: 'YOUR_W3FORMS_ACCESS_KEY',
          name: formData.name,
          email: formData.email,
          service: service.title,
          message: `Request for ${service.title}`,
        }),
      });
    } catch {
      // Submit silently — show success regardless for UX
    }

    setSubmitting(false);
    setSubmitted(true);
  };

  const inputStyle: React.CSSProperties = {
    backgroundColor: '#FFFFFF',
    borderColor: 'rgba(61,74,140,0.2)',
    color: '#1f2937',
  };

  if (!service) return null;

  return (
    <Dialog open={open} onOpenChange={(v) => { if (!v) handleClose(); }}>
      <DialogPortal>
        <DialogOverlay className="bg-black/70" />
        <DialogPrimitive.Content
          className="fixed top-[50%] left-[50%] z-50 w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] sm:max-w-2xl max-h-[90vh] overflow-y-auto border shadow-2xl data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 duration-200"
          style={{
            backgroundColor: '#E8EAF0',
            borderColor: 'rgba(61,74,140,0.2)',
          }}
        >
          {/* Close button */}
          <DialogPrimitive.Close
            className="absolute top-5 right-5 opacity-60 hover:opacity-100 transition-opacity z-10"
            style={{ color: '#3d4a8c' }}
          >
            <XIcon className="size-5" />
            <span className="sr-only">Close</span>
          </DialogPrimitive.Close>

          <div className="p-8 sm:p-10">
            {/* Number + Tag */}
            <div className="flex items-center gap-4 mb-6">
              <span
                className="text-xs tracking-widest font-light"
                style={{ color: '#3d4a8c' }}
              >
                {service.number}
              </span>
              <span
                className="text-[9px] tracking-[0.2em] font-medium px-3 py-1 border"
                style={{
                  color: '#3d4a8c',
                  borderColor: 'rgba(61,74,140,0.25)',
                  backgroundColor: 'rgba(61,74,140,0.08)',
                }}
              >
                {service.audience.toUpperCase()}
              </span>
            </div>

            {/* Title */}
            <h3
              className="text-2xl sm:text-3xl font-light mb-4"
              style={{ fontFamily: 'Cinzel, serif', color: '#1f2937' }}
            >
              {service.title}
            </h3>

            <GoldLine className="mb-6" width="3rem" />

            {/* Description */}
            <p
              className="text-sm leading-relaxed font-light mb-8"
              style={{ color: '#374151' }}
            >
              {service.description}
            </p>

            {/* Features */}
            <ul className="space-y-3 mb-8">
              {service.features.map((feature, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-xs font-light"
                  style={{ color: '#4b5563' }}
                >
                  <span style={{ color: '#3d4a8c' }} className="mt-0.5">&mdash;</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* Curriculum */}
            {service.curriculum?.length > 0 && (
              <div className="mb-8">
                <h4
                  className="text-[10px] tracking-[0.2em] font-medium uppercase mb-5"
                  style={{ color: '#3d4a8c' }}
                >
                  {t('serviceModal.curriculumLabel')}
                </h4>
                <div className="space-y-6">
                  {service.curriculum.map((section, si) => {
                    const offset = service.curriculum
                      .slice(0, si)
                      .reduce((sum, s) => sum + s.items.length, 0);
                    return (
                    <div key={si}>
                      <div
                        className="text-[10px] tracking-[0.15em] font-medium uppercase mb-3 pb-2 border-b"
                        style={{ color: '#6b7280', borderColor: 'rgba(61,74,140,0.15)' }}
                      >
                        {section.label}
                      </div>
                      <ul className="space-y-3">
                        {section.items.map((item, ii) => (
                          <li key={ii} className="flex gap-3">
                            <span
                              className="text-[11px] font-light tabular-nums mt-0.5"
                              style={{ color: '#3d4a8c', minWidth: '1.5rem' }}
                            >
                              {String(offset + ii + 1).padStart(2, '0')}
                            </span>
                            <div>
                              <p className="text-xs font-medium" style={{ color: '#1f2937' }}>
                                {item.name}
                              </p>
                              <p className="text-xs font-light leading-relaxed" style={{ color: '#4b5563' }}>
                                {item.detail}
                              </p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Outcomes */}
            {service.outcomes?.length > 0 && (
              <div
                className="mb-8 p-6 border"
                style={{
                  borderColor: 'rgba(61,74,140,0.2)',
                  backgroundColor: 'rgba(61,74,140,0.05)',
                }}
              >
                <h4
                  className="text-[10px] tracking-[0.2em] font-medium uppercase mb-4"
                  style={{ color: '#3d4a8c' }}
                >
                  {t('serviceModal.outcomesLabel')}
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                  {service.outcomes.map((outcome, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-xs font-light"
                      style={{ color: '#374151' }}
                    >
                      <span style={{ color: '#3d4a8c' }} className="mt-0.5">&bull;</span>
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Price label */}
            <div
              className="mb-8 text-sm tracking-wide font-light"
              style={{ color: '#3d4a8c' }}
            >
              {service.priceNote || t('serviceModal.price')}
            </div>

            {/* CTA / Form / Success */}
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-center py-8"
                >
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-6"
                    style={{ backgroundColor: 'rgba(61,74,140,0.1)' }}
                  >
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#3d4a8c" strokeWidth="2">
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h4
                    className="text-xl mb-4 font-light"
                    style={{ fontFamily: 'Cinzel, serif', color: '#3d4a8c' }}
                  >
                    {t('serviceModal.successHeading')}
                  </h4>
                  <p className="text-sm font-light leading-relaxed" style={{ color: '#b8d4da' }}>
                    {t('serviceModal.successMessage')}
                  </p>
                </motion.div>
              ) : showForm ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  onSubmit={handleSubmit}
                  className="space-y-5 border-t pt-6"
                  style={{ borderColor: 'rgba(61,74,140,0.15)' }}
                >
                  <div>
                    <label
                      htmlFor="modal-name"
                      className="block text-[10px] mb-2 tracking-[0.15em] font-medium uppercase"
                      style={{ color: '#6b7280' }}
                    >
                      {t('serviceModal.nameLabel')}
                    </label>
                    <input
                      type="text"
                      id="modal-name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full border text-sm px-5 py-4 focus:outline-none transition-colors duration-300 font-light"
                      style={inputStyle}
                      placeholder={t('serviceModal.namePlaceholder')}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="modal-email"
                      className="block text-[10px] mb-2 tracking-[0.15em] font-medium uppercase"
                      style={{ color: '#6b7280' }}
                    >
                      {t('serviceModal.emailLabel')}
                    </label>
                    <input
                      type="email"
                      id="modal-email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full border text-sm px-5 py-4 focus:outline-none transition-colors duration-300 font-light"
                      style={inputStyle}
                      placeholder={t('serviceModal.emailPlaceholder')}
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={submitting}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 text-[10px] tracking-[0.25em] font-medium transition-all duration-300 disabled:opacity-50"
                    style={{
                      backgroundColor: '#3d4a8c',
                      color: '#FFFFFF',
                    }}
                  >
                    {submitting ? '...' : t('serviceModal.submit')}
                  </motion.button>
                </motion.form>
              ) : (
                <motion.div
                  key="cta"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.button
                    onClick={() => setShowForm(true)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 text-[10px] tracking-[0.25em] font-medium transition-all duration-300"
                    style={{
                      backgroundColor: '#3d4a8c',
                      color: '#FFFFFF',
                    }}
                  >
                    {t('serviceModal.cta')}
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </DialogPrimitive.Content>
      </DialogPortal>
    </Dialog>
  );
}
