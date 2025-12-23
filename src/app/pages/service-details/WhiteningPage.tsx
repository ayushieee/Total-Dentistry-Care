import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight, Sun } from 'lucide-react';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { FAQ } from '../../components/FAQ';

export function WhiteningPage() {
  const benefits = [
    'Brighter smile in just one visit',
    'Safe and effective professional treatment',
    'Customized to your desired shade',
    'Removes years of stains and discoloration',
    'Boosts confidence and self-esteem',
    'Non-invasive cosmetic procedure',
  ];

  const relatedServices = [
    { name: 'Veneers', path: '/services/veneers' },
    { name: 'Teeth Cleaning', path: '/services/cleaning' },
    { name: 'Dental Crowns', path: '/services/crowns-bridges' },
  ];

  const faqItems = [
    {
      question: 'How long does teeth whitening last?',
      answer: 'Results typically last 1-3 years, depending on your oral hygiene habits and lifestyle. Avoiding staining foods and beverages, and maintaining good oral care can help extend the results.',
    },
    {
      question: 'Is teeth whitening safe?',
      answer: 'Yes, professional teeth whitening performed by a dentist is safe and effective. We use carefully controlled methods to minimize sensitivity while achieving optimal results.',
    },
    {
      question: 'Will my teeth be sensitive after whitening?',
      answer: 'Some patients experience temporary tooth sensitivity after whitening, but it typically subsides within a few days. We can recommend products to help manage any sensitivity.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1609137144813-7d9921338f24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
            alt="Teeth Whitening"
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
            <Sun className="w-8 h-8 text-white" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl mb-4"
          >
            Professional Teeth Whitening
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg max-w-2xl mx-auto"
          >
            Achieve a brighter, more radiant smile with our professional whitening treatments.
          </motion.p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl mb-6">What Is Professional Teeth Whitening?</h2>
          <p className="text-gray-700 mb-4">
            Professional teeth whitening is a cosmetic dental procedure that uses advanced whitening 
            agents to remove stains and discoloration from your teeth. Unlike over-the-counter products, 
            our professional treatments deliver faster, more dramatic, and longer-lasting results.
          </p>
          <p className="text-gray-700">
            We offer both in-office whitening treatments that can brighten your smile in a single visit, 
            and take-home kits with custom-fitted trays for convenient whitening at your own pace.
          </p>
        </div>
      </section>

      {/* When You Need This */}
      <section className="py-20 bg-[#FDFBF7]">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl mb-6">When You Might Need Teeth Whitening</h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <Check className="w-6 h-6 text-[#18666D] mr-3 flex-shrink-0 mt-1" />
              <span className="text-gray-700">Stained teeth from coffee, tea, or wine</span>
            </li>
            <li className="flex items-start">
              <Check className="w-6 h-6 text-[#18666D] mr-3 flex-shrink-0 mt-1" />
              <span className="text-gray-700">Yellow or discolored teeth from aging</span>
            </li>
            <li className="flex items-start">
              <Check className="w-6 h-6 text-[#18666D] mr-3 flex-shrink-0 mt-1" />
              <span className="text-gray-700">Tobacco staining</span>
            </li>
            <li className="flex items-start">
              <Check className="w-6 h-6 text-[#18666D] mr-3 flex-shrink-0 mt-1" />
              <span className="text-gray-700">Preparing for a special event or occasion</span>
            </li>
            <li className="flex items-start">
              <Check className="w-6 h-6 text-[#18666D] mr-3 flex-shrink-0 mt-1" />
              <span className="text-gray-700">Wanting to boost your confidence</span>
            </li>
            <li className="flex items-start">
              <Check className="w-6 h-6 text-[#18666D] mr-3 flex-shrink-0 mt-1" />
              <span className="text-gray-700">Surface stains from certain medications</span>
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
                We'll examine your teeth and discuss your whitening goals. We'll determine the best 
                whitening option for you and establish your current shade.
              </p>
            </div>
            <div>
              <h3 className="mb-2">2. Pre-Treatment Preparation</h3>
              <p className="text-gray-700">
                Your teeth will be cleaned to remove any plaque or debris. We'll protect your gums 
                and soft tissues before applying the whitening agent.
              </p>
            </div>
            <div>
              <h3 className="mb-2">3. Whitening Treatment</h3>
              <p className="text-gray-700">
                Professional-strength whitening gel is applied to your teeth. For in-office treatments, 
                a special light may be used to activate the gel and enhance results.
              </p>
            </div>
            <div>
              <h3 className="mb-2">4. Post-Treatment Care</h3>
              <p className="text-gray-700">
                We'll provide guidance on maintaining your brighter smile and may recommend touch-up 
                treatments or take-home kits for ongoing maintenance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-[#FDFBF7]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Benefits of Professional Teeth Whitening</h2>
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
          <h2 className="text-3xl md:text-4xl mb-4">Ready for a Brighter Smile?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Schedule a consultation to discover which whitening option is best for you.
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
