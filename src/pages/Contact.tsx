import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12">Get in Touch</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ x: -50 }}
              animate={{ x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <form className="space-y-6">
                <div>
                  <label className="block text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-purple-500"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </motion.div>

            <motion.div
              initial={{ x: 50 }}
              animate={{ x: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold mb-4">Connect</h3>
                <div className="space-y-4">
                  <a href="hassan.1990.kharacha@gmail.com" className="flex items-center space-x-3 text-gray-300 hover:text-white">
                    <Mail size={20} />
                    <span>hassan.1990.kharacha@gmail.com</span>
                  </a>
                  <a href="https://github.com/carlos05d" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-gray-300 hover:text-white">
                    <Github size={20} />
                    <span>https://github.com/carlos05d</span>
                  </a>
                  <a href="www.linkedin.com/in/mustafa-kharacha" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-gray-300 hover:text-white">
                    <Linkedin size={20} />
                    <span>www.linkedin.com/in/mustafa-kharacha</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;