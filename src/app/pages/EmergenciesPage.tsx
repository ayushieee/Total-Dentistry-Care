import { motion } from 'motion/react';
import { Phone, AlertTriangle, Clock, CreditCard, Shield, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function EmergenciesPage() {
  const emergencies = [
    {
      title: 'Severe Toothache',
      description: 'Persistent, intense pain that doesn\'t respond to over-the-counter medication.',
      action: 'Rinse with warm water and call us immediately.',
    },
    {
      title: 'Knocked-Out Tooth',
      description: 'A tooth that has been completely dislodged from its socket.',
      action: 'Handle by the crown, rinse gently, try to reinsert, or keep in milk. Seek immediate care.',
    },
    {
      title: 'Broken or Cracked Tooth',
      description: 'Visible damage to a tooth from trauma or biting on hard objects.',
      action: 'Save any pieces, rinse mouth, apply cold compress, call immediately.',
    },
    {
      title: 'Lost Filling or Crown',
      description: 'A dental restoration that has fallen out or become loose.',
      action: 'Keep the restoration if possible and schedule an emergency appointment.',
    },
    {
      title: 'Abscess',
      description: 'Painful infection at the root of a tooth or in the gums.',
      action: 'Rinse with salt water and seek emergency treatment immediately.',
    },
    {
      title: 'Soft Tissue Injury',
      description: 'Cuts or lacerations to the lips, cheeks, tongue, or gums.',
      action: 'Apply pressure to stop bleeding and seek immediate care.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1765233181361-a11f1e5b3c69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbWVyZ2VuY3klMjBtZWRpY2FsJTIwY2FyZXxlbnwxfHx8fDE3NjYzMDQxNTV8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Emergency Dental Care"
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
            Dental Emergencies
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg max-w-2xl mx-auto"
          >
            Immediate care when you need it most. We're here to help.
          </motion.p>
        </div>
      </section>

      {/* Emergency Contact Banner */}
      <section className="py-8 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <AlertTriangle className="w-8 h-8" />
            <h2 className="text-2xl md:text-3xl">Experiencing a Dental Emergency?</h2>
          </div>
          <p className="text-lg mb-6">
            Call us immediately. We offer same-day emergency appointments.
          </p>
          <a
            href="tel:7182612005"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-red-600 rounded-lg hover:bg-gray-100 transition-colors text-lg"
          >
            <Phone className="w-6 h-6" />
            <span className="whitespace-nowrap">Emergency Line: (718) 261-2005</span>
          </a>
        </div>
      </section>

      {/* Emergency Payment Options */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl mb-8 text-center">Emergency Payment & Insurance</h2>
            <p className="text-gray-700 text-center max-w-3xl mx-auto mb-12">
              We understand that dental emergencies can be stressful, both physically and financially. 
              That's why we offer multiple payment options to ensure you get the urgent care you need 
              without delay. Don't let cost concerns prevent you from seeking immediate treatment.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-[#FDFBF7] p-8 rounded-lg shadow-sm text-center"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-[#18666D] rounded-full mb-4">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <h3 className="mb-3">Insurance Accepted</h3>
                <p className="text-gray-700">
                  We accept most major dental insurance plans. Emergency services are typically 
                  covered under basic or major services, depending on your plan.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-[#FDFBF7] p-8 rounded-lg shadow-sm text-center"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-[#18666D] rounded-full mb-4">
                  <CreditCard className="w-10 h-10 text-white" />
                </div>
                <h3 className="mb-3">CareCredit Available</h3>
                <p className="text-gray-700">
                  Apply for CareCredit financing to break down emergency treatment costs into 
                  affordable monthly payments with special financing options.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-[#FDFBF7] p-8 rounded-lg shadow-sm text-center"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-[#18666D] rounded-full mb-4">
                  <DollarSign className="w-10 h-10 text-white" />
                </div>
                <h3 className="mb-3">Flexible Payment Plans</h3>
                <p className="text-gray-700">
                  We offer in-house payment plans to help you manage emergency treatment costs. 
                  Speak with our team about options that work for your budget.
                </p>
              </motion.div>
            </div>

            <div className="bg-gradient-to-r from-[#0C2D37] to-[#18666D] text-white p-8 rounded-lg text-center">
              <h3 className="mb-3">Don't Wait Due to Cost Concerns</h3>
              <p className="max-w-2xl mx-auto mb-6">
                Delaying emergency dental care can lead to more serious complications and higher costs down the line. 
                Our team will work with you to find a payment solution so you can get the care you need immediately. 
                Call us to discuss your options.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:7182612005"
                  className="inline-flex items-center justify-center space-x-2 px-8 py-3 bg-white text-[#18666D] rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span className="whitespace-nowrap">Call Now</span>
                </a>
                <Link
                  to="/financing"
                  className="inline-flex items-center justify-center space-x-2 px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white hover:text-[#18666D] transition-colors"
                >
                  <span className="whitespace-nowrap">View Financing Options</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Emergencies */}
      <section className="py-20 bg-[#FDFBF7]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Common Dental Emergencies</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Know what to do in case of a dental emergency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {emergencies.map((emergency, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-red-100 rounded-full mb-4">
                  <AlertTriangle className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="mb-2">{emergency.title}</h3>
                <p className="text-gray-600 mb-3 text-sm">{emergency.description}</p>
                <div className="pt-3 border-t border-gray-200">
                  <p className="text-sm">
                    <span className="text-[#8B7D6B]">What to do:</span> {emergency.action}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Do */}
      <section className="py-20 bg-[#FDFBF7]">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl mb-8">Steps to Take in a Dental Emergency</h2>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center">
                1
              </div>
              <div>
                <h3 className="mb-2">Stay Calm</h3>
                <p className="text-gray-700">
                  Take a deep breath and assess the situation. Panicking can make things worse.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center">
                2
              </div>
              <div>
                <h3 className="mb-2">Call Our Office Immediately</h3>
                <p className="text-gray-700">
                  Contact us right away at (718) 261-2005. We prioritize emergency cases and will see you as soon as possible.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center">
                3
              </div>
              <div>
                <h3 className="mb-2">Manage Pain and Bleeding</h3>
                <p className="text-gray-700">
                  Apply cold compresses for swelling. Use clean gauze to stop bleeding. Take over-the-counter pain medication if needed.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center">
                4
              </div>
              <div>
                <h3 className="mb-2">Come to Our Office</h3>
                <p className="text-gray-700">
                  We'll provide immediate treatment to relieve pain and address the emergency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* When to Call */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl mb-8">When to Seek Emergency Care</h2>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg mb-8">
            <h3 className="mb-3 text-yellow-900">Seek Immediate Care If You Experience:</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <AlertTriangle className="w-5 h-5 text-yellow-600 mr-2 flex-shrink-0 mt-1" />
                <span>Severe, uncontrollable pain</span>
              </li>
              <li className="flex items-start">
                <AlertTriangle className="w-5 h-5 text-yellow-600 mr-2 flex-shrink-0 mt-1" />
                <span>Heavy bleeding that won't stop</span>
              </li>
              <li className="flex items-start">
                <AlertTriangle className="w-5 h-5 text-yellow-600 mr-2 flex-shrink-0 mt-1" />
                <span>Signs of infection (swelling, fever, pus)</span>
              </li>
              <li className="flex items-start">
                <AlertTriangle className="w-5 h-5 text-yellow-600 mr-2 flex-shrink-0 mt-1" />
                <span>Trauma to the face or jaw</span>
              </li>
              <li className="flex items-start">
                <AlertTriangle className="w-5 h-5 text-yellow-600 mr-2 flex-shrink-0 mt-1" />
                <span>Knocked-out or severely damaged teeth</span>
              </li>
            </ul>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
            <h3 className="mb-3 text-blue-900">Can Wait for Regular Appointment:</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <Clock className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-1" />
                <span>Minor toothache that responds to pain medication</span>
              </li>
              <li className="flex items-start">
                <Clock className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-1" />
                <span>Lost filling or crown without pain</span>
              </li>
              <li className="flex items-start">
                <Clock className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-1" />
                <span>Small chips in teeth</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Emergency Contact Section */}
      <section className="py-20 bg-gradient-to-r from-[#1e3a5f] to-[#152b47] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl mb-4">We're Here When You Need Us</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Don't wait if you're experiencing a dental emergency. Contact us right away.
          </p>
          <a
            href="tel:7182612005"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-[#1e3a5f] rounded-lg hover:bg-gray-100 transition-colors text-lg"
          >
            <Phone className="w-6 h-6" />
            <span className="whitespace-nowrap">Call (718) 261-2005</span>
          </a>
        </div>
      </section>
    </div>
  );
}