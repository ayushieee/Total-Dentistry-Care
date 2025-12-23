import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight, Zap } from 'lucide-react';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { FAQ } from '../../components/FAQ';

export function InvisalignPage() {
  const benefits = [
    'Virtually invisible aligners',
    'Removable for eating and cleaning',
    'More comfortable than traditional braces',
    'Fewer office visits required',
    'Predictable results with digital planning',
    'Effective for most orthodontic issues',
  ];

  const relatedServices = [
    { name: 'Veneers', path: '/services/veneers' },
    { name: 'Teeth Whitening', path: '/services/whitening' },
    { name: 'Dental Crowns', path: '/services/crowns-bridges' },
  ];

  const faqItems = [
    {
      question: 'How long does Invisalign treatment take?',
      answer: 'Treatment time varies depending on your specific case, but most patients complete their treatment in 12-18 months. Some simple cases may take as little as 6 months.',
    },
    {
      question: 'How often do I need to wear my aligners?',
      answer: 'You should wear your Invisalign aligners 20-22 hours per day, removing them only for eating, drinking (except water), and cleaning your teeth.',
    },
    {
      question: 'Does Invisalign hurt?',
      answer: 'You may experience some pressure or mild discomfort when you start wearing a new set of aligners, but this is normal and means the treatment is working. Most patients find Invisalign more comfortable than traditional braces.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
            alt="Invisalign Clear Aligners"
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
            <Zap className="w-8 h-8 text-white" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl mb-4"
          >
            Invisalign® Clear Aligners
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg max-w-2xl mx-auto"
          >
            Straighten your teeth discreetly with the clear alternative to traditional braces.
          </motion.p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl mb-6">What Is Invisalign?</h2>
          <p className="text-gray-700 mb-4">
            Invisalign is a modern orthodontic treatment that uses a series of custom-made, clear plastic 
            aligners to gradually straighten your teeth. Unlike traditional metal braces, Invisalign 
            aligners are virtually invisible, removable, and designed for comfort.
          </p>
          <p className="text-gray-700">
            Each set of aligners is worn for about two weeks before moving to the next set in the series. 
            Your teeth move little by little, week by week, until they've reached the desired position. 
            The treatment is planned digitally, so you can see your expected results before you even start.
          </p>
        </div>
      </section>

      {/* When You Need This */}
      <section className="py-20 bg-[#FDFBF7]">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl mb-6">When You Might Need Invisalign</h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <Check className="w-6 h-6 text-[#18666D] mr-3 flex-shrink-0 mt-1" />
              <span className="text-gray-700">Crowded or overlapping teeth</span>
            </li>
            <li className="flex items-start">
              <Check className="w-6 h-6 text-[#18666D] mr-3 flex-shrink-0 mt-1" />
              <span className="text-gray-700">Gaps or spaces between teeth</span>
            </li>
            <li className="flex items-start">
              <Check className="w-6 h-6 text-[#18666D] mr-3 flex-shrink-0 mt-1" />
              <span className="text-gray-700">Overbite, underbite, or crossbite</span>
            </li>
            <li className="flex items-start">
              <Check className="w-6 h-6 text-[#18666D] mr-3 flex-shrink-0 mt-1" />
              <span className="text-gray-700">Want to straighten teeth without visible braces</span>
            </li>
            <li className="flex items-start">
              <Check className="w-6 h-6 text-[#18666D] mr-3 flex-shrink-0 mt-1" />
              <span className="text-gray-700">Need a flexible orthodontic option</span>
            </li>
            <li className="flex items-start">
              <Check className="w-6 h-6 text-[#18666D] mr-3 flex-shrink-0 mt-1" />
              <span className="text-gray-700">Adults or teens seeking discreet treatment</span>
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
                We'll evaluate your teeth and discuss your smile goals. Digital scans or impressions 
                are taken to create a 3D model of your teeth.
              </p>
            </div>
            <div>
              <h3 className="mb-2">2. Custom Treatment Plan</h3>
              <p className="text-gray-700">
                Using advanced software, we'll create a precise treatment plan showing how your teeth 
                will move at each stage. You'll see a preview of your future smile.
              </p>
            </div>
            <div>
              <h3 className="mb-2">3. Receive Your Aligners</h3>
              <p className="text-gray-700">
                Your custom aligners are manufactured and delivered to our office. You'll receive 
                several sets at once and instructions on when to switch to the next set.
              </p>
            </div>
            <div>
              <h3 className="mb-2">4. Wear and Progress</h3>
              <p className="text-gray-700">
                Wear your aligners 20-22 hours daily, removing them only for meals and cleaning. 
                You'll have periodic checkups to monitor progress and receive new aligners.
              </p>
            </div>
            <div>
              <h3 className="mb-2">5. Retainers</h3>
              <p className="text-gray-700">
                After treatment, you'll wear retainers to maintain your new smile and prevent teeth 
                from shifting back to their original positions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-[#FDFBF7]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Benefits of Invisalign</h2>
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
          <h2 className="text-3xl md:text-4xl mb-4">Ready to Transform Your Smile?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Schedule a free Invisalign consultation to see if clear aligners are right for you.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-3 bg-white text-[#0C2D37] rounded-lg hover:bg-[#D2AF94] transition-colors whitespace-nowrap"
          >
            Book Free Consultation
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
