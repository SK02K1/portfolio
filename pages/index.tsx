import Head from 'next/head';
import type { NextPage } from 'next';

import { getFeaturedBlogs, getFeaturedProjects } from 'lib';
import { BlogCard, ProjectCard } from 'components';
import { Blog, Project } from 'types';

type Props = {
  featuredProjects: Project[];
  featuredBlogs: Blog[];
};

const Home: NextPage<Props> = ({ featuredProjects, featuredBlogs }: Props) => {
  const featuredProjectsListing = featuredProjects.map((project) => (
    <ProjectCard key={project.id} project={project} />
  ));

  const featuredBlogsListing = featuredBlogs.map((blog) => (
    <BlogCard key={blog.id} blog={blog} />
  ));

  return (
    <div>
      <Head>
        <title>Home | Sourabh Kheraliya</title>
      </Head>
      <header>
        <p className='py-4'>
          Hellew 👋🏻 , I'm <span className='font-medium'>Sourabh Kheraliya</span>{' '}
          an aspiring full stack developer and tech enthusiast. When I'm not
          coding you can find me playing PC games 🎮 and listening to music 🎵.
        </p>
      </header>
      <main>
        <h2 className='text-lg font-semibold py-4'>Featured Projects</h2>
        {featuredProjectsListing}
        <h2 className='text-lg font-semibold py-4'>Featured Blogs</h2>
        {featuredBlogsListing}
      </main>
    </div>
  );
};

export default Home;

export const getStaticProps = async () => {
  const featuredProjects = await getFeaturedProjects();
  const featuredBlogs = await getFeaturedBlogs();
  return {
    props: {
      featuredProjects,
      featuredBlogs,
    },
  };
};
