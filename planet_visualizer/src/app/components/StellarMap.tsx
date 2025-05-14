import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import { useState } from 'react';
import { stellarSystems } from '../data/stellarSystems';
import OrbitingBody from './OrbitingBody';
import { CelestialBody } from '../types/astro';
import QuizModal from './QuizModal';
import BodyQuizPanel from './BodyQuizPanel';
import { systemQuizzes, bodyQuizzes } from '../data/quizData';
import Endscreen from './Endscreen';

export default function StellarMap() {
  const [selectedBody, setSelectedBody] = useState<CelestialBody | null>(null);
  const [timeScale, setTimeScale] = useState(1);
  const [currentSystem, setCurrentSystem] = useState(0);
  const [showInfo, setShowInfo] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showQuiz, setShowQuiz] = useState(false);
  const [score, setScore] = useState(0);
  const [completedSystemQuizzes, setCompletedSystemQuizzes] = useState<Set<string>>(new Set());
  const [completedBodyQuizzes, setCompletedBodyQuizzes] = useState<Set<string>>(new Set());

  const handleSystemChange = (index: number) => {
    try {
      setCurrentSystem(index);
      setSelectedBody(null);
      setShowInfo(true);
      setShowQuiz(false);
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

  // Find quiz for current system
  const currentSystemQuiz = systemQuizzes.find(q => q.systemName === stellarSystems[currentSystem].name);
  // Find quiz for selected body
  const currentBodyQuiz = selectedBody && bodyQuizzes.find(q => q.systemName === stellarSystems[currentSystem].name && q.bodyName === selectedBody.name);

  // Calculate total number of quizzes
  const totalSystemQuizzes = systemQuizzes.length;
  const totalBodyQuizzes = bodyQuizzes.length;
  const totalQuizzes = totalSystemQuizzes + totalBodyQuizzes;
  const allCompleted = completedSystemQuizzes.size + completedBodyQuizzes.size === totalQuizzes;

  // Handler for completing a system quiz
  const handleSystemQuizComplete = () => {
    setCompletedSystemQuizzes(prev => new Set(prev).add(stellarSystems[currentSystem].name));
    setShowQuiz(false);
  };

  // Handler for completing a body quiz
  const handleBodyQuizComplete = (bodyKey: string) => {
    setCompletedBodyQuizzes(prev => new Set(prev).add(bodyKey));
  };

  // Handler for reload
  const handleReload = () => {
    setScore(0);
    setCompletedSystemQuizzes(new Set());
    setCompletedBodyQuizzes(new Set());
    setShowQuiz(false);
    setShowInfo(true);
    setSelectedBody(null);
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
        {/* Habitable Zone Visualization */}
        {stellarSystems[currentSystem].habitableZone && (
          <mesh rotation={[-Math.PI / 2, 0, 0]}>
            <ringGeometry
              args={[stellarSystems[currentSystem].habitableZone.inner, stellarSystems[currentSystem].habitableZone.outer, 128]}
            />
            <meshBasicMaterial
              color="#00ff99"
              transparent
              opacity={0.15}
              side={2}
            />
          </mesh>
        )}
        <OrbitingBody
          body={stellarSystems[currentSystem].star}
          timeScale={timeScale}
          onClick={handleSelectBody}
        />
        {stellarSystems[currentSystem].planets.map((body) => {
          return (
            <>
              <OrbitingBody
                key={body.name}
                body={body}
                timeScale={timeScale}
                onClick={handleSelectBody}
              />
            </>
          );
        })}
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
      {/* System Selection & Quiz Button */}
      <div className="absolute bottom-4 right-4 bg-black/80 text-white p-4 rounded-lg backdrop-blur-sm border border-blue-500/30">
        <h3 className="text-lg font-bold mb-2 text-blue-400">Stellar Systems</h3>
        <div className="flex flex-col gap-2 mb-2">
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
        {currentSystemQuiz && !completedSystemQuizzes.has(stellarSystems[currentSystem].name) && (
          <button
            className="w-full mt-2 px-4 py-2 bg-green-600 rounded hover:bg-green-700 font-bold"
            onClick={() => setShowQuiz(true)}
          >
            Quiz
          </button>
        )}
        {currentSystemQuiz && completedSystemQuizzes.has(stellarSystems[currentSystem].name) && (
          <div className="w-full mt-2 px-4 py-2 bg-gray-700 rounded text-center text-green-400 font-bold">Quiz Complete</div>
        )}
      </div>
      {/* Score Display */}
      <div className="absolute bottom-4 left-4 bg-black/80 text-white p-4 rounded-lg border border-green-500/30 font-bold text-lg">
        Score: <span className="text-green-400">{score}</span>
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
          <p className="text-gray-300 leading-relaxed mb-4">{selectedBody.description}</p>
          {/* Habitable zone info for stars */}
          {stellarSystems[currentSystem].star.name === selectedBody.name && (stellarSystems[currentSystem].habitableZone || stellarSystems[currentSystem].habitableZoneAU) && (
            <div className="mb-2">
              {stellarSystems[currentSystem].habitableZoneAU && (
                <span className="bg-cyan-500/20 px-3 py-1 rounded text-cyan-300 font-mono mr-2">
                  Habitable Zone: {stellarSystems[currentSystem].habitableZoneAU.inner} – {stellarSystems[currentSystem].habitableZoneAU.outer} AU
                </span>
              )}
              {stellarSystems[currentSystem].habitableZoneAU && (
                <span className="ml-2 bg-blue-500/20 px-3 py-1 rounded text-blue-300 font-mono">
                  Width: {(stellarSystems[currentSystem].habitableZoneAU.outer - stellarSystems[currentSystem].habitableZoneAU.inner).toFixed(2)} AU
                </span>
              )}
            </div>
          )}
          {/* Distance from star for planets/moons */}
          {stellarSystems[currentSystem].star.name !== selectedBody.name && (stellarSystems[currentSystem].habitableZone || stellarSystems[currentSystem].habitableZoneAU) && selectedBody.position && (
            <div className="mb-2">
              {selectedBody.realDistanceAU !== undefined && (
                <span className="bg-cyan-500/20 px-3 py-1 rounded text-cyan-300 font-mono mr-2">
                  Distance from star: {selectedBody.realDistanceAU} AU
                </span>
              )}
              {stellarSystems[currentSystem].habitableZoneAU && selectedBody.realDistanceAU !== undefined && (
                (selectedBody.realDistanceAU >= stellarSystems[currentSystem].habitableZoneAU.inner && selectedBody.realDistanceAU <= stellarSystems[currentSystem].habitableZoneAU.outer) ? (
                  <span className="ml-2 bg-green-500/30 px-3 py-1 rounded text-green-300 font-bold">In Habitable Zone</span>
                ) : (
                  <span className="ml-2 bg-yellow-500/30 px-3 py-1 rounded text-yellow-300 font-bold">Outside Habitable Zone</span>
                )
              )}
            </div>
          )}
          <div className="grid grid-cols-2 gap-2 text-sm text-gray-400 mb-2">
            <span className="bg-blue-500/20 px-3 py-1 rounded">Orbital Period: {selectedBody.orbitalPeriod} Earth days</span>
            <span className="bg-blue-500/20 px-3 py-1 rounded">Rotation Period: {selectedBody.rotationPeriod} Earth days</span>
            {selectedBody.escapeVelocity !== undefined && (
              <span className="bg-blue-500/20 px-3 py-1 rounded">Escape Velocity: {selectedBody.escapeVelocity} km/s</span>
            )}
            {selectedBody.stellarWindPressure !== undefined && (
              <span className="bg-blue-500/20 px-3 py-1 rounded">Stellar Wind Pressure: {selectedBody.stellarWindPressure} nPa</span>
            )}
            {selectedBody.uvFlux !== undefined && (
              <span className="bg-blue-500/20 px-3 py-1 rounded">UV Flux: {selectedBody.uvFlux}</span>
            )}
            {selectedBody.eccentricity !== undefined && (
              <span className="bg-blue-500/20 px-3 py-1 rounded">Eccentricity: {selectedBody.eccentricity}</span>
            )}
            {selectedBody.discoveryMethod && (
              <span className="bg-blue-500/20 px-3 py-1 rounded">Discovery: {selectedBody.discoveryMethod}</span>
            )}
            {selectedBody.controversial !== undefined && (
              <span className={`px-3 py-1 rounded font-bold ${selectedBody.controversial ? 'bg-yellow-600/40 text-yellow-200' : 'bg-green-700/40 text-green-200'}`}>{selectedBody.controversial ? 'Controversial Candidate' : 'Widely Accepted'}</span>
            )}
            {selectedBody.habitable && (
              selectedBody.name === 'Earth' ? (
                <span className="bg-green-500/20 px-3 py-1 rounded text-green-400">Habitable</span>
              ) : (
                <span className="bg-green-500/20 px-3 py-1 rounded text-green-400">Potentially Habitable</span>
              )
            )}
          </div>
          {/* Per-body quiz */}
          {currentBodyQuiz && !completedBodyQuizzes.has(`${stellarSystems[currentSystem].name}:${selectedBody.name}`) && (
            <BodyQuizPanel
              questions={currentBodyQuiz.questions}
              onScoreChange={delta => {
                setScore(score + delta);
              }}
              onComplete={() => handleBodyQuizComplete(`${stellarSystems[currentSystem].name}:${selectedBody.name}`)}
            />
          )}
          {currentBodyQuiz && completedBodyQuizzes.has(`${stellarSystems[currentSystem].name}:${selectedBody.name}`) && (
            <div className="mt-6 p-4 bg-gray-700/80 rounded-lg border border-green-500/30 text-green-400 font-bold text-center">Quiz Complete</div>
          )}
        </div>
      )}
      {/* System Quiz Modal */}
      {showQuiz && currentSystemQuiz && (
        <QuizModal
          questions={currentSystemQuiz.questions}
          onClose={handleSystemQuizComplete}
          onScoreChange={delta => setScore(score + delta)}
        />
      )}
      {/* Endscreen */}
      {allCompleted && (
        <Endscreen score={score} total={totalQuizzes * 2} onReload={handleReload} />
      )}
    </div>
  );
} 