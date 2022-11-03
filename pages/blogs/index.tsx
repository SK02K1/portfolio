import Head from 'next/head';
import type { GetStaticProps, NextPage } from 'next';

import { BlogCard } from 'components';
import { getAllBlogs } from 'lib';
import { Blog } from 'types';

type Props = {
  blogs: Blog[];
};

const Blogs: NextPage<Props> = ({ blogs }: Props) => {
  const blogsListing = blogs.map((blog) => {
    return <BlogCard key={blog.id} blog={blog} />;
  });
  return (
    <div>
      <Head>
        <title>Blogs | Sourabh Kheraliya</title>
      </Head>
      <main>
        <h1 className='text-center text-lg font-semibold py-4'>Blogs</h1>
        {blogsListing}
      </main>
    </div>
  );
};

export default Blogs;

export const getStaticProps: GetStaticProps = async () => {
  const blogs = await getAllBlogs();
  return {
    props: {
      blogs,
    },
  };
};
