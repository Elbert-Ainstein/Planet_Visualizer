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
  escapeVelocity?: number; // km/s
  stellarWindPressure?: number; // nPa or relative
  uvFlux?: number; // relative to Earth or W/m²
  eccentricity?: number; // 0 = circular
  discoveryMethod?: string;
  controversial?: boolean;
  realDistanceAU?: number; // Actual astronomical distance from the star in AU
}

export interface StellarSystem {
  name: string;
  star: CelestialBody;
  planets: CelestialBody[];
  distance: number;
  escapeVelocity?: number;
  stellarWindPressure?: number;
  uvFlux?: number;
  eccentricity?: number;
  discoveryMethod?: string;
  controversial?: boolean;
  habitableZone?: { inner: number; outer: number }; // in AU or system units
  habitableZoneAU?: { inner: number; outer: number }; // real AU
} 