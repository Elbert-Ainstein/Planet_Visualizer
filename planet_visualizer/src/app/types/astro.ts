export interface CelestialBody {
  name: string;
  position: [number, number, number];
  radius: number;
  color: string;
  habitable: boolean;
  description: string;
  orbitalPeriod: number;
  texture?: string;
  rotationPeriod: number;
  atmosphere?: boolean;
  rings?: boolean;
  glowIntensity?: number;
  moons?: CelestialBody[];
  parent?: string;
}

export interface StellarSystem {
  name: string;
  star: CelestialBody;
  planets: CelestialBody[];
  distance: number;
} 