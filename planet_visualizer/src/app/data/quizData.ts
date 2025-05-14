// Quiz data for each system and for individual habitable bodies

export interface QuizQuestion {
  question: string;
  options: string[];
  answer: number; // index of correct option
}

export interface SystemQuiz {
  systemName: string;
  questions: QuizQuestion[];
}

export interface BodyQuiz {
  systemName: string;
  bodyName: string;
  questions: QuizQuestion[];
}

export const systemQuizzes: SystemQuiz[] = [
  {
    systemName: 'Solar System',
    questions: [
      {
        question: 'Which of these moons is believed to have a subsurface ocean beneath an icy crust?',
        options: ['Io', 'Europa', 'Callisto', 'Enceladus'],
        answer: 1
      },
      {
        question: 'What percentage of the Solar System\'s total mass is contained within the Sun?',
        options: ['75%', '90%', '99.8%', '50%'],
        answer: 2
      },
      {
        question: 'Which planet has the largest volcano in the solar system?',
        options: ['Venus', 'Mars', 'Earth', 'Jupiter'],
        answer: 1
      },
      {
        question: 'Which planet has a day longer than its year?',
        options: ['Venus', 'Mercury', 'Mars', 'Saturn'],
        answer: 0
      },
      {
        question: 'Which planet acts as the Solar System\'s "vacuum cleaner" by capturing potential Earth-impacting objects?',
        options: ['Saturn', 'Jupiter', 'Neptune', 'Venus'],
        answer: 1
      },
      {
        question: 'What causes Venus to have a higher average surface temperature than Mercury despite being farther from the Sun?',
        options: ['Dense atmosphere trapping heat', 'Higher volcanic activity', 'Retrograde rotation', 'Stronger magnetic field'],
        answer: 0
      },
      {
        question: 'Which moon in our Solar System exhibits the most intense volcanic activity?',
        options: ['Europa', 'Io', 'Enceladus', 'Titan'],
        answer: 1
      },
      {
        question: 'Which planet has an axis tilted 90 degrees to its orbital plane?',
        options: ['Uranus', 'Venus', 'Neptune', 'Saturn'],
        answer: 0
      },
      {
        question: 'Which planet is protected from solar wind by a strong magnetic field and has abundant liquid water?',
        options: ['Mars', 'Venus', 'Jupiter', 'Earth'],
        answer: 3
      },
      {
        question: 'Which planet is known for its seasonal dust storms and evidence of ancient riverbeds?',
        options: ['Mars', 'Venus', 'Mercury', 'Neptune'],
        answer: 0
      },
      {
        question: 'Which planet has the highest surface temperature on average?',
        options: ['Mars', 'Venus', 'Mercury', 'Neptune'],
        answer: 1
      },
      {
        question: 'Which planet has the most moons in our Solar System?',
        options: ['Jupiter', 'Saturn', 'Uranus', 'Neptune'],
        answer: 1
      },
      {
        question: 'Which planet has the fastest winds in our Solar System?',
        options: ['Jupiter', 'Saturn', 'Uranus', 'Neptune'],
        answer: 3
      }
    ]
  },
  {
    systemName: 'Proxima Centauri',
    questions: [
      {
        question: 'Which exoplanet in this system orbits within the habitable zone of its red dwarf star?',
        options: ['Proxima Centauri b', 'Proxima Centauri c', 'Alpha Centauri Bb', 'TRAPPIST-1e'],
        answer: 0
      },
      {
        question: 'What is a major challenge for habitability around red dwarf stars like Proxima Centauri?',
        options: ['Frequent stellar flares', 'Lack of water', 'No rocky planets', 'Too much sunlight'],
        answer: 0
      },
      {
        question: 'Which method is most commonly used to detect exoplanets in the Proxima Centauri system?',
        options: ['Transit method', 'Radial velocity', 'Direct imaging', 'Gravitational lensing'],
        answer: 1
      },
      {
        question: 'How many flare events were detected from Proxima Centauri during a 50-hour observation period according to recent ALMA studies?',
        options: ['72', '120', '38', '463'],
        answer: 3
      },
      {
        question: 'By what factor might atmospheric loss rates on planets orbiting Proxima Centauri exceed Earth\'s if they lack a magnetic field?',
        options: ['10 times greater', '100 times greater', '1,000 times greater', '10,000 times greater'],
        answer: 1
      }
    ]
  },
  {
    systemName: 'Trappist-1',
    questions: [
      {
        question: 'How many Earth-sized planets are in the TRAPPIST-1 system?',
        options: ['3', '5', '7', '9'],
        answer: 2
      },
      {
        question: 'What makes the habitable zone planets in TRAPPIST-1 especially interesting for life?',
        options: ['They are gas giants', 'They are tidally locked', 'They are close together and may exchange material', 'They have thick hydrogen atmospheres'],
        answer: 2
      },
      {
        question: 'What unique orbital characteristic makes the TRAPPIST-1 system interesting?',
        options: ['All planets have highly eccentric orbits', 'Planets orbit in the opposite direction of the star\'s rotation', 'Planets form a chain of orbital resonances', 'All planets have identical masses'],
        answer: 2
      },
      {
        question: 'Which of these is NOT a challenge for life in the TRAPPIST-1 system?',
        options: ['High stellar activity', 'Extreme cold', 'Lack of rocky planets', 'Potential tidal heating'],
        answer: 2
      },
      {
        question: 'What is a likely effect of tidal locking on TRAPPIST-1 planets?',
        options: ['One side always faces the star', 'They have rings', 'They have no atmosphere', 'They are all gas giants'],
        answer: 0
      },
      {
        question: 'What resonance pattern is exhibited by the outer three planets (f, g, h) in the TRAPPIST-1 system?',
        options: ['2:1 resonances', '3:2 resonances', '4:3 resonances', '5:4 resonances'],
        answer: 1
      },
      {
        question: 'Why are the orbital resonances in the TRAPPIST-1 system considered unusual compared to our Solar System?',
        options: ['They involve more planets in a single resonance chain', 'They have remained stable despite being close to each other', 'They occur around a much older star', 'They exist despite the planets being gas giants'],
        answer: 1
      }
    ]
  },
  {
    systemName: 'Kepler-442',
    questions: [
      {
        question: 'Kepler-442b is classified as what type of exoplanet?',
        options: ['Super-Earth', 'Hot Jupiter', 'Mini-Neptune', 'Brown Dwarf'],
        answer: 0
      },
      {
        question: 'What is the main reason Kepler-442b is considered potentially habitable?',
        options: ['It is in the habitable zone', 'It has a thick hydrogen atmosphere', 'It is a gas giant', 'It has visible rings'],
        answer: 0
      },
      {
        question: 'Which instrument or mission discovered Kepler-442b?',
        options: ['Hubble Space Telescope', 'Kepler Space Telescope', 'James Webb Space Telescope', 'TESS'],
        answer: 1
      },
      {
        question: 'What type of star is Kepler-442?',
        options: ['M', 'K', 'O', 'D'],
        answer: 1
      },
      {
        question: 'What is the approximate distance to the Kepler-442 system from Earth? (Hint: I literally gave you the answer)',
        options: ['450 light-years', '1,193 light-years', '2,500 light-years', '4,100 light-years'],
        answer: 1
      },
    ]
  },
  {
    systemName: 'LHS 1140',
    questions: [
      {
        question: 'LHS 1140 b is best described as which type of planet?',
        options: ['Gas giant', 'Super-Earth', 'Ice giant', 'Brown dwarf'],
        answer: 1
      },
      {
        question: 'What is a key factor in LHS 1140 b\'s potential habitability?',
        options: ['It is in the habitable zone', 'It has a surface temperature above 1000K', 'It is a gas giant', 'It has no atmosphere'],
        answer: 0
      },
      {
        question: 'What is the spectral type of the star LHS 1140?',
        options: ['Red dwarf', 'Yellow dwarf', 'Blue giant', 'White dwarf'],
        answer: 0
      }
    ]
  },
  {
    systemName: 'Ross 128',
    questions: [
      {
        question: 'What unique observational challenge does Ross 128 b present for atmospheric studies?',
        options: ['Its host star is too dim', 'It doesn\'t transit its star', 'It has extreme orbital eccentricity', 'It\'s surrounded by dust clouds'],
        answer: 1
      },
      {
        question: 'How does Ross 128 b\'s equilibrium temperature range compare to Earth\'s?',
        options: ['-76°F to 82°F', '-200°F to 50°F', '100°F to 300°F', 'Consistently below freezing'],
        answer: 0
      },
      {
        question: 'What technological limitation prevents precise mass determination of Ross 128 b?',
        options: ['Limited telescope resolution', 'Non-transiting orbit', 'Interstellar dust interference', 'Stellar pulsations'],
        answer: 1
      }
    ]
  },
  {
    systemName: 'Tau Ceti',
    questions: [
      {
        question: 'What is the spectral type of Tau Ceti?',
        options: ['G-type', 'K-type', 'M-type', 'F-type'],
        answer: 0
      },
      {
        question: 'What is the estimated distance of Tau Ceti from Earth?',
        options: ['4.2 light-years', '11.9 light-years', '39.6 light-years', '120.6 light-years'],
        answer: 1
      },
      {
        question: 'Which Tau Ceti planet is considered to be in the habitable zone and a candidate for habitability?',
        options: ['Tau Ceti b', 'Tau Ceti d', 'Tau Ceti e', 'Tau Ceti g'],
        answer: 2
      },
      {
        question: 'What is a major challenge for habitability in the Tau Ceti system?',
        options: ['High stellar metallicity', 'Frequent stellar flares', 'High dust content in the system', 'No rocky planets'],
        answer: 2
      },
      {
        question: 'Which detection method was used to discover the planets of Tau Ceti?',
        options: ['Transit photometry', 'Radial velocity', 'Direct imaging', 'Astrometry'],
        answer: 1
      },
      {
        question: 'What is the approximate range of the habitable zone around Tau Ceti (in AU)?',
        options: ['0.1–0.3 AU', '0.55–1.16 AU', '1.5–3.0 AU', '5–10 AU'],
        answer: 1
      }
    ]
  },
  {
    systemName: 'GJ 667 C',
    questions: [
      {
        question: 'What makes GJ 667 C c\'s habitable zone position unusual compared to other M-dwarf planets?',
        options: ['Orbits in triple star system', 'Extremely high metallicity host', 'Retrograde orbital motion', 'Resonant chain configuration'],
        answer: 0
      },
      {
        question: 'How many confirmed planets are in the GJ 667 C system?',
        options: ['3', '5', '6', '7'],
        answer: 2
      },
      {
        question: 'What is the approximate distance of the habitable zone around GJ 667 C (in AU)?',
        options: ['0.01–0.05 AU', '0.11–0.23 AU', '0.5–1.0 AU', '1.5–3.0 AU'],
        answer: 1
      },
      {
        question: 'Which detection method was used to discover the planets of GJ 667 C?',
        options: ['Transit photometry', 'Radial velocity', 'Direct imaging', 'Astrometry'],
        answer: 1
      },
      {
        question: 'What is a key challenge for habitability in the GJ 667 C system?',
        options: ['High stellar activity', 'Triple star gravitational effects', 'No rocky planets', 'No habitable zone'],
        answer: 1
      },
      {
        question: 'Which GJ 667 C planet is considered most likely to be habitable?',
        options: ['GJ 667 C b', 'GJ 667 C c', 'GJ 667 C g', 'GJ 667 C h'],
        answer: 1
      }
    ]
  },
  {
    systemName: 'HD 219134',
    questions: [
      {
        question: 'What paradoxical characteristic does HD 219134 b exhibit despite its Earth-like density?',
        options: ['Liquid surface water present', 'Extreme volcanic activity', 'Habitable temperatures', 'Rocky composition with 1,015K equilibrium temp'],
        answer: 3
      },
      {
        question: 'Which measurement technique combination enabled precise density calculation for HD 219134 b?',
        options: ['Transit + Radial Velocity', 'Astrometry + Direct Imaging', 'Transit Timing Variations + Microlensing', 'Doppler Tomography + Pulsar Timing'],
        answer: 0
      },
      {
        question: 'How does HD 219134 b\'s surface gravity compare to Earth\'s?',
        options: ['0.5× Earth', '1.8× Earth', '3.2× Earth', '4.7× Earth'],
        answer: 1
      }
    ]
  }
];

export const bodyQuizzes: BodyQuiz[] = [
  {
    systemName: 'Solar System',
    bodyName: 'Europa',
    questions: [
      {
        question: 'Which observation supports the idea of a subsurface ocean on Europa?',
        options: [
          'Detection of water vapor plumes',
          'Presence of a thick carbon dioxide atmosphere',
          'Surface temperature above 0°C',
          'Magnetic field similar to Earth\'s'
        ],
        answer: 0
      },
      {
        question: 'What is a major challenge for life on Europa?',
        options: [
          'Intense radiation from Jupiter',
          'Lack of any water',
          'High surface temperatures',
          'No geological activity'
        ],
        answer: 0
      },
      {
        question: 'What geological feature on Europa suggests communication between the subsurface ocean and surface?',
        options: ['Chaos terrain', 'Linear ridges', 'Impact craters', 'Calderas'],
        answer: 0
      }
    ]
  },
  {
    systemName: 'Solar System',
    bodyName: 'Mars',
    questions: [
      {
        question: 'What is the main evidence for past water on Mars?',
        options: [
          'Ancient river valleys and lakebeds',
          'Thick oxygen atmosphere',
          'Active volcanoes',
          'Presence of methane clouds'
        ],
        answer: 0
      },
      {
        question: 'Which of these is a current limitation for life on Mars?',
        options: [
          'Thin atmosphere and high radiation',
          'Abundant surface water',
          'Strong magnetic field',
          'Constant volcanic eruptions'
        ],
        answer: 0
      },
      {
        question: 'How does the gravity on Mars compare to Earth\'s?',
        options: ['About 16% of Earth\'s', 'About 38% of Earth\'s', 'About 50% of Earth\'s', 'About 74% of Earth\'s'],
        answer: 1
      }
    ]
  },
  {
    systemName: 'Proxima Centauri',
    bodyName: 'Proxima Centauri b',
    questions: [
      {
        question: 'What is a likely challenge for life on Proxima Centauri b?',
        options: [
          'Frequent stellar flares',
          'Lack of rocky surface',
          'No atmosphere',
          'Extreme distance from its star'
        ],
        answer: 0
      },
      {
        question: 'Which detection method was used to discover Proxima Centauri b?',
        options: [
          'Radial velocity',
          'Transit photometry',
          'Direct imaging',
          'Astrometry'
        ],
        answer: 0
      },
      {
        question: 'What would be the primary mechanism causing atmospheric loss on Proxima Centauri b?',
        options: ['Absence of a moon', 'Low planetary gravity', 'Stellar wind and intense radiation', 'High surface temperature'],
        answer: 2
      },
    ]
  },
  {
    systemName: 'Trappist-1',
    bodyName: 'TRAPPIST-1e',
    questions: [
      {
        question: 'What is a unique feature of TRAPPIST-1e compared to other planets in its system?',
        options: [
          'It is in the habitable zone',
          'It is a gas giant',
          'It has a ring system',
          'It is the farthest from the star'
        ],
        answer: 0
      },
      {
        question: 'What is a possible effect of tidal locking on TRAPPIST-1e?',
        options: [
          'Intense temperature differences between opposite hemispheres',
          'Uniform global temperatures across the planet',
          'Extreme volcanic activity underground',
          'Rapid rotation'
        ],
        answer: 0
      }
    ]
  },
  {
    systemName: 'Kepler-442',
    bodyName: 'Kepler-442b',
    questions: [
      {
        question: 'What is the estimated radius of Kepler-442b compared to Earth?',
        options: [
          'About 1.3 times Earth\'s radius',
          'About 0.5 times Earth\'s radius',
          'About 2.5 times Earth\'s radius',
          'About 5 times Earth\'s radius'
        ],
        answer: 0
      },
      {
        question: 'Which mission discovered Kepler-442b?',
        options: [
          'Hubble Space Telescope',
          'Kepler Space Telescope',
          'James Webb Space Telescope',
          'TESS'
        ],
        answer: 1
      }
    ]
  },
  {
    systemName: 'LHS 1140',
    bodyName: 'LHS 1140 b',
    questions: [
      {
        question: 'What is a key reason LHS 1140 b is considered potentially habitable?',
        options: [
          'It is in the habitable zone',
          'It is a gas giant',
          'It has a surface temperature above 1000K',
          'It has no atmosphere'
        ],
        answer: 0
      },
      {
        question: 'What is the spectral type of LHS 1140?',
        options: ['K', 'O', 'D', 'M'],
        answer: 3
      }
    ]
  },
  {
    systemName: 'Ross 128',
    bodyName: 'Ross 128 b',
    questions: [
      {
        question: 'What is the main method used to detect Ross 128 b?',
        options: ['Transit photometry', 'Radial velocity', 'Direct imaging', 'Astrometry'],
        answer: 1
      },
      {
        question: 'What is a key reason Ross 128 b is considered a good candidate for habitability?',
        options: ['It is in the habitable zone', 'It has a thick hydrogen atmosphere', 'It is a gas giant', 'It has a highly eccentric orbit'],
        answer: 0
      },
      {
        question: 'Why is the study of Ross 128 b\'s atmosphere particularly difficult?',
        options: ['It does not transit its star', 'It is too far away', 'It is too small', 'It is too hot'],
        answer: 0
      }
    ]
  },
  {
    systemName: 'Tau Ceti',
    bodyName: 'Tau Ceti b',
    questions: [
      {
        question: 'Why is Tau Ceti b considered unlikely to be habitable?',
        options: ['It is too close to the star and likely too hot', 'It is a gas giant', 'It has a thick hydrogen atmosphere', 'It is outside the system'],
        answer: 0
      }
    ]
  },
  {
    systemName: 'Tau Ceti',
    bodyName: 'Tau Ceti c',
    questions: [
      {
        question: 'What is a likely surface condition on Tau Ceti c?',
        options: ['Very hot, possibly above 70°C', 'Covered in ice', 'Thick methane clouds', 'No atmosphere'],
        answer: 0
      }
    ]
  },
  {
    systemName: 'Tau Ceti',
    bodyName: 'Tau Ceti d',
    questions: [
      {
        question: 'What makes Tau Ceti d a debated candidate for habitability?',
        options: ['It is on the inner edge of the habitable zone', 'It is a gas giant', 'It has no rocky surface', 'It is tidally locked'],
        answer: 0
      }
    ]
  },
  {
    systemName: 'Tau Ceti',
    bodyName: 'Tau Ceti e',
    questions: [
      {
        question: 'What is a key reason Tau Ceti e is considered potentially habitable?',
        options: ['It is in the habitable zone', 'It is a gas giant', 'It has a surface temperature above 1000K', 'It has no atmosphere'],
        answer: 0
      }
    ]
  },
  {
    systemName: 'Tau Ceti',
    bodyName: 'Tau Ceti f',
    questions: [
      {
        question: 'What is a possible challenge for habitability on Tau Ceti f?',
        options: ['It may be too cold for liquid water', 'It is a gas giant', 'It is too close to the star', 'It has a thick hydrogen atmosphere'],
        answer: 0
      }
    ]
  },
  {
    systemName: 'Tau Ceti',
    bodyName: 'Tau Ceti g',
    questions: [
      {
        question: 'Why is Tau Ceti g considered unlikely to be habitable?',
        options: ['It is likely too cold and far from the habitable zone', 'It is a gas giant', 'It is tidally locked', 'It has a thick hydrogen atmosphere'],
        answer: 0
      }
    ]
  },
  {
    systemName: 'GJ 667 C',
    bodyName: 'GJ 667 C b',
    questions: [
      {
        question: 'Why is GJ 667 C b considered uninhabitable?',
        options: ['It is too close to the star and likely too hot', 'It is a gas giant', 'It has a thick hydrogen atmosphere', 'It is outside the system'],
        answer: 0
      }
    ]
  },
  {
    systemName: 'GJ 667 C',
    bodyName: 'GJ 667 C h',
    questions: [
      {
        question: 'What is the status of GJ 667 C h as a planet?',
        options: ['Candidate planet, not confirmed', 'Gas giant', 'Confirmed habitable planet', 'Mini-Neptune'],
        answer: 0
      }
    ]
  },
  {
    systemName: 'GJ 667 C',
    bodyName: 'GJ 667 C c',
    questions: [
      {
        question: 'What is a unique feature of GJ 667 C c compared to other exoplanets?',
        options: ['Orbits in a triple star system', 'Has a ring system', 'Is a gas giant', 'Has a retrograde orbit'],
        answer: 0
      }
    ]
  },
  {
    systemName: 'GJ 667 C',
    bodyName: 'GJ 667 C f',
    questions: [
      {
        question: 'What is a possible challenge for habitability on GJ 667 C f?',
        options: ['Tidal locking', 'Too close to the star', 'No rocky surface', 'No atmosphere'],
        answer: 0
      }
    ]
  },
  {
    systemName: 'GJ 667 C',
    bodyName: 'GJ 667 C d',
    questions: [
      {
        question: 'Why is GJ 667 C d\'s habitability debated?',
        options: ['It is near the outer edge of the habitable zone', 'It is a gas giant', 'It has no rocky surface', 'It is tidally locked'],
        answer: 0
      }
    ]
  },
  {
    systemName: 'GJ 667 C',
    bodyName: 'GJ 667 C e',
    questions: [
      {
        question: 'What is a key reason GJ 667 C e is considered only marginally habitable?',
        options: ['It is just outside the habitable zone', 'It is a gas giant', 'It has a surface temperature above 1000K', 'It has no atmosphere'],
        answer: 0
      }
    ]
  },
  {
    systemName: 'GJ 667 C',
    bodyName: 'GJ 667 C g',
    questions: [
      {
        question: 'Why is GJ 667 C g considered unlikely to be habitable?',
        options: ['It is likely too cold and far from the habitable zone', 'It is a gas giant', 'It is tidally locked', 'It has a thick hydrogen atmosphere'],
        answer: 0
      }
    ]
  },
  {
    systemName: 'HD 219134',
    bodyName: 'HD 219134 b',
    questions: [
      {
        question: 'Why is HD 219134 b considered uninhabitable despite its Earth-like density?',
        options: ['It is too close to the star and likely too hot', 'It is a gas giant', 'It has a thick hydrogen atmosphere', 'It is outside the system'],
        answer: 0
      }
    ]
  },
  {
    systemName: 'HD 219134',
    bodyName: 'HD 219134 c',
    questions: [
      {
        question: 'What is the status of HD 219134 c as a planet?',
        options: ['Candidate planet, not confirmed', 'Gas giant', 'Confirmed habitable planet', 'Mini-Neptune'],
        answer: 0
      }
    ]
  },
  {
    systemName: 'HD 219134',
    bodyName: 'HD 219134 d',
    questions: [
      {
        question: 'What is a unique feature of HD 219134 d compared to other exoplanets?',
        options: ['Orbits in a triple star system', 'Has a ring system', 'Is a gas giant', 'Has a retrograde orbit'],
        answer: 0
      }
    ]
  },
  {
    systemName: 'HD 219134',
    bodyName: 'HD 219134 e',
    questions: [
      {
        question: 'What is a possible challenge for habitability on HD 219134 e?',
        options: ['Tidal locking', 'Too close to the star', 'No rocky surface', 'No atmosphere'],
        answer: 0
      }
    ]
  },
  {
    systemName: 'HD 219134',
    bodyName: 'HD 219134 f',
    questions: [
      {
        question: 'Why is HD 219134 f\'s habitability debated?',
        options: ['It is near the outer edge of the habitable zone', 'It is a gas giant', 'It has no rocky surface', 'It is tidally locked'],
        answer: 0
      }
    ]
  },
  {
    systemName: 'HD 219134',
    bodyName: 'HD 219134 g',
    questions: [
      {
        question: 'What is a key reason HD 219134 g is considered only marginally habitable?',
        options: ['It is just outside the habitable zone', 'It is a gas giant', 'It has a surface temperature above 1000K', 'It has no atmosphere'],
        answer: 0
      }
    ]
  }
]; 