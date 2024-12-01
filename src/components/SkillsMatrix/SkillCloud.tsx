'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';

interface SkillCloudProps {
  scale?: number;
}

export default function SkillCloud({ scale = 1 }: SkillCloudProps) {
  const groupRef = useRef<THREE.Group>(null);
  
  const skills = useMemo(() => [
    { name: 'TensorFlow', color: '#FF6B6B' },
    { name: 'PyTorch', color: '#EE4C2C' },
    { name: 'AWS', color: '#FF9900' },
    { name: 'Docker', color: '#2496ED' },
    { name: 'Kubernetes', color: '#326CE5' },
    { name: 'MLflow', color: '#0194E2' },
    { name: 'Azure', color: '#0078D4' },
    { name: 'GCP', color: '#4285F4' },
    { name: 'Jenkins', color: '#D24939' },
    { name: 'PostgreSQL', color: '#336791' },
    { name: 'MongoDB', color: '#47A248' },
    { name: 'Redis', color: '#DC382D' }
  ], []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.002;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
  });

  return (
    <group ref={groupRef} scale={scale}>
      {skills.map((skill, i) => {
        const phi = Math.acos(-1 + (2 * i) / skills.length);
        const theta = Math.sqrt(skills.length * Math.PI) * phi;
        const radius = 5;

        const position = [
          radius * Math.cos(theta) * Math.sin(phi),
          radius * Math.sin(theta) * Math.sin(phi),
          radius * Math.cos(phi)
        ];

        return (
          <group key={skill.name} position={position as [number, number, number]}>
            <Text
              fontSize={0.4}
              color={skill.color}
              anchorX="center"
              anchorY="middle"
              outlineWidth={0.02}
              outlineColor="#000000"
              maxWidth={2}
              overflowWrap="break-word"
              whiteSpace="normal"
            >
              {skill.name}
            </Text>
          </group>
        );
      })}
    </group>
  );
}
