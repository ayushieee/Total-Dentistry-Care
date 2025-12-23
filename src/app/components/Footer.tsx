import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';
import logo from '../../assets/c5e7970386e360f4420426beaa12c046b0bee501.png';

export function Footer() {
  const services = [
    { name: 'Dental Crowns and Bridges', path: '/services/crowns-bridges' },
    { name: 'Veneers', path: '/services/veneers' },
    { name: 'Dental Implants', path: '/services/implants' },
    { name: 'Teeth Whitening', path: '/services/whitening' },
    { name: 'Root Canal Treatment', path: '/services/root-canal' },
    { name: 'Dentures', path: '/services/dentures' },
    { name: 'Teeth Cleaning', path: '/services/cleaning' },
    { name: 'Invisalign', path: '/services/invisalign' },
    { name: 'Oral Surgery', path: '/services/oral-surgery' },
  ];

  return (
    <footer className="bg-gradient-to-b from-[#0C2D37] to-[#18666D] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <img 
                src={logo} 
                alt="Total Dentistry Care" 
                className="h-16 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-gray-300 mb-4">
              Your trusted partner for comprehensive dental care in Kew Gardens. 
              We provide exceptional, personalized treatment in a comfortable environment.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-[#D2AF94] transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/insurances" className="text-gray-300 hover:text-[#D2AF94] transition-colors">
                  Insurances
                </Link>
              </li>
              <li>
                <Link to="/financing" className="text-gray-300 hover:text-[#D2AF94] transition-colors">
                  Financing Options
                </Link>
              </li>
              <li>
                <Link to="/emergencies" className="text-gray-300 hover:text-[#D2AF94] transition-colors">
                  Dental Emergencies
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.path}>
                  <Link to={service.path} className="text-gray-300 hover:text-[#D2AF94] transition-colors">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4">Contact Information</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>123 Kew Gardens Road</p>
                  <p>Kew Gardens, NY 11415</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <a href="tel:7182612005" className="text-gray-300 hover:text-white transition-colors">
                  (718) 261-2005
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <a href="mailto:info@kewgardenstotaldentistry.com" className="text-gray-300 hover:text-white transition-colors">
                  info@kewgardenstotaldentistry.com
                </a>
              </div>
              <div className="text-gray-300">
                <p className="mb-1">Office Hours:</p>
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 9:00 AM - 3:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Kew Gardens Total Dentistry. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}