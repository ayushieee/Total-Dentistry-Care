import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight, Scissors } from 'lucide-react';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { FAQ } from '../../components/FAQ';

export function OralSurgeryPage() {
  const benefits = [
    'Relieves pain and discomfort',
    'Prevents future dental problems',
    'Improves oral health and function',
    'Performed with advanced techniques',
    'Sedation options available',
    'Experienced surgical team',
  ];

  const relatedServices = [
    { name: 'Dental Implants', path: '/services/implants' },
    { name: 'Dental Emergencies', path: '/emergencies' },
    { name: 'Root Canal Treatment', path: '/services/root-canal' },
  ];

  const faqItems = [
    {
      question: 'What types of oral surgery do you perform?',
      answer: 'We perform various oral surgery procedures including tooth extractions (including wisdom teeth), dental implant placement, bone grafting, gum surgery, and treatment of oral infections or cysts.',
    },
    {
      question: 'Will I be put to sleep for oral surgery?',
      answer: 'We offer various sedation options depending on the complexity of the procedure and your comfort level, including local anesthesia, nitrous oxide, oral sedation, and IV sedation. We\'ll discuss the best option for you.',
    },
    {
      question: 'How long is recovery after oral surgery?',
      answer: 'Recovery time varies depending on the procedure. Simple extractions may require 3-5 days, while more complex surgeries like impacted wisdom teeth removal may need 7-10 days. We provide detailed post-operative instructions.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
            alt="Oral Surgery"
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
            <Scissors className="w-8 h-8 text-white" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl mb-4"
          >
            Oral Surgery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg max-w-2xl mx-auto"
          >
            Advanced surgical procedures performed with precision and care for optimal outcomes.
          </motion.p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl mb-6">What Is Oral Surgery?</h2>
          <p className="text-gray-700 mb-4">
            Oral surgery encompasses a wide range of surgical procedures involving the mouth, teeth, jaws, 
            and facial structures. These procedures address various dental and medical conditions that 
            cannot be treated with standard dental procedures alone.
          </p>
          <p className="text-gray-700">
            Our experienced team uses the latest surgical techniques and technology to ensure safe, 
            effective treatment with minimal discomfort. We offer various sedation options to keep you 
            comfortable throughout your procedure.
          </p>
        </div>
      </section>

      {/* When You Need This */}
      <section className="py-20 bg-[#FDFBF7]">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl mb-6">Common Oral Surgery Procedures</h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <Check className="w-6 h-6 text-[#18666D] mr-3 flex-shrink-0 mt-1" />
              <span className="text-gray-700">Wisdom teeth removal (impacted or problematic)</span>
            </li>
            <li className="flex items-start">
              <Check className="w-6 h-6 text-[#18666D] mr-3 flex-shrink-0 mt-1" />
              <span className="text-gray-700">Tooth extractions (damaged or decayed teeth)</span>
            </li>
            <li className="flex items-start">
              <Check className="w-6 h-6 text-[#18666D] mr-3 flex-shrink-0 mt-1" />
              <span className="text-gray-700">Dental implant placement</span>
            </li>
            <li className="flex items-start">
              <Check className="w-6 h-6 text-[#18666D] mr-3 flex-shrink-0 mt-1" />
              <span className="text-gray-700">Bone grafting for implant support</span>
            </li>
            <li className="flex items-start">
              <Check className="w-6 h-6 text-[#18666D] mr-3 flex-shrink-0 mt-1" />
              <span className="text-gray-700">Gum disease treatment and gum surgery</span>
            </li>
            <li className="flex items-start">
              <Check className="w-6 h-6 text-[#18666D] mr-3 flex-shrink-0 mt-1" />
              <span className="text-gray-700">Treatment of jaw disorders (TMJ)</span>
            </li>
            <li className="flex items-start">
              <Check className="w-6 h-6 text-[#18666D] mr-3 flex-shrink-0 mt-1" />
              <span className="text-gray-700">Removal of cysts or tumors</span>
            </li>
            <li className="flex items-start">
              <Check className="w-6 h-6 text-[#18666D] mr-3 flex-shrink-0 mt-1" />
              <span className="text-gray-700">Corrective jaw surgery</span>
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
              <h3 className="mb-2">1. Consultation and Planning</h3>
              <p className="text-gray-700">
                Comprehensive examination including X-rays and 3D imaging to assess your condition. 
                We'll discuss the procedure, anesthesia options, and answer all your questions.
              </p>
            </div>
            <div>
              <h3 className="mb-2">2. Pre-Operative Preparation</h3>
              <p className="text-gray-700">
                You'll receive detailed instructions on how to prepare for surgery, including fasting 
                requirements if sedation is planned and what medications to avoid.
              </p>
            </div>
            <div>
              <h3 className="mb-2">3. The Procedure</h3>
              <p className="text-gray-700">
                The surgery is performed using local anesthesia or sedation for your comfort. The 
                duration depends on the complexity of the procedure.
              </p>
            </div>
            <div>
              <h3 className="mb-2">4. Recovery and Aftercare</h3>
              <p className="text-gray-700">
                We provide comprehensive post-operative instructions including pain management, diet 
                recommendations, and activity restrictions. Follow-up appointments ensure proper healing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-[#FDFBF7]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Benefits of Professional Oral Surgery</h2>
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
          <h2 className="text-3xl md:text-4xl mb-4">Need Oral Surgery?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Schedule a consultation to discuss your treatment options with our experienced team.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-3 bg-white text-[#0C2D37] rounded-lg hover:bg-[#D2AF94] transition-colors whitespace-nowrap"
          >
            Book Consultation
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
