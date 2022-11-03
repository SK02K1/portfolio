export const getFeaturedBlogs = async () => {
  const data = await import('data/blogs/index.json');
  return data.blogs.slice(0, 2);
};

export const getAllBlogs = async () => {
  const data = await import('data/blogs/index.json');
  return data.blogs;
};
