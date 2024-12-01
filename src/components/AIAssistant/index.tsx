'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="mb-4 p-4 bg-neural/10 backdrop-blur-sm rounded-lg w-72"
          >
            <div className="text-sm text-cloud">
              Hi! I&apos;m an AI assistant. I can help you navigate through the portfolio.
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-electric text-space p-4 rounded-full hover:bg-electric/80 transition-colors"
      >
        {isOpen ? '✕' : '?'}
      </button>
    </div>
  );
}
