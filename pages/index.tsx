import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Home | Sourabh Kheraliya</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='text-center'>
        <h1 className='text-2xl font-bold'>Home</h1>
      </main>
    </div>
  );
};

export default Home;
