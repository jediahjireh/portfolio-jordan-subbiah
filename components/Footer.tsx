import { footerContent } from "@/config/footer";

const Footer = () => {
  return (
    <footer className="mt-24 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-8 text-center lg:px-8">
        <p className="text-sm text-white/40">
          © {new Date().getFullYear()} {footerContent.name}.{" "}
          {footerContent.tagline}{" "}
          <a
            href={footerContent.builder.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-(--accent-secondary) transition-colors hover:text-(--accent-primary)"
          >
            {footerContent.builder.name}
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
