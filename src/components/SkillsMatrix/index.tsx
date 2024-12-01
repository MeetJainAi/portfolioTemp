'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skills = {
  ml: [
    { name: 'TensorFlow', proficiency: 90 },
    { name: 'PyTorch', proficiency: 85 },
    { name: 'Scikit-learn', proficiency: 95 },
    { name: 'OpenCV', proficiency: 80 },
    { name: 'Keras', proficiency: 85 },
    { name: 'MLflow', proficiency: 88 }
  ],
  cloud: [
    { name: 'AWS', proficiency: 92 },
    { name: 'Azure', proficiency: 85 },
    { name: 'GCP', proficiency: 80 },
    { name: 'Docker', proficiency: 90 },
    { name: 'Kubernetes', proficiency: 85 },
    { name: 'Terraform', proficiency: 88 }
  ],
  devops: [
    { name: 'Jenkins', proficiency: 85 },
    { name: 'GitHub Actions', proficiency: 90 },
    { name: 'Ansible', proficiency: 82 },
    { name: 'GitLab CI', proficiency: 85 },
    { name: 'ArgoCD', proficiency: 80 }
  ],
  databases: [
    { name: 'PostgreSQL', proficiency: 90 },
    { name: 'MongoDB', proficiency: 88 },
    { name: 'Redis', proficiency: 85 },
    { name: 'Cassandra', proficiency: 80 },
    { name: 'MySQL', proficiency: 92 }
  ]
};

const categoryIcons = {
  ml: '🧠',
  cloud: '☁️',
  devops: '🔄',
  databases: '💾'
};

export default function SkillsMatrix() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-20 px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        className="max-w-7xl mx-auto"
      >
        <h2 className="text-4xl font-bold mb-12 text-electric">Skills Matrix</h2>

        <div className="space-y-12">
          {Object.entries(skills).map(([category, skillList], index) => (
            <motion.div
              key={category}
              initial={{ x: 50, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : {}}
              transition={{ delay: index * 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-6 text-electric flex items-center gap-2">
                <span>{categoryIcons[category as keyof typeof categoryIcons]}</span>
                {category.toUpperCase()}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {skillList.map((skill, skillIndex) => (
                  <motion.div 
                    key={skill.name}
                    className="glass-card p-4 hover:bg-neural/20 transition-all duration-300 border border-electric/10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-cloud/90 font-medium">{skill.name}</span>
                      <span className="text-electric font-semibold">{skill.proficiency}%</span>
                    </div>
                    <div className="h-2 bg-space/50 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.proficiency}%` } : {}}
                        transition={{ 
                          duration: 1.5, 
                          delay: index * 0.1 + skillIndex * 0.05,
                          ease: "easeOut"
                        }}
                        className="h-full relative"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-electric via-[#66a6ff] to-electric" />
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                          animate={{ x: ['-100%', '100%'] }}
                          transition={{ 
                            duration: 2,
                            repeat: Infinity,
                            ease: "linear"
                          }}
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
