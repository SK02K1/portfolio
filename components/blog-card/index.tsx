import { TfiTime } from 'react-icons/tfi';

import { Blog } from 'types';

type Props = {
  blog: Blog;
};

export const BlogCard = ({ blog }: Props) => {
  const { title, publishedOn, duration, introduction, source } = blog;

  const iconStyles = {
    display: 'inline-block',
    fontSize: '1rem',
    margin: '0 0.25rem 0.25rem 0.5rem',
  };

  return (
    <div className='mb-4'>
      <a className='font-semibold text-blue-600' href={source}>
        {title}
      </a>
      <div className='text-xs font-medium py-1'>
        <span>{publishedOn}</span>
        <span>
          <TfiTime style={iconStyles} />
          {duration} read
        </span>
      </div>
      <p className='text-sm'>{introduction}</p>
    </div>
  );
};
