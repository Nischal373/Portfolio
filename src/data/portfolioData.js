import greenhouseDemo from '../assets/projects/greenhouse-demo.svg'
import hospitalDemo from '../assets/projects/hospital-demo.svg'
import potholeDemo from '../assets/projects/pothole-demo.svg'
import watchDemo from '../assets/projects/watch-demo.svg'

export const personalInfo = {
  name: 'Nischal Lama',
  headline: 'Undergraduate Computer Science Student',
  intro:
    'I build practical software with a strong focus on clean implementation, real-world usability, and continuous learning across web, systems, and AI-driven projects.',
  about:
    'I am an undergraduate Computer Science student passionate about software engineering, problem solving, and turning ideas into polished products. I enjoy building full projects from concept to deployment, collaborating with teams, and learning technologies that help me deliver reliable and impactful solutions.',
  location: 'Nepal',
  email: 'nischalxnyx@gmail.com',
  socials: {
    github: 'https://github.com/Nischal373',
    linkedin: 'https://www.linkedin.com/in/lamanischal/',
    instagram: 'https://www.instagram.com/nischal.tsuki/',
  },
}

export const skills = [
  'JavaScript',
  'TypeScript',
  'React',
  'HTML',
  'CSS',
  'Python',
  'C++',
  'Git & GitHub',
  'Problem Solving',
]

export const featuredProjects = [
  {
    title: 'Hospital Management System',
    description:
      'A structured system concept for handling hospital workflows including records, scheduling, and operations management.',
    tech: ['Python', 'Database Design'],
    link: 'https://github.com/Nischal373/Hospital-Mangaement-System',
    image: hospitalDemo,
  },
  {
    title: 'IoT-Based Automated Greenhouse System',
    description:
      'An IoT-focused project aimed at automating greenhouse monitoring and control for smarter agriculture use-cases.',
    tech: ['IoT', 'Embedded Systems', 'Automation'],
    link: 'https://github.com/Nischal373/IoT-Based-Automated-Greenhouse-System',
    image: greenhouseDemo,
  },
  {
    title: 'Pothole Detection Model',
    description:
      'A model-based approach for identifying potholes from road imagery, focused on practical infrastructure problem solving.',
    tech: ['Python', 'Machine Learning', 'Computer Vision'],
    link: 'https://github.com/Nischal373/POTHOLE-DETECTION-MODEL',
    image: potholeDemo,
  },
  {
    title: 'Watch House Website',
    description:
      'A front-end web experience for a watch store concept with emphasis on modern layout and presentation.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://github.com/Nischal373/Watch-house-Website',
    image: watchDemo,
  },
]

export const education = [
  {
    title: 'Undergraduate in Computer Science',
    subtitle: 'Current',
    description:
      'Building core knowledge in algorithms, software design, systems, and applied computing through academic and personal projects.',
  },
]
