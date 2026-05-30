import { useState } from 'react';
import { Star, Filter, ChevronDown } from 'lucide-react';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState([0, 300]);

  const categories = ['All', 'All-Season', 'Performance', 'Winter', 'Off-Road', 'Touring'];

  const products = [
    {
      id: 1,
      name: 'Michelin Defender T+H',
      brand: 'Michelin',
      category: 'All-Season',
      price: 149.99,
      originalPrice: 179.99,
      rating: 4.9,
      reviews: 1250,
      features: ['80,000 mile warranty', 'All-season traction', 'Fuel efficient'],
      image: 'https://images.pexels.com/photos/112860/pexels-photo-112860.jpeg?auto=compress&cs=tinysrgb&w=800',
      badge: 'Best Seller',
    },
    {
      id: 2,
      name: 'Goodyear Assurance WeatherReady',
      brand: 'Goodyear',
      category: 'All-Season',
      price: 159.99,
      originalPrice: null,
      rating: 4.8,
      reviews: 890,
      features: ['All-weather grip', 'Hydro grip technology', 'Quiet ride'],
      image: 'https://images.pexels.com/photos/29340881/pexels-photo-29340881.jpeg?auto=compress&cs=tinysrgb&w=800',
      badge: 'New',
    },
    {
      id: 3,
      name: 'Bridgestone Turanza QuietTrack',
      brand: 'Bridgestone',
      category: 'Touring',
      price: 169.99,
      originalPrice: 199.99,
      rating: 4.9,
      reviews: 720,
      features: ['Quiet ride', 'Wet traction', 'Long wear'],
      image: 'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=800',
      badge: null,
    },
    {
      id: 4,
      name: 'Pirelli P Zero PZ4',
      brand: 'Pirelli',
      category: 'Performance',
      price: 229.99,
      originalPrice: null,
      rating: 4.7,
      reviews: 540,
      features: ['Ultra-high performance', 'Sport handling', 'Summer compound'],
      image: 'https://images.pexels.com/photos/4219702/pexels-photo-4219702.jpeg?auto=compress&cs=tinysrgb&w=800',
      badge: 'Premium',
    },
    {
      id: 5,
      name: 'Continental WinterContact SI',
      brand: 'Continental',
      category: 'Winter',
      price: 189.99,
      originalPrice: 219.99,
      rating: 4.8,
      reviews: 310,
      features: ['Snow traction', 'Ice braking', 'Low temperature grip'],
      image: 'https://images.pexels.com/photos/4219700/pexels-photo-4219700.jpeg?auto=compress&cs=tinysrgb&w=800',
      badge: 'Winter Ready',
    },
    {
      id: 6,
      name: 'BFGoodrich All-Terrain T/A KO2',
      brand: 'BFGoodrich',
      category: 'Off-Road',
      price: 199.99,
      originalPrice: null,
      rating: 4.9,
      reviews: 1680,
      features: ['All-terrain', 'Sidewall protection', 'Mud & snow'],
      image: 'https://images.pexels.com/photos/11732142/pexels-photo-11732142.jpeg?auto=compress&cs=tinysrgb&w=800',
      badge: 'Top Rated',
    },
    {
      id: 7,
      name: 'Dunlop Sport MAXX RT2',
      brand: 'Dunlop',
      category: 'Performance',
      price: 179.99,
      originalPrice: 209.99,
      rating: 4.6,
      reviews: 280,
      features: ['Sport performance', 'Wet grip', 'Precision handling'],
      image: 'https://images.pexels.com/photos/4219702/pexels-photo-4219702.jpeg?auto=compress&cs=tinysrgb&w=800',
      badge: null,
    },
    {
      id: 8,
      name: 'Hankook Kinergy PT',
      brand: 'Hankook',
      category: 'Touring',
      price: 119.99,
      originalPrice: null,
      rating: 4.7,
      reviews: 420,
      features: ['Long-lasting', 'Comfortable ride', 'Fuel efficient'],
      image: 'https://images.pexels.com/photos/112860/pexels-photo-112860.jpeg?auto=compress&cs=tinysrgb&w=800',
      badge: 'Value Pick',
    },
  ];

  const filteredProducts = products.filter(
    (product) => selectedCategory === 'All' || product.category === selectedCategory
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    if (sortBy === 'rating') return b.rating - a.rating;
    return 0;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Tire Collection</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Discover premium tires from top brands for every vehicle and driving condition
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters */}
            <aside className="lg:w-64 flex-shrink-0">
              <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
                <div className="flex items-center gap-2 mb-6">
                  <Filter className="w-5 h-5 text-orange-500" />
                  <h3 className="font-bold text-gray-900 text-lg">Filters</h3>
                </div>

                {/* Categories */}
                <div className="mb-8">
                  <h4 className="font-semibold text-gray-700 mb-3">Category</h4>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`w-full text-left px-4 py-2 rounded-lg transition-all ${
                          selectedCategory === category
                            ? 'bg-orange-500 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div className="mb-8">
                  <h4 className="font-semibold text-gray-700 mb-3">Price Range</h4>
                  <input
                    type="range"
                    min="0"
                    max="300"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                    className="w-full accent-orange-500"
                  />
                  <div className="flex justify-between text-sm text-gray-600 mt-2">
                    <span>$0</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>

                {/* Sort */}
                <div>
                  <h4 className="font-semibold text-gray-700 mb-3">Sort By</h4>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full bg-gray-100 border-0 rounded-lg px-4 py-2 text-gray-700 focus:ring-2 focus:ring-orange-500"
                  >
                    <option value="featured">Featured</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Highest Rated</option>
                  </select>
                </div>
              </div>
            </aside>

            {/* Products Grid */}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-6">
                <p className="text-gray-600">
                  Showing <span className="font-semibold">{sortedProducts.length}</span> products
                </p>
              </div>

              <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {sortedProducts.map((product) => (
                  <div key={product.id} className="card group">
                    <div className="relative overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      {product.badge && (
                        <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          {product.badge}
                        </div>
                      )}
                      <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                        <svg className="w-5 h-5 text-gray-600 hover:text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </div>
                    </div>

                    <div className="p-5">
                      <div className="text-sm text-orange-500 font-semibold mb-1">{product.brand}</div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{product.name}</h3>

                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex items-center text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-current' : ''}`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-600">
                          {product.rating} ({product.reviews})
                        </span>
                      </div>

                      <div className="space-y-1 mb-4">
                        {product.features.slice(0, 2).map((feature, index) => (
                          <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                            <ChevronDown className="w-4 h-4 text-orange-500" />
                            {feature}
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                        <div>
                          <span className="text-2xl font-bold text-gray-900">${product.price}</span>
                          {product.originalPrice && (
                            <span className="text-sm text-gray-400 line-through ml-2">
                              ${product.originalPrice}
                            </span>
                          )}
                        </div>
                        <button className="bg-gray-900 hover:bg-orange-500 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-colors">
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
