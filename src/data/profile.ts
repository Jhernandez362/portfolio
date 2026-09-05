export const PROFILE = {
  name: 'Jhohan Daniel Hernandez',
  role: 'Full Stack Developer',
  tagline: 'I build software across web, mobile and immersive experiences.',
  stack: ['React', 'Flutter', 'TypeScript', 'Unity', 'PostgreSQL'],
  social: {
    github: 'https://github.com/Jhernandez362',
    linkedin:
      'https://www.linkedin.com/in/jhohan-daniel-hernandez-velandia-816129232/',
    email: 'jhernandez362@unab.edu.co',
  },
  cvUrl: `${import.meta.env.BASE_URL}cv.pdf`,
}

export const ABOUT = {
  bio: "I'm a software developer with experience across web, mobile, game development and immersive technologies. I'm currently expanding my profile toward modern full-stack development and automation.",
  focusAreas: [
    {
      title: 'Web',
      description: 'Modern web applications',
      stack: ['React', 'Angular', 'TypeScript'],
    },
    {
      title: 'Mobile',
      description: 'Cross-platform applications',
      stack: ['Flutter', 'Dart'],
    },
    {
      title: 'XR / VR',
      description: 'Immersive experiences',
      stack: ['Unity', 'VR', 'Hand Tracking'],
    },
  ],
  languages: [
    { name: 'English', level: 'B2' },
    { name: 'Japanese', level: 'A2' },
  ],
}
