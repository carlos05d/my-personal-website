import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="h-[90vh] flex items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold"
              initial={{ x: -100 }}
              animate={{ x: 0 }}
              transition={{ delay: 0.2 }}
            >
              Welcome to My World
            </motion.h1>
            
            {/* Place for your image */}
            <div className="relative w-64 h-64 md:w-96 md:h-96 overflow-hidden rounded-full">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-50" />
              {/* Add your image here */}
              <img
                src="photo.png"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>

            <motion.p 
              className="text-xl md:text-2xl text-gray-300 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              A creative developer passionate about building exceptional digital experiences.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;