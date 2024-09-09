export const DEFAULT_IMAGE_PATH = '/images/social-previews/developer-days.jpg';

export default {
  404: {
    title: 'Page Not Found — Neon',
  },
  '404-ticket': {
    title: 'Ticket Not Found - Neon',
    imagePath: '/images/social-previews/no-name-ticket.jpg',
  },
  speakers: {
    title: 'Neon Deploy Speakers - Neon',
    description:
      'Join us at 10:00 AM PT, October 1st for presentations about Postgres, scalability, AI, and using Neon with modern developer tools.',
    pathname: '/speakers',
  },
  agenda: {
    title: 'Neon Deploy Agenda - Neon',
    description:
      'Join us at 10:00 AM PT, October 1st for presentations about Postgres, scalability, AI, and using Neon with modern developer tools.',
    pathname: '/agenda',
  },
  stage: {
    title: 'Neon Deploy Stage — Neon',
    description:
      'Join us at 10:00 AM PT, October 1st for presentations about Postgres, scalability, AI, and using Neon with modern developer tools.',
    pathname: '/stage',
  },
  developerDays2: {
    title: 'Neon Deploy — Neon',
    description:
      'Join us at 10:00 AM PT, October 1st for presentations about Postgres, scalability, AI, and using Neon with modern developer tools.',
    pathname: '',
  },
  generateTicket: {
    title: 'Grab the ticket for Neon Deploy',
    description:
      "Generate a unique ticket image with your GitHub profile and participate in Neon's right after the conference.",
    pathname: '/generate-ticket',
  },
  ticket({ name, login: githubHandle }) {
    const userName = name || githubHandle;

    return {
      title: `${userName}'s ticket for Neon Deploy - Neon`,
      description: `Join ${userName} virtually at Deploy on October 1st to learn about Neon and how to build better with Serverless Postgres`,
    };
  },
};
