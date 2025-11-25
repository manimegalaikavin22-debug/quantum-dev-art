import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float } from "@react-three/drei";

function FloatingShape({ position, color }: { position: [number, number, number]; color: string }) {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh position={position}>
        <icosahedronGeometry args={[0.5, 0]} />
        <meshStandardMaterial color={color} wireframe />
      </mesh>
    </Float>
  );
}

export default function FloatingIcons() {
  return (
    <div className="absolute inset-0 opacity-30">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#3dd9eb" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#c084fc" />

        <FloatingShape position={[-3, 2, 0]} color="#3dd9eb" />
        <FloatingShape position={[3, -2, 0]} color="#c084fc" />
        <FloatingShape position={[0, 0, -2]} color="#ec4899" />
        <FloatingShape position={[-2, -1, 1]} color="#3dd9eb" />
        <FloatingShape position={[2, 1, -1]} color="#c084fc" />

        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
}
