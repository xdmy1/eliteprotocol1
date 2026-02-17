import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'motion/react';
import { GoldLine } from './animations/GoldLine';
import { SectionReveal } from './animations/SectionReveal';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const infoRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const infoInView = useInView(infoRef, { once: true, margin: '-60px' });
  const formInView = useInView(formRef, { once: true, margin: '-60px' });

  const inputStyle: React.CSSProperties = {
    backgroundColor: 'var(--input-background)',
    borderColor: 'var(--border)',
    color: 'var(--text-heading)',
  };

  return (
    <section
      id="contact"
      className="py-32 relative overflow-hidden"
      style={{ backgroundColor: '#162044' }}
    >
      <div className="max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-20 relative z-10">
        {/* Section Header */}
        <SectionReveal className="mb-24 max-w-4xl mx-auto text-center">
          <div className="mb-6 inline-block">
            <span
              className="tracking-[0.3em] text-[10px] font-medium uppercase"
              style={{ color: 'var(--primary)' }}
            >
              Get in Touch
            </span>
          </div>
          <div className="flex justify-center mb-6">
            <GoldLine width="3rem" />
          </div>
          <h2
            className="text-[clamp(2.5rem,5vw,4.5rem)] mb-6 font-light leading-[1.15] tracking-[-0.01em]"
            style={{ fontFamily: 'Cormorant, serif', color: 'var(--text-heading)' }}
          >
            Begin Your Transformation
          </h2>
          <p
            className="text-base max-w-2xl mx-auto font-light leading-relaxed"
            style={{ color: 'var(--text-body)' }}
          >
            Schedule a confidential consultation to discuss your goals.
          </p>
        </SectionReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 max-w-[1400px] mx-auto">
          {/* Contact Information — slides from left */}
          <motion.div
            ref={infoRef}
            initial={{ opacity: 0, x: -30 }}
            animate={infoInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-4 space-y-12"
          >
            <div>
              <h3
                className="mb-4 text-[11px] tracking-[0.2em] font-medium"
                style={{ color: 'var(--text-heading)' }}
              >
                EMAIL
              </h3>
              <a
                href="mailto:contact@eliteprotocol.com"
                className="text-sm font-light block transition-colors duration-300"
                style={{ color: 'var(--text-body)' }}
              >
                contact@eliteprotocol.com
              </a>
            </div>

            <div>
              <h3
                className="mb-4 text-[11px] tracking-[0.2em] font-medium"
                style={{ color: 'var(--text-heading)' }}
              >
                PHONE
              </h3>
              <a
                href="tel:+15551234567"
                className="text-sm font-light block mb-2 transition-colors duration-300"
                style={{ color: 'var(--text-body)' }}
              >
                +1 (555) 123-4567
              </a>
              <p className="text-xs font-light" style={{ color: 'var(--text-faint)' }}>
                Monday &ndash; Friday, 9:00 AM &ndash; 6:00 PM EST
              </p>
            </div>

            <div>
              <h3
                className="mb-4 text-[11px] tracking-[0.2em] font-medium"
                style={{ color: 'var(--text-heading)' }}
              >
                OFFICE
              </h3>
              <p className="text-sm font-light leading-relaxed" style={{ color: 'var(--text-body)' }}>
                432 Park Avenue<br />
                New York, NY 10022
              </p>
              <p className="text-xs mt-3 font-light" style={{ color: 'var(--text-faint)' }}>
                By appointment only
              </p>
            </div>

            <div className="pt-8 border-t" style={{ borderColor: 'var(--border)' }}>
              <h3
                className="mb-6 text-[11px] tracking-[0.2em] font-medium"
                style={{ color: 'var(--text-heading)' }}
              >
                BUSINESS HOURS
              </h3>
              <div className="space-y-3 text-xs font-light">
                <div className="flex justify-between" style={{ color: 'var(--text-body)' }}>
                  <span>Monday &ndash; Friday</span>
                  <span style={{ color: 'var(--primary-bright)' }}>9:00 AM &ndash; 6:00 PM</span>
                </div>
                <div className="flex justify-between" style={{ color: 'var(--text-body)' }}>
                  <span>Saturday</span>
                  <span style={{ color: 'var(--primary-bright)' }}>10:00 AM &ndash; 4:00 PM</span>
                </div>
                <div className="flex justify-between" style={{ color: 'var(--text-body)' }}>
                  <span>Sunday</span>
                  <span style={{ color: 'var(--text-faint)' }}>Closed</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form — slides from right */}
          <motion.div
            ref={formRef}
            initial={{ opacity: 0, x: 30 }}
            animate={formInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-8"
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="p-20 text-center border"
                  style={{
                    backgroundColor: 'var(--card)',
                    borderColor: 'var(--border)',
                  }}
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-8"
                    style={{ backgroundColor: 'rgba(211,182,127,0.12)' }}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2">
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h4
                    className="text-2xl mb-6 font-light"
                    style={{ fontFamily: 'Cormorant, serif', color: 'var(--primary-bright)' }}
                  >
                    Thank You
                  </h4>
                  <p className="text-sm font-light leading-relaxed" style={{ color: 'var(--text-body)' }}>
                    Your inquiry has been received. A member of our team will contact you within 24 hours to schedule your consultation.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  onSubmit={handleSubmit}
                  className="space-y-8 p-8 sm:p-12 border"
                  style={{
                    backgroundColor: 'var(--card)',
                    borderColor: 'var(--border)',
                  }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-[10px] mb-3 tracking-[0.15em] font-medium uppercase"
                        style={{ color: 'var(--text-caption)' }}
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full border text-sm px-5 py-4 focus:outline-none transition-colors duration-300 font-light"
                        style={inputStyle}
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-[10px] mb-3 tracking-[0.15em] font-medium uppercase"
                        style={{ color: 'var(--text-caption)' }}
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full border text-sm px-5 py-4 focus:outline-none transition-colors duration-300 font-light"
                        style={inputStyle}
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-[10px] mb-3 tracking-[0.15em] font-medium uppercase"
                        style={{ color: 'var(--text-caption)' }}
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full border text-sm px-5 py-4 focus:outline-none transition-colors duration-300 font-light"
                        style={inputStyle}
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="service"
                        className="block text-[10px] mb-3 tracking-[0.15em] font-medium uppercase"
                        style={{ color: 'var(--text-caption)' }}
                      >
                        Service Interest *
                      </label>
                      <select
                        id="service"
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full border text-sm px-5 py-4 focus:outline-none transition-colors duration-300 font-light"
                        style={inputStyle}
                      >
                        <option value="">Select a service</option>
                        <option value="personal-etiquette">Personal Etiquette</option>
                        <option value="image-consultation">Image Consultation</option>
                        <option value="executive-presence">Executive Presence</option>
                        <option value="corporate-training">Corporate Training</option>
                        <option value="international-protocol">International Protocol</option>
                        <option value="special-occasions">Special Occasions</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-[10px] mb-3 tracking-[0.15em] font-medium uppercase"
                      style={{ color: 'var(--text-caption)' }}
                    >
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full border text-sm px-5 py-4 focus:outline-none transition-colors duration-300 resize-none font-light"
                      style={inputStyle}
                      placeholder="Please share your goals and any specific areas you'd like to address..."
                    />
                  </div>

                  <div className="flex items-start gap-4 pt-4">
                    <input
                      type="checkbox"
                      id="privacy"
                      required
                      className="mt-1 w-4 h-4"
                      style={{ accentColor: 'var(--primary)' }}
                    />
                    <label
                      htmlFor="privacy"
                      className="text-[10px] leading-relaxed font-light"
                      style={{ color: 'var(--text-caption)' }}
                    >
                      I consent to Elite Protocol contacting me regarding my inquiry. All consultations are conducted with complete confidentiality and discretion.
                    </label>
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-5 text-[10px] tracking-[0.25em] font-medium transition-all duration-300"
                    style={{
                      backgroundColor: 'var(--primary)',
                      color: 'var(--primary-foreground)',
                    }}
                  >
                    SUBMIT INQUIRY
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>

            {/* Confidentiality Note */}
            <div className="mt-8 text-center">
              <p className="text-[10px] font-light leading-relaxed" style={{ color: 'var(--text-faint)' }}>
                <span style={{ color: 'var(--primary)' }}>Complete Confidentiality</span> &mdash; All inquiries are handled with the utmost discretion
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
