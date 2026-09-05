export const TRAINING_TILES = {
  name: 'TrainingTiles',
  url: 'https://store.steampowered.com/app/3254820/TrainingTiles/?l=spanish',
  badge: 'Published on Steam',
  description:
    'A virtual reality music game built around physical interaction and rhythmic gameplay experiences.',
  technologies: ['Unity', 'VR', 'Hand Tracking'],
  screenshots: [
    {
      src: `${import.meta.env.BASE_URL}images/training-tiles/training_tiles_1.png`,
      alt: 'TrainingTiles screenshot 1',
    },
    {
      src: `${import.meta.env.BASE_URL}images/training-tiles/training_tiles_2.jpg`,
      alt: 'TrainingTiles screenshot 2',
    },
    {
      src: `${import.meta.env.BASE_URL}images/training-tiles/training_tiles_3.jpg`,
      alt: 'TrainingTiles screenshot 3',
    },
  ],
}

export const PROFESSIONAL_PROJECTS = [
  {
    name: 'Livestock Management',
    context: 'Mobile and web tooling for livestock management.',
    contribution:
      'Maintenance and updates of applications built with Ionic and Angular.',
    technologies: ['Ionic', 'Angular'],
  },
  {
    name: 'Real Estate Platform',
    context: 'Real-time platform for property sale and auction.',
    contribution: 'Flutter development of the mobile and web solution.',
    technologies: ['Flutter'],
  },
  {
    name: 'Parkinson Assistive Technology',
    context: "Assistive technology for patients with Parkinson's disease.",
    contribution:
      'Development in Flutter and native code, integrating gyroscope input and immersive technologies.',
    technologies: [
      'Flutter',
      'Native code',
      'Gyroscope',
      'Immersive technologies',
    ],
  },
]
