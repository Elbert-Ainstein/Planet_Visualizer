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
    description: 'The Sun is the star at the center of our Solar System. It provides the energy that makes life on Earth possible.',
    orbitalPeriod: 0,
    rotationPeriod: 27,
    texture: '/textures/sun.jpg',
    glowIntensity: 0.3
  },
  planets: [
    {
      name: 'Mercury',
      position: [8, 0, 0],
      radius: 0.38,
      color: '#b1b1b1',
      habitable: false,
      description: 'Mercury is the closest planet to the Sun.',
      orbitalPeriod: 88,
      rotationPeriod: 58.6,
      texture: '/textures/mercury.jpg'
    },
    {
      name: 'Venus',
      position: [11, 0, 0],
      radius: 0.95,
      color: '#e6c07b',
      habitable: false,
      description: 'Venus is the second planet from the Sun and has a thick, toxic atmosphere.',
      orbitalPeriod: 225,
      rotationPeriod: -243,
      texture: '/textures/venus.jpg',
      atmosphere: true
    },
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
      name: 'Jupiter',
      position: [30, 0, 0],
      radius: 2,
      color: '#e3c28b',
      habitable: false,
      description: 'Jupiter is the largest planet in the Solar System.',
      orbitalPeriod: 4331,
      rotationPeriod: 0.41,
      texture: '/textures/jupiter.jpg',
      rings: false,
      moons: [
        {
          name: 'Europa',
          position: [3, 0, 0],
          radius: 0.6,
          color: '#FFFFFF',
          habitable: true,
          description: 'Europa, one of Jupiter\'s moons, has a subsurface ocean beneath its icy crust. This ocean may contain more than twice the amount of water found on Earth and could potentially harbor life.',
          orbitalPeriod: 3.55,
          rotationPeriod: 3.55,
          texture: '/textures/europa.jpg',
          parent: 'Jupiter'
        }
      ]
    },
    {
      name: 'Saturn',
      position: [40, 0, 0],
      radius: 1.7,
      color: '#f5e7b2',
      habitable: false,
      description: 'Saturn is known for its prominent ring system.',
      orbitalPeriod: 10747,
      rotationPeriod: 0.45,
      texture: '/textures/saturn.jpg',
      rings: true
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
      texture: '/textures/uranus.jpg'
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
      texture: '/textures/neptune.jpg'
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
      texture: '/textures/trappist1b.jpg'
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
      texture: '/textures/trappist1c.jpg'
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
      texture: '/textures/trappist1d.jpg'
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
      texture: '/textures/trappist1g.jpg'
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
      texture: '/textures/trappist1h.jpg'
    }
  ]
};

export const stellarSystems: StellarSystem[] = [solarSystem, proximaCentauri, trappist1]; 