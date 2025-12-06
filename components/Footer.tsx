const footerContent = {
  name: "Jordan Subbiah",
  tagline: "Built on solid foundations.",
};

const Footer = () => {
  return (
    <footer className="mt-24 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-8 text-center lg:px-8">
        <p className="text-sm text-white/40">
          © {new Date().getFullYear()} {footerContent.name}.{" "}
          {footerContent.tagline}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
