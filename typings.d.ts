import { ImageLoader } from "next/image";

interface SanityBody {
    _createdAt: string;
    _id: string;
    _rev: string;
    _updatedAt: string;
}

export interface Image extends SanityBody {
    _type: 'image';
    asset:{
        _ref: string;
        _type: 'reference';
    };
}

export interface PageInfo extends SanityBody {
    _type:'pageInfo';
    address: string;
    backgroundInformation: string;
    email: string;
    role: string;
    introImage: Image;
    name: string;
    phoneNumber: string;
    profilePic: Image;

}

export interface Experience extends SanityBody {
    _type:'experience';
    companyImage: Image;
    company: string;
    dateStarted: date;
    dateEnded: date;
    isCurrentlyWorkingHere: boolean;
    points:string[];
    technologies: Technology[];
}

export interface Project extends SanityBody {
    _type:'project';
    image: Image;
    title: string;
    linkToBuild: string;
    summary: string;
    technologies: Technology[];
}

export interface Technology extends SanityBody {
    _type:'skill';
    image: Image;
    title: string;
}

export interface Skill extends SanityBody {
    _type:'skill';
    image: Image;
    title: string;
}

export interface Social extends SanityBody {
    id: Key | null | undefined;
    _type:'social';
    title: string;
    url: string;
}

