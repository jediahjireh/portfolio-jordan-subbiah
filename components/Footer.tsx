import React from "react";

const Footer = () => {
  return (
    <footer className="mt-24 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-8 text-center lg:px-8">
        <p className="text-sm text-white/40">
          © {new Date().getFullYear()} Jordan Subbiah. Built on solid
          foundations.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
