import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import { useState } from 'react';
import { stellarSystems } from '../data/stellarSystems';
import OrbitingBody from './OrbitingBody';
import { CelestialBody } from '../types/astro';

export default function StellarMap() {
  const [selectedBody, setSelectedBody] = useState<CelestialBody | null>(null);
  const [timeScale, setTimeScale] = useState(1);
  const [currentSystem, setCurrentSystem] = useState(0);
  const [showInfo, setShowInfo] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const handleSystemChange = (index: number) => {
    try {
      setCurrentSystem(index);
      setSelectedBody(null);
      setShowInfo(true);
      setError(null);
    } catch (err) {
      setError('Failed to load stellar system. Please try again.');
      console.error('Error loading stellar system:', err);
    }
  };

  const handleSelectBody = (body: CelestialBody) => {
    setSelectedBody(body);
    setShowInfo(true);
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
        <OrbitingBody
          body={stellarSystems[currentSystem].star}
          timeScale={timeScale}
          onClick={handleSelectBody}
        />
        {stellarSystems[currentSystem].planets.map((body) => (
          <OrbitingBody
            key={body.name}
            body={body}
            timeScale={timeScale}
            onClick={handleSelectBody}
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
      <div className="absolute top-4 left-4 bg-black/80 text-white p-4 rounded-lg backdrop-blur-sm border border-blue-500/30 transform hover:scale-105 transition-transform w-72">
        <div className="flex flex-col gap-2">
          <label htmlFor="timeScaleSlider" className="text-sm mb-1">Time Scale: <span className="font-mono text-lg text-blue-300">{timeScale.toFixed(2)}x</span></label>
          <input
            id="timeScaleSlider"
            type="range"
            min={0.1}
            max={10}
            step={0.01}
            value={timeScale}
            onChange={e => setTimeScale(Number(e.target.value))}
            className="w-full accent-blue-500"
          />
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
              selectedBody.name === 'Earth' ? (
                <span className="bg-green-500/20 px-3 py-1 rounded text-green-400">Habitable</span>
              ) : (
                <span className="bg-green-500/20 px-3 py-1 rounded text-green-400">Potentially Habitable</span>
              )
            )}
          </div>
        </div>
      )}
    </div>
  );
} 