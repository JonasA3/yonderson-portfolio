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
    degree: string;
    startDate: string;
    endDate: string;
    description: string;
  };

  export type Contact = {
    name: string;
    title: string;
    location: string;
    email: string;
    phone: string;
    linkedIn: string;
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
}