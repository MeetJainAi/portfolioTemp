export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  githubUrl: string;
  metrics: {
    label: string;
    value: string;
  }[];
}

export interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  image: string;
  credentialUrl: string;
  skills: string[];
}
