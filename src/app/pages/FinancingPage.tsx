import { motion } from 'motion/react';
import { Check, CreditCard, DollarSign, Shield, Calendar, Percent, FileText, Phone, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { FAQ } from '../components/FAQ';
import careCreditImg from 'C:\Users\dell\OneDrive\Desktop\total dentistry care\src\assets\8d445acdeb9275147e42d0d8616275c85e8743bc.png';

export function FinancingPage() {
  const benefits = [
    'Flexible payment plans available',
    'Low monthly payments',
    'Fast and easy approval process',
  ];

  const faqItems = [
    {
      question: 'What is CareCredit?',
      answer: 'CareCredit is a healthcare credit card that can be used for dental procedures. It offers special financing options including interest-free periods.',
    },
    {
      question: 'How do I apply for financing?',
      answer: 'You can apply for CareCredit online or in our office. The application takes just a few minutes and you\'ll receive an instant decision.',
    },
    {
      question: 'What if I don\'t qualify for CareCredit?',
      answer: 'We offer in-house payment plans and can work with you to create a payment schedule that fits your budget.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1708685627299-81bfac32402d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXltZW50JTIwZmluYW5jaW5nJTIwaGVhbHRoY2FyZXxlbnwxfHx8fDE3NjY0MDgwMDh8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Financing Options"
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
            Flexible Financing Options
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg max-w-2xl mx-auto"
          >
            Making quality dental care affordable and accessible for everyone.
          </motion.p>
        </div>
      </section>

      {/* Affordable Dental Care Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img 
                src={careCreditImg} 
                alt="CareCredit" 
                className="w-full rounded-lg shadow-lg"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl mb-6">Affordable Dental Care</h2>
              <p className="text-gray-700 leading-relaxed">
                At Kew Gardens Total Dentistry, we believe that everyone deserves access to high-quality dental care 
                without financial stress. That's why we offer a variety of flexible payment options to make your 
                treatments more affordable. Whether you're planning for cosmetic enhancements or need extensive 
                restorative work, our financing solutions ensure you get the care you need when you need it.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CareCredit Detailed Section */}
      <section className="py-20 bg-[#FDFBF7]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl mb-8 text-center">CareCredit: Flexible Payment Plans</h2>
            <p className="text-gray-700 text-center max-w-3xl mx-auto mb-12">
              We proudly offer CareCredit, a convenient financing option designed specifically for dental expenses, 
              including cosmetic and restorative treatments. With CareCredit, you can break down your payments into 
              manageable monthly installments. Benefits include:
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#18666D]"
              >
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-12 h-12 bg-[#18666D] rounded-full flex items-center justify-center flex-shrink-0">
                    <DollarSign className="w-6 h-6 text-white" />
                  </div>
                  <h3>No Initial Payment</h3>
                </div>
                <p className="text-gray-700">
                  Start treatment immediately without upfront costs.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#18666D]"
              >
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-12 h-12 bg-[#18666D] rounded-full flex items-center justify-center flex-shrink-0">
                    <Percent className="w-6 h-6 text-white" />
                  </div>
                  <h3>Low Fixed Rates</h3>
                </div>
                <p className="text-gray-700">
                  Enjoy low interest rates, with some plans offering 0% interest.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#18666D]"
              >
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-12 h-12 bg-[#18666D] rounded-full flex items-center justify-center flex-shrink-0">
                    <CreditCard className="w-6 h-6 text-white" />
                  </div>
                  <h3>Affordable Payments</h3>
                </div>
                <p className="text-gray-700">
                  Flexible options to fit your budget.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#18666D]"
              >
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-12 h-12 bg-[#18666D] rounded-full flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <h3>Deferred First Payment</h3>
                </div>
                <p className="text-gray-700">
                  First payment due in 4-6 weeks.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#18666D]"
              >
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-12 h-12 bg-[#18666D] rounded-full flex items-center justify-center flex-shrink-0">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <h3>No Prepayment Penalty</h3>
                </div>
                <p className="text-gray-700">
                  Pay off early without fees.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#18666D]"
              >
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-12 h-12 bg-[#18666D] rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-6 h-6 text-white" />
                  </div>
                  <h3>Extended Terms</h3>
                </div>
                <p className="text-gray-700">
                  Up to 60 months for larger procedures.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Financing */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Why Choose Our Financing?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-white rounded-lg shadow-sm"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-[#18666D] rounded-full mb-4">
                  <Check className="w-7 h-7 text-white" />
                </div>
                <p className="text-gray-700">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Options */}
      <section className="py-20 bg-[#FDFBF7]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl mb-12 text-center">Payment Options</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-sm"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#18666D] rounded-full mb-4">
                <CreditCard className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-3">CareCredit</h3>
              <p className="text-gray-700 mb-4">
                Healthcare credit card with special financing options including promotional periods with no interest.
              </p>
              <button className="px-6 py-2 bg-[#18666D] text-white rounded-lg hover:bg-[#0C2D37] transition-colors whitespace-nowrap">
                Apply Now
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-8 rounded-lg shadow-sm"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#18666D] rounded-full mb-4">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-3">In-House Plans</h3>
              <p className="text-gray-700 mb-4">
                Flexible payment plans designed to work with your budget. No credit check required.
              </p>
              <Link
                to="/contact"
                className="inline-block px-6 py-2 bg-[#18666D] text-white rounded-lg hover:bg-[#0C2D37] transition-colors whitespace-nowrap"
              >
                Learn More
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-lg shadow-sm"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#18666D] rounded-full mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-3">Insurance Assignment</h3>
              <p className="text-gray-700 mb-4">
                We'll work directly with your insurance provider to maximize your benefits.
              </p>
              <Link
                to="/insurances"
                className="inline-block px-6 py-2 bg-[#18666D] text-white rounded-lg hover:bg-[#0C2D37] transition-colors whitespace-nowrap"
              >
                View Insurance
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Insurance Banner */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl mb-4">Have Dental Insurance?</h3>
          <p className="text-gray-700 mb-6">
            We work with most insurance providers to maximize your benefits.
          </p>
          <Link
            to="/insurances"
            className="inline-block px-8 py-3 bg-[#18666D] text-white rounded-lg hover:bg-[#0C2D37] transition-colors whitespace-nowrap"
          >
            View Insurance Plans
          </Link>
        </div>
      </section>

      {/* How to Apply for CareCredit */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl mb-4">How to Apply for CareCredit</h2>
              <p className="text-gray-700 text-lg max-w-2xl mx-auto">
                Applying for CareCredit is quick, easy, and secure. You can get approved in just a few minutes 
                and start your treatment right away.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-[#0C2D37] to-[#18666D] p-8 rounded-lg text-white"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white mb-1">Call to Apply</h3>
                    <p className="text-white/80 text-sm">Quick phone application</p>
                  </div>
                </div>
                <p className="text-white/90 mb-6">
                  Call our office at <span className="font-semibold">(718) 261-2005</span> and our friendly team 
                  will walk you through the simple application process. Get an instant decision over the phone.
                </p>
                <a
                  href="tel:7182612005"
                  className="inline-block px-6 py-3 bg-white text-[#0C2D37] rounded-lg hover:bg-[#D2AF94] transition-colors whitespace-nowrap"
                >
                  Call (718) 261-2005
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-[#FDFBF7] p-8 rounded-lg border border-[#A6B5B4]"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-[#18666D] rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="mb-1">Apply In-Office</h3>
                    <p className="text-gray-600 text-sm">During your visit</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-6">
                  Visit our office and our team will assist you with the application process in person. We'll 
                  help you complete the application and get you approved quickly so you can start treatment.
                </p>
                <Link
                  to="/contact"
                  className="inline-block px-6 py-3 bg-[#18666D] text-white rounded-lg hover:bg-[#0C2D37] transition-colors whitespace-nowrap"
                >
                  Schedule Visit
                </Link>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 bg-[#D2AF94]/10 border-l-4 border-[#18666D] p-6 rounded-r-lg"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#18666D] rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="mb-2">What You'll Need</h3>
                  <p className="text-gray-700 mb-3">
                    To complete your CareCredit application, have the following information ready:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-[#18666D] mr-2 flex-shrink-0 mt-0.5" />
                      <span>Valid government-issued ID (driver's license, state ID, or passport)</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-[#18666D] mr-2 flex-shrink-0 mt-0.5" />
                      <span>Social Security Number or ITIN</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-[#18666D] mr-2 flex-shrink-0 mt-0.5" />
                      <span>Proof of income (pay stub or bank statement)</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-[#18666D] mr-2 flex-shrink-0 mt-0.5" />
                      <span>Current address and contact information</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-4xl mb-8 text-center">Financing FAQs</h2>
          <FAQ items={faqItems} />
        </div>
      </section>
    </div>
  );
}