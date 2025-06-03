
import { useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import PageTransition from "@/components/ui/PageTransition";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import Projects from "@/components/home/Projects";
import About from "@/components/home/About";
import Contact from "@/components/home/Contact";
import Experience from "@/components/home/Experience";

const Index = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Smooth scroll to hash on page load
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <PageTransition>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-50"
        style={{ scaleX }}
      />
      
      <Navbar />
      
      <main>
        <Hero />
        <Projects />
        <About />
        <Experience />
        <Contact />
      </main>
      
      <Footer />
    </PageTransition>
  );
};

export default Index;
