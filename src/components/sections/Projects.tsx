'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

const projects = [
  {
    title: 'ML Model Deployment Pipeline',
    description: 'Automated MLOps pipeline using AWS SageMaker and MLflow',
    image: '/projects/mlops.png',
    tags: ['AWS', 'Python', 'MLflow', 'Docker'],
    metrics: [
      { label: 'Deployment Time', value: '↓60%' },
      { label: 'Model Performance', value: '↑25%' }
    ]
  },
  // Add more projects
];

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="space-y-16"
        >
          <h2 className="text-4xl font-bold cyber-text">Featured Projects</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.2 }}
                className="neural-card group hover:scale-105 transition-transform duration-300"
              >
                <div className="relative h-48 overflow-hidden rounded-t-xl">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold text-primary">{project.title}</h3>
                  <p className="text-gray-300">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    {project.metrics.map(metric => (
                      <div key={metric.label} className="text-center">
                        <div className="text-2xl font-bold text-accent">{metric.value}</div>
                        <div className="text-sm text-gray-400">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}