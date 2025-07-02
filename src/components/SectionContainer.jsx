

export const SectionContainer = ({ children, className }) => {
  return (
    <div
      className={`mx-auto max-w-6xl w-full px-5 ${className} sm:px-8 md:px-14 lg:px-10`}
    >
      {children}
    </div>
  );
};