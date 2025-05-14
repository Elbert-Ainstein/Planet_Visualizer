import { CelestialBody, StellarSystem } from '../types/astro';

export const solarSystem: StellarSystem = {
  name: 'Solar System',
  distance: 0,
  star: {
    name: 'Sun',
    position: [0, 0, 0],
    radius: 5,
    color: '#FDB813',
    habitable: false,
    description: 'The Sun is a G-type main-sequence star (G2V) and the gravitational anchor of the Solar System. It emits a solar wind and UV flux that shapes planetary atmospheres.',
    orbitalPeriod: 0,
    rotationPeriod: 27,
    texture: '/textures/sun.jpg',
    glowIntensity: 0.3,
    escapeVelocity: 617.7, // km/s
    stellarWindPressure: 2, // nPa (at 1 AU)
    uvFlux: 1, // relative to Earth
    eccentricity: 0,
    discoveryMethod: 'Naked Eye',
    controversial: false
  },
  habitableZone: { inner: 13, outer: 22 }, // AU, Earth at 15
  habitableZoneAU: { inner: 0.95, outer: 1.37 }, // Real AU
  planets: [
    {
      name: 'Mercury',
      position: [8, 0, 0],
      radius: 0.38,
      color: '#b1b1b1',
      habitable: false,
      description: 'Smallest planet with extreme temperature changes. Has a large iron core and many craters. No atmosphere to retain heat.',
      orbitalPeriod: 88,
      rotationPeriod: 58.6,
      texture: '/textures/mercury.jpg',
      atmosphere: false,
      escapeVelocity: 4.3,
      stellarWindPressure: 2.0,
      uvFlux: 1.5,
      eccentricity: 0.2056,
      discoveryMethod: 'Naked Eye',
      controversial: false,
      realDistanceAU: 0.39
    },
    {
      name: 'Venus',
      position: [11, 0, 0],
      radius: 0.95,
      color: '#e6c07b',
      habitable: false,
      description: 'Hottest planet with thick toxic clouds. Retrograde rotation (spins backward) and volcanic surface.',
      orbitalPeriod: 225,
      rotationPeriod: 243,
      texture: '/textures/venus.jpg',
      atmosphere: true,
      escapeVelocity: 10.4,
      stellarWindPressure: 0.5,
      uvFlux: 0.6,
      eccentricity: 0.0067,
      discoveryMethod: 'Naked Eye',
      controversial: false,
      realDistanceAU: 0.72
    },
    {
      name: 'Earth',
      position: [15, 0, 0],
      radius: 1,
      color: '#2B83FF',
      habitable: true,
      description: 'Earth is the only known planet to support life, with a nitrogen-oxygen atmosphere, strong magnetic field, and abundant liquid water. It has moderate UV flux and a nearly circular orbit.',
      orbitalPeriod: 365.25,
      rotationPeriod: 1,
      texture: '/textures/earth.jpg',
      atmosphere: true,
      escapeVelocity: 11.2,
      stellarWindPressure: 2, // nPa (at 1 AU)
      uvFlux: 0.03,
      eccentricity: 0.0167,
      discoveryMethod: 'Naked Eye',
      controversial: false,
      realDistanceAU: 1
    },
    {
      name: 'Mars',
      position: [20, 0, 0],
      radius: 0.8,
      color: '#E27B58',
      habitable: true,
      description: 'Mars is a terrestrial planet with a thin CO2 atmosphere, evidence of past water, and high UV flux at the surface. Its orbit is more eccentric than Earth\'s.',
      orbitalPeriod: 687,
      rotationPeriod: 1.03,
      texture: '/textures/mars.jpg',
      atmosphere: true,
      escapeVelocity: 5.0,
      stellarWindPressure: 0.8, // nPa (at Mars)
      uvFlux: 0.43,
      eccentricity: 0.0934,
      discoveryMethod: 'Naked Eye',
      controversial: false,
      realDistanceAU: 1.52
    },
    {
      name: 'Jupiter',
      position: [30, 0, 0],
      radius: 2,
      color: '#e3c28b',
      habitable: false,
      description: 'Largest planet with Great Red Spot storm. Gas giant with 79 moons. Strong magnetic field. It also acts as a shield for the inner planets.',
      orbitalPeriod: 4331,
      rotationPeriod: 0.41,
      texture: '/textures/jupiter.jpg',
      rings: false,
      escapeVelocity: 59.5,
      stellarWindPressure: 5, // nPa (at Jupiter)
      uvFlux: 0.1,
      eccentricity: 0.0489,
      discoveryMethod: 'Naked Eye',
      controversial: false,
      realDistanceAU: 5.2,
      moons: [
        {
          name: 'Europa',
          position: [3, 0, 0],
          radius: 0.6,
          color: '#FFFFFF',
          habitable: true,
          description: 'Europa is an icy moon of Jupiter with a subsurface ocean, thin oxygen atmosphere, and high radiation from Jupiter\'s magnetosphere. Its habitability is debated.',
          orbitalPeriod: 3.55,
          rotationPeriod: 3.55,
          texture: '/textures/europa.jpg',
          parent: 'Jupiter',
          escapeVelocity: 2.0,
          stellarWindPressure: 0.2,
          uvFlux: 0.037,
          eccentricity: 0.009,
          discoveryMethod: 'Imaging',
          controversial: true,
          realDistanceAU: 5.2
        }
      ]
    },
    {
      name: 'Saturn',
      position: [40, 0, 0],
      radius: 1.7,
      color: '#f5e7b2',
      habitable: false,
      description: 'Famous for bright ice rings. Least dense planet - could float in water! Has hexagon-shaped storm at north pole.',
      orbitalPeriod: 10747,
      rotationPeriod: 0.45,
      texture: '/textures/saturn.jpg',
      rings: true,
      atmosphere: true,
      escapeVelocity: 35.5,
      stellarWindPressure: 3.0,
      uvFlux: 0.08,
      eccentricity: 0.0557,
      discoveryMethod: 'Naked Eye',
      controversial: false,
      realDistanceAU: 9.58
    },
    {
      name: 'Uranus',
      position: [50, 0, 0],
      radius: 1.5,
      color: '#b5e3e3',
      habitable: false,
      description: 'Uranus is an ice giant with a blue-green color.',
      orbitalPeriod: 30589,
      rotationPeriod: 0.72,
      texture: '/textures/uranus.jpg',
      realDistanceAU: 19.2
    },
    {
      name: 'Neptune',
      position: [60, 0, 0],
      radius: 1.5,
      color: '#4b70dd',
      habitable: false,
      description: 'Neptune is the farthest known planet from the Sun.',
      orbitalPeriod: 59800,
      rotationPeriod: 0.67,
      texture: '/textures/neptune.jpg',
      realDistanceAU: 30.05
    }
  ]
};

export const proximaCentauri: StellarSystem = {
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
  habitableZone: { inner: 10, outer: 16 }, // Proxima b at 12
  habitableZoneAU: { inner: 0.042, outer: 0.082 }, // Real AU
  planets: [
    {
      name: 'Proxima Centauri b',
      position: [12, 0, 0],
      radius: 1.1,
      color: '#4A90E2',
      habitable: true,
      description: 'Proxima Centauri b is an exoplanet orbiting within the habitable zone of Proxima Centauri. It receives similar amounts of energy from its star as Earth does from the Sun, making it a prime candidate for potential habitability.ay be tidally locked with extreme temperature differences.',
      orbitalPeriod: 11.2,
      rotationPeriod: 11.2,
      texture: '/textures/proxima_b.jpg',
      atmosphere: true,
      escapeVelocity: 11.2,
      stellarWindPressure: 100.0,
      uvFlux: 2.5,
      eccentricity: 0.25,
      discoveryMethod: 'Doppler Spectroscopy',
      controversial: true,
      realDistanceAU: 0.04856
    }
  ]
};

export const trappist1: StellarSystem = {
  name: 'Trappist-1',
  distance: 39.6,
  star: {
    name: 'Trappist-1',
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
  habitableZone: { inner: 10, outer: 16 }, // e, f, g in HZ
  habitableZoneAU: { inner: 0.024, outer: 0.049 }, // Real AU
  planets: [
    {
      name: 'TRAPPIST-1b',
      position: [6, 0, 0],
      radius: 0.9,
      color: '#b0c4de',
      habitable: false,
      description: 'TRAPPIST-1b is the innermost planet of the system.',
      orbitalPeriod: 1.5,
      rotationPeriod: 1.5,
      texture: '/textures/trappist1b.jpg',
      realDistanceAU: 0.01111
    },
    {
      name: 'TRAPPIST-1c',
      position: [7, 0, 0],
      radius: 0.9,
      color: '#b0e0e6',
      habitable: false,
      description: 'TRAPPIST-1c is the second planet from the star.',
      orbitalPeriod: 2.4,
      rotationPeriod: 2.4,
      texture: '/textures/trappist1c.jpg',
      realDistanceAU: 0.01521
    },
    {
      name: 'TRAPPIST-1d',
      position: [8, 0, 0],
      radius: 0.8,
      color: '#add8e6',
      habitable: false,
      description: 'TRAPPIST-1d is the third planet from the star.',
      orbitalPeriod: 4.0,
      rotationPeriod: 4.0,
      texture: '/textures/trappist1d.jpg',
      realDistanceAU: 0.02144
    },
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
      atmosphere: true,
      realDistanceAU: 0.02817
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
      atmosphere: true,
      realDistanceAU: 0.0371
    },
    {
      name: 'TRAPPIST-1g',
      position: [15, 0, 0],
      radius: 1.1,
      color: '#6495ED',
      habitable: false,
      description: 'TRAPPIST-1g is the sixth planet from the star.',
      orbitalPeriod: 12.3,
      rotationPeriod: 12.3,
      texture: '/textures/trappist1g.jpg',
      realDistanceAU: 0.0451
    },
    {
      name: 'TRAPPIST-1h',
      position: [18, 0, 0],
      radius: 0.8,
      color: '#4169E1',
      habitable: false,
      description: 'TRAPPIST-1h is the outermost planet of the system.',
      orbitalPeriod: 20.0,
      rotationPeriod: 20.0,
      texture: '/textures/trappist1h.jpg',
      realDistanceAU: 0.059
    }
  ]
};

export const kepler442: StellarSystem = {
  name: 'Kepler-442',
  distance: 1206,
  star: {
    name: 'Kepler-442',
    position: [0, 0, 0],
    radius: 3,
    color: '#FFD700',
    habitable: false,
    description: 'Kepler-442 is an orange main-sequence star in the constellation Lyra.',
    orbitalPeriod: 0,
    rotationPeriod: 30,
    texture: '/textures/kepler442.jpg',
    glowIntensity: 0.3
  },
  habitableZone: { inner: 16, outer: 22 }, // b at 18
  habitableZoneAU: { inner: 0.37, outer: 0.59 }, // Real AU
  planets: [
    {
      name: 'Kepler-442b',
      position: [18, 0, 0],
      radius: 1.3,
      color: '#2B83FF',
      habitable: true,
      description: 'Kepler-442b is a confirmed exoplanet in the habitable zone of Kepler-442.',
      orbitalPeriod: 112.3,
      rotationPeriod: 1.1,
      texture: '/textures/earth.jpg',
      atmosphere: true,
      realDistanceAU: 0.409
    }
  ]
};

export const lhs1140: StellarSystem = {
  name: 'LHS 1140',
  distance: 41,
  star: {
    name: 'LHS 1140',
    position: [0, 0, 0],
    radius: 2.5,
    color: '#FF6347',
    habitable: false,
    description: 'LHS 1140 is a red dwarf star in the constellation Cetus.',
    orbitalPeriod: 0,
    rotationPeriod: 130,
    texture: '/textures/lhs1140.jpg',
    glowIntensity: 0.3
  },
  habitableZone: { inner: 13, outer: 18 }, // b at 15
  habitableZoneAU: { inner: 0.087, outer: 0.22 }, // Real AU
  planets: [
    {
      name: 'LHS 1140 b',
      position: [15, 0, 0],
      radius: 1.7,
      color: '#2B83FF',
      habitable: true,
      description: 'LHS 1140 b is a super-Earth exoplanet in the habitable zone of LHS 1140.',
      orbitalPeriod: 24.7,
      rotationPeriod: 1.2,
      texture: '/textures/earth.jpg',
      atmosphere: true,
      realDistanceAU: 0.0936
    }
  ]
};

export const ross128: StellarSystem = {
  name: 'Ross 128',
  distance: 11,
  star: {
    name: 'Ross 128',
    position: [0, 0, 0],
    radius: 2.2,
    color: '#FF6B6B',
    habitable: false,
    description: 'Ross 128 is a quiet red dwarf star in the constellation Virgo. It is less active than many other red dwarfs, making its environment more stable for orbiting planets.',
    orbitalPeriod: 0,
    rotationPeriod: 165,
    texture: '/textures/ross128.jpg',
    glowIntensity: 0.3,
    escapeVelocity: 300, // km/s (approx)
    stellarWindPressure: 0.5, // nPa (relative, less active)
    uvFlux: 0.02, // relative to Earth
    eccentricity: 0,
    discoveryMethod: 'Naked Eye',
    controversial: false
  },
  habitableZone: { inner: 11, outer: 16 }, // b at 13
  habitableZoneAU: { inner: 0.053, outer: 0.112 }, // Real AU
  planets: [
    {
      name: 'Ross 128 b',
      position: [13, 0, 0],
      radius: 1.1,
      color: '#2B83FF',
      habitable: true,
      description: 'Ross 128 b is a temperate exoplanet orbiting a quiet red dwarf. It does not transit its star, making atmospheric studies challenging. Its equilibrium temperature is estimated to be between -76°F and 82°F, and it is considered one of the closest potentially habitable exoplanets.',
      orbitalPeriod: 9.9,
      rotationPeriod: 1.1,
      texture: '/textures/earth.jpg',
      atmosphere: true,
      escapeVelocity: 11.1,
      stellarWindPressure: 0.5,
      uvFlux: 0.02,
      eccentricity: 0.036,
      discoveryMethod: 'Radial Velocity',
      controversial: false,
      realDistanceAU: 0.049
    }
  ]
};

export const tauCeti: StellarSystem = {
  name: 'Tau Ceti',
  distance: 11.9,
  star: {
    name: 'Tau Ceti',
    position: [0, 0, 0],
    radius: 1.8,
    color: '#FFD700',
    habitable: false,
    description: 'Tau Ceti is a G-type main-sequence star, similar to the Sun but slightly less luminous. It is one of the closest Sun-like stars and has a stable environment.',
    orbitalPeriod: 0,
    rotationPeriod: 34,
    texture: '/textures/tauceti.jpg',
    glowIntensity: 0.3,
    escapeVelocity: 618,
    stellarWindPressure: 1.8,
    uvFlux: 0.78,
    eccentricity: 0,
    discoveryMethod: 'Naked Eye',
    controversial: false
  },
  habitableZone: { inner: 13, outer: 19 }, // scene units
  habitableZoneAU: { inner: 0.55, outer: 1.16 }, // real AU
  planets: [
    {
      name: 'Tau Ceti b',
      position: [4, 0, 0],
      radius: 1,
      color: '#b0c4de',
      habitable: false,
      description: 'Likely a hot super-Earth, too close to the star for habitability.',
      orbitalPeriod: 13.9,
      rotationPeriod: 13.9,
      texture: '/textures/rocky.jpg',
      escapeVelocity: 15.2,
      uvFlux: 2.1,
      eccentricity: 0.05,
      discoveryMethod: 'Radial Velocity',
      controversial: false,
      realDistanceAU: 0.105
    },
    {
      name: 'Tau Ceti c',
      position: [6, 0, 0],
      radius: 1.7,
      color: '#e6c07b',
      habitable: false,
      description: 'A super-Earth, likely too hot for life as we know it.',
      orbitalPeriod: 35.4,
      rotationPeriod: 35.4,
      texture: '/textures/rocky.jpg',
      escapeVelocity: 16.1,
      uvFlux: 1.3,
      eccentricity: 0.07,
      discoveryMethod: 'Radial Velocity',
      controversial: false,
      realDistanceAU: 0.195
    },
    {
      name: 'Tau Ceti d',
      position: [8.8, 0, 0],
      radius: 1.8,
      color: '#2B83FF',
      habitable: true,
      description: 'A super-Earth in the inner edge of the habitable zone. Potentially rocky, but habitability is debated.',
      orbitalPeriod: 94,
      rotationPeriod: 94,
      texture: '/textures/earth.jpg',
      escapeVelocity: 16.8,
      uvFlux: 0.95,
      eccentricity: 0.08,
      discoveryMethod: 'Radial Velocity',
      controversial: true,
      realDistanceAU: 0.374
    },
    {
      name: 'Tau Ceti e',
      position: [13, 0, 0],
      radius: 1.6,
      color: '#2B83FF',
      habitable: true,
      description: 'A super-Earth in the habitable zone, considered a candidate for habitability.',
      orbitalPeriod: 162,
      rotationPeriod: 162,
      texture: '/textures/earth.jpg',
      escapeVelocity: 15.9,
      uvFlux: 0.72,
      eccentricity: 0.09,
      discoveryMethod: 'Radial Velocity',
      controversial: false,
      realDistanceAU: 0.552
    },
    {
      name: 'Tau Ceti f',
      position: [31.9, 0, 0],
      radius: 1.4,
      color: '#4682B4',
      habitable: true,
      description: 'A super-Earth in the outer part of the habitable zone, possibly cold but could have subsurface oceans.',
      orbitalPeriod: 636,
      rotationPeriod: 636,
      texture: '/textures/earth.jpg',
      escapeVelocity: 14.7,
      uvFlux: 0.48,
      eccentricity: 0.10,
      discoveryMethod: 'Radial Velocity',
      controversial: false,
      realDistanceAU: 1.35
    },
    {
      name: 'Tau Ceti g',
      position: [46.1, 0, 0],
      radius: 1.2,
      color: '#4b70dd',
      habitable: false,
      description: 'A super-Earth or mini-Neptune, likely too cold for surface habitability.',
      orbitalPeriod: 1680,
      rotationPeriod: 1680,
      texture: '/textures/icy.jpg',
      escapeVelocity: 13.2,
      uvFlux: 0.22,
      eccentricity: 0.12,
      discoveryMethod: 'Radial Velocity',
      controversial: false,
      realDistanceAU: 1.95
    }
  ]
};

export const gj667: StellarSystem = {
  name: 'GJ 667 C',
  distance: 23.6,
  star: {
    name: 'GJ 667 C',
    position: [0, 0, 0],
    radius: 1.0,
    color: '#FF6B6B',
    habitable: false,
    description: 'GJ 667 C is an M1.5V red dwarf in a triple star system, notable for its multiple super-Earth planets, some in the habitable zone.',
    orbitalPeriod: 0,
    rotationPeriod: 105,
    texture: '/textures/gj667c.jpg',
    glowIntensity: 0.3,
    escapeVelocity: 120,
    stellarWindPressure: 2.5,
    uvFlux: 0.15,
    eccentricity: 0,
    discoveryMethod: 'Radial Velocity',
    controversial: false
  },
  habitableZone: { inner: 13, outer: 19 },
  habitableZoneAU: { inner: 0.11, outer: 0.23 },
  planets: [
    {
      name: 'GJ 667 C b',
      position: [5.8, 0, 0],
      radius: 1.8,
      color: '#b0c4de',
      habitable: false,
      description: 'A hot super-Earth, too close to the star for habitability.',
      orbitalPeriod: 7.2,
      rotationPeriod: 7.2,
      texture: '/textures/rocky.jpg',
      escapeVelocity: 15.5,
      uvFlux: 2.5,
      eccentricity: 0.09,
      discoveryMethod: 'Radial Velocity',
      controversial: false,
      realDistanceAU: 0.049
    },
    {
      name: 'GJ 667 C h',
      position: [10.5, 0, 0],
      radius: 1.2,
      color: '#e6c07b',
      habitable: false,
      description: 'A candidate planet, likely too hot for habitability.',
      orbitalPeriod: 16.1,
      rotationPeriod: 16.1,
      texture: '/textures/rocky.jpg',
      escapeVelocity: 12.5,
      uvFlux: 1.7,
      eccentricity: 0.07,
      discoveryMethod: 'Radial Velocity',
      controversial: true,
      realDistanceAU: 0.089
    },
    {
      name: 'GJ 667 C c',
      position: [14.8, 0, 0],
      radius: 2.0,
      color: '#2B83FF',
      habitable: true,
      description: 'A super-Earth in the habitable zone, notable for orbiting in a triple star system.',
      orbitalPeriod: 28.1,
      rotationPeriod: 28.1,
      texture: '/textures/earth.jpg',
      escapeVelocity: 17.2,
      uvFlux: 0.7,
      eccentricity: 0.05,
      discoveryMethod: 'Radial Velocity',
      controversial: false,
      realDistanceAU: 0.125
    },
    {
      name: 'GJ 667 C f',
      position: [18.4, 0, 0],
      radius: 1.7,
      color: '#4682B4',
      habitable: true,
      description: 'A super-Earth in the habitable zone, possibly with a thick atmosphere.',
      orbitalPeriod: 39.0,
      rotationPeriod: 39.0,
      texture: '/textures/earth.jpg',
      escapeVelocity: 16.0,
      uvFlux: 0.5,
      eccentricity: 0.06,
      discoveryMethod: 'Radial Velocity',
      controversial: false,
      realDistanceAU: 0.156
    },
    {
      name: 'GJ 667 C d',
      position: [20.1, 0, 0],
      radius: 1.6,
      color: '#2B83FF',
      habitable: true,
      description: 'A super-Earth near the outer edge of the habitable zone.',
      orbitalPeriod: 62.2,
      rotationPeriod: 62.2,
      texture: '/textures/earth.jpg',
      escapeVelocity: 15.8,
      uvFlux: 0.4,
      eccentricity: 0.08,
      discoveryMethod: 'Radial Velocity',
      controversial: true,
      realDistanceAU: 0.17
    },
    {
      name: 'GJ 667 C e',
      position: [24.8, 0, 0],
      radius: 1.5,
      color: '#2B83FF',
      habitable: true,
      description: 'A super-Earth just outside the habitable zone.',
      orbitalPeriod: 91.6,
      rotationPeriod: 91.6,
      texture: '/textures/earth.jpg',
      escapeVelocity: 15.0,
      uvFlux: 0.3,
      eccentricity: 0.09,
      discoveryMethod: 'Radial Velocity',
      controversial: true,
      realDistanceAU: 0.21
    },
    {
      name: 'GJ 667 C g',
      position: [33.1, 0, 0],
      radius: 1.3,
      color: '#4b70dd',
      habitable: false,
      description: 'A super-Earth or mini-Neptune, likely too cold for surface habitability.',
      orbitalPeriod: 256.2,
      rotationPeriod: 256.2,
      texture: '/textures/icy.jpg',
      escapeVelocity: 13.5,
      uvFlux: 0.15,
      eccentricity: 0.11,
      discoveryMethod: 'Radial Velocity',
      controversial: false,
      realDistanceAU: 0.28
    }
  ]
};

export const hd219134: StellarSystem = {
  name: 'HD 219134',
  distance: 21.3,
  star: {
    name: 'HD 219134',
    radius: 1.8,
    color: '#ff9966',
    position: [0, 0, 0],
    orbitalPeriod: 0,
    rotationPeriod: 42.3,
    habitable: false,
    description: 'A K-type main sequence star with a rich planetary system. Its high metallicity and stable nature make it an excellent target for exoplanet studies.',
    texture: '/textures/hd219134.jpg',
    glowIntensity: 0.3
  },
  habitableZone: {
    inner: 40,
    outer: 80
  },
  habitableZoneAU: {
    inner: 0.4,
    outer: 0.8
  },
  planets: [
    {
      name: 'HD 219134 b',
      radius: 0.778,
      color: '#8B4513',
      position: [3.8, 0, 0],
      orbitalPeriod: 3.093,
      rotationPeriod: 3.093,
      escapeVelocity: 21.5,
      discoveryMethod: 'Radial Velocity + Transit',
      description: 'A super-Earth with Earth-like density but extreme surface temperatures. Its precise density measurement makes it a key target for rocky planet studies.',
      texture: '/textures/hd219134b.jpg',
      realDistanceAU: 0.038,
      controversial: false,
      habitable: false
    },
    {
      name: 'HD 219134 c',
      radius: 0.56,
      color: '#A0522D',
      position: [6.5, 0, 0],
      orbitalPeriod: 6.765,
      rotationPeriod: 6.765,
      escapeVelocity: 20.8,
      discoveryMethod: 'Radial Velocity',
      description: 'A super-Earth with a slightly longer orbital period than planet b. Its mass and radius suggest a rocky composition.',
      texture: '/textures/hd219134c.jpg',
      realDistanceAU: 0.065,
      controversial: false,
      habitable: false
    },
    {
      name: 'HD 219134 d',
      radius: 0.8,
      color: '#CD853F',
      position: [23.7, 0, 0],
      orbitalPeriod: 46.71,
      rotationPeriod: 46.71,
      escapeVelocity: 31.2,
      discoveryMethod: 'Radial Velocity',
      description: 'A massive super-Earth with a longer orbital period. Its position places it near the outer edge of the habitable zone.',
      texture: '/textures/hd219134d.jpg',
      realDistanceAU: 0.237,
      controversial: false,
      habitable: false
    },
    {
      name: 'HD 219134 e',
      radius: 0.81,
      color: '#DEB887',
      position: [34.5, 0, 0],
      orbitalPeriod: 70.6,
      rotationPeriod: 94.2,
      escapeVelocity: 17.8,
      discoveryMethod: 'Radial Velocity',
      description: 'A super-Earth with a long orbital period, placing it in the habitable zone. Its lower density suggests a significant volatile content.',
      texture: '/textures/trappist1e.jpg',
      realDistanceAU: 0.375,
      controversial: false,
      habitable: true
    },
    {
      name: 'HD 219134 f',
      radius: 0.81,
      color: '#D2B48C',
      position: [14.6, 0, 0],
      orbitalPeriod: 22.717,
      rotationPeriod: 22.717,
      escapeVelocity: 24.5,
      discoveryMethod: 'Radial Velocity',
      description: 'A super-Earth with an intermediate orbital period. Its mass and radius suggest a rocky composition with possible volatile layers.',
      texture: '/textures/hd219134f.jpg',
      realDistanceAU: 0.146,
      controversial: false,
      habitable: false
    },
    {
      name: 'HD 219134 g',
      radius: 0.81,
      color: '#F5DEB3',
      position: [38.5, 0, 0],
      orbitalPeriod: 94.2,
      rotationPeriod: 94.2,
      escapeVelocity: 22.8,
      discoveryMethod: 'Radial Velocity',
      description: 'A super-Earth with a long orbital period, placing it in the habitable zone. Its mass and radius suggest a rocky composition with possible volatile layers.',
      texture: '/textures/trappist1e.jpg',
      realDistanceAU: 0.3753,
      controversial: false,
      habitable: true
    }
  ]
};

export const stellarSystems: StellarSystem[] = [solarSystem, proximaCentauri, trappist1, kepler442, lhs1140, ross128, tauCeti, gj667, hd219134]; 