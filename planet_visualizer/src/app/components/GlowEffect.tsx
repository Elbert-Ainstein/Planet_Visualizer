import * as THREE from 'three';

export default function GlowEffect({ scale, color, intensity }: { scale: number; color: string; intensity: number }) {
  return (
    <mesh>
      <sphereGeometry args={[scale, 32, 32]} />
      <meshBasicMaterial
        color={color}
        transparent
        opacity={0.2 * intensity}
        side={THREE.BackSide}
      />
    </mesh>
  );
} 