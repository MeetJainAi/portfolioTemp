'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CertificationCard from './CertificationCard';

const certifications = [
  {
    id: 1,
    title: "AWS Machine Learning Engineer Associate",
    issuer: "Amazon Web Services",
    date: "2024",
    image: "/certs/aws-ml.png",
    credentialUrl: "https://www.credly.com/badges/fa28db1e-b8d3-485c-b22c-7c75840fd435/public_url",
    skills: ["Machine Learning", "AWS SageMaker", "MLOps"]
  },
  {
    id: 2,
    title: "HashiCorp Terraform Associate",
    issuer: "HashiCorp",
    date: "2023",
    image: "/certs/terraform.png",
    credentialUrl: "https://www.credly.com/badges/431aa5ed-a495-41da-b341-22a956d652d3",
    skills: ["Infrastructure as Code", "Cloud Architecture", "DevOps"]
  },
  {
    id: 3,
    title: "Oracle Generative AI Professional",
    issuer: "Oracle",
    date: "2024",
    image: "/certs/oracle-ai.png",
    credentialUrl: "https://catalog-education.oracle.com/...",
    skills: ["Generative AI", "LLMs", "AI Applications"]
  },
  {
    id: 4,
    title: "AWS Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2023",
    image: "/certs/aws-sa.png",
    credentialUrl: "https://www.credly.com/badges/be497759-e794-4ed1-b6a1-1f0b80a77d98/public_url",
    skills: ["Cloud Architecture", "AWS Services", "System Design"]
  }
];

export default function Certifications() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          ref={ref}
        >
          <h2 className="text-4xl font-bold mb-12 text-electric">Certifications</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <CertificationCard
                key={cert.id}
                certification={cert}
                index={index}
                inView={inView}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
