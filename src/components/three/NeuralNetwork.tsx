'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Line } from '@react-three/drei';
import * as THREE from 'three';
import { useSpring, animated } from '@react-spring/three';

export default function NeuralNetwork({ mousePosition = [0, 0] }) {
  const ref = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  
  const { nodes, connections } = useMemo(() => {
    const count = 100;
    const nodes = new Float32Array(count * 3);
    const connections = [];
    
    // Create nodes in layers
    for (let i = 0; i < count; i++) {
      const layer = Math.floor(i / 20);
      const layerPosition = (layer - 2) * 2;
      
      nodes[i * 3] = (Math.random() - 0.5) * 4;
      nodes[i * 3 + 1] = (Math.random() - 0.5) * 4;
      nodes[i * 3 + 2] = layerPosition;
      
      // Create connections between layers
      if (layer < 4) {
        for (let j = 0; j < 3; j++) {
          const nextNode = ((layer + 1) * 20) + Math.floor(Math.random() * 20);
          if (nextNode < count) {
            connections.push(
              nodes[i * 3], nodes[i * 3 + 1], nodes[i * 3 + 2],
              nodes[nextNode * 3], nodes[nextNode * 3 + 1], nodes[nextNode * 3 + 2]
            );
          }
        }
      }
    }
    
    return { nodes, connections: new Float32Array(connections) };
  }, []);

  const spring = useSpring({
    from: { scale: [0, 0, 0] },
    to: { scale: [1, 1, 1] },
    config: { mass: 1, tension: 280, friction: 60 }
  });

  useFrame((state) => {
    if (ref.current && linesRef.current) {
      // Rotate based on mouse position
      const rotationX = mousePosition[1] * 0.1;
      const rotationY = mousePosition[0] * 0.1;
      
      ref.current.rotation.x = THREE.MathUtils.lerp(ref.current.rotation.x, rotationX, 0.1);
      ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, rotationY, 0.1);
      
      linesRef.current.rotation.x = ref.current.rotation.x;
      linesRef.current.rotation.y = ref.current.rotation.y;
      
      // Pulse effect
      const time = state.clock.getElapsedTime();
      const pulse = Math.sin(time * 2) * 0.1 + 0.9;
      ref.current.scale.set(pulse, pulse, pulse);
    }
  });

  return (
    <animated.group {...spring}>
      <Points ref={ref} positions={nodes} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#64ffda"
          size={0.1}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.8}
        />
      </Points>
      
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={connections.length / 3}
            array={connections}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial attach="material" color="#64ffda" opacity={0.2} transparent />
      </lineSegments>
    </animated.group>
  );
}