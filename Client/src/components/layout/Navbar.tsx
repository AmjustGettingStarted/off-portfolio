import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { navVariants } from "@/utils/animation";
import { cn } from "@/lib/utils";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "@/components/theme-provider";

const navLinks = [
  { title: "Home", href: "#home" },
  { title: "Projects", href: "#projects" },
  { title: "About", href: "#about" },
  { title: "Career", href: "#experience" },
  { title: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { setTheme, theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <motion.header
      variants={navVariants}
      initial="hidden"
      animate="show"
      className={cn(
        "fixed top-0 left-0 z-20 w-full transition-all duration-300 ease-out-expo",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm py-4"
          : "bg-transparent py-6"
      )}
    >
      <div className="container flex items-center justify-between">
        <motion.a
          href="#home"
          className="text-xl font-bold"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          HMV | PORTFOLIO
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center">
          <ul className="flex items-center space-x-8 mr-4">
            {navLinks.map((link, index) => (
              <motion.li key={index} whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
                <a
                  href={link.href}
                  className="relative text-sm font-medium text-foreground transition-colors hover:text-primary"
                >
                  {link.title}
                  <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary transition-all duration-300 ease-out-expo group-hover:w-full" />
                </a>
              </motion.li>
            ))}
          </ul>

          {/* Theme toggle button */}
          <motion.button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </motion.button>
        </nav>

        {/* Mobile menu and theme toggle */}
        <div className="flex items-center md:hidden space-x-2 mr-4">
          <motion.button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </motion.button>

          <motion.button
            className="p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </motion.button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimateMobileMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
    </motion.header>
  );
};

const AnimateMobileMenu = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.position = "fixed";
      document.body.style.top = "0";
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{
        height: isOpen ? "100vh" : 0,
        opacity: isOpen ? 1 : 0,
      }}
      transition={{ duration: 0.3, ease: [0.25, 0.25, 0.25, 0.75] }}
      className="fixed inset-x-0 top-[64px] z-40 overflow-hidden bg-background/95 backdrop-blur-md md:hidden"
    >
      {isOpen && (
        <motion.nav className="container flex h-full flex-col items-center justify-center -mt-12">
          <motion.ul
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
            className="flex flex-col items-center space-y-8"
          >
            {navLinks.map((link, index) => (
              <motion.li
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 },
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href={link.href}
                  className="text-2xl font-medium"
                  onClick={onClose}
                >
                  {link.title}
                </a>
              </motion.li>
            ))}
          </motion.ul>
        </motion.nav>
      )}
    </motion.div>
  );
};

export default Navbar;
