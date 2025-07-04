const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#17241d] text-white text-base py-6 px-6">
      <p className="text-center tracking-wider">
        © {year} – Grünraum Hasler. Alle Rechte vorbehalten.
      </p>
    </footer>
  );
};

export default Footer;
