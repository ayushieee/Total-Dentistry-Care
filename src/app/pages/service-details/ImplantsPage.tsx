import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight, Anchor } from 'lucide-react';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { FAQ } from '../../components/FAQ';

export function ImplantsPage() {
  const benefits = [
    'Permanent, long-lasting solution',
    'Looks and functions like natural teeth',
    'Prevents bone loss in the jaw',
    'No need to alter adjacent teeth',
    'Improved chewing and speaking ability',
    'High success rate (95%+)',
  ];

  const relatedServices = [
    { name: 'Dental Crowns', path: '/services/crowns-bridges' },
    { name: 'Dentures', path: '/services/dentures' },
    { name: 'Oral Surgery', path: '/services/oral-surgery' },
  ];

  const faqItems = [
    {
      question: 'How long do dental implants last?',
      answer: 'With proper care and regular dental visits, dental implants can last a lifetime. The crown on top may need replacement after 10-15 years, but the implant itself is designed to be permanent.',
    },
    {
      question: 'Is the procedure painful?',
      answer: 'The procedure is performed under local anesthesia or sedation, so you won\'t feel pain during treatment. Some discomfort after surgery is normal and can be managed with prescribed medications.',
    },
    {
      question: 'How long does the process take?',
      answer: 'The complete process typically takes 3-6 months, allowing time for the implant to integrate with your jawbone (osseointegration). Some cases may qualify for same-day teeth options.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
            alt="Dental Implants"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0C2D37] to-[#18666D] opacity-90"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full mb-4"
          >
            <Anchor className="w-8 h-8 text-white" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl mb-4"
          >
            Dental Implants
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg max-w-2xl mx-auto"
          >
            Permanent tooth replacement that looks, feels, and functions like natural teeth.
          </motion.p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl mb-6">What Are Dental Implants?</h2>
          <p className="text-gray-700 mb-4">
            Dental implants are titanium posts that are surgically placed into your jawbone beneath your 
            gums. Once in place, they allow your dentist to mount replacement teeth onto them. Unlike 
            dentures or bridges, implants are permanently anchored in your mouth.
          </p>
          <p className="text-gray-700">
            Because implants fuse to your jawbone, they provide stable support for artificial teeth. 
            Dentures and bridges mounted to implants won't slip or shift in your mouth—an especially 
            important benefit when eating and speaking.
          </p>
        </div>
      </section>

      {/* When You Need This */}
      <section className="py-20 bg-[#FDFBF7]">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl mb-6">When You Might Need Dental Implants</h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <Check className="w-6 h-6 text-[#18666D] mr-3 flex-shrink-0 mt-1" />
              <span className="text-gray-700">Missing one or more teeth</span>
            </li>
            <li className="flex items-start">
              <Check className="w-6 h-6 text-[#18666D] mr-3 flex-shrink-0 mt-1" />
              <span className="text-gray-700">Unhealthy or broken teeth that need extraction</span>
            </li>
            <li className="flex items-start">
              <Check className="w-6 h-6 text-[#18666D] mr-3 flex-shrink-0 mt-1" />
              <span className="text-gray-700">Difficulty chewing or speaking due to missing teeth</span>
            </li>
            <li className="flex items-start">
              <Check className="w-6 h-6 text-[#18666D] mr-3 flex-shrink-0 mt-1" />
              <span className="text-gray-700">Wanting to avoid removable dentures</span>
            </li>
            <li className="flex items-start">
              <Check className="w-6 h-6 text-[#18666D] mr-3 flex-shrink-0 mt-1" />
              <span className="text-gray-700">Sufficient bone density to support the implant</span>
            </li>
            <li className="flex items-start">
              <Check className="w-6 h-6 text-[#18666D] mr-3 flex-shrink-0 mt-1" />
              <span className="text-gray-700">Seeking a permanent tooth replacement solution</span>
            </li>
          </ul>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl mb-6">What to Expect</h2>
          <div className="space-y-6">
            <div>
              <h3 className="mb-2">1. Initial Consultation & Planning</h3>
              <p className="text-gray-700">
                Comprehensive examination including X-rays and 3D imaging to assess bone structure. 
                We'll create a customized treatment plan based on your specific needs.
              </p>
            </div>
            <div>
              <h3 className="mb-2">2. Implant Placement</h3>
              <p className="text-gray-700">
                The titanium implant post is surgically placed into your jawbone. This procedure is 
                performed under local anesthesia or sedation for your comfort.
              </p>
            </div>
            <div>
              <h3 className="mb-2">3. Healing Period (Osseointegration)</h3>
              <p className="text-gray-700">
                Over 3-6 months, the implant fuses with your jawbone through a natural process. A 
                temporary restoration may be provided during this time.
              </p>
            </div>
            <div>
              <h3 className="mb-2">4. Abutment & Crown Placement</h3>
              <p className="text-gray-700">
                Once healed, an abutment is attached to the implant, and a custom crown is placed 
                on top to complete your new tooth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-[#FDFBF7]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Benefits of Dental Implants</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start space-x-3 p-4 bg-white rounded-lg shadow-sm"
              >
                <Check className="w-6 h-6 text-[#18666D] flex-shrink-0 mt-1" />
                <span className="text-gray-700">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-4xl mb-8 text-center">Frequently Asked Questions</h2>
          <FAQ items={faqItems} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#0C2D37] to-[#18666D] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl mb-4">Ready to Replace Missing Teeth?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Schedule a consultation to learn if dental implants are right for you.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-3 bg-white text-[#0C2D37] rounded-lg hover:bg-[#D2AF94] transition-colors whitespace-nowrap"
          >
            Book Appointment
          </Link>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl mb-8 text-center">Related Services</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {relatedServices.map((service) => (
              <Link
                key={service.path}
                to={service.path}
                className="flex items-center space-x-2 px-6 py-3 border border-[#18666D] text-[#18666D] rounded-lg hover:bg-[#18666D] hover:text-white transition-colors"
              >
                <span>{service.name}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
