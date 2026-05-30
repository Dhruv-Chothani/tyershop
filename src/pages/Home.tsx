import { Link } from 'react-router-dom';
import { Wrench, Shield, Truck, Star, ArrowRight, Phone, CheckCircle } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: Shield,
      title: 'Quality Guaranteed',
      description: 'All our tires come with manufacturer warranty and our satisfaction guarantee.',
    },
    {
      icon: Wrench,
      title: 'Expert Services',
      description: 'Certified technicians with years of experience in tire installation and maintenance.',
    },
    {
      icon: Truck,
      title: 'Fast Delivery',
      description: 'Same-day service available for most tire installations and repairs.',
    },
  ];

  const featuredProducts = [
    {
      name: 'Michelin Defender T+H',
      category: 'All-Season',
      price: 149.99,
      rating: 4.9,
      image: 'https://images.pexels.com/photos/112860/pexels-photo-112860.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      name: 'Goodyear Assurance',
      category: 'All-Season',
      price: 129.99,
      rating: 4.7,
      image: 'https://images.pexels.com/photos/29340881/pexels-photo-29340881.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      name: 'Bridgestone Turanza',
      category: 'Touring',
      price: 159.99,
      rating: 4.8,
      image: 'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Regular Customer',
      content: 'TirePro has been my go-to shop for years. Their service is exceptional and prices are competitive.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Fleet Manager',
      content: 'We trust TirePro with our entire fleet. Professional, reliable, and always on time.',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      role: 'First-time Customer',
      content: 'The staff was incredibly helpful in finding the perfect tires for my SUV. Highly recommend!',
      rating: 5,
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.pexels.com/photos/11732142/pexels-photo-11732142.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Tire background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/95 to-gray-900/80"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-orange-500/20 text-orange-400 px-4 py-2 rounded-full text-sm font-semibold">
                <Star className="w-4 h-4 fill-current" />
                Trusted by 10,000+ Customers
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight">
                Premium Tires for
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                  Every Journey
                </span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed max-w-xl">
                Discover our extensive selection of top-brand tires. Expert installation, competitive prices, and unmatched customer service.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/products" className="btn-primary inline-flex items-center justify-center gap-2">
                  Shop Tires
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link to="/services" className="btn-secondary inline-flex items-center justify-center gap-2">
                  Our Services
                </Link>
              </div>
              <div className="flex items-center gap-8 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">25+</div>
                  <div className="text-sm text-gray-400">Years Experience</div>
                </div>
                <div className="w-px h-12 bg-gray-700"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">50K+</div>
                  <div className="text-sm text-gray-400">Tires Installed</div>
                </div>
                <div className="w-px h-12 bg-gray-700"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">4.9</div>
                  <div className="text-sm text-gray-400">Customer Rating</div>
                </div>
              </div>
            </div>

            <div className="hidden lg:block relative">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/4219702/pexels-photo-4219702.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Premium tire"
                  className="rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500"
                />
                <div className="absolute -bottom-6 -left-6 bg-orange-500 text-white p-6 rounded-xl shadow-xl">
                  <div className="text-3xl font-bold">20% OFF</div>
                  <div className="text-sm">First Purchase</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Why Choose TirePro?</h2>
            <p className="section-subtitle">
              We're committed to providing the best tire shopping experience with quality products and exceptional service.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-gray-50 rounded-2xl p-8 hover:bg-gradient-to-br hover:from-orange-500 hover:to-orange-600 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-orange-500 group-hover:bg-white rounded-2xl flex items-center justify-center mb-6 transition-colors">
                  <feature.icon className="w-8 h-8 text-white group-hover:text-orange-500 transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-white mb-4 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 group-hover:text-white/90 transition-colors">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
            <div>
              <h2 className="section-title">Featured Tires</h2>
              <p className="text-gray-600">Top-rated tires from leading brands</p>
            </div>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-orange-500 font-semibold hover:text-orange-600 transition-colors"
            >
              View All Products
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <div key={index} className="card group">
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {product.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-current' : ''}`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">{product.rating}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-gray-900">${product.price}</span>
                      <span className="text-sm text-gray-500 ml-1">/tire</span>
                    </div>
                    <button className="bg-gray-900 hover:bg-orange-500 text-white px-5 py-2 rounded-lg font-semibold transition-colors">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services CTA */}
      <section className="py-24 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Professional Tire Services
              </h2>
              <p className="text-xl text-white/90 leading-relaxed">
                From installation to maintenance, our certified technicians provide comprehensive tire services to keep you safe on the road.
              </p>
              <ul className="space-y-4">
                {['Tire Installation & Mounting', 'Wheel Alignment', 'Tire Rotation', 'Flat Tire Repair', 'Tire Balancing'].map((service, index) => (
                  <li key={index} className="flex items-center gap-3 text-white">
                    <CheckCircle className="w-6 h-6" />
                    <span className="text-lg">{service}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 bg-white text-orange-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors mt-4"
              >
                View All Services
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="hidden lg:block">
              <img
                src="https://images.pexels.com/photos/4219700/pexels-photo-4219700.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Tire service"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">What Our Customers Say</h2>
            <p className="section-subtitle">Real reviews from satisfied customers</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center text-yellow-400 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready for New Tires?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact us today for a free consultation and quote. Our team is ready to help you find the perfect tires for your vehicle.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="btn-primary inline-flex items-center justify-center gap-2"
            >
              Get a Free Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:5551234567"
              className="bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-gray-900 transition-all inline-flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              (555) 123-4567
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
