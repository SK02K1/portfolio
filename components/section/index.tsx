type Props = {
  children: JSX.Element;
};

export const Section = ({ children }: Props) => {
  return (
    <section className='p-4 my-4 border-solid border-2 black-sky-500 rounded-sm'>
      {children}
    </section>
  );
};
