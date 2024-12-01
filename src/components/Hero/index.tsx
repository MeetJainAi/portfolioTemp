'use client';

import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion';
import SocialButton from './SocialButton';
import TypewriterComponent from 'typewriter-effect';
import SkillCloud from '../SkillsMatrix/SkillCloud';

export default function Hero() {
  return (
    <div className="relative h-screen w-full">
      {/* Background Canvas */}
      <div className="absolute inset-0">
        <Canvas
          camera={{
            position: [0, 0, 20],
            fov: 75,
            near: 0.1,
            far: 1000
          }}
          style={{ background: 'transparent' }}
        >
          <ambientLight intensity={0.8} />
          <pointLight position={[10, 10, 10]} intensity={1.5} />
          <SkillCloud scale={2.5} />
        </Canvas>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
        <div className="text-5xl md:text-6xl font-bold mb-4">
          <span className="gradient-text">
            <TypewriterComponent
              options={{
                strings: ["Hey There! 👋", "I'm Meet Shah"],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
                delay: 80,
                wrapperClassName: 'gradient-text'
              }}
            />
          </span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 2 }}
          className="text-2xl md:text-3xl mb-8 text-cloud/90"
        >
          Let's Build The Future!
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 2.5 }}
          className="flex gap-4"
        >
          <SocialButton href="https://github.com/MeetJainAi" icon="github" />
          <SocialButton href="https://www.linkedin.com/in/meetjain/" icon="linkedin" />
          <SocialButton href="https://drive.google.com/file/d/1tMkqxzBMk9JHjbAPQy74RIwIEspEG7n4/view?usp=sharing" icon="document" />
        </motion.div>
      </div>
    </div>
  );
}
