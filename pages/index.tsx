import Head from 'next/head';
import type { NextPage } from 'next';
import { getFeaturedProjects } from 'lib';
import { ProjectCard } from 'components';
import { Project } from 'types';

type Props = {
  featuredProjects: Project[];
};

const Home: NextPage<Props> = ({ featuredProjects }: Props) => {
  const featuredProjectsListing = featuredProjects.map((project) => (
    <ProjectCard key={project.id} project={project} />
  ));

  return (
    <div>
      <Head>
        <title>Home | Sourabh Kheraliya</title>
      </Head>
      <header>
        <p className='py-4'>
          Hellew 👋🏻 , I'am{' '}
          <span className='font-medium'>Sourabh Kheraliya</span> an aspiring
          full stack developer and tech enthusiast. When I'am not coding you can
          find me playing PC games 🎮 and listening to music 🎵.
        </p>
      </header>
      <main>
        <h2 className='text-lg font-semibold py-4'>Featured Projects</h2>
        {featuredProjectsListing}
      </main>
    </div>
  );
};

export default Home;

export const getStaticProps = async () => {
  const featuredProjects = await getFeaturedProjects();
  return {
    props: {
      featuredProjects,
    },
  };
};
