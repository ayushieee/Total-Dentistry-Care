import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight, Droplets } from 'lucide-react';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { FAQ } from '../../components/FAQ';

export function CleaningPage() {
  const benefits = [
    'Prevents cavities and tooth decay',
    'Prevents gum disease',
    'Freshens breath',
    'Removes surface stains for a brighter smile',
    'Detects dental problems early',
    'Improves overall health',
  ];

  const relatedServices = [
    { name: 'Teeth Whitening', path: '/services/whitening' },
    { name: 'Dental Crowns', path: '/services/crowns-bridges' },
    { name: 'Root Canal Treatment', path: '/services/root-canal' },
  ];

  const faqItems = [
    {
      question: 'How often should I get my teeth cleaned?',
      answer: 'Most patients should have their teeth professionally cleaned every six months. However, some patients with gum disease or other oral health issues may need more frequent cleanings.',
    },
    {
      question: 'Is teeth cleaning painful?',
      answer: 'Professional teeth cleaning is generally not painful. You may experience some sensitivity or mild discomfort, especially if you have sensitive teeth or gum disease. Let us know if you experience any discomfort.',
    },
    {
      question: 'What\'s the difference between a regular cleaning and deep cleaning?',
      answer: 'Regular cleaning (prophylaxis) maintains healthy gums and teeth. Deep cleaning (scaling and root planing) treats gum disease by cleaning below the gum line and smoothing tooth roots.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
            alt="Teeth Cleaning"
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
            <Droplets className="w-8 h-8 text-white" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl mb-4"
          >
            Professional Teeth Cleaning
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg max-w-2xl mx-auto"
          >
            Maintain optimal oral health with regular professional cleanings and exams.
          </motion.p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl mb-6">What Is Professional Teeth Cleaning?</h2>
          <p className="text-gray-700 mb-4">
            Professional teeth cleaning, also known as prophylaxis or dental prophylaxis, is a preventive 
            dental procedure performed by a dental hygienist or dentist. It involves removing plaque, 
            tartar (calculus), and stains from your teeth to prevent cavities, gum disease, and other 
            oral health problems.
          </p>
          <p className="text-gray-700">
            Regular professional cleanings are essential for maintaining good oral health. Even with 
            excellent home care, plaque and tartar can build up in hard-to-reach areas. Professional 
            cleanings ensure your teeth and gums stay healthy between dental visits.
          </p>
        </div>
      </section>

      {/* When You Need This */}
      <section className="py-20 bg-[#FDFBF7]">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl mb-6">When You Need Teeth Cleaning</h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <Check className="w-6 h-6 text-[#18666D] mr-3 flex-shrink-0 mt-1" />
              <span className="text-gray-700">Every six months for routine preventive care</span>
            </li>
            <li className="flex items-start">
              <Check className="w-6 h-6 text-[#18666D] mr-3 flex-shrink-0 mt-1" />
              <span className="text-gray-700">When you notice plaque or tartar buildup</span>
            </li>
            <li className="flex items-start">
              <Check className="w-6 h-6 text-[#18666D] mr-3 flex-shrink-0 mt-1" />
              <span className="text-gray-700">If your gums bleed when brushing or flossing</span>
            </li>
            <li className="flex items-start">
              <Check className="w-6 h-6 text-[#18666D] mr-3 flex-shrink-0 mt-1" />
              <span className="text-gray-700">Persistent bad breath</span>
            </li>
            <li className="flex items-start">
              <Check className="w-6 h-6 text-[#18666D] mr-3 flex-shrink-0 mt-1" />
              <span className="text-gray-700">Visible stains on teeth</span>
            </li>
            <li className="flex items-start">
              <Check className="w-6 h-6 text-[#18666D] mr-3 flex-shrink-0 mt-1" />
              <span className="text-gray-700">Before other dental treatments</span>
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
              <h3 className="mb-2">1. Examination</h3>
              <p className="text-gray-700">
                Your hygienist will examine your mouth for signs of gum disease, cavities, or other 
                concerns. X-rays may be taken if needed.
              </p>
            </div>
            <div>
              <h3 className="mb-2">2. Plaque and Tartar Removal</h3>
              <p className="text-gray-700">
                Using specialized instruments, your hygienist will carefully remove plaque and tartar 
                buildup from around your gum line and between your teeth.
              </p>
            </div>
            <div>
              <h3 className="mb-2">3. Professional Cleaning</h3>
              <p className="text-gray-700">
                Your teeth are polished with a gritty toothpaste using a high-powered electric brush 
                to remove surface stains and remaining plaque.
              </p>
            </div>
            <div>
              <h3 className="mb-2">4. Flossing and Fluoride Treatment</h3>
              <p className="text-gray-700">
                Expert flossing removes any remaining debris. A fluoride treatment may be applied to 
                strengthen enamel and prevent cavities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-[#FDFBF7]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Benefits of Regular Teeth Cleaning</h2>
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
          <h2 className="text-3xl md:text-4xl mb-4">Schedule Your Cleaning Today</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Maintain your oral health with regular professional cleanings every six months.
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