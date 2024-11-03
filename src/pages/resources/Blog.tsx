import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, Clock, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    title: 'The Future of Digital Marketing in 2024',
    excerpt: 'Discover the latest trends and technologies shaping the digital marketing landscape.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
    author: 'Sarah Johnson',
    date: '2024-01-15',
    readTime: '5 min read',
    category: 'Digital Marketing'
  },
  {
    title: 'SEO Strategies That Actually Work',
    excerpt: 'Learn proven SEO techniques that will help your website rank higher in search results.',
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80',
    author: 'Michael Chen',
    date: '2024-01-12',
    readTime: '8 min read',
    category: 'SEO'
  },
  {
    title: 'Mastering Social Media Marketing',
    excerpt: 'Tips and strategies for building a strong social media presence for your brand.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80',
    author: 'Emma Davis',
    date: '2024-01-10',
    readTime: '6 min read',
    category: 'Social Media'
  }
];

const categories = [
  'All Posts',
  'Digital Marketing',
  'SEO',
  'Social Media',
  'Content Strategy',
  'Analytics'
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl font-bold mb-6">Marketing Insights</h1>
            <p className="text-xl text-gray-600 mb-8">
              Expert tips, guides, and strategies to help grow your business
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-6 py-2 rounded-full ${
                    index === 0
                      ? 'bg-primary-600 text-white'
                      : 'bg-white text-gray-600 hover:bg-primary-50'
                  } transition-colors`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="text-sm font-medium text-primary-600 mb-2">
                    {post.category}
                  </div>
                  <h2 className="text-xl font-bold mb-3 hover:text-primary-600 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <User size={16} className="mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Clock size={16} className="mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Stay Updated with Marketing Insights
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Get the latest marketing tips and strategies delivered to your inbox
            </p>
            <form className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-300"
              />
              <button className="px-8 py-3 bg-white text-primary-600 rounded-full hover:bg-primary-50 transition-colors">
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;