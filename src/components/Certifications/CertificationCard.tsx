'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface CertificationCardProps {
  certification: {
    id: number;
    title: string;
    issuer: string;
    date: string;
    image: string;
    credentialUrl: string;
    skills: string[];
  };
  index: number;
  inView: boolean;
}

export default function CertificationCard({ certification, index, inView }: CertificationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1 }}
      className="group"
    >
      <a 
        href={certification.credentialUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block bg-neural/10 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
      >
        <div className="relative h-48 w-full">
          <Image
            src={certification.image}
            alt={certification.title}
            fill
            className="object-contain p-4"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-space/80 via-transparent to-transparent" />
        </div>
        
        <div className="p-6">
          <h3 className="text-lg font-semibold mb-1 text-electric">
            {certification.title}
          </h3>
          <p className="text-sm text-cloud/80 mb-3">
            {certification.issuer} • {certification.date}
          </p>
          <div className="flex flex-wrap gap-2">
            {certification.skills.map((skill) => (
              <span
                key={skill}
                className="px-2 py-1 bg-electric/10 rounded-full text-xs text-electric"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </a>
    </motion.div>
  );
}
