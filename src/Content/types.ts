export type Skill = string;

export type WorkDone = string;

export type Experience = {
    company: string;
    position: string;
    location: string;
    startDate: string;
    endDate: string;
    workDone: string[];
};
  
  export type Education = {
    institution: string;
    type: string;
    degree: string;
    duration: string;
    description: string;
  };

  export type Contact = {
    name: string;
    title: string;
    location: string;
    email: string;
    phone: string;
    linkedIn: {
      url: string;
      note: string;
    };
    github: {
      url: string;
      note: string;
    };
    website: {
      url: string;
      note: string;
    };
    profilePicture: string;
    };
  

export interface Content_CV {
    contact: Contact;
    welcomeText: string;
    profileText: string;
    activeSkills: {
        description?: string;
        area: string;
        skills: Skill[];
    }[];
    dormantSkills: {
        description?: string;
        area: string;
        skills: Skill[];
    }[];
    experience: Experience[];
    education: Education[];
    about: string;
};

export type Translations = {
  cvContent: Content_CV;
  labels: {
    menu: string,
    language: string,
    quickLinks: string,
    portfolio: string,
    comingSoon: string,
    back: string,
    theme: string,
    darkMode: string,
    lightMode: string,
    systemMode: string,
    download: string
  };
  sectionTitles: {
    startTitle: string;
    profileTitle: string;
    activeSkillsTitle: string;
    dormantSkillsTitle: string;
    experienceTitle: string;
    educationTitle: string;
    aboutTitle: string;
    aboutMeTitle: string;
    contactTitle: string;
    linkWithTitle: string;
    portfolioTitle: string;
    welcomeTitle: string;
  };
  descriptions: {
    aboutActiveSkills: string;
    aboutDormantSkills: string;
    aboutSite: string;
    aboutPortfolio: string;
  };
  messages: {
    backHome: string;
    scrollToReadCV: string;
    scrollToReadMore: string;
  }
  lang: {
    swedish: string; 
    english: string;
    swedishFlag: string;
    englishFlag: string;
  };
};