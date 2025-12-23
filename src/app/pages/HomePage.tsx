import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Shield, Award, Users, Heart, Star, Phone, ArrowRight, Crown, Sparkles, Wrench, Smile, Activity, Palette, Droplets, Stethoscope, Scissors } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { FAQ } from '../components/FAQ';

export function HomePage() {
  const services = [
    {
      title: 'Dental Crowns and Bridges',
      description: 'Restore your smile with custom-fitted crowns and bridges that look and feel natural.',
      path: '/services/crowns-bridges',
      icon: Crown,
    },
    {
      title: 'Veneers',
      description: 'Transform your smile with thin, custom-made shells designed to cover imperfections.',
      path: '/services/veneers',
      icon: Palette,
    },
    {
      title: 'Dental Implants',
      description: 'Replace missing teeth with permanent, natural-looking implants that function like real teeth.',
      path: '/services/implants',
      icon: Wrench,
    },
    {
      title: 'Teeth Whitening',
      description: 'Achieve a brighter, whiter smile with our professional whitening treatments.',
      path: '/services/whitening',
      icon: Sparkles,
    },
    {
      title: 'Root Canal Treatment',
      description: 'Save infected teeth and relieve pain with our gentle, effective root canal therapy.',
      path: '/services/root-canal',
      icon: Activity,
    },
    {
      title: 'Dentures',
      description: 'Restore function and aesthetics with comfortable, custom-fitted dentures.',
      path: '/services/dentures',
      icon: Smile,
    },
    {
      title: 'Teeth Cleaning',
      description: 'Maintain optimal oral health with professional cleanings and preventive care.',
      path: '/services/cleaning',
      icon: Droplets,
    },
    {
      title: 'Invisalign',
      description: 'Straighten your teeth discreetly with clear, removable aligners.',
      path: '/services/invisalign',
      icon: Stethoscope,
    },
    {
      title: 'Oral Surgery',
      description: 'Expert surgical procedures performed with precision and care.',
      path: '/services/oral-surgery',
      icon: Scissors,
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      rating: 5,
      text: 'The team at Kew Gardens Total Dentistry made me feel completely at ease. My dental implant procedure was painless and the results are amazing!',
    },
    {
      name: 'Michael Chen',
      rating: 5,
      text: 'Best dental experience I\'ve ever had. Professional, caring staff and state-of-the-art equipment. Highly recommend!',
    },
    {
      name: 'Emily Rodriguez',
      rating: 5,
      text: 'Dr. Smith transformed my smile with veneers. I can\'t stop smiling now! Thank you for the exceptional care.',
    },
  ];

  const faqItems = [
    {
      question: 'Do you accept dental insurance?',
      answer: 'Yes, we accept most major dental insurance plans. Our team will work with you to maximize your benefits and help file claims on your behalf.',
    },
    {
      question: 'What should I do in a dental emergency?',
      answer: 'Call our office immediately at (718) 261-2005. We offer emergency dental services and will do our best to see you the same day.',
    },
    {
      question: 'How often should I visit the dentist?',
      answer: 'We recommend visiting every six months for routine checkups and cleanings. However, some patients may need more frequent visits based on their oral health needs.',
    },
    {
      question: 'Do you offer payment plans?',
      answer: 'Yes, we offer flexible financing options including CareCredit and in-house payment plans to make dental care affordable for everyone.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1762625570087-6d98fca29531?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkZW50YWwlMjBjbGluaWMlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjYzODE5NDd8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Modern Dental Clinic"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0C2D37] to-[#18666D] opacity-95"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl mb-6"
          >
            Your Smile, Our Priority
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl mb-8 max-w-2xl mx-auto"
          >
            Experience exceptional dental care in a comfortable, modern environment. 
            Your journey to a healthier, more beautiful smile starts here.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/contact"
              className="px-8 py-3 bg-[#18666D] text-white rounded-lg hover:bg-[#0C2D37] transition-colors whitespace-nowrap"
            >
              Book Appointment
            </Link>
            <a
              href="tel:7182612005"
              className="flex items-center space-x-2 px-8 py-3 bg-white text-[#0C2D37] rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span className="whitespace-nowrap">Call (718) 261-2005</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-[#FDFBF7]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Why Choose Kew Gardens Total Dentistry?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We combine advanced technology with compassionate care to deliver exceptional dental experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-[#18666D] rounded-full mb-4">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="mb-2">Advanced Technology</h3>
              <p className="text-gray-600">
                State-of-the-art equipment for precise, comfortable treatments.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-[#18666D] rounded-full mb-4">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="mb-2">Expert Team</h3>
              <p className="text-gray-600">
                Highly trained professionals dedicated to your oral health.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-[#18666D] rounded-full mb-4">
                <Heart className="w-10 h-10 text-white" />
              </div>
              <h3 className="mb-2">Compassionate Care</h3>
              <p className="text-gray-600">
                Patient-centered approach ensuring comfort and satisfaction.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-[#18666D] rounded-full mb-4">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="mb-2">Proven Results</h3>
              <p className="text-gray-600">
                Years of experience delivering beautiful, healthy smiles.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive dental solutions tailored to your unique needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.path}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={service.path}
                  className="block p-6 bg-white rounded-lg shadow-sm hover:shadow-lg transition-all border border-gray-100 h-full group"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-[#18666D] rounded-full mb-4 group-hover:bg-[#0C2D37] transition-all">
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <span className="text-[#18666D] flex items-center space-x-2 group-hover:text-[#0C2D37] transition-colors">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-block px-8 py-3 bg-[#18666D] text-white rounded-lg hover:bg-[#0C2D37] transition-colors whitespace-nowrap"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-[#FDFBF7]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">What Our Patients Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Read why our patients trust us with their smiles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">&ldquo;{testimonial.text}&rdquo;</p>
                <p className="text-[#18666D] font-medium">— {testimonial.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">
              Find answers to common questions about our dental services.
            </p>
          </div>

          <FAQ items={faqItems} />
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0C2D37] to-[#18666D]"></div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl mb-4">Ready to Transform Your Smile?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Schedule your appointment today and discover the difference exceptional dental care can make.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-3 bg-white text-[#0C2D37] rounded-lg hover:bg-gray-100 transition-colors whitespace-nowrap"
            >
              Book Appointment
            </Link>
            <a
              href="tel:7182612005"
              className="flex items-center space-x-2 px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-[#0C2D37] transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span className="whitespace-nowrap">Call (718) 261-2005</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}