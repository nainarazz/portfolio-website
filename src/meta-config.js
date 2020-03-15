import { BASE_URL } from './constants';

export const META_HOME = {
    title: 'Naina Codes',
    description:
        "Hi, I'm Naina Razafindrabiby. I build stuff for the web using JavaScript and web technologies.",
    openGraph: {
        title: 'Naina Codes',
        description:
            "Hi, I'm Naina Razafindrabiby. I build stuff for the web using JavaScript and web technologies.",
        url: `${BASE_URL}`,
        image: '/static/logo.png',
    },
};

export const META_ABOUT = {
    title: 'About Me',
    description:
        'A full stack developer who specializes in JavaScript technologies across the stack (Angular, React, Node.js). Passionate in designing and creating modern software using open-source and web technologies.',
    openGraph: {
        title: 'About Me',
        description:
            'A full stack developer who specializes in JavaScript technologies across the stack (Angular, React, Node.js). Passionate in designing and creating modern software using open-source and web technologies.',
        url: `${BASE_URL}/about`,
        image: '/static/logo.png',
    },
};

export const META_BLOG = {
    title: 'Blog',
    description: 'Personal blog on JavaScript, frontend, web technologies',
    openGraph: {
        title: 'Blog',
        description: 'Personal blog on JavaScript, frontend, web technologies',
        url: `${BASE_URL}/blog`,
        image: '/static/logo.png',
    },
};

export const META_PROJECT = {
    title: 'Projects',
    description: 'Side projects',
    openGraph: {
        title: 'Projects',
        description: 'Side projects',
        url: `${BASE_URL}/project`,
        image: '/static/logo.png',
    },
};
