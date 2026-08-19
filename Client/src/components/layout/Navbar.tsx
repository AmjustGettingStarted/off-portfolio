import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { navVariants } from "@/utils/animation";
import { cn } from "@/lib/utils";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "@/components/theme-provider";

const rawNavLinks = [
  { title: "Home", section: "#home" },
  { title: "Projects", section: "#projects" },
  { title: "About", section: "#about" },
  { title: "Career", section: "#experience" },
  { title: "Contact", section: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { setTheme, theme } = useTheme();
  const location = useLocation();

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

  // Helper to dynamically calculate target href based on current location
  const getHref = (section: string) => {
    const isHomePage = location.pathname === "/";

    if (section === "#home") {
      return isHomePage ? "#home" : "/";
    }

    return isHomePage ? section : `/${section}`;
  };

  return (
    <motion.header
      variants={navVariants}
      initial="hidden"
      animate="show"
      className={cn(
        "fixed top-0 left-0 z-40 w-full transition-all duration-300 ease-out-expo",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm py-4"
          : "bg-transparent py-6"
      )}
    >
      <div className="container flex items-center justify-between">
        <motion.a
          href={getHref("#home")}
          className="text-xl font-bold"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          HMV | PORTFOLIO
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center">
          <ul className="flex items-center space-x-8 mr-4">
            {rawNavLinks.map((link, index) => (
              <motion.li key={index} whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
                <a
                  href={getHref(link.section)}
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
        <div className="flex items-center md:hidden gap-2 pr-2">
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
        getHref={getHref}
      />
    </motion.header>
  );
};

const AnimateMobileMenu = ({
  isOpen,
  onClose,
  getHref,
}: {
  isOpen: boolean;
  onClose: () => void;
  getHref: (section: string) => string;
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

  const { resolvedTheme } = useTheme();

  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{
        height: isOpen ? "100vh" : 0,
        opacity: isOpen ? 1 : 0,
      }}
      transition={{ duration: 0.3, ease: [0.25, 0.25, 0.25, 0.75] }}
      className={`fixed inset-x-0 top-[64px] z-[50] overflow-hidden backdrop-blur-md md:hidden transition-colors duration-300 ${resolvedTheme === "dark" ? "bg-background/95" : "bg-[#F7F6F2]/95"
        }`}
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
            {rawNavLinks.map((link, index) => (
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
                  href={getHref(link.section)}
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