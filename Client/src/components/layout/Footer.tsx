
import { motion } from "framer-motion";
import { footerVariants } from "@/utils/animation";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  {
    icon: <Github className="h-5 w-5" />,
    href: "https://github.com/AmjustGettingStarted",
    label: "GitHub",
  },
  {
    icon: <Linkedin className="h-5 w-5" />,
    href: "https://www.linkedin.com/in/harshithmv/",
    label: "LinkedIn",
  },
  {
    icon: <Mail className="h-5 w-5" />,
    href: "mailto:tusharaich106@gmail.com",
    label: "Email",
  },
  {
    icon: <Twitter className="h-5 w-5" />,
    href: "#",
    label: "Twitter",
  },
];

const Footer = () => {
  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="relative py-10 border-t border-border"
    >
      <div className="container">
        <div className="flex flex-col items-center md:flex-row md:justify-between">
          <motion.div 
            className="mb-6 md:mb-0"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} HARSHITH MV
            </p>
          </motion.div>

          <motion.div
            className="flex space-x-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-secondary-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
