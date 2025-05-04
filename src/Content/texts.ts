import type { Content_CV} from './types';

export const cvContent: Content_CV = {
contact: {
name: 'Jonas Andersson',
title: 'Web Developer',
location: 'Borås, Sweden',
email: 'jonas@kippingmonkey.se',
phone: '0703-55 49 88',
linkedIn: 'https://linkedin.com/in/jonas-andersson-57245727/',
github: { 
    url: 'https://github.com/JonasA3',
    note: 'More to come...'
},
website: {
    url: 'https://www.yonderson.se ',
    note: 'You are here!'
},
profilePicture: 'https://avatars.githubusercontent.com/u/1025461?v=4',
},
profileText: 
`Graphic designer turned developer with a strong interest in UI/UX.
Skilled in building responsive web applications using React, TypeScript and .NET.
Known for a calm and collaborative work style, a hunger for learning, and a love
for solving problems. My goal is to leverage my skills to create innovative solutions that make a positive impact on people's lives.`,
activeSkills: [
    {
        area: 'Frontend',
        skills: ['React', 'TypeScript', 'AstroJS', 'JavaScript', 'HTML', 'CSS', 'Tailwind', 'REST API', 'SOAP API', 'GraphQL']
    },
    {
        area: 'Backend',
        skills: ['Node.js', 'github actions']
    },
    {
        area: 'Tools & Platforms',
        skills: ['Git', 'Github', 'VS Code', 'Postman', 'Slack', 'Trello', 'Monday']
    },    
    {
        area: 'Design & UI/UX',
        skills: ['Figma']
    },
    {
        area: 'Other',
        skills: ['Agile', 'Scrum', 'Kanban']
    }
],
dormantSkills: [
    {
        area: 'Frontend',
        skills: ['SASS', 'Redux', 'Redux Toolkit', 'jQuery', 'Bootstrap', 'Blazor']
    },
    {
        area: 'Backend',
        skills: ['C#', 'ASP.NET', 'Entity Framework', 'SQL Server', 'Python']
    },
    {
        area: 'Tools & Platforms',
        skills: ['Visual Studio','Litium Commerce', 'Umbraco', 'Jira', 'confluence']
    },
    {
        area: 'Cloud',
        skills: ['Azure', 'Docker', 'Kubernetes']
    },
    {
        area: 'Design & UI/UX',
        skills: ['Photoshop', 'Illustrator', 'InDesign']
    },
   
],
experience: [
    {
        company: 'R3',
        position: 'Web Developer',
        location: 'Borås',
        startDate: '2023',
        endDate: '2025',
        workDone: [
            `Built and maintained reusable components for e-commerce platforms using
             React and AstroJS.`,
            'Collaborated with designers to implement responsive and accessible UI.',
            'Integrated APIs and GraphQL endpoints into frontend application.',
            'Worked with backend developers to ensure seamless data flow between frontend and backend.',
            'Participated in code reviews and contributed to team knowledge sharing.',
            'Utilized Git and GitLab for version control and collaboration.']
    },
    {
        company: 'Toxic Interactive',
        position: 'Frontend Developer',
        location: 'Borås',
        startDate: '2021',
        endDate: '2022',
        workDone: [
            'Developed web applications using React and Redux Toolkit.',
            'Implemented responsive design principles to ensure optimal user experience across devices.',
            `Built and maintained CMS-driven websites (Litium Commerce) using C# and .NET.`,
            'Participated in cross-functional teams following Agile workflows.'
        ]
    },
    {
        company: 'Rudholm Group',
        position: 'Graphic Designer',
        location: 'Borås',
        startDate: '2006',
        endDate: '2020',
        workDone: [
            'Branding and logo development for clients in the textile industry.',
            'Product design collections.',
            `Product photography and retouching.`,
            'Created marketing materials including brochures, flyers, and ads.',
        ]
    },
],
education: [
    {
        institution: 'Teknikhögskolan',
        type: 'YH Education (vocational)',
        degree: 'Diploma in .NET System Development',
        duration: '2 years (2021-2023)',
        description: `Backend development with C#, ASP.NET, Entity Framework, SQL Server. 
                      Frontend development with React, JavaScript, HTML, CSS. 
                      Devops with Git, Azure, Docker.`,
    },
    {
        institution: 'Folkuniversitetet YH',
        type: 'Course',
        degree: 'Certificate in React Frontend Development',
        duration: '4 weeks (2022)',
        description: ' React, JavaScript, HTML, CSS'
    },
     {
        institution: 'Udemy',
        type: 'Courses',
        degree: 'Proof of completion',
        duration: 'Ongoing',
        description: 'Fullstack Web Developer, Git/Github Bootcamp, Unit Testing in C#, JavaScript Pro, AstroJS 101'
    }
],
about:
`Live in Borås, Sweden with my partner and two kids. I am most
often described as calm and educational. The thing I enjoy
most about coding is that awesome feeling when you solve a problem.
In my free time I like to move. I run, swim, work out and climb.
But I also like my quiet time with a good book, movie or
studies.`
};

