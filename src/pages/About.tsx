import { Link } from 'react-router-dom';
import { Users, Award, Heart, Target, ArrowRight, Star } from 'lucide-react';

const About = () => {
  const team = [
    {
      name: 'Robert Mitchell',
      role: 'Founder & CEO',
      bio: 'With over 30 years in the tire industry, Robert founded TirePro with a vision for quality service.',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Sarah Martinez',
      role: 'Operations Manager',
      bio: 'Sarah ensures smooth daily operations and maintains our high service standards.',
      image: 'https://images.pexels.com/photos/7749090/pexels-photo-7749090.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'James Wilson',
      role: 'Head Technician',
      bio: 'James leads our team of certified technicians with expertise in all tire services.',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Emily Chen',
      role: 'Customer Relations',
      bio: 'Emily ensures every customer leaves satisfied and has built our loyalty program.',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ];

  const values = [
    {
      icon: Award,
      title: 'Quality First',
      description: 'We source only the best tires from trusted manufacturers and stand behind every product we sell.',
    },
    {
      icon: Users,
      title: 'Customer Focused',
      description: 'Your safety and satisfaction are our top priorities. We treat every customer like family.',
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'Honest pricing, transparent communication, and no hidden fees. We build trust through honesty.',
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'Continuous training, state-of-the-art equipment, and attention to detail in every service.',
    },
  ];

  const milestones = [
    { year: '1999', event: 'TirePro founded as a small family shop' },
    { year: '2005', event: 'Expanded to full-service tire center' },
    { year: '2012', event: 'Reached 10,000 customers served' },
    { year: '2018', event: 'Opened second location' },
    { year: '2022', event: 'Celebrated 25 years in business' },
    { year: '2024', event: '50,000+ tires installed' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 to-gray-800 py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.pexels.com/photos/4219700/pexels-photo-4219700.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About TirePro
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              For over 25 years, we've been helping drivers find the perfect tires and providing exceptional service that keeps our community rolling safely.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/4219702/pexels-photo-4219702.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Our shop"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div>
              <h2 className="section-title mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  TirePro started in 1999 as a small family-owned tire shop with a simple mission: provide quality tires and honest service to our community. What began as a two-bay garage has grown into a full-service tire center trusted by thousands of drivers.
                </p>
                <p>
                  Our founder, Robert Mitchell, worked in the tire industry for years before opening TirePro. He knew there had to be a better way - treating customers fairly, offering transparent pricing, and never compromising on quality.
                </p>
                <p>
                  Today, we continue that tradition. We've served over 10,000 customers and installed more than 50,000 tires. Our team has grown, but our commitment to excellence hasn't changed. We're still the same family-run business that puts customers first.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Values</h2>
            <p className="section-subtitle">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Journey</h2>
            <p className="section-subtitle">
              Key milestones in our 25+ year history
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-orange-200 hidden md:block"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-white p-6 rounded-xl shadow-lg inline-block">
                      <span className="text-2xl font-bold text-orange-500">{milestone.year}</span>
                      <p className="text-gray-600 mt-1">{milestone.event}</p>
                    </div>
                  </div>
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-4 h-4 bg-orange-500 rounded-full ring-4 ring-orange-200"></div>
                  </div>
                  <div className="flex-1 hidden md:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Meet Our Team</h2>
            <p className="section-subtitle">
              The people behind TirePro's exceptional service
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover object-top group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                  <p className="text-orange-500 font-semibold text-sm mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-5xl font-bold mb-2">25+</div>
              <div className="text-white/80">Years in Business</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">50K+</div>
              <div className="text-white/80">Tires Installed</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">10K+</div>
              <div className="text-white/80">Happy Customers</div>
            </div>
            <div>
              <div className="flex items-center justify-center gap-1 text-5xl font-bold mb-2">
                4.9
                <Star className="w-8 h-8 fill-current" />
              </div>
              <div className="text-white/80">Customer Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Experience the TirePro Difference
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Join thousands of satisfied customers who trust us for their tire needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="btn-primary inline-flex items-center justify-center gap-2"
            >
              Visit Us Today
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/products"
              className="bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-gray-900 transition-all inline-flex items-center justify-center"
            >
              Browse Tires
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
