import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      title: "Senior Developer",
      company: "Tech Corp",
      period: "2020 - Present",
      description: "Led development of innovative solutions..."
    },
    // Add more experiences here
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Experience
        </motion.h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="border-l-2 border-gray-700 pl-8 relative"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="absolute w-4 h-4 bg-purple-500 rounded-full -left-2 top-0" />
              <h3 className="text-2xl font-bold text-purple-400">{exp.title}</h3>
              <p className="text-xl text-gray-300 mb-2">{exp.company}</p>
              <p className="text-gray-400 mb-4">{exp.period}</p>
              <p className="text-gray-300">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;