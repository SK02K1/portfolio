import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Home | Sourabh Kheraliya</title>
      </Head>
      <main>
        <p className='py-4'>
          Hellew 👋🏻 , I'am{' '}
          <span className='font-medium'>Sourabh Kheraliya</span> an aspiring
          full stack developer and tech enthusiast. When I'am not coding you can
          find me playing PC games 🎮 and listening to music 🎵.
        </p>
      </main>
    </div>
  );
};

export default Home;
