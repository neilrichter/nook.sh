export interface HistoryEntry {
  company: string;
  title: string;
  start: Date;
  end: Date | null;
  description: string;
}

export const birth = {
  year: 1999,
  month: 8,
  day: 14,
};

export const experiences: HistoryEntry[] = [
  {
    company: 'Zest',
    start: new Date(2018, 6 - 1),
    end: new Date(2018, 9 - 1),
    title: 'Full-stack Javascript internship',
    description: 'Participation in the improvement of the platform and in the development of new features on the front and API part. Front made with Angular.js and back with PostgreSQL and Node.js.',
  },
  {
    company: 'Golem.ai',
    start: new Date(2019, 2 - 1),
    end: new Date(2019, 9 - 1),
    title: 'Full-stack Symfony + Vue.js Internship',
    description: 'Participation in the creation of Web tools for Golem.ai, research and development work, and product development. Technologies used: Vue.js, Symfony3 and 4, PostgreSQL, Docker',
  },
  {
    company: 'Golem.ai',
    start: new Date(2020, 1 - 1),
    end: null,
    title: 'Front-end developer',
    description: 'Redesign of the AI configuration interface, implementation of design systems, development of products used by projects carried out by Golem.ai',
  },
];

export const education: HistoryEntry[] = [
  {
    company: 'Lycée Privé Robert Schuman',
    start: new Date(2015, 9 - 1),
    end: new Date(2017, 8 - 1),
    title: 'High-school',
    description: 'Bachelor\'s degree of Science and Technology in Industry and Sustainable Development, mention Very Good',
  },
  {
    company: 'SUP\'Internet',
    start: new Date(2017, 9 - 1),
    end: new Date(2020, 8 - 1),
    title: 'Web Project Management Bachelor',
    description: 'Web project Management Bachelor, specialized in Web Development',
  },
];

export interface Skill {
  class: string;
  name: string;
}

export const skills: Skill[] = [
  {
    class: 'vuejs',
    name: 'Vue.js',
  },
  {
    class: 'javascript',
    name: 'Javascript',
  },
  {
    class: 'typescript',
    name: 'Typescript',
  },
  {
    class: 'symfony',
    name: 'Symfony',
  },
  {
    class: 'php',
    name: 'PHP',
  },
  {
    class: 'nodejs',
    name: 'Node.js',
  },
  {
    class: 'nginx',
    name: 'Nginx',
  },
  {
    class: 'sass',
    name: 'Sass',
  },
  {
    class: 'docker',
    name: 'Docker',
  },
  {
    class: 'git',
    name: 'Git',
  },
  {
    class: 'go',
    name: 'Golang',
  },
  {
    class: 'postgresql',
    name: 'PostgreSQL',
  },
  {
    class: 'python',
    name: 'Python',
  },
];
