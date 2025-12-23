import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight, Crown } from 'lucide-react';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { FAQ } from '../../components/FAQ';

export function CrownsBridgesPage() {
  const benefits = [
    'Natural appearance that blends with your teeth',
    'Durable and long-lasting restoration',
    'Restores full chewing function',
    'Protects damaged teeth from further decay',
    'Improves overall smile aesthetics',
    'Custom-crafted for perfect fit',
  ];

  const relatedServices = [
    { name: 'Dental Implants', path: '/services/implants' },
    { name: 'Veneers', path: '/services/veneers' },
    { name: 'Root Canal Treatment', path: '/services/root-canal' },
  ];

  const faqItems = [
    {
      question: 'How long do dental crowns last?',
      answer: 'With proper care, dental crowns typically last 10-15 years or longer. Regular dental checkups and good oral hygiene are essential for longevity.',
    },
    {
      question: 'Is the procedure painful?',
      answer: 'The procedure is performed under local anesthesia, so you should not feel pain. Some sensitivity after the procedure is normal and temporary.',
    },
    {
      question: 'How many visits are required?',
      answer: 'Typically, the crown procedure requires two visits: one for preparation and impressions, and another for placement of the permanent crown.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1694345162188-2e5c06fe75e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBjcm93bnMlMjBicmlkZ2V8ZW58MXx8fHwxNzY2NDA4MDA2fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Dental Crowns and Bridges"
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
            <Crown className="w-8 h-8 text-white" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl mb-4"
          >
            Dental Crowns and Bridges
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg max-w-2xl mx-auto"
          >
            Restore damaged teeth and replace missing ones with custom-crafted restorations.
          </motion.p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl mb-6">What Are Dental Crowns and Bridges?</h2>
          <p className="text-gray-700 mb-4">
            Dental crowns are tooth-shaped caps that are placed over damaged or weakened teeth to restore their 
            shape, size, strength, and appearance. Bridges are prosthetic devices used to replace one or more 
            missing teeth by anchoring to adjacent teeth.
          </p>
          <p className="text-gray-700">
            Both crowns and bridges are custom-made to match the color and shape of your natural teeth, 
            providing a seamless, natural-looking result that restores both function and aesthetics.
          </p>
        </div>
      </section>

      {/* When You Need This */}
      <section className="py-20 bg-[#FDFBF7]">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl mb-6">When You Might Need Crowns or Bridges</h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <Check className="w-6 h-6 text-[#18666D] mr-3 flex-shrink-0 mt-1" />
              <span className="text-gray-700">Tooth is severely decayed or damaged</span>
            </li>
            <li className="flex items-start">
              <Check className="w-6 h-6 text-[#18666D] mr-3 flex-shrink-0 mt-1" />
              <span className="text-gray-700">After a root canal treatment</span>
            </li>
            <li className="flex items-start">
              <Check className="w-6 h-6 text-[#18666D] mr-3 flex-shrink-0 mt-1" />
              <span className="text-gray-700">To cover a dental implant</span>
            </li>
            <li className="flex items-start">
              <Check className="w-6 h-6 text-[#18666D] mr-3 flex-shrink-0 mt-1" />
              <span className="text-gray-700">To replace one or more missing teeth</span>
            </li>
            <li className="flex items-start">
              <Check className="w-6 h-6 text-[#18666D] mr-3 flex-shrink-0 mt-1" />
              <span className="text-gray-700">Tooth is cracked or fractured</span>
            </li>
            <li className="flex items-start">
              <Check className="w-6 h-6 text-[#18666D] mr-3 flex-shrink-0 mt-1" />
              <span className="text-gray-700">For cosmetic improvement of tooth appearance</span>
            </li>
          </ul>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl mb-6">What to Expect</h2>
          <div className="space-y-6">
            <div>
              <h3 className="mb-2">1. Initial Consultation</h3>
              <p className="text-gray-700">
                We'll examine your teeth, take X-rays, and discuss your treatment options to determine 
                if crowns or bridges are right for you.
              </p>
            </div>
            <div>
              <h3 className="mb-2">2. Tooth Preparation</h3>
              <p className="text-gray-700">
                The tooth is reshaped to make room for the crown. Impressions are taken to create a 
                custom restoration that fits perfectly.
              </p>
            </div>
            <div>
              <h3 className="mb-2">3. Temporary Crown</h3>
              <p className="text-gray-700">
                A temporary crown is placed to protect your tooth while your permanent restoration 
                is being made in the lab.
              </p>
            </div>
            <div>
              <h3 className="mb-2">4. Final Placement</h3>
              <p className="text-gray-700">
                Once your custom crown or bridge is ready, we'll remove the temporary and cement 
                the permanent restoration in place.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-[#FDFBF7]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Benefits of Crowns and Bridges</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start space-x-3 p-4 bg-white rounded-lg"
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
          <h2 className="text-3xl md:text-4xl mb-4">Ready to Restore Your Smile?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Schedule a consultation to learn more about crowns and bridges.
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