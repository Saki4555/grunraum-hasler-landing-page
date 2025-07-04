

export const SectionContainer = ({ children, className }) => {
  return (
    <div
      className={`mx-auto max-w-6xl w-full px-5 ${className} sm:px-8 lg:px-14 xl:px-4`}
    >
      {children}
    </div>
  );
};