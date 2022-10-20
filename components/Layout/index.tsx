type Props = {
  children: JSX.Element;
};

export const Layout = ({ children }: Props) => {
  return (
    <div className='container max-w-4xl mx-auto my-8 px-4 py-8'>{children}</div>
  );
};
