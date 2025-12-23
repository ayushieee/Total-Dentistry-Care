import { motion } from 'motion/react';
import { Check, Phone, Shield, FileCheck, Users, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { FAQ } from '../components/FAQ';
import medicareImg from 'C:\Users\dell\OneDrive\Desktop\total dentistry care\src\assets\755765c175d193ae1c0b231a7116ec6657a8862b.png';
import deltaDentalImg from 'C:\Users\dell\OneDrive\Desktop\total dentistry care\src\assets\4a4f7f00056fe1e65dfa2ffcd3b7a57300a4d3fe.png';
import connectionDentalImg from 'C:\Users\dell\OneDrive\Desktop\total dentistry care\src\assets\9072ee9052c37754a14529e338ef886bd5b9e465.png';

export function InsurancesPage() {
  const insurances = [
    'Aetna', 'Cigna', 'Delta Dental', 'MetLife',
    'Guardian', 'United Healthcare', 'Humana', 'BlueCross BlueShield',
    'Ameritas', 'Principal', 'GEHA', 'Anthem'
  ];

  const faqItems = [
    {
      question: 'Do you accept my insurance?',
      answer: 'We accept most major dental insurance plans. Contact our office to verify if we accept your specific plan.',
    },
    {
      question: 'How do I submit a claim?',
      answer: 'We will file claims on your behalf as a courtesy. You just need to provide us with your insurance information.',
    },
    {
      question: 'What if I don\'t have insurance?',
      answer: 'We offer flexible payment plans and financing options to make dental care affordable for everyone.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1473232117216-c950d4ef2e14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBpbnN1cmFuY2UlMjBmb3Jtc3xlbnwxfHx8fDE3NjY0MDY4MDF8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Dental Insurance"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0C2D37] to-[#18666D] opacity-95"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl mb-4"
          >
            Insurance & Payment Options
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg max-w-2xl mx-auto"
          >
            We work with most insurance providers to maximize your benefits.
          </motion.p>
        </div>
      </section>

      {/* Insurance Benefits Detail */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl mb-8 text-center">Understanding Your Dental Insurance</h2>
            <p className="text-gray-700 text-center max-w-3xl mx-auto mb-12">
              At Kew Gardens Total Dentistry, we understand that navigating dental insurance can be complex. 
              Our experienced team is here to help you maximize your benefits and minimize your out-of-pocket costs. 
              We'll handle the paperwork and work directly with your insurance provider to ensure you receive 
              the coverage you deserve.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-[#FDFBF7] p-8 rounded-lg shadow-sm border-l-4 border-[#18666D]"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-14 h-14 bg-[#18666D] rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="w-7 h-7 text-white" />
                  </div>
                  <h3>Preventive Care</h3>
                </div>
                <p className="text-gray-700 mb-3">
                  Most insurance plans cover preventive services at 100%:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-[#18666D] mr-2 flex-shrink-0 mt-0.5" />
                    <span>Regular cleanings (2 per year)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-[#18666D] mr-2 flex-shrink-0 mt-0.5" />
                    <span>Comprehensive exams</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-[#18666D] mr-2 flex-shrink-0 mt-0.5" />
                    <span>X-rays and diagnostics</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-[#18666D] mr-2 flex-shrink-0 mt-0.5" />
                    <span>Fluoride treatments</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-[#FDFBF7] p-8 rounded-lg shadow-sm border-l-4 border-[#18666D]"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-14 h-14 bg-[#18666D] rounded-full flex items-center justify-center flex-shrink-0">
                    <FileCheck className="w-7 h-7 text-white" />
                  </div>
                  <h3>Basic Services</h3>
                </div>
                <p className="text-gray-700 mb-3">
                  Typically covered at 70-80%:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-[#18666D] mr-2 flex-shrink-0 mt-0.5" />
                    <span>Fillings</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-[#18666D] mr-2 flex-shrink-0 mt-0.5" />
                    <span>Simple extractions</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-[#18666D] mr-2 flex-shrink-0 mt-0.5" />
                    <span>Root canals</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-[#18666D] mr-2 flex-shrink-0 mt-0.5" />
                    <span>Periodontal treatment</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-[#FDFBF7] p-8 rounded-lg shadow-sm border-l-4 border-[#18666D]"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-14 h-14 bg-[#18666D] rounded-full flex items-center justify-center flex-shrink-0">
                    <DollarSign className="w-7 h-7 text-white" />
                  </div>
                  <h3>Major Services</h3>
                </div>
                <p className="text-gray-700 mb-3">
                  Generally covered at 50%:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-[#18666D] mr-2 flex-shrink-0 mt-0.5" />
                    <span>Crowns and bridges</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-[#18666D] mr-2 flex-shrink-0 mt-0.5" />
                    <span>Dentures</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-[#18666D] mr-2 flex-shrink-0 mt-0.5" />
                    <span>Implants (if covered)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-[#18666D] mr-2 flex-shrink-0 mt-0.5" />
                    <span>Oral surgery</span>
                  </li>
                </ul>
              </motion.div>
            </div>

            <div className="bg-gradient-to-r from-[#0C2D37] to-[#18666D] text-white p-8 rounded-lg text-center">
              <h3 className="mb-3">Maximize Your Benefits</h3>
              <p className="max-w-2xl mx-auto mb-6">
                Most dental insurance plans have an annual maximum benefit (typically $1,000-$2,000). 
                Don't leave money on the table! Our team will help you plan treatments to maximize your 
                coverage throughout the year.
              </p>
              <Link
                to="/contact"
                className="inline-block px-8 py-3 bg-white text-[#18666D] rounded-lg hover:bg-gray-100 transition-colors"
              >
                Schedule a Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Accepted Insurance Plans */}
      <section className="py-20 bg-[#FDFBF7]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Accepted Insurance Plans</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We proudly accept most major dental insurance providers.
            </p>
          </div>

          {/* Featured Insurance Providers with Logos */}
          <div className="mb-12">
            <h3 className="text-center mb-12">Featured Providers</h3>
            
            {/* Medicare - Image Left, Content Right */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-8 items-center mb-16 max-w-6xl mx-auto"
            >
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <img 
                  src={medicareImg} 
                  alt="Medicare" 
                  className="w-full h-auto max-h-64 object-contain"
                />
              </div>
              <div>
                <h4 className="mb-4">Medicare</h4>
                <p className="text-gray-700">
                  We accept Medicare Advantage plans that include dental benefits. Our team will verify your 
                  coverage and help you understand what services are included in your plan.
                </p>
              </div>
            </motion.div>

            {/* Delta Dental - Content Left, Image Right */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="grid md:grid-cols-2 gap-8 items-center mb-16 max-w-6xl mx-auto"
            >
              <div className="order-2 md:order-1">
                <h4 className="mb-4">Delta Dental</h4>
                <p className="text-gray-700">
                  As one of the nation's largest dental insurance providers, Delta Dental offers comprehensive 
                  coverage. We're proud to be an in-network provider to maximize your benefits.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm order-1 md:order-2">
                <img 
                  src={deltaDentalImg} 
                  alt="Delta Dental" 
                  className="w-full h-auto max-h-64 object-contain"
                />
              </div>
            </motion.div>

            {/* Connection Dental - Image Left, Content Right */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto"
            >
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <img 
                  src={connectionDentalImg} 
                  alt="Connection Dental" 
                  className="w-full h-auto max-h-64 object-contain"
                />
              </div>
              <div>
                <h4 className="mb-4">Connection Dental</h4>
                <p className="text-gray-700">
                  Connection Dental provides affordable dental insurance with flexible payment options. 
                  We work with their network to ensure you receive quality care at competitive rates.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Additional Insurance Plans List */}
          <div>
            <h3 className="text-center mb-8">Additional Plans We Accept</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {insurances.map((insurance, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="p-6 bg-white rounded-lg shadow-sm text-center border border-gray-100"
                >
                  <p className="text-gray-700">{insurance}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <p className="text-center mt-8 text-gray-600">
            Don't see your insurance? <a href="tel:7182612005" className="text-[#18666D] hover:underline">Call us</a> to verify.
          </p>
        </div>
      </section>

      {/* How Insurance Works */}
      <section className="py-20 bg-[#FDFBF7]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl mb-12 text-center">How Dental Insurance Works</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBpbnN1cmFuY2UlMjBwbGFubmluZ3xlbnwxfHx8fDE3NjYzODE5NDd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Insurance Planning"
                className="w-full h-[500px] object-cover rounded-lg shadow-lg"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-[#18666D] text-white rounded-full flex items-center justify-center">
                  1
                </div>
                <div>
                  <h3 className="mb-2">Verification</h3>
                  <p className="text-gray-700">
                    Provide us with your insurance information, and we'll verify your coverage and benefits.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-[#18666D] text-white rounded-full flex items-center justify-center">
                  2
                </div>
                <div>
                  <h3 className="mb-2">Treatment Planning</h3>
                  <p className="text-gray-700">
                    We'll create a treatment plan and estimate your out-of-pocket costs based on your benefits.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-[#18666D] text-white rounded-full flex items-center justify-center">
                  3
                </div>
                <div>
                  <h3 className="mb-2">Claims Filing</h3>
                  <p className="text-gray-700">
                    We'll file your insurance claims on your behalf to maximize your benefits.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-[#18666D] text-white rounded-full flex items-center justify-center">
                  4
                </div>
                <div>
                  <h3 className="mb-2">Payment</h3>
                  <p className="text-gray-700">
                    You'll be responsible for any remaining balance after insurance, with flexible payment options available.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-4xl mb-8 text-center">Insurance FAQs</h2>
          <FAQ items={faqItems} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#18666D] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl mb-4">Questions About Your Insurance?</h2>
          <p className="text-lg mb-8">
            Our team is here to help you understand your benefits.
          </p>
          <a
            href="tel:7182612005"
            className="inline-flex items-center space-x-2 px-8 py-3 bg-white text-[#18666D] rounded-lg hover:bg-gray-100 transition-colors"
          >
            <Phone className="w-5 h-5" />
            <span className="whitespace-nowrap">Call (718) 261-2005</span>
          </a>
        </div>
      </section>
    </div>
  );
}