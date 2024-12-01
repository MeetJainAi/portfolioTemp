'use client';

import { Canvas } from '@react-three/fiber';
import { Suspense, useState, useEffect } from 'react';
import NeuralNetwork from './NeuralNetwork';
import { useThree } from '@react-three/fiber';
import { EffectComposer, Bloom } from '@react-three/postprocessing';

function Effects() {
  const { gl } = useThree();
  
  return (
    <EffectComposer>
      <Bloom
        intensity={1.5}
        luminanceThreshold={0.1}
        luminanceSmoothing={0.9}
        height={300}
      />
    </EffectComposer>
  );
}

export default function Scene() {
  const [mousePosition, setMousePosition] = useState([0, 0]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition([
        (e.clientX / window.innerWidth) * 2 - 1,
        -(e.clientY / window.innerHeight) * 2 + 1
      ]);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0">
      <Canvas
        camera={{
          position: [0, 0, 8],
          fov: 75,
          near: 0.1,
          far: 1000
        }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <NeuralNetwork mousePosition={mousePosition} />
          <Effects />
        </Suspense>
      </Canvas>
    </div>
  );
}