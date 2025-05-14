import { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import GlowEffect from './GlowEffect';
import { CelestialBody } from '../types/astro';

interface OrbitingBodyProps {
  body: CelestialBody;
  timeScale: number;
  parentPosition?: [number, number, number];
  onClick: (body: CelestialBody) => void;
}

export default function OrbitingBody({ body, timeScale, parentPosition = [0, 0, 0], onClick }: OrbitingBodyProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [texture, setTexture] = useState<THREE.Texture | null>(null);
  const [hovered, setHovered] = useState(false);
  const elapsedTimeRef = useRef(0);
  const positionRef = useRef<[number, number, number]>(parentPosition);

  useEffect(() => {
    let texturePath = body.texture;
    if (!texturePath && body.habitable) {
      texturePath = '/textures/earth.jpg';
    }
    if (texturePath) {
      const textureLoader = new THREE.TextureLoader();
      textureLoader.load(
        texturePath,
        (loadedTexture) => setTexture(loadedTexture),
        undefined,
        (err) => {
          setTexture(null);
          console.warn(`Texture failed to load for ${body.name}: ${texturePath}`, err);
        }
      );
    }
  }, [body.texture, body.name, body.habitable]);

  useFrame((_, delta) => {
    if (meshRef.current && body.orbitalPeriod > 0) {
      elapsedTimeRef.current += delta * timeScale;
      const angle = (elapsedTimeRef.current * 2 * Math.PI) / body.orbitalPeriod;
      const distance = Math.sqrt(body.position[0] ** 2 + body.position[1] ** 2 + body.position[2] ** 2);
      meshRef.current.position.x = parentPosition[0] + Math.cos(angle) * distance;
      meshRef.current.position.z = parentPosition[2] + Math.sin(angle) * distance;
      meshRef.current.position.y = parentPosition[1];
      // Update positionRef for moons
      positionRef.current = [
        meshRef.current.position.x,
        meshRef.current.position.y,
        meshRef.current.position.z
      ];
      // Rotation
      const rotationAngle = (delta * timeScale * 2 * Math.PI) / body.rotationPeriod;
      meshRef.current.rotation.y += rotationAngle;
    }
  });

  return (
    <group>
      <mesh
        ref={meshRef}
        onClick={() => onClick(body)}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        scale={hovered ? 1.1 : 1}
      >
        <sphereGeometry args={[body.radius, 32, 32]} />
        <meshStandardMaterial
          map={texture || undefined}
          color={!texture ? body.color : undefined}
          metalness={0.1}
          roughness={0.7}
        />
        {body.atmosphere && (
          <mesh scale={1.1}>
            <sphereGeometry args={[body.radius, 32, 32]} />
            <meshStandardMaterial
              color={body.color}
              transparent
              opacity={0.2}
              side={THREE.BackSide}
            />
          </mesh>
        )}
        {body.rings && (
          <mesh rotation={[-Math.PI / 2, 0, 0]}>
            <ringGeometry args={[body.radius * 1.2, body.radius * 2.2, 64]} />
            <meshBasicMaterial color="#e5e1c6" transparent opacity={0.5} side={THREE.DoubleSide} />
          </mesh>
        )}
      </mesh>
      {body.glowIntensity && (
        <GlowEffect
          scale={body.radius * 2}
          color={body.color}
          intensity={body.glowIntensity}
        />
      )}
      {body.moons && body.moons.map((moon) => (
        <OrbitingBody
          key={moon.name}
          body={moon}
          timeScale={timeScale}
          parentPosition={positionRef.current}
          onClick={onClick}
        />
      ))}
    </group>
  );
} 