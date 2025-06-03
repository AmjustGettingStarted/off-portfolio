import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/utils/animation";
import { SectionHeading } from "@/components/ui/AnimatedText";
import {
  Code,
  Layout,
  Zap,
  Database,
  Server,
  Computer,
  ChartBarStacked,
} from "lucide-react";

const skills = [
  { name: "NextJS", level: 50, color: "bg-[#0070F3]" }, // Official Next.js blue
  { name: "TypeScript", level: 50, color: "bg-[#3178C6]" }, // TypeScript blue
  { name: "TailwindCSS", level: 75, color: "bg-[#06B6D4]" }, // Tailwind cyan
  { name: "React", level: 60, color: "bg-[#61DAFB]" }, // React light blue
  { name: "Java", level: 75, color: "bg-[#F89820]" }, // Java orange
  { name: "MySQL", level: 75, color: "bg-[#DD8A00]" }, // MySQL warm yellow-orange
  { name: "Spring", level: 50, color: "bg-[#6DB33F]" }, // Spring green
  { name: "HTML & CSS", level: 70, color: "bg-[#E44D26]" }, // HTML orange-red
  { name: "JavaScript", level: 70, color: "bg-[#F7DF1E]" }, // JavaScript yellow
  { name: "Mongo DB", level: 50, color: "bg-[#4DB33D]" }, // MongoDB green
  { name: "Git/GitHub", level: 75, color: "bg-[#F05032]" }, // Git red-orange
  // { name: "Express.js", level: 80, color: "bg-[#353535]" },
  // { name: "Node.js", level: 77, color: "bg-[#68a063]" },
  // { name: "Prisma ORM", level: 80, color: "bg-[#1B9AAA]" },
  // { name: "Mongoose ORM", level: 79, color: "bg-[#4A2F27]" },
];

const services = [
  {
    icon: <Layout className="h-8 w-8" />,
    title: "Frontend Engineering",
    description:
      "Crafting high-performance, scalable user interfaces with Next.js, React, and Tailwind CSS.",
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: "Web Performance Optimization",
    description:
      "Enhancing UX by improving load speeds, accessibility, and responsiveness.",
  },
  {
    icon: <Server className="h-8 w-8" />,
    title: "Exploring Java Full Stack",
    description:
      "Diving into Spring Boot, MySQL, and backend technologies to expand my skillset.",
  },
  {
    icon: <Code className="h-8 w-8" />,
    title: "Component-Driven Development",
    description:
      "Building reusable and maintainable UI components with modern frameworks.",
  },
  {
    icon: <Computer className="h-8 w-8" />,
    title: "UI/UX Enhancements",
    description:
      "Refining designs and improving user interactions in front-end projects using Radix UI, Shadcn UI, and Framer Motion.",
  },
  {
    icon: <ChartBarStacked className="h-8 w-8" />,
    title: "Full-Stack Project Development",
    description:
      "Working on real-world projects like a Stack Overflow clone, applying full-stack principles using MongoDB, Express.js, React, and Node.js.",
  },
];

const About = () => {
  return (
    <section id="about" className="section py-16">
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="container"
      >
        <SectionHeading>About Me</SectionHeading>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <motion.div
            variants={fadeIn("right", 0.2)}
            className="flex flex-col justify-center"
          >
            <h3 className="mb-4 text-2xl font-medium">Get to know me</h3>
            <p className="mb-6 text-muted-foreground">
              I'm a developer focused on building efficient and user-friendly
              digital solutions. I work with modern web technologies to create
              clean, responsive, and functional applications.
            </p>
            <p className="mb-6 text-muted-foreground">
              I prioritize writing clean code, designing intuitive user
              interfaces, and continuously learning new technologies to improve
              my work.
            </p>

            <div className="mt-6">
              <h4 className="mb-6 text-xl font-medium">My Skills</h4>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between">
                      <span className="font-medium">{skill.name}</span>
                    </div>
                    <div className="h-2.5 w-full overflow-hidden rounded-full bg-secondary">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                        className={`h-full rounded-full ${skill.color}`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("left", 0.2)}
            className="flex flex-col justify-center"
          >
            <h3 className="mb-6 text-2xl font-medium">What I'm Learning</h3>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="rounded-lg border border-border bg-card p-6 shadow-sm"
                >
                  <div className="mb-4 text-primary">{service.icon}</div>
                  <h4 className="mb-2 text-lg font-medium">{service.title}</h4>
                  <p className="text-sm text-muted-foreground">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
