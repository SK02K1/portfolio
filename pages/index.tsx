import Head from 'next/head';
import type { NextPage } from 'next';

const Home: NextPage = () => {
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
    </div>
  );
};

export default Home;
