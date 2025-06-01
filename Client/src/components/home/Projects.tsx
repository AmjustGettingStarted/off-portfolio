
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
  {
    title: "Landing Page",
    description:
      "A landing page built using React, Tailwind CSS, Radix UI, Framer Motion, TypeScript, Vite, and ESLint for a sleek and interactive front-end experience.",
    imgUrl: "/resort.jpeg",
    link: "https://travel-x-unravel.vercel.app/",
    tags: [
      "React",
      "Tailwind CSS",
      "Radix UI",
      "Framer Motion",
      "TypeScript",
      "Vite",
      "ESLint",
    ],
  },
  {
    title: "Stack Overflow [CLONE]",
    description:
      "A fully functional Q&A platform built using MongoDB, Express.js, React, and Node.js, designed to replicate the core experience of Stack Overflow. Users can post questions, answer queries, upvote/downvote responses, and engage in meaningful discussions.",
    imgUrl: "/stackOverflow.jpg",
    link: "https://stackoverflow-clone-fqn3.onrender.com/",
    tags: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "Bootstrap",
      "GitHub",
      "REST API",
      "JWT Authentication",
    ],
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
