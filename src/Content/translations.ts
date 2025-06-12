import type { Translations } from './types';

export const t: Record<'en' | 'sv', Translations> = {
    en: {
        cvContent: {
                contact: {
                name: 'Jonas Andersson',
                title: 'Web Developer',
                location: 'Borås, Sweden',
                email: 'jonas@yonderson.se',
                phone: '0703-55 49 88',
                linkedIn: {
                    url: 'https://linkedin.com/in/jonas-andersson-57245727/',
                    note: 'Click below to go to my LinkedIn profile'},
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
                `Graphic designer turned developer with a strong interest in UI/UX. Skilled in building responsive web applications using React, TypeScript and .NET. Known for a calm and collaborative work style, a hunger for learning, and a love for solving problems. My goal is to leverage my skills to create innovative solutions that make a positive impact on people's lives.
                \nIf you are interested to view the code behind this page I have a created a dedicated profile on GitHub where I will host a collection of projects, starting with thi one. Click below to go to there.`,
                activeSkills: [
                    {
                        area: 'Frontend',
                        skills: ['React', 'TypeScript', 'AstroJS', 'JavaScript', 'HTML', 'CSS', 'Tailwind', 'REST API', 'SOAP API', 'GraphQL']
                    },
                    {
                      area: 'Testing',
                      skills: ['Jest unit tests']
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
                        startDate: '2022',
                        endDate: '2023',
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
        },
        lang: {
          swedish: 'Swedish', 
          english: 'English',
          swedishFlag: 'Swedish flag',
          englishFlag: 'English flag'
        },
        labels: {
            menu: 'Menu',
            language: 'Language',
            quickLinks: 'CV Quick Links',
            portfolio: 'Portfolio',
            comingSoon: 'Coming Soon',
            back: 'Back',
            theme: 'Theme',
            darkMode: 'Dark',
            lightMode: 'Light',
            systemMode: 'System',
        },
        sectionTitles: {
            contactTitle: 'Contact',
            linkWithTitle: 'Connect with me',
            profileTitle: 'Profile',
            activeSkillsTitle: 'Active Skills',
            dormantSkillsTitle: 'Experience with',
            experienceTitle: 'Experience',
            educationTitle: 'Education',
            aboutTitle: 'About',
            aboutMeTitle: 'About Jonas Andersson',
            startTitle: 'Start',
            portfolioTitle: 'Portfolio'
        },
        descriptions: {
            aboutActiveSkills: 'I am currently focused on these technologies. I am actively using them in my current projects and am always looking to deepen my knowledge and skills in these areas.',
            aboutDormantSkills: 'I have experience with these technologies, but they are not my primary focus at the moment but would be happy to revisit them for a refresh.',
            aboutSite: 'About this site',
            aboutPortfolio: 'Here I will collect my projects and experiences. The page is currently under construction and I will be adding content as I go.',
        },
        messages: {
            backHome: 'Back to home',
            scrollToReadCV: 'Scroll to read CV',
            scrollToReadMore: 'Read more'
        }
    },
    sv: {
        cvContent: {
                contact: {
                  name: 'Jonas Andersson',
                  title: 'Webbutvecklare',
                  location: 'Borås, Sverige',
                  email: 'jonas@yonderson.se',
                  phone: '0703-55 49 88',
                  linkedIn: {
                    url: 'https://linkedin.com/in/jonas-andersson-57245727/',
                    note: 'Klicka nedan för att gå till min LinkedIn-profil'
                  },
                  github: {
                    url: 'https://github.com/JonasA3',
                    note: 'Mer kommer snart...'
                  },
                  website: {
                    url: 'https://www.yonderson.se',
                    note: 'Du är redan här!'
                  },
                  profilePicture: 'https://avatars.githubusercontent.com/u/1025461?v=4'
                },
                profileText: `
              Grafisk formgivare som bytte bana till utveckling med ett stort intresse för UI/UX. Jag bygger responsiva webbapplikationer med React, TypeScript och .NET. Känd för ett lugnt och pedagogiskt arbetssätt, nyfikenhet på att lära och en passion för att lösa problem. Mitt mål är att använda mina färdigheter för att skapa innovativa lösningar som gör skillnad i människors vardag.
              \nOm du är nyfiken på koden bakom denna sida har jag skapat en särskild GitHub-profil där jag samlar projekt, med start i detta. Klicka nedan för att komma dit.`,
                activeSkills: [
                  {
                    area: 'Frontend',
                    skills: ['React', 'TypeScript', 'AstroJS', 'JavaScript', 'HTML', 'CSS', 'Tailwind', 'REST API', 'SOAP API', 'GraphQL']
                  },
                  {
                    area: 'Tester',
                    skills: ['Jest unit tests']
                  },
                  {
                    area: 'Backend',
                    skills: ['Node.js', 'github actions']
                  },
                  {
                    area: 'Verktyg & Plattformar',
                    skills: ['Git', 'Github', 'VS Code', 'Postman', 'Slack', 'Trello', 'Monday']
                  },
                  {
                    area: 'Design & UI/UX',
                    skills: ['Figma']
                  },
                  {
                    area: 'Övrigt',
                    skills: ['Agilt', 'Scrum', 'Kanban']
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
                    area: 'Verktyg & Plattformar',
                    skills: ['Visual Studio','Litium Commerce', 'Umbraco', 'Jira', 'Confluence']
                  },
                  {
                    area: 'Moln',
                    skills: ['Azure', 'Docker', 'Kubernetes']
                  },
                  {
                    area: 'Design & UI/UX',
                    skills: ['Photoshop', 'Illustrator', 'InDesign']
                  }
                ],
                experience: [
                  {
                    company: 'R3',
                    position: 'Webbutvecklare',
                    location: 'Borås',
                    startDate: '2023',
                    endDate: '2025',
                    workDone: [
                      'Byggde och underhöll återanvändbara komponenter för e-handelsplattformar med React och AstroJS.',
                      'Samarbetade med designers för att implementera responsivt och tillgängligt gränssnitt.',
                      'Integrerade API:er och GraphQL i frontendapplikationer.',
                      'Samarbetade med backendutvecklare för att säkra dataintegration.',
                      'Deltog i kodgranskningar och kunskapsdelning inom teamet.',
                      'Använde Git och GitLab för versionshantering och samarbete.'
                    ]
                  },
                  {
                    company: 'Toxic Interactive',
                    position: 'Frontendutvecklare',
                    location: 'Borås',
                    startDate: '2022',
                    endDate: '2023',
                    workDone: [
                      'Utvecklade webbapplikationer med React och Redux Toolkit.',
                      'Implementerade responsiv design för optimal upplevelse på olika enheter.',
                      'Byggde och underhöll CMS-drivna webbplatser (Litium Commerce) med C# och .NET.',
                      'Arbetade i tvärfunktionella team enligt agila metoder.'
                    ]
                  },
                  {
                    company: 'Rudholm Group',
                    position: 'Grafisk formgivare',
                    location: 'Borås',
                    startDate: '2006',
                    endDate: '2020',
                    workDone: [
                      'Varumärkesdesign och logotyper för textilkunder.',
                      'Produktdesign och kollektioner.',
                      'Produktfotografering och retusch.',
                      'Marknadsföringsmaterial som broschyrer, flyers och annonser.'
                    ]
                  }
                ],
                education: [
                  {
                    institution: 'Teknikhögskolan',
                    type: 'YH-utbildning',
                    degree: 'Examen i .NET Systemutveckling',
                    duration: '2 år (2021–2023)',
                    description: `Backendutveckling med C#, ASP.NET, Entity Framework, SQL Server. 
              Frontendutveckling med React, JavaScript, HTML, CSS. 
              DevOps med Git, Azure, Docker.`
                  },
                  {
                    institution: 'Folkuniversitetet YH',
                    type: 'Kurs',
                    degree: 'Certifikat i React Frontendutveckling',
                    duration: '4 veckor (2022)',
                    description: 'React, JavaScript, HTML, CSS'
                  },
                  {
                    institution: 'Udemy',
                    type: 'Kurser',
                    degree: 'Intyg om genomförande',
                    duration: 'Pågående',
                    description: 'Fullstack Webbutveckling, Git/Github Bootcamp, Enhetstestning i C#, JavaScript Pro, AstroJS 101'
                  }
                ],
                about: `
              Bor i Borås med min sambo och två barn. Jag beskrivs ofta som lugn och pedagogisk. Det jag gillar mest med kod är den där tillfredsställande känslan när man löser ett problem.
              På fritiden gillar jag att röra på mig – jag springer, simmar, tränar och klättrar.
              Men jag uppskattar också lugna stunder med en bra bok, film eller studier.`
              
        },
        lang: {
          swedish: 'Svenska', 
          english: 'Engelska',
          swedishFlag: 'Svensk flagga',
          englishFlag: 'Engelsk flagga'
        },
        labels: {
            menu: 'Meny',
            language: 'Språk',
            quickLinks: 'CV Snabbval',
            portfolio: 'Portfolio',
            comingSoon: 'Kommer snart',
            back: 'Tillbaka',
            theme: 'Tema',
            darkMode: 'Mörkt',
            lightMode: 'Ljust',
            systemMode: 'System',
        },
        sectionTitles: {
            contactTitle: 'Kontakt',
            linkWithTitle: 'Kontakta mig',
            profileTitle: 'Profil',
            activeSkillsTitle: 'Jobbar med',
            dormantSkillsTitle: 'Har jobbat med',
            experienceTitle: 'Erfarenhet',
            educationTitle: 'Utbildning',
            aboutTitle: 'Om mig',
            aboutMeTitle: 'Om Jonas Andersson',
            startTitle: 'Start',
            portfolioTitle: 'Portfolio'
        },
        descriptions: {
            aboutActiveSkills: 'Just nu är jag fokuserad på frontend och arbetar dagligen med följande tekniker och verktyg. Jag använder både kurser och praktisk tillämpning för att aktivt fördjupa mina kunskaper här.',
            aboutDormantSkills: 'Förutom mitt nuvarande fokusområde har jag även både studie- och arbetserfarenhet av följande verktyg. Detta är tekniker som jag planerar att återuppta och fräscha upp inom kort.',
            aboutSite: 'Om denna sida',
            aboutPortfolio: 'Här kommer jag att samla mina projekt och erfarenheter. Just nu är sidan under uppbyggnad och jag kommer att fylla på med innehåll allt eftersom.',
        },
        messages: {
            backHome: 'Tillbaka till startsidan',
            scrollToReadCV: 'Scrolla för att läsa CV',
            scrollToReadMore: 'Läs mer'
        }

    },
};


    
  
