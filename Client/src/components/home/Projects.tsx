
import { motion } from "framer-motion";
import { staggerContainer } from "@/utils/animation";
import { SectionHeading } from "@/components/ui/AnimatedText";
import ProjectCard from "@/components/ui/ProjectCard";

const projects = [
  {
    title: "Car Website [UI]",
    description:
      "A frontend-driven project developed as part of my training, leveraging modern web technologies to create interactive and responsive user experiences",
    imgUrl: "/km.jpg",
    link: "https://k-mold.vercel.app/",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI"],
  },
  {
    title: "Landing Page",
    description:
      "A landing page built with Vite to deliver a sleek, responsive, and visually engaging front-end experience.",
    imgUrl: "/Finance.jpeg",
    link: "https://financelandingpage-responsive.vercel.app/",
    tags: ["Vite", "React", "Tailwind CSS", "Shadcn UI"],
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
