
import { motion } from "framer-motion";
import { staggerContainer } from "@/utils/animation";
import { SectionHeading } from "@/components/ui/AnimatedText";
import ProjectCard from "@/components/ui/ProjectCard";

const projects = [
  {
    title: "Car Marketplace x GeminiAI",
    description:
      "This is a modern car marketplace web application built with Next.js, leveraging server-side rendering, authentication & PostgreSQL database via Prisma ORM.",
    imgUrl: "/aicar.png",
    link: "https://ai-x-car.vercel.app/",
    tags: [
      "NextJS",
      "Gemini API",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "Clerk",
    ],
  },
  {
    title: "ConsultX | Doctor Appointment Platform",
    description:
      "ConsultX is a full-stack doctor appointment platform built with Next.js and Clerk, featuring a credit-based booking system, secure authentication, subscription plans, PayPal payouts, and an admin dashboard for management.",
    imgUrl: "/consultx.jpeg",
    link: "https://apothecary-iota.vercel.app/",
    tags: [
      "NextJS",
      "Tailwind CSS",
      "Shadcn UI",
      "PostgreSQL",
      "Neon",
      "Vonage",
    ],
  },
  {
    title: "Portfolio",
    description:
      "A fully responsive, high-performance portfolio built using Vite, React, TypeScript, and Tailwind CSS. Featuring smooth animations with Framer Motion.",
    imgUrl: "/portfolio.jpeg",
    link: "https://portfolio-brown-nu-26.vercel.app/",
    tags: [
      "Vite",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn UI",
      "Framer Motion",
      "Express.js",
    ],
  },
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
    tags: ["Vite", "Tailwind CSS", "Shadcn UI"],
  },
  {
    title: "Landing Page",
    description:
      "A landing page built using React, Tailwind CSS, Radix UI, Framer Motion, TypeScript, Vite, and ESLint for a sleek and interactive front-end experience.",
    imgUrl: "/resort.jpeg",
    link: "https://travel-x-unravel.vercel.app/",
    tags: ["Vite", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Stack Overflow [CLONE]",
    description:
      "A fully functional Q&A platform built using the MERN stack, designed to replicate the core experience of Stack Overflow. Users can post questions, answer queries, upvote responses, and engage in meaningful discussions. The platform features JWT-based authentication, a REST API-driven backend, search functionality, and a dynamic, responsive UI, ensuring a seamless and efficient user experience for knowledge sharing.",
    imgUrl: "/stackOverflow.jpg",
    link: "https://stackoverflow-clone-fqn3.onrender.com/",
    tags: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
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
