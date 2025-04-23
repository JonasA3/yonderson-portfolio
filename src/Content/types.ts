export type Skill = string;
export type WorkDone = string;

export interface Content_CV {
    contact: {
        name: string;
        title: string;
        location: string;
        email: string;
        phone: string;
        linkedIn: string;
        github:{ 
            url: string;
            note: string;
        };
        website: {
            url: string;
            note: string;
        };
        profilePicture: string;
    };
    profileText: string;
    skills: {
        area: string;
        skills: Skill[];
    }[];
    experience: {
        company: string;
        position: string;
        location: string;
        startDate: string;
        endDate: string;
        workDone: WorkDone[];
    }[];
    education: {
        institution: string;
        degree: string;
        startDate: string;
        endDate: string;
        description: string;
    }[];
    about: string;
}