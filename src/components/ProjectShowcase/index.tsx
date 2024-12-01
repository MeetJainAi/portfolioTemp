'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ProjectCard from './ProjectCard';
import { Project } from '@/types';

const projects: Project[] = [
  {
    id: 1,
    title: "ML Model Deployment Pipeline",
    description: "Automated MLOps pipeline for deploying and monitoring machine learning models at scale using AWS SageMaker and MLflow.",
    image: "/projects/mlops.png",
    techStack: ["AWS", "Python", "MLflow", "Docker", "GitHub Actions"],
    githubUrl: "https://github.com/yourusername/mlops-pipeline",
    metrics: [
      { label: "Deployment Time", value: "↓60%" },
      { label: "Model Performance", value: "↑25%" }
    ]
  },
  {
    id: 2,
    title: "Multi-Cloud Orchestration",
    description: "Cloud-agnostic infrastructure management system using Terraform and Kubernetes across AWS, Azure, and GCP.",
    image: "/projects/cloud.png",
    techStack: ["Terraform", "Kubernetes", "Python", "Go"],
    githubUrl: "https://github.com/yourusername/cloud-orchestration",
    metrics: [
      { label: "Resource Utilization", value: "↑40%" },
      { label: "Cost Reduction", value: "↓35%" }
    ]
  },
  // Add more projects as needed
];

export default function ProjectShowcase() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="min-h-screen bg-space py-20 px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-4xl font-bold mb-12 text-electric">Featured Projects</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index}
              inView={inView}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
