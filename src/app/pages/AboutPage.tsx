import { motion } from 'motion/react';
import { Shield, Award, Users, Heart, Zap, Camera, Cpu, Microscope, Gauge } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function AboutPage() {
  const values = [
    {
      icon: Shield,
      title: 'Quality Care',
      description: 'We never compromise on the quality of treatment and materials we provide.',
    },
    {
      icon: Heart,
      title: 'Patient Comfort',
      description: 'Your comfort and well-being are at the heart of everything we do.',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Our experienced professionals stay current with the latest dental advancements.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for excellence in every aspect of our practice.',
    },
  ];

  const team = [
    {
      name: 'Dr. Sarah Smith',
      title: 'Lead Dentist',
      image: 'https://images.unsplash.com/photo-1758205307854-5f0b57c27f17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjB0ZWFtJTIwcHJvZmVzc2lvbmFsc3xlbnwxfHx8fDE3NjY0MDY4MDF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Dr. Michael Chen',
      title: 'Oral Surgeon',
      image: 'https://images.unsplash.com/photo-1619450565660-2a93ba8603fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50aXN0JTIwd29ya2luZ3xlbnwxfHx8fDE3NjYzMTM0NzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Dr. Emily Rodriguez',
      title: 'Cosmetic Dentist',
      image: 'https://images.unsplash.com/photo-1611690061822-b707a67bfebb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50aXN0JTIwc21pbGUlMjBwYXRpZW50fGVufDF8fHx8MTc2NjQwODAwNXww&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1758205307854-5f0b57c27f17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjB0ZWFtJTIwcHJvZmVzc2lvbmFsc3xlbnwxfHx8fDE3NjY0MDY4MDF8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Dental Team"
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
            About Our Practice
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg max-w-2xl mx-auto"
          >
            Committed to providing exceptional dental care in a warm, welcoming environment.
          </motion.p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4">
                Founded in 2005, Kew Gardens Total Dentistry has been serving the community with 
                dedication and excellence for over 15 years. Our practice was built on the foundation 
                of providing comprehensive, patient-centered dental care that combines the latest 
                technology with a personal touch.
              </p>
              <p className="text-gray-700 mb-4">
                We believe that everyone deserves access to high-quality dental care in a comfortable, 
                stress-free environment. Our team of experienced professionals is committed to helping 
                you achieve and maintain optimal oral health while creating beautiful, confident smiles.
              </p>
              <p className="text-gray-700">
                From routine checkups to complex procedures, we treat every patient like family and 
                take the time to understand your unique needs and goals.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1762625570087-6d98fca29531?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkZW50YWwlMjBjbGluaWMlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjYzODE5NDd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Modern Dental Clinic"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-20 bg-[#FDFBF7]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our experienced dental professionals are dedicated to providing you with exceptional care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="h-64 overflow-hidden">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="mb-1">{member.name}</h3>
                  <p className="text-gray-600">{member.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide our practice and define who we are.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-6"
                >
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-[#18666D] rounded-full mb-4">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="py-20 bg-[#FDFBF7]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1642844819197-5f5f21b89ff8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBlcXVpcG1lbnQlMjBtb2Rlcm58ZW58MXx8fHwxNzY2MzU3ODU5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Modern Dental Equipment"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl mb-6">Advanced Technology</h2>
              <p className="text-gray-700 mb-4">
                We invest in the latest dental technology to ensure you receive the most accurate 
                diagnoses and effective treatments available. Our state-of-the-art equipment includes:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <Zap className="w-5 h-5 text-[#18666D] mr-3 mt-0.5 flex-shrink-0" />
                  <span>Digital X-rays for minimal radiation exposure</span>
                </li>
                <li className="flex items-start">
                  <Camera className="w-5 h-5 text-[#18666D] mr-3 mt-0.5 flex-shrink-0" />
                  <span>Intraoral cameras for enhanced visualization</span>
                </li>
                <li className="flex items-start">
                  <Cpu className="w-5 h-5 text-[#18666D] mr-3 mt-0.5 flex-shrink-0" />
                  <span>CAD/CAM technology for same-day restorations</span>
                </li>
                <li className="flex items-start">
                  <Gauge className="w-5 h-5 text-[#18666D] mr-3 mt-0.5 flex-shrink-0" />
                  <span>Laser dentistry for precise, comfortable procedures</span>
                </li>
                <li className="flex items-start">
                  <Microscope className="w-5 h-5 text-[#18666D] mr-3 mt-0.5 flex-shrink-0" />
                  <span>3D imaging for complex cases and implant planning</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}