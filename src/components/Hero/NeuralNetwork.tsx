'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { inSphere } from 'maath/random';

export default function NeuralNetwork({ opacity = 0.5 }) {
  const ref = useRef<THREE.Points>(null);
  
  const sphere = useMemo(() => {
    const count = 5000;
    const positions = new Float32Array(count * 3);
    inSphere(positions, { radius: 1.5 });
    return positions;
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * 0.05;
      ref.current.rotation.y += delta * 0.05;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled={false}
      >
        <PointMaterial
          transparent
          color="#64ffda"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={opacity}
        />
      </Points>
    </group>
  );
}
