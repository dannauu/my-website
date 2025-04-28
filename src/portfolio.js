import LoftisImage from './images/Loftis.gif';
import TaxesImage from './images/Taxes-by-metjr.png';
import AppointmentImage from './images/Appointment-Scheduler.png';

const header = {
  homepage: 'https://dannauu.github.io/my-website/',
  title: 'Daniel Nau',
}

const about = {
  name: 'Daniel',
  role: 'Full-Stack Engineer',
  description:
    'I create custom, user-friendly websites that make the web more accessible and tailored to your unique needs. I pride myself on delivering projects on time and within budget, ensuring a seamless experience from start to finish. Have a question? Call or text me!',
  resume: 'https://docs.google.com/document/d/1h_KHbB77X1cvX95_9KSQasKtAeaQdfuLpdmxEsPjJpM/edit?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/daniel-nau/',
    github: 'https://github.com/dannauu',
  },
}

const projects = [
  {
    name: 'Loftis Land Management',
    description:
      'Informational website for a land management company. Allows users to see the services they provide, a gallery of their work, a contact form and more.',
    stack: ['NextJS', 'Netlify'],
    livePreview: 'https://loftislandmanagement.com/',
    image: LoftisImage,
  },
  {
    name: 'Appointment Scheduler',
    description:
      'Application that allows employees to schedule appointments for clients. This tool allows for scheduling, searching, and cancelling appointments as well as appointment distribution.',
    stack: ['NextJS', 'MongoDB', 'Mongoose', 'MaterialUI', 'Netlify'],
    image: AppointmentImage,
    message: 'This project is private and cannot be viewed.',
  },
  {
    name: 'Taxes by MET.JR',
    description:
      'Informational website for a local tax preparation office. Allows users to download forms they need and also see frequently asked questions as well.',
    stack: ['ReactJs', 'TailwindCSS', 'Netlify'],
    sourceCode: 'https://github.com/dannauu/tax-office-site',
    livePreview: 'https://taxesbymetjr.com',
    image: TaxesImage,
  },
]


const skills = [
  'HTML 5',
  'CSS',
  'GraphQL',
  'Insomnia',
  'JavaScript',
  'Typescript',
  'React',
  'Material UI',
  'Git',
  'Tailwind CSS',
  'CI/CD',
  'Jest',
  'Bootstrap',
  'Node',
  'Express',
  'API Interaction',
  'jQuery',
  'MySQL',
  'MongoDB',
  'Mongoose',
  'Visual Studio Code',
  'Agile',
  'Postman',
  'GitLab',
  'GitHub Pages',
  'Heroku',

]

const contact = {
  email: 'danielnau1994@gmail.com',
  phoneNumber: '1-816-882-8421'
}

export { header, about, projects, skills, contact }
