import { FaEnvelope, FaFacebook, FaLinkedin } from "react-icons/fa";

export const contactContent = {
  title: "Contact",
  email: "jordan@example.com", // TODO: Update with actual email
  description:
    "Interested in sustainable infrastructure solutions? Looking for a driven engineering student to join your team? Or just want to connect and discuss civil engineering challenges? Let's build something together.",
  cta: "Feel free to reach out!",
};

export const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/jordansubbiah/",
    icon: FaLinkedin,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/", // TODO: Update with actual Facebook
    icon: FaFacebook,
  },
  {
    name: "Email",
    href: `mailto:${contactContent.email}`,
    icon: FaEnvelope,
    isEmail: true,
  },
];
