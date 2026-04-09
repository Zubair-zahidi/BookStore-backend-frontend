import { Canvas } from '@react-three/fiber'
import { Stars, OrbitControls, Sky, Sparkles } from '@react-three/drei'
import { useRef, useEffect } from 'react'

export default function CosmicBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas>
        {/* Deep space gradient */}
        <color attach="background" args={['#0a0a1a']} />
        
        {/* Stars with twinkling effect */}
        <Stars 
          radius={100} 
          depth={50} 
          count={5000} 
          factor={4} 
          saturation={0} 
          fade 
          speed={1}
        />
        
        {/* Nebula particles */}
        <Sparkles 
          count={200}
          size={2}
          speed={0.5}
          opacity={0.8}
          color="#ff6b9d"
          scale={[100, 100, 100]}
        />
        
        {/* Distant galaxy */}
        <mesh rotation={[0, 0, Math.PI / 4]}>
          <ringGeometry args={[30, 50, 64]} />
          <meshBasicMaterial color="#4f46e5" side={2} transparent opacity={0.1} />
        </mesh>
        
        {/* Floating particles */}
        <FloatingParticles count={150} />
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          autoRotate 
          autoRotateSpeed={0.2}
        />
      </Canvas>
      
      {/* CSS Nebula overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-900/20 via-transparent to-transparent" />
    </div>
  )
}

function FloatingParticles({ count = 100 }) {
  const particles = useRef()
  
  useEffect(() => {
    // Generate random particles
  }, [])
  
  return (
    <group ref={particles}>
      {[...Array(count)].map((_, i) => (
        <mesh key={i} position={[
          (Math.random() - 0.5) * 200,
          (Math.random() - 0.5) * 200,
          (Math.random() - 0.5) * 200
        ]}>
          <sphereGeometry args={[Math.random() * 0.5]} />
          <meshBasicMaterial color={Math.random() > 0.5 ? '#8b5cf6' : '#06b6d4'} />
        </mesh>
      ))}
    </group>
  )
}