import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1762625570087-6d98fca29531?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkZW50YWwlMjBjbGluaWMlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjYzODE5NDd8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Contact Us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0C2D37] to-[#18666D] opacity-95"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl mb-4"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg max-w-2xl mx-auto"
          >
            Get in touch with our friendly team to schedule your appointment.
          </motion.p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl mb-6">Send Us a Message</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2">Name *</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#18666D]"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2">Email *</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#18666D]"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block mb-2">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#18666D]"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2">Message *</label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#18666D]"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-3 bg-[#18666D] text-white rounded-lg hover:bg-[#0C2D37] transition-colors whitespace-nowrap"
                >
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl mb-6">Office Information</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-[#8C7161] rounded-xl flex items-center justify-center">
                    <MapPin className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="mb-1">Address</h3>
                    <p className="text-gray-600">
                      123 Kew Gardens Road<br />
                      Kew Gardens, NY 11415
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-[#8C7161] rounded-xl flex items-center justify-center">
                    <Phone className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="mb-1">Phone</h3>
                    <a href="tel:7182612005" className="text-gray-600 hover:text-[#18666D]">
                      (718) 261-2005
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-[#8C7161] rounded-xl flex items-center justify-center">
                    <Mail className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="mb-1">Email</h3>
                    <a href="mailto:info@kewgardenstotaldentistry.com" className="text-gray-600 hover:text-[#18666D]">
                      info@kewgardenstotaldentistry.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-[#8C7161] rounded-xl flex items-center justify-center">
                    <Clock className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="mb-1">Office Hours</h3>
                    <div className="text-gray-600 space-y-1">
                      <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p>Saturday: 9:00 AM - 3:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="mt-8 p-6 bg-red-50 border-l-4 border-red-500 rounded-lg">
                <h3 className="text-red-700 mb-2">Dental Emergency?</h3>
                <p className="text-gray-700 mb-3">
                  If you're experiencing a dental emergency, please call us immediately.
                </p>
                <a
                  href="tel:7182612005"
                  className="inline-flex items-center space-x-2 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span className="whitespace-nowrap">Call Now: (718) 261-2005</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-[#FDFBF7]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl mb-8 text-center">Find Us</h2>
          <div className="max-w-4xl mx-auto h-96 bg-gray-300 rounded-lg flex items-center justify-center">
            <p className="text-gray-600">Map Placeholder - Embed Google Maps here</p>
          </div>
        </div>
      </section>
    </div>
  );
}