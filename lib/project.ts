export const getFeaturedProjects = async () => {
  const data = await import('data/projects/index.json');
  return data.projects.slice(0, 3);
};

export const getAllProjects = async () => {
  const data = await import('data/projects/index.json');
  return data.projects;
};
