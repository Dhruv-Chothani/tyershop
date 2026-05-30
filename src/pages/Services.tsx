import { Link } from 'react-router-dom';
import { Wrench, RotateCcw, AlignCenter, Gauge, AlertTriangle, Circle, ArrowRight, CheckCircle, Clock, Shield } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Wrench,
      title: 'Tire Installation',
      description: 'Professional mounting and installation of all tire types by certified technicians.',
      price: 'From $25/tire',
      features: ['Professional mounting', 'Valve stem replacement', 'Disposal of old tires', 'Road hazard warranty available'],
      image: 'https://images.pexels.com/photos/4219702/pexels-photo-4219702.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: AlignCenter,
      title: 'Wheel Alignment',
      description: 'Precision alignment service to improve handling and extend tire life.',
      price: 'From $89',
      features: ['Computerized alignment', 'Four-wheel adjustment', 'Printed report', 'Improved fuel efficiency'],
      image: 'https://images.pexels.com/photos/4219700/pexels-photo-4219700.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: RotateCcw,
      title: 'Tire Rotation',
      description: 'Regular rotation to ensure even wear and maximize tire lifespan.',
      price: 'From $29',
      features: ['Pattern rotation', 'Pressure check', 'Visual inspection', 'Wear assessment'],
      image: 'https://images.pexels.com/photos/112860/pexels-photo-112860.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Gauge,
      title: 'Tire Balancing',
      description: 'Precision balancing for a smooth, vibration-free ride.',
      price: 'From $15/tire',
      features: ['Dynamic balancing', 'Weight adjustment', 'Smooth ride guarantee', 'High-speed balance'],
      image: 'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: AlertTriangle,
      title: 'Flat Tire Repair',
      description: 'Quick and reliable repair for punctured tires when possible.',
      price: 'From $35',
      features: ['Puncture repair', 'Safety inspection', 'Plug or patch', 'Air pressure refill'],
      image: 'https://images.pexels.com/photos/29340881/pexels-photo-29340881.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Circle,
      title: 'Tire Inspection',
      description: 'Comprehensive inspection to assess tire condition and safety.',
      price: 'Free',
      features: ['Tread depth check', 'Sidewall inspection', 'Pressure check', 'Wear pattern analysis'],
      image: 'https://images.pexels.com/photos/11732142/pexels-photo-11732142.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  const packages = [
    {
      name: 'Basic Care',
      price: 49,
      services: ['Tire Rotation', 'Pressure Check', 'Visual Inspection'],
      highlight: false,
    },
    {
      name: 'Standard Care',
      price: 99,
      services: ['Tire Rotation', 'Balance All Wheels', 'Alignment Check', 'Full Inspection'],
      highlight: true,
    },
    {
      name: 'Premium Care',
      price: 149,
      services: ['Tire Rotation', 'Wheel Alignment', 'Full Balance', 'Road Hazard Warranty', 'Air Filter Check'],
      highlight: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 to-gray-800 py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.pexels.com/photos/4219702/pexels-photo-4219702.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Professional Tire Services</h1>
            <p className="text-xl text-gray-300 mb-8">
              Our certified technicians provide comprehensive tire services using state-of-the-art equipment
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center gap-2 text-white">
                <Clock className="w-5 h-5 text-orange-500" />
                <span>Same-Day Service</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <Shield className="w-5 h-5 text-orange-500" />
                <span>Guaranteed Work</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <CheckCircle className="w-5 h-5 text-orange-500" />
                <span>Certified Technicians</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle">
              Comprehensive tire care from installation to maintenance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <service.icon className="w-10 h-10 text-orange-500" />
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                    <span className="text-orange-500 font-semibold text-sm">{service.price}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-gray-900 hover:bg-orange-500 text-white py-3 rounded-lg font-semibold transition-colors">
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Service Packages</h2>
            <p className="section-subtitle">
              Save money with our comprehensive service packages
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 relative overflow-hidden ${
                  pkg.highlight ? 'shadow-2xl transform scale-105' : 'shadow-lg'
                }`}
              >
                {pkg.highlight && (
                  <div className="absolute top-0 right-0 bg-orange-500 text-white px-4 py-2 text-sm font-semibold rounded-bl-lg">
                    Most Popular
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-gray-900">${pkg.price}</span>
                    <span className="text-gray-500">/service</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.services.map((service, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      {service}
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                    pkg.highlight
                      ? 'bg-orange-500 hover:bg-orange-600 text-white'
                      : 'bg-gray-900 hover:bg-gray-800 text-white'
                  }`}
                >
                  Select Package
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="section-title mb-6">Why Choose Our Service Center?</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Certified Technicians</h3>
                    <p className="text-gray-600">Our team has over 100 years of combined experience in tire services.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Quick Turnaround</h3>
                    <p className="text-gray-600">Most services completed within 1-2 hours. Same-day appointments available.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Satisfaction Guaranteed</h3>
                    <p className="text-gray-600">All our work is backed by our service guarantee and manufacturer warranties.</p>
                  </div>
                </div>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 mt-8 text-orange-500 font-semibold hover:text-orange-600"
              >
                Schedule Your Service
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/4219700/pexels-photo-4219700.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Service center"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Schedule Your Service?</h2>
          <p className="text-lg text-gray-300 mb-8">
            Contact us today to book your appointment or get a free quote for any service.
          </p>
          <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
            Book Appointment
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
