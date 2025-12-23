import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight, Smile } from 'lucide-react';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { FAQ } from '../../components/FAQ';

export function DenturesPage() {
  const benefits = [
    'Restores ability to eat and speak properly',
    'Improves facial appearance and smile',
    'More affordable than implants',
    'Can be adjusted or relined as needed',
    'Prevents remaining teeth from shifting',
    'Boosts self-confidence',
  ];

  const relatedServices = [
    { name: 'Dental Implants', path: '/services/implants' },
    { name: 'Dental Crowns', path: '/services/crowns-bridges' },
    { name: 'Oral Surgery', path: '/services/oral-surgery' },
  ];

  const faqItems = [
    {
      question: 'How long do dentures last?',
      answer: 'With proper care, dentures typically last 5-10 years. Over time, they may need to be relined, rebased, or remade due to normal wear or changes in your mouth.',
    },
    {
      question: 'Will dentures look natural?',
      answer: 'Yes! Modern dentures are designed to look natural and are customized to match your facial features and remaining teeth. Most people won\'t be able to tell you\'re wearing dentures.',
    },
    {
      question: 'How do I care for my dentures?',
      answer: 'Clean your dentures daily with a soft brush and denture cleaner. Remove them at night, rinse your mouth, and store dentures in water or denture solution. Regular dental checkups are important.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
            alt="Dentures"
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
            <Smile className="w-8 h-8 text-white" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl mb-4"
          >
            Dentures
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg max-w-2xl mx-auto"
          >
            Restore your smile and confidence with natural-looking, comfortable dentures.
          </motion.p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl mb-6">What Are Dentures?</h2>
          <p className="text-gray-700 mb-4">
            Dentures are removable replacements for missing teeth and surrounding tissues. They're custom-made 
            to fit your mouth and can replace all of your teeth (complete dentures) or just a few missing 
            teeth (partial dentures). Modern dentures are designed to look natural and function comfortably.
          </p>
          <p className="text-gray-700">
            There are several types of dentures available, including traditional full dentures, partial 
            dentures, immediate dentures, and implant-supported dentures. We'll help you determine which 
            option is best suited to your needs and budget.
          </p>
        </div>
      </section>

      {/* When You Need This */}
      <section className="py-20 bg-[#FDFBF7]">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl mb-6">When You Might Need Dentures</h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <Check className="w-6 h-6 text-[#18666D] mr-3 flex-shrink-0 mt-1" />
              <span className="text-gray-700">Missing most or all of your teeth</span>
            </li>
            <li className="flex items-start">
              <Check className="w-6 h-6 text-[#18666D] mr-3 flex-shrink-0 mt-1" />
              <span className="text-gray-700">Difficulty eating or speaking due to missing teeth</span>
            </li>
            <li className="flex items-start">
              <Check className="w-6 h-6 text-[#18666D] mr-3 flex-shrink-0 mt-1" />
              <span className="text-gray-700">Remaining teeth are severely damaged or decayed</span>
            </li>
            <li className="flex items-start">
              <Check className="w-6 h-6 text-[#18666D] mr-3 flex-shrink-0 mt-1" />
              <span className="text-gray-700">Need a more affordable alternative to implants</span>
            </li>
            <li className="flex items-start">
              <Check className="w-6 h-6 text-[#18666D] mr-3 flex-shrink-0 mt-1" />
              <span className="text-gray-700">Facial structure has changed due to tooth loss</span>
            </li>
            <li className="flex items-start">
              <Check className="w-6 h-6 text-[#18666D] mr-3 flex-shrink-0 mt-1" />
              <span className="text-gray-700">Self-conscious about your smile</span>
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
                We'll examine your mouth, take impressions, and discuss your options. If teeth need 
                to be extracted, we'll create a treatment plan.
              </p>
            </div>
            <div>
              <h3 className="mb-2">2. Impressions and Measurements</h3>
              <p className="text-gray-700">
                Precise impressions and measurements of your mouth are taken to ensure your dentures 
                fit comfortably and look natural.
              </p>
            </div>
            <div>
              <h3 className="mb-2">3. Try-In Appointment</h3>
              <p className="text-gray-700">
                You'll try temporary dentures to check the fit, color, and shape. Adjustments can 
                be made before the final dentures are created.
              </p>
            </div>
            <div>
              <h3 className="mb-2">4. Final Fitting</h3>
              <p className="text-gray-700">
                Your custom dentures are placed, and we'll make any necessary adjustments for comfort. 
                You'll receive instructions on care and maintenance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-[#FDFBF7]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Benefits of Dentures</h2>
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
          <h2 className="text-3xl md:text-4xl mb-4">Ready to Restore Your Smile?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Schedule a consultation to learn which denture option is right for you.
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
