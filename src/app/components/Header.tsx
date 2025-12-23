import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Menu, X, ChevronDown } from 'lucide-react';
import logo from '../../assets/c5e7970386e360f4420426beaa12c046b0bee501.png';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

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
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src={logo} 
              alt="Total Dentistry Care" 
              className="h-14 md:h-20 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-[#18666D] transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-[#18666D] transition-colors">
              About
            </Link>
            
            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="flex items-center space-x-1 text-gray-700 hover:text-[#18666D] transition-colors">
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-lg py-2">
                  {services.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#D2AF94]/20 hover:text-[#18666D] transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                  <Link
                    to="/services"
                    className="block px-4 py-2 text-sm text-[#18666D] hover:bg-[#D2AF94]/20 transition-colors border-t mt-2 pt-3"
                  >
                    View All Services →
                  </Link>
                </div>
              )}
            </div>

            <Link to="/contact" className="text-gray-700 hover:text-[#18666D] transition-colors">
              Contact
            </Link>
            <Link to="/insurances" className="text-gray-700 hover:text-[#18666D] transition-colors">
              Insurances
            </Link>
            <Link to="/financing" className="text-gray-700 hover:text-[#18666D] transition-colors">
              Financing
            </Link>
            <Link to="/emergencies" className="text-gray-700 hover:text-[#18666D] transition-colors">
              Dental Emergencies
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:7182612005"
              className="flex items-center space-x-2 px-4 py-2 text-[#18666D] border border-[#18666D] rounded-lg hover:bg-[#18666D] hover:text-white transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="whitespace-nowrap">Call (718) 261-2005</span>
            </a>
            <Link
              to="/contact"
              className="px-6 py-2 bg-[#18666D] text-white rounded-lg hover:bg-[#0C2D37] transition-colors whitespace-nowrap"
            >
              Book Appointment
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t overflow-hidden"
          >
            <nav className="container mx-auto px-4 py-4 space-y-4">
              <Link to="/" className="block py-2 text-gray-700 hover:text-[#18666D]">
                Home
              </Link>
              <Link to="/about" className="block py-2 text-gray-700 hover:text-[#18666D]">
                About
              </Link>
              
              {/* Mobile Services Dropdown */}
              <div>
                <button 
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                  className="flex items-center justify-between w-full py-2 text-gray-700 hover:text-[#18666D]"
                >
                  <span>Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {isMobileServicesOpen && (
                  <div className="pl-4 mt-2 space-y-2">
                    {services.map((service) => (
                      <Link
                        key={service.path}
                        to={service.path}
                        className="block py-2 text-sm text-gray-600 hover:text-[#18666D]"
                      >
                        {service.name}
                      </Link>
                    ))}
                    <Link
                      to="/services"
                      className="block py-2 text-sm text-[#18666D] hover:text-[#0C2D37]"
                    >
                      View All Services →
                    </Link>
                  </div>
                )}
              </div>
              
              <Link to="/contact" className="block py-2 text-gray-700 hover:text-[#18666D]">
                Contact
              </Link>
              <Link to="/insurances" className="block py-2 text-gray-700 hover:text-[#18666D]">
                Insurances
              </Link>
              <Link to="/financing" className="block py-2 text-gray-700 hover:text-[#18666D]">
                Financing
              </Link>
              <Link to="/emergencies" className="block py-2 text-gray-700 hover:text-[#18666D]">
                Dental Emergencies
              </Link>
              
              <div className="pt-4 space-y-3 border-t">
                <a
                  href="tel:7182612005"
                  className="flex items-center justify-center space-x-2 px-4 py-2 text-[#18666D] border border-[#18666D] rounded-lg"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call (718) 261-2005</span>
                </a>
                <Link
                  to="/contact"
                  className="block text-center px-6 py-2 bg-[#18666D] text-white rounded-lg"
                >
                  Book Appointment
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}