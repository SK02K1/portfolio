export type Link = {
  hosted: string;
  sourceCode: string;
};

export type Project = {
  id: string;
  name: string;
  description: string;
  features: string[];
  technologies: string[];
  links: Link;
};
