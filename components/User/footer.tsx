const Footer = () => {
  return (
    <div className="mt-10">
      <div className="bg-[var(--accent-light)] h-1.5"></div>
      <footer className="w-full  bg-[#38023B] text-white">
        <div className="container mx-auto flex h-16 max-w-screen-2xl items-center justify-center px-4 md:px-6">
          <p className="text-sm opacity-80 text-center w-full">
            Dengue Sight © {new Date().getFullYear()} RJMC. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
