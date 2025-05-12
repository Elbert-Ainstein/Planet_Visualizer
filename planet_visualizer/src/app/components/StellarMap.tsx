import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, useTexture, Trail } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import { useState, useRef, useEffect } from 'react';
import * as THREE from 'three';

interface CelestialBody {
  name: string;
  position: [number, number, number];
  radius: number;
  color: string;
  habitable: boolean;
  description: string;
  orbitalPeriod: number; // in Earth days
  texture?: string;
  rotationPeriod: number; // in Earth days
  atmosphere?: boolean;
  rings?: boolean;
  glowIntensity?: number;
}

interface StellarSystem {
  name: string;
  star: CelestialBody;
  planets: CelestialBody[];
  distance: number; // in light years
}

const solarSystem: StellarSystem = {
  name: 'Solar System',
  distance: 0,
  star: {
    name: 'Sun',
    position: [0, 0, 0],
    radius: 5,
    color: '#FDB813',
    habitable: false,
    description: 'The Sun is the star at the center of our Solar System. It provides the energy that makes life on Earth possible.',
    orbitalPeriod: 0,
    rotationPeriod: 27,
    texture: '/textures/sun.jpg',
    glowIntensity: 0.3
  },
  planets: [
    {
      name: 'Earth',
      position: [15, 0, 0],
      radius: 1,
      color: '#2B83FF',
      habitable: true,
      description: 'What makes the Earth habitable? It is the right distance from the Sun, it is protected from harmful solar radiation by its magnetic field, it is kept warm by an insulating atmosphere, and it has the right chemical ingredients for life, including water and carbon.',
      orbitalPeriod: 365.25,
      rotationPeriod: 1,
      texture: '/textures/earth.jpg',
      atmosphere: true
    },
    {
      name: 'Mars',
      position: [20, 0, 0],
      radius: 0.8,
      color: '#E27B58',
      habitable: true,
      description: 'Mars shows signs of past water activity and has a thin atmosphere. While currently inhospitable, it may have supported life in the past and could potentially be terraformed in the future.',
      orbitalPeriod: 687,
      rotationPeriod: 1.03,
      texture: '/textures/mars.jpg',
      atmosphere: true
    },
    {
      name: 'Europa',
      position: [25, 0, 0],
      radius: 0.6,
      color: '#FFFFFF',
      habitable: true,
      description: 'Europa, one of Jupiter\'s moons, has a subsurface ocean beneath its icy crust. This ocean may contain more than twice the amount of water found on Earth and could potentially harbor life.',
      orbitalPeriod: 3.55,
      rotationPeriod: 3.55,
      texture: '/textures/europa.jpg'
    }
  ]
};

const proximaCentauri: StellarSystem = {
  name: 'Proxima Centauri',
  distance: 4.24,
  star: {
    name: 'Proxima Centauri',
    position: [0, 0, 0],
    radius: 4,
    color: '#FF6B6B',
    habitable: false,
    description: 'Proxima Centauri is a red dwarf star, the closest known star to the Sun.',
    orbitalPeriod: 0,
    rotationPeriod: 83,
    texture: '/textures/proxima.jpg',
    glowIntensity: 0.3
  },
  planets: [
    {
      name: 'Proxima Centauri b',
      position: [12, 0, 0],
      radius: 1.1,
      color: '#4A90E2',
      habitable: true,
      description: 'Proxima Centauri b is an exoplanet orbiting within the habitable zone of Proxima Centauri. It receives similar amounts of energy from its star as Earth does from the Sun, making it a prime candidate for potential habitability.',
      orbitalPeriod: 11.2,
      rotationPeriod: 11.2,
      texture: '/textures/proxima_b.jpg',
      atmosphere: true
    }
  ]
};

const trappist1: StellarSystem = {
  name: 'Trappist-1',
  distance: 39.6,
  star: {
    name: 'TRAPPIST-1',
    position: [0, 0, 0],
    radius: 3,
    color: '#FF4500',
    habitable: false,
    description: 'TRAPPIST-1 is an ultra-cool red dwarf star that hosts seven Earth-sized planets, three of which are in the habitable zone.',
    orbitalPeriod: 0,
    rotationPeriod: 1.4,
    texture: '/textures/trappist1.jpg',
    glowIntensity: 0.3
  },
  planets: [
    {
      name: 'TRAPPIST-1e',
      position: [10, 0, 0],
      radius: 0.9,
      color: '#87CEEB',
      habitable: true,
      description: 'TRAPPIST-1e is one of the most promising candidates for habitability in the TRAPPIST-1 system. It has a similar size and mass to Earth and receives similar amounts of energy from its star.',
      orbitalPeriod: 6.1,
      rotationPeriod: 6.1,
      texture: '/textures/trappist1e.jpg',
      atmosphere: true
    },
    {
      name: 'TRAPPIST-1f',
      position: [13, 0, 0],
      radius: 1.0,
      color: '#4682B4',
      habitable: true,
      description: 'TRAPPIST-1f is another potentially habitable planet in the system. It receives slightly less energy from its star than Earth does from the Sun, but could still maintain liquid water under the right conditions.',
      orbitalPeriod: 9.2,
      rotationPeriod: 9.2,
      texture: '/textures/trappist1f.jpg',
      atmosphere: true
    }
  ]
};

const stellarSystems = [solarSystem, proximaCentauri, trappist1];

function GlowEffect({ position, scale, color, intensity }: { position: [number, number, number]; scale: number; color: string; intensity: number }) {
  return (
    <mesh position={position}>
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

function Planet({ body, timeScale, onClick }: { body: CelestialBody; timeScale: number; onClick: () => void }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [texture, setTexture] = useState<THREE.Texture | null>(null);
  const [hovered, setHovered] = useState(false);
  
  useEffect(() => {
    if (body.texture) {
      const textureLoader = new THREE.TextureLoader();
      // Ensure the texture path is correct by adding a leading slash
      const texturePath = body.texture.startsWith('/') ? body.texture : `/${body.texture}`;
      
      textureLoader.load(
        texturePath,
        (loadedTexture) => {
          console.log(`Successfully loaded texture for ${body.name}`);
          setTexture(loadedTexture);
        },
        undefined,
        (error) => {
          console.warn(`Failed to load texture for ${body.name}:`, error);
          setTexture(null);
        }
      );
    }
  }, [body.texture, body.name]);

  useFrame((state, delta) => {
    if (meshRef.current && body.orbitalPeriod > 0) {
      const angle = (delta * timeScale * 2 * Math.PI) / body.orbitalPeriod;
      const distance = Math.sqrt(body.position[0] ** 2 + body.position[1] ** 2 + body.position[2] ** 2);
      meshRef.current.position.x = Math.cos(angle) * distance;
      meshRef.current.position.z = Math.sin(angle) * distance;
      
      // Rotation
      const rotationAngle = (delta * timeScale * 2 * Math.PI) / body.rotationPeriod;
      meshRef.current.rotation.y += rotationAngle;
    }
  });

  return (
    <group>
      <mesh
        ref={meshRef}
        position={body.position}
        onClick={onClick}
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
      </mesh>
      {body.atmosphere && (
        <mesh position={body.position} scale={1.1}>
          <sphereGeometry args={[body.radius, 32, 32]} />
          <meshStandardMaterial
            color={body.color}
            transparent
            opacity={0.2}
            side={THREE.BackSide}
          />
        </mesh>
      )}
      {body.glowIntensity && (
        <GlowEffect
          position={body.position}
          scale={body.radius * 2}
          color={body.color}
          intensity={body.glowIntensity}
        />
      )}
      {body.orbitalPeriod > 0 && (
        <Trail
          width={0.5}
          color={body.color}
          length={20}
          decay={1}
          local={false}
          stride={0}
          interval={1}
        >
          <mesh position={body.position}>
            <sphereGeometry args={[0.1, 8, 8]} />
            <meshBasicMaterial color={body.color} />
          </mesh>
        </Trail>
      )}
    </group>
  );
}

export default function StellarMap() {
  const [selectedBody, setSelectedBody] = useState<CelestialBody | null>(null);
  const [timeScale, setTimeScale] = useState(1);
  const [currentSystem, setCurrentSystem] = useState(0);
  const [showInfo, setShowInfo] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const handleSystemChange = (index: number) => {
    try {
      setCurrentSystem(index);
      setError(null);
    } catch (err) {
      setError('Failed to load stellar system. Please try again.');
      console.error('Error loading stellar system:', err);
    }
  };

  return (
    <div className="w-full h-screen relative">
      <Canvas camera={{ position: [0, 20, 30], fov: 60 }}>
        <EffectComposer>
          <Bloom intensity={0.5} luminanceThreshold={0.1} />
        </EffectComposer>
        <ambientLight intensity={0.5} />
        <pointLight position={[0, 0, 0]} intensity={1} />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
        
        <Planet
          body={stellarSystems[currentSystem].star}
          timeScale={timeScale}
          onClick={() => setSelectedBody(stellarSystems[currentSystem].star)}
        />
        {stellarSystems[currentSystem].planets.map((body) => (
          <Planet
            key={body.name}
            body={body}
            timeScale={timeScale}
            onClick={() => setSelectedBody(body)}
          />
        ))}
        <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
      </Canvas>
      
      {error && (
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-red-500/90 text-white p-4 rounded-lg">
          {error}
        </div>
      )}

      {/* Time Controls */}
      <div className="absolute top-4 left-4 bg-black/80 text-white p-4 rounded-lg backdrop-blur-sm border border-blue-500/30 transform hover:scale-105 transition-transform">
        <div className="flex items-center gap-4">
          <button
            className="px-4 py-2 bg-blue-500/50 rounded hover:bg-blue-500/70 transition-colors"
            onClick={() => setTimeScale(prev => Math.max(0.1, prev / 2))}
          >
            ⏪ Slower
          </button>
          <span className="text-xl font-mono bg-blue-500/30 px-4 py-2 rounded">{timeScale.toFixed(1)}x</span>
          <button
            className="px-4 py-2 bg-blue-500/50 rounded hover:bg-blue-500/70 transition-colors"
            onClick={() => setTimeScale(prev => Math.min(10, prev * 2))}
          >
            Faster ⏩
          </button>
        </div>
      </div>

      {/* System Selection */}
      <div className="absolute bottom-4 right-4 bg-black/80 text-white p-4 rounded-lg backdrop-blur-sm border border-blue-500/30">
        <h3 className="text-lg font-bold mb-2 text-blue-400">Stellar Systems</h3>
        <div className="flex flex-col gap-2">
          {stellarSystems.map((system, index) => (
            <button
              key={system.name}
              className={`px-4 py-2 rounded transition-all transform hover:scale-105 ${
                currentSystem === index 
                  ? 'bg-blue-500/70 shadow-lg shadow-blue-500/50' 
                  : 'bg-gray-700/70 hover:bg-gray-600/70'
              }`}
              onClick={() => handleSystemChange(index)}
            >
              <div className="flex justify-between items-center">
                <span>{system.name}</span>
                <span className="text-sm text-gray-400">{system.distance} ly</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Info Panel */}
      {selectedBody && showInfo && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/90 text-white p-6 rounded-lg max-w-2xl border border-blue-500/50 backdrop-blur-sm animate-fade-in">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-2xl font-bold text-blue-400">{selectedBody.name}</h2>
            <button
              className="px-3 py-1 bg-blue-500/50 rounded hover:bg-blue-500/70 transition-colors"
              onClick={() => setShowInfo(false)}
            >
              ×
            </button>
          </div>
          <p className="text-gray-300 leading-relaxed">{selectedBody.description}</p>
          <div className="mt-4 flex gap-4 text-sm text-gray-400">
            <span className="bg-blue-500/20 px-3 py-1 rounded">Orbital Period: {selectedBody.orbitalPeriod} Earth days</span>
            <span className="bg-blue-500/20 px-3 py-1 rounded">Rotation Period: {selectedBody.rotationPeriod} Earth days</span>
            {selectedBody.habitable && (
              <span className="bg-green-500/20 px-3 py-1 rounded text-green-400">Potentially Habitable</span>
            )}
          </div>
        </div>
      )}
    </div>
  );
} 