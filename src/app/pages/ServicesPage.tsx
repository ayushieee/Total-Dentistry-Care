import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Award, Heart } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function ServicesPage() {
  const services = [
    {
      title: 'Dental Crowns and Bridges',
      description: 'Restore your smile with custom-fitted crowns and bridges that look and feel natural. Perfect for damaged or missing teeth.',
      path: '/services/crowns-bridges',
      icon: Shield,
    },
    {
      title: 'Veneers',
      description: 'Transform your smile with thin, custom-made shells designed to cover imperfections and create a flawless appearance.',
      path: '/services/veneers',
      icon: Award,
    },
    {
      title: 'Dental Implants',
      description: 'Replace missing teeth with permanent, natural-looking implants that function just like real teeth for a lifetime of confidence.',
      path: '/services/implants',
      icon: Heart,
    },
    {
      title: 'Teeth Whitening',
      description: 'Achieve a brighter, whiter smile with our professional whitening treatments that deliver dramatic results safely.',
      path: '/services/whitening',
      icon: Shield,
    },
    {
      title: 'Root Canal Treatment',
      description: 'Save infected teeth and relieve pain with our gentle, effective root canal therapy performed with modern techniques.',
      path: '/services/root-canal',
      icon: Heart,
    },
    {
      title: 'Dentures',
      description: 'Restore function and aesthetics with comfortable, custom-fitted dentures that look natural and feel secure.',
      path: '/services/dentures',
      icon: Award,
    },
    {
      title: 'Teeth Cleaning',
      description: 'Maintain optimal oral health with professional cleanings and preventive care to keep your smile healthy and bright.',
      path: '/services/cleaning',
      icon: Shield,
    },
    {
      title: 'Invisalign',
      description: 'Straighten your teeth discreetly with clear, removable aligners that fit your lifestyle without metal braces.',
      path: '/services/invisalign',
      icon: Award,
    },
    {
      title: 'Oral Surgery',
      description: 'Expert surgical procedures performed with precision, care, and advanced techniques for optimal outcomes.',
      path: '/services/oral-surgery',
      icon: Heart,
    },
  ];

  const features = [
    {
      title: 'Comprehensive Care',
      description: 'From routine cleanings to complex procedures, we offer complete dental solutions.',
    },
    {
      title: 'Advanced Technology',
      description: 'State-of-the-art equipment for precise, comfortable treatments.',
    },
    {
      title: 'Personalized Treatment',
      description: 'Custom treatment plans designed around your unique needs and goals.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1642844819197-5f5f21b89ff8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBlcXVpcG1lbnQlMjBtb2Rlcm58ZW58MXx8fHwxNzY2MzU3ODU5fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Dental Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a5f] to-[#152b47] opacity-95"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl mb-4"
          >
            Our Dental Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg max-w-2xl mx-auto"
          >
            Comprehensive dental solutions tailored to your unique needs and goals.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.path}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    to={service.path}
                    className="block p-6 bg-white rounded-lg shadow-sm hover:shadow-lg transition-all border border-gray-100 h-full"
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-[#8B7D6B] bg-opacity-10 rounded-full mb-4">
                      <Icon className="w-6 h-6 text-[#8B7D6B]" />
                    </div>
                    <h3 className="mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <span className="text-[#8B7D6B] flex items-center space-x-2">
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 bg-[#FDFBF7]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Why Choose Our Services?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experience the difference that quality, compassionate care can make.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-white rounded-lg shadow-sm"
              >
                <h3 className="mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a5f] to-[#152b47]"></div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl mb-4">Schedule Your Appointment Today</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Take the first step towards a healthier, more beautiful smile.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-3 bg-white text-[#1e3a5f] rounded-lg hover:bg-gray-100 transition-colors whitespace-nowrap"
            >
              Book Appointment
            </Link>
            <a
              href="tel:7182612005"
              className="px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-[#1e3a5f] transition-colors whitespace-nowrap"
            >
              Call (718) 261-2005
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
