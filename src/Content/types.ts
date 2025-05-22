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
  };
  sectionTitles: {
    start: string;
    profile: string;
    activeSkills: string;
    dormantSkills: string;
    experience: string;
    education: string;
    about: string;
    aboutMe: string;
    contact: string;
    linkWith: string;
  };
  lang: {swedish: string; english: string};
};