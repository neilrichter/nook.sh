export interface Experience {
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

export const experiences: Experience[] = [
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
