import Link from 'next/link';

type PageType = {
  id: string;
  name: string;
  path: string;
};

const Pages: PageType[] = [
  {
    id: '1',
    name: 'Home',
    path: '/',
  },
  {
    id: '2',
    name: 'Projects',
    path: '/projects',
  },
  {
    id: '3',
    name: 'Blogs',
    path: '/blogs',
  },
];

export const Navbar = () => {
  const navLinksListing = Pages.map(({ id, name, path }) => {
    return (
      <li className='ml-4' key={id}>
        <Link href={path}>{name}</Link>
      </li>
    );
  });
  return (
    <nav className='flex justify-between mb-8'>
      <div className='font-semibold'>
        <Link href='/'>SK.</Link>
      </div>
      <ul className='flex'>{navLinksListing}</ul>
    </nav>
  );
};
