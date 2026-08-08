import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/AnimatedText";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";
import { Link } from "react-router-dom";

const Projects = () => {
  const featuredProjects = projects.slice(0, 4);
  const targetRef = useRef<HTMLElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [translateX, setTranslateX] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      if (scrollContainerRef.current) {
        const totalWidth = scrollContainerRef.current.scrollWidth;
        const viewportWidth = window.innerWidth;
        // Total scrollable distance to bring the trailing edge flush with the viewport
        setTranslateX(totalWidth - viewportWidth);
      }
    };

    updateWidth();

    // Track both window resize and element dimension updates (crucial for mobile/dev tools)
    window.addEventListener("resize", updateWidth);

    const resizeObserver = new ResizeObserver(() => updateWidth());
    if (scrollContainerRef.current) {
      resizeObserver.observe(scrollContainerRef.current);
    }

    return () => {
      window.removeEventListener("resize", updateWidth);
      resizeObserver.disconnect();
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -translateX]);

  return (
    <section ref={targetRef} className="relative h-[450vh] bg-background" id="projects">
      <div className="sticky top-0 flex h-screen flex-col justify-start pt-24 overflow-hidden">

        <div className="container sm:mb-4 px-6 sm:px-12">
          <SectionHeading>Featured Projects</SectionHeading>
        </div>

        <motion.div
          ref={scrollContainerRef}
          style={{ x }}
          className="flex gap-6 sm:gap-8 px-6 sm:px-12 w-max items-stretch"
        >
          {/* 4 Featured Project Cards */}
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className="w-[85vw] sm:w-[45vw] lg:w-[32vw] shrink-0"
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                imgUrl={project.imgUrl}
                link={project.link}
                tags={project.tags}
                index={index}
              />
            </div>
          ))}

          {/* 5th Skeleton "View All" Card */}
          <div className="w-[85vw] sm:w-[45vw] lg:w-[32vw] shrink-0">
            <Link to="/projects" className="group block h-full">
              <div className="relative flex flex-col justify-between h-full overflow-hidden rounded-xl border border-border/80 bg-card/60 shadow-md backdrop-blur-sm transition-all duration-300 hover:shadow-xl">

                {/* Image Placeholder slot */}
                <div className="relative h-60 w-full bg-muted/40 overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-background/20 to-transparent animate-pulse" />

                  {/* Hidden by default, fades and scales in on hover */}
                  <div className="rounded-full bg-primary/90 p-4 text-primary-foreground shadow-lg opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
                    <ArrowUpRight className="h-6 w-6" />
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <div className="h-6 w-2/3 rounded-md bg-muted/60 animate-pulse mb-3" />

                    <div className="space-y-2">
                      <div className="h-4 w-full rounded-md bg-muted/30 animate-pulse" />
                      <div className="h-4 w-4/5 rounded-md bg-muted/30 animate-pulse" />
                    </div>
                  </div>

                  <div className="sm:mt-6 pt-4 flex items-center justify-between border-t border-border/40">
                    <span className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                      View All Projects →
                    </span>
                    <span className="inline-flex items-center rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground">
                      {projects.length}+ Total
                    </span>
                  </div>
                </div>

              </div>
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;