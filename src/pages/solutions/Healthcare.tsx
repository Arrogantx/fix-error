import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Shield, Search, MessageSquare, Calendar } from 'lucide-react';
import ParallaxSection from '../../components/ParallaxSection';

const features = [
  {
    icon: Heart,
    title: 'Patient Acquisition',
    description: 'Attract more patients to your practice.'
  },
  {
    icon: Users,
    title: 'Patient Engagement',
    description: 'Build lasting relationships with patients.'
  },
  {
    icon: Shield,
    title: 'HIPAA Compliance',
    description: 'Maintain privacy and security standards.'
  },
  {
    icon: Search,
    title: 'Local SEO',
    description: 'Dominate local healthcare searches.'
  },
  {
    icon: MessageSquare,
    title: 'Reputation Management',
    description: 'Build and maintain your online reputation.'
  },
  {
    icon: Calendar,
    title: 'Appointment Booking',
    description: 'Streamline patient scheduling process.'
  }
];

const Healthcare = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <ParallaxSection
        imageUrl="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80"
        height="h-[600px]"
      >
        <div className="flex items-center justify-center h-full">
          <div className="text-center text-white max-w-4xl px-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              Healthcare Marketing Solutions
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-200 mb-8"
            >
              Grow your practice with HIPAA-compliant digital marketing
            </motion.p>
          </div>
        </div>
      </ParallaxSection>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Healthcare Marketing Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized digital marketing strategies for healthcare providers
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600">
              See how we've helped healthcare providers grow
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Medical Practice',
                result: '+200% Patient Growth',
                image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80'
              },
              {
                title: 'Dental Clinic',
                result: '+150% Appointments',
                image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80'
              },
              {
                title: 'Specialist Center',
                result: '+300% Referrals',
                image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80'
              }
            ].map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative overflow-hidden rounded-xl"
              >
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                  <div className="text-white">
                    <h3 className="text-xl font-bold mb-2">{study.title}</h3>
                    <p className="text-primary-200">{study.result}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Grow Your Practice?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
              Get a free consultation and marketing plan for your healthcare practice
            </p>
            <button className="px-8 py-4 bg-white text-primary-600 rounded-full hover:bg-primary-50 transition-colors">
              Schedule Consultation
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Healthcare;