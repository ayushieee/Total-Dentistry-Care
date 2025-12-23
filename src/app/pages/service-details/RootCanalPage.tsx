import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight, Heart } from 'lucide-react';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { FAQ } from '../../components/FAQ';

export function RootCanalPage() {
  const benefits = [
    'Eliminates tooth pain and infection',
    'Saves your natural tooth',
    'Prevents spread of infection',
    'Restores normal biting and chewing',
    'Protects surrounding teeth',
    'More cost-effective than extraction and replacement',
  ];

  const relatedServices = [
    { name: 'Dental Crowns', path: '/services/crowns-bridges' },
    { name: 'Dental Emergencies', path: '/emergencies' },
    { name: 'Dental Implants', path: '/services/implants' },
  ];

  const faqItems = [
    {
      question: 'Is a root canal painful?',
      answer: 'Root canal treatment is performed under local anesthesia, so you shouldn\'t feel pain during the procedure. Modern techniques and anesthesia make root canals no more uncomfortable than getting a filling.',
    },
    {
      question: 'How long does a root canal take?',
      answer: 'Most root canals can be completed in one or two appointments, each lasting 60-90 minutes. The exact time depends on which tooth is being treated and the complexity of the case.',
    },
    {
      question: 'What happens after a root canal?',
      answer: 'After the root canal, a crown is typically placed to protect and strengthen the tooth. With proper care, a tooth that has had a root canal can last a lifetime.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
            alt="Root Canal Treatment"
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
            <Heart className="w-8 h-8 text-white" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl mb-4"
          >
            Root Canal Treatment
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg max-w-2xl mx-auto"
          >
            Save your natural tooth and eliminate pain with gentle, effective root canal therapy.
          </motion.p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl mb-6">What Is Root Canal Treatment?</h2>
          <p className="text-gray-700 mb-4">
            Root canal treatment (also called endodontic therapy) is a dental procedure used to treat 
            infection at the center of a tooth. It involves removing the infected or damaged pulp (the 
            soft tissue inside the tooth containing nerves and blood vessels), cleaning and disinfecting 
            the root canals, and sealing them to prevent future infection.
          </p>
          <p className="text-gray-700">
            Contrary to popular belief, root canals are not painful—they actually relieve the pain 
            caused by tooth infection. Modern techniques and anesthesia make the procedure comfortable 
            and allow you to save your natural tooth.
          </p>
        </div>
      </section>

      {/* When You Need This */}
      <section className="py-20 bg-[#FDFBF7]">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl mb-6">When You Might Need a Root Canal</h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <Check className="w-6 h-6 text-[#18666D] mr-3 flex-shrink-0 mt-1" />
              <span className="text-gray-700">Severe toothache when chewing or applying pressure</span>
            </li>
            <li className="flex items-start">
              <Check className="w-6 h-6 text-[#18666D] mr-3 flex-shrink-0 mt-1" />
              <span className="text-gray-700">Prolonged sensitivity to hot or cold temperatures</span>
            </li>
            <li className="flex items-start">
              <Check className="w-6 h-6 text-[#18666D] mr-3 flex-shrink-0 mt-1" />
              <span className="text-gray-700">Darkening or discoloration of the tooth</span>
            </li>
            <li className="flex items-start">
              <Check className="w-6 h-6 text-[#18666D] mr-3 flex-shrink-0 mt-1" />
              <span className="text-gray-700">Swelling and tenderness in nearby gums</span>
            </li>
            <li className="flex items-start">
              <Check className="w-6 h-6 text-[#18666D] mr-3 flex-shrink-0 mt-1" />
              <span className="text-gray-700">Persistent or recurring pimple on the gums</span>
            </li>
            <li className="flex items-start">
              <Check className="w-6 h-6 text-[#18666D] mr-3 flex-shrink-0 mt-1" />
              <span className="text-gray-700">Deep decay or repeated dental procedures on the tooth</span>
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
              <h3 className="mb-2">1. Diagnosis and X-rays</h3>
              <p className="text-gray-700">
                We'll take X-rays to determine the extent of infection and assess the shape of the 
                root canals. A thorough examination confirms whether root canal treatment is necessary.
              </p>
            </div>
            <div>
              <h3 className="mb-2">2. Anesthesia and Isolation</h3>
              <p className="text-gray-700">
                Local anesthesia is administered to numb the tooth. A rubber dam is placed to keep 
                the area dry and free of saliva during treatment.
              </p>
            </div>
            <div>
              <h3 className="mb-2">3. Cleaning and Shaping</h3>
              <p className="text-gray-700">
                An opening is made in the crown of the tooth, and the infected pulp is removed. The 
                root canals are cleaned, shaped, and disinfected.
              </p>
            </div>
            <div>
              <h3 className="mb-2">4. Filling and Sealing</h3>
              <p className="text-gray-700">
                The canals are filled with a biocompatible material and sealed. A temporary filling 
                is placed until a permanent crown can be placed to protect the tooth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-[#FDFBF7]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Benefits of Root Canal Treatment</h2>
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
          <h2 className="text-3xl md:text-4xl mb-4">Experiencing Tooth Pain?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Don't wait—contact us immediately for relief and to save your natural tooth.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-3 bg-white text-[#0C2D37] rounded-lg hover:bg-[#D2AF94] transition-colors whitespace-nowrap"
          >
            Book Emergency Appointment
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
