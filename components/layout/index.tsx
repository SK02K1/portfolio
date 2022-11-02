type Props = {
  children: JSX.Element;
};

export const Layout = ({ children }: Props) => {
  return (
    <div className='container max-w-xl mx-auto my-8 px-4 py-4'>{children}</div>
  );
};
