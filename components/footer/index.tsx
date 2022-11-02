import { BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs';

const socialLinks = [
  {
    id: '1',
    source: 'https://github.com/SK02K1',
    icon: <BsGithub />,
  },
  {
    id: '2',
    source: 'https://www.linkedin.com/in/sourabh-kheraliya-b2571b1a2/',
    icon: <BsLinkedin />,
  },
  {
    id: '3',
    source: 'https://twitter.com/sk02k1',
    icon: <BsTwitter />,
  },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinksListing = socialLinks.map(({ id, source, icon }) => {
    return (
      <a className='text-2xl ml-4' href={source} target='_blank' key={id}>
        {icon}
      </a>
    );
  });

  return (
    <footer className='border-t-2 mt-12 pt-8 flex justify-between items-center'>
      <p>
        © {currentYear}, Built with{' '}
        <a className='text-blue-600' href='https://nextjs.org/'>
          Next.js
        </a>
      </p>
      <div className='flex'>{socialLinksListing}</div>
    </footer>
  );
};
