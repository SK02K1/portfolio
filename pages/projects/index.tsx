import Head from 'next/head';
import type { GetStaticProps, NextPage } from 'next';

import { ProjectCard } from 'components';
import { getAllProjects } from 'lib';
import { Project } from 'types';

type Props = {
  projects: Project[];
};

const Projects: NextPage<Props> = ({ projects }: Props) => {
  const projectsListing = projects.map((project) => {
    return <ProjectCard key={project.id} project={project} />;
  });
  return (
    <div>
      <Head>
        <title>Projects | Sourabh Kheraliya</title>
      </Head>
      <main>
        <h1 className='text-center text-lg font-semibold py-4'>Projects</h1>
        {projectsListing}
      </main>
    </div>
  );
};

export default Projects;

export const getStaticProps: GetStaticProps = async () => {
  const projects = await getAllProjects();
  return {
    props: {
      projects,
    },
  };
};
