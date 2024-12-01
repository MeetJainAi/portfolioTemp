'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { number: '10+', text: 'ML Models Deployed' },
    { number: '500k+', text: 'Data Points Processed' },
    { number: '99.5%', text: 'Uptime Maintained' },
  ];

  return (
    <div ref={ref} className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-bold mb-12 text-electric">Digital Workbench</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4">About Me</h3>
            <p className="text-cloud/80 leading-relaxed">
              As a Cloud and ML Engineer, I specialize in developing and deploying 
              machine learning models at scale. My expertise spans across major cloud 
              platforms, with a particular focus on AWS, where I've architected and 
              implemented numerous ML solutions.
            </p>
            
            <div className="grid grid-cols-3 gap-4 mt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ delay: index * 0.2 }}
                  className="text-center p-4 bg-neural/10 rounded-lg"
                >
                  <div className="text-electric text-3xl font-bold">{stat.number}</div>
                  <div className="text-sm mt-2">{stat.text}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
