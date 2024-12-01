'use client';

import { Canvas } from '@react-three/fiber';
import { useRef } from 'react';
import { useSpring, animated } from '@react-spring/three';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random';

function Neural() {
  const points = useRef();
  const sphere = random.inSphere(new Float32Array(5000), { radius: 1.5 });
  
  const spring = useSpring({
    from: { scale: [0, 0, 0] },
    to: { scale: [1, 1, 1] },
    config: { mass: 1, tension: 280, friction: 60 }
  });

  return (
    <animated.group {...spring}>
      <Points ref={points} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#64ffda"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </animated.group>
  );
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0">
      <Canvas camera={{ position: [0, 0, 2] }}>
        <ambientLight intensity={0.5} />
        <Neural />
      </Canvas>
    </div>
  );
}