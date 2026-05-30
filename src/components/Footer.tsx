import { Link } from 'react-router-dom';
import { Circle, Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="flex items-center gap-2">
                <Circle className="w-8 h-8 text-orange-500 fill-orange-500" />
              </div>
              <div>
                <span className="text-xl font-bold text-white">TIRE</span>
                <span className="text-xl font-bold text-orange-500">PRO</span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed">
              Your trusted destination for quality tires and professional services. We've been serving our community with excellence for over 25 years.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-orange-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-orange-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-orange-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="hover:text-orange-500 transition-colors text-sm">Home</Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-orange-500 transition-colors text-sm">Products</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-orange-500 transition-colors text-sm">Services</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-orange-500 transition-colors text-sm">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-orange-500 transition-colors text-sm">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Our Services</h3>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-orange-500 transition-colors cursor-pointer">Tire Installation</li>
              <li className="hover:text-orange-500 transition-colors cursor-pointer">Wheel Alignment</li>
              <li className="hover:text-orange-500 transition-colors cursor-pointer">Tire Rotation</li>
              <li className="hover:text-orange-500 transition-colors cursor-pointer">Flat Tire Repair</li>
              <li className="hover:text-orange-500 transition-colors cursor-pointer">Tire Balancing</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <span>1234 Tire Avenue, Auto District, CA 90210</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <span>info@tirepro.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p>Mon-Fri: 8AM - 6PM</p>
                  <p>Sat: 9AM - 4PM</p>
                  <p>Sun: Closed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © 2024 TirePro. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="hover:text-orange-500 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-orange-500 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
