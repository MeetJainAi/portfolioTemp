'use client';

import { motion } from 'framer-motion';
import TypewriterComponent from 'typewriter-effect';
import Scene from '../three/Scene';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const socialLinks = [
  { name: 'GitHub', icon: FaGithub, href: 'https://github.com/MeetJainAi' },
  { name: 'LinkedIn', icon: FaLinkedin, href: 'https://www.linkedin.com/in/meetjain/' },
  { name: 'Twitter', icon: FaTwitter, href: '#' }
];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Scene />
      
      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="neural-card p-8 md:p-12"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="cyber-text">
                <TypewriterComponent
                  options={{
                    strings: [
                      "Cloud Architect",
                      "ML Engineer",
                      "Innovation Builder"
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                    delay: 80,
                  }}
                />
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Crafting intelligent solutions in the cloud
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="neural-border px-8 py-3 text-primary"
              >
                View Projects
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-primary text-secondary rounded-xl"
              >
                Contact Me
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-12 flex justify-center space-x-6"
          >
            {socialLinks.map(({ name, icon: Icon, href }) => (
              <motion.a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Icon className="w-6 h-6" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}