
import { motion } from "framer-motion";
import { staggerContainer } from "@/utils/animation";
import { SectionHeading } from "@/components/ui/AnimatedText";
import ProjectCard from "@/components/ui/ProjectCard";

const projects = [
  {
    title: "Winglet",
    description: "A full-stack social media platform inspired by X (formerly Twitter), built with modern web technology. [Under development]",
    imgUrl: "/Winglet.png",
    link: "https://github.com/Tushar-Aich/Winglet",
    tags: ["React", "Node.js", "Tailwind CSS", "Express.js", "Mongo DB", "Shadcn UI", "Typescript"],
  },
  {
    title: "Portfolio Website",
    description: "My portfolio website showcases my experience in MERN stack and is built with React, Tailwind CSS, Radix UI, and Framer Motion",
    imgUrl: "/Portfolio.png",
    link: "https://portfolio-2-phi-eight.vercel.app",
    tags: ["React", "Tailwind CSS", "Radix UI", "Frmer Motion", "Typescript"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section bg-secondary/30">
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="container"
      >
        <SectionHeading>Featured Projects</SectionHeading>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              imgUrl={project.imgUrl}
              link={project.link}
              tags={project.tags}
              index={index}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
