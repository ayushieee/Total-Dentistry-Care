import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight, Sparkles } from 'lucide-react';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { FAQ } from '../../components/FAQ';

export function VeneersPage() {
  const benefits = [
    'Dramatically whiter, brighter smile',
    'Natural-looking, translucent appearance',
    'Minimally invasive procedure',
    'Stain-resistant porcelain material',
    'Long-lasting results (10-15 years)',
    'Corrects multiple cosmetic issues at once',
  ];

  const relatedServices = [
    { name: 'Teeth Whitening', path: '/services/whitening' },
    { name: 'Dental Crowns', path: '/services/crowns-bridges' },
    { name: 'Invisalign', path: '/services/invisalign' },
  ];

  const faqItems = [
    {
      question: 'How long do veneers last?',
      answer: 'With proper care, porcelain veneers can last 10-15 years or longer. Maintaining good oral hygiene and avoiding habits like teeth grinding will help extend their lifespan.',
    },
    {
      question: 'Are veneers reversible?',
      answer: 'Because a small amount of enamel is removed during preparation, veneers are considered a permanent treatment. However, they can be replaced if needed.',
    },
    {
      question: 'Do veneers look natural?',
      answer: 'Yes! Modern porcelain veneers are custom-made to match your natural teeth and facial features. They reflect light like natural enamel for a beautiful, authentic appearance.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
            alt="Dental Veneers"
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
            <Sparkles className="w-8 h-8 text-white" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl mb-4"
          >
            Porcelain Veneers
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg max-w-2xl mx-auto"
          >
            Transform your smile with custom-crafted porcelain veneers for a flawless appearance.
          </motion.p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl mb-6">What Are Porcelain Veneers?</h2>
          <p className="text-gray-700 mb-4">
            Porcelain veneers are thin, custom-made shells of tooth-colored material designed to cover the 
            front surface of teeth. They're an excellent solution for improving the appearance of your smile 
            by addressing various cosmetic concerns.
          </p>
          <p className="text-gray-700">
            Made from high-quality dental porcelain, veneers are carefully bonded to your teeth to create 
            a natural, beautiful smile. They can correct discoloration, chips, gaps, and misalignment for 
            a dramatic transformation.
          </p>
        </div>
      </section>

      {/* When You Need This */}
      <section className="py-20 bg-[#FDFBF7]">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl mb-6">When You Might Need Veneers</h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <Check className="w-6 h-6 text-[#18666D] mr-3 flex-shrink-0 mt-1" />
              <span className="text-gray-700">Severely stained or discolored teeth</span>
            </li>
            <li className="flex items-start">
              <Check className="w-6 h-6 text-[#18666D] mr-3 flex-shrink-0 mt-1" />
              <span className="text-gray-700">Chipped or cracked teeth</span>
            </li>
            <li className="flex items-start">
              <Check className="w-6 h-6 text-[#18666D] mr-3 flex-shrink-0 mt-1" />
              <span className="text-gray-700">Gaps between teeth</span>
            </li>
            <li className="flex items-start">
              <Check className="w-6 h-6 text-[#18666D] mr-3 flex-shrink-0 mt-1" />
              <span className="text-gray-700">Slightly crooked or misaligned teeth</span>
            </li>
            <li className="flex items-start">
              <Check className="w-6 h-6 text-[#18666D] mr-3 flex-shrink-0 mt-1" />
              <span className="text-gray-700">Worn down or irregularly shaped teeth</span>
            </li>
            <li className="flex items-start">
              <Check className="w-6 h-6 text-[#18666D] mr-3 flex-shrink-0 mt-1" />
              <span className="text-gray-700">Desire for a complete smile makeover</span>
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
              <h3 className="mb-2">1. Initial Consultation</h3>
              <p className="text-gray-700">
                We'll discuss your smile goals, examine your teeth, and determine if veneers are the 
                right solution for you. Digital imaging may be used to preview your new smile.
              </p>
            </div>
            <div>
              <h3 className="mb-2">2. Tooth Preparation</h3>
              <p className="text-gray-700">
                A small amount of enamel (about 0.5mm) is removed to make room for the veneer. 
                Impressions are taken to create your custom veneers.
              </p>
            </div>
            <div>
              <h3 className="mb-2">3. Temporary Veneers</h3>
              <p className="text-gray-700">
                Temporary veneers may be placed while your permanent ones are being crafted in the 
                dental laboratory.
              </p>
            </div>
            <div>
              <h3 className="mb-2">4. Final Placement</h3>
              <p className="text-gray-700">
                Your custom veneers are carefully bonded to your teeth using a special adhesive and 
                curing light. Final adjustments ensure a perfect fit and natural appearance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-[#FDFBF7]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Benefits of Porcelain Veneers</h2>
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
          <h2 className="text-3xl md:text-4xl mb-4">Ready for Your Dream Smile?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Schedule a consultation to discover how veneers can transform your smile.
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
