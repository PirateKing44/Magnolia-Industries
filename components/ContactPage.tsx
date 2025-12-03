import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Phone } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the form data to a backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', company: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const locations = [
    { name: 'Wyoming, USA', address: 'Wyoming, USA' },
    { name: 'New Jersey, USA', address: 'New Jersey, USA' },
    { name: 'New York, USA', address: 'New York, USA' },
    { name: 'South Carolina, USA', address: 'South Carolina, USA' }
  ];

  return (
    <div className="bg-slate-950 text-slate-200 min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-blue-500 font-semibold tracking-widest uppercase text-sm mb-4 block">
              Get in Touch
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
              Contact Magnolia Industries
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Whether you're a buyer or seller of fuel and energy commodities, or an institution 
              seeking capital market solutions, we're here to help. Reach out to discuss how we 
              can support your business objectives.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8"
            >
              <h2 className="text-2xl font-serif font-bold text-white mb-6">Send us a Message</h2>
              
              {submitted ? (
                <div className="bg-green-500/10 border border-green-500/50 rounded-lg p-6 text-center">
                  <p className="text-green-400 font-semibold">Thank you! Your message has been sent.</p>
                  <p className="text-slate-300 text-sm mt-2">We'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-slate-300 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="Your company"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                    >
                      <option value="">Select a subject</option>
                      <option value="commodities-buyer">I'm a Buyer of Fuel/Energy Commodities</option>
                      <option value="commodities-seller">I'm a Seller of Fuel/Energy Commodities</option>
                      <option value="capital-markets">Private Capital Markets Inquiry</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="general">General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
                      placeholder="Tell us how we can help..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 px-6 rounded-lg transition-all flex items-center justify-center gap-2"
                  >
                    <Send size={20} />
                    Send Message
                  </button>
                </form>
              )}
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
                <h2 className="text-2xl font-serif font-bold text-white mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-500/10 rounded-lg">
                      <Mail className="text-blue-500" size={24} />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Email</h3>
                      <a 
                        href="mailto:info@magnoliaind.com" 
                        className="text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        info@magnoliaind.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-500/10 rounded-lg">
                      <span className="text-blue-500 text-xl">🌐</span>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Website</h3>
                      <a 
                        href="https://magnoliaind.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        MagnoliaInd.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
                <h2 className="text-2xl font-serif font-bold text-white mb-6">Our Offices</h2>
                <div className="space-y-4">
                  {locations.map((location, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="p-2 bg-blue-500/10 rounded-lg">
                        <MapPin className="text-blue-500" size={20} />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold">{location.name}</h3>
                        <p className="text-slate-400 text-sm">{location.address}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-blue-500/10 border border-blue-500/30 rounded-2xl p-8">
                <h3 className="text-white font-semibold mb-3">Business Hours</h3>
                <p className="text-slate-300 text-sm mb-2">Monday - Friday: 9:00 AM - 5:00 PM EST</p>
                <p className="text-slate-300 text-sm">We typically respond within 24-48 hours.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 mix-blend-multiply"></div>
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-serif font-bold text-white mb-8"
          >
            Ready to Get Started?
          </motion.h2>
          <p className="text-white/90 text-xl max-w-2xl mx-auto mb-10 font-medium">
            Whether you're looking to buy or sell commodities, or seeking capital market solutions, 
            our team is ready to assist you.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;

