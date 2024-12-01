'use client';

import { motion } from 'framer-motion';
import { Project } from '@/types';
import Image from 'next/image';
import { useState } from 'react';

interface ProjectCardProps {
  project: Project;
  index: number;
  inView: boolean;


}

export default function ProjectCard({ project, index, inView }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.2 }}
      className="relative group"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div
        animate={{
          scale: isHovered ? 1.05 : 1,
          y: isHovered ? -10 : 0
        }}
        transition={{ duration: 0.3 }}
        className="bg-neural/10 backdrop-blur-md rounded-xl overflow-hidden border border-electric/20"
      >
        <div className="relative h-48 overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neural/80 to-transparent" />
        </div>

        <div className="p-6">
          <h3 className="text-xl font-semibold mb-3 text-electric">{project.title}</h3>
          <p className="text-cloud/80 text-sm mb-4">{project.description}</p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {project.techStack.map((tech) => (
              <span key={tech} className="px-3 py-1 bg-electric/10 rounded-full text-xs font-medium text-electric">
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-4 mt-auto">
            <a href={project.githubUrl} className="flex-1 text-center py-2 bg-electric/20 rounded-lg hover:bg-electric/30 transition-colors">
              View Code
            </a>
            {/* {project.liveUrl && (
              <a href={project.liveUrl} className="flex-1 text-center py-2 bg-neural/20 rounded-lg hover:bg-neural/30 transition-colors">
                Live Demo
              </a>
            )} */}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
