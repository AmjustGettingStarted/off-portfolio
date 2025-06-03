import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/utils/animation";
import { SectionHeading } from "@/components/ui/AnimatedText";
import {
  Calendar,
  BookOpen,
  Home,
  Atom,
  ShoppingCart,
  Layers,
} from "lucide-react";

const experienceInfo = [
  {
    id: 1,
    degree: "Kalyani Motors ",
    jobRole: "Junior Software Engineer",
    duration: "Mar 2025 - Present",
    description:
      "Working on the development and maintenance of the company website using Next.js, Tailwind CSS, and TypeScript. Assisting with UI/UX improvements, optimizing web performance, and collaborating with backend teams to integrate features using Java Spring Boot.",
    icon: <Home className="h-10 w-10" />,
  },
  {
    id: 2,
    degree: "Contriver",
    jobRole: "Web Dev Intern",
    duration: "Jan 2024 - Mar 2024",
    description:
      "Maintained and developed key website components, including the footer, ensuring functionality and responsiveness using React.js and Vite",
    icon: <Layers className="h-10 w-10" />,
  },
  {
    id: 3,
    degree: "Solar Secure Solutions",
    jobRole: "Web Dev Intern",
    duration: "Apr 2023 - Jun 2025",
    description:
      "Contributed to the development of a food order e-commerce website, implementing a secure payment gateway and maintaining key components using PHP, MySQL, HTML, CSS, and JavaScript",
    icon: <ShoppingCart className="h-10 w-10" />,
  },
  {
    id: 4,
    degree: "NullClass",
    jobRole: "MERN Intern",
    duration: "Jan 2023 - Feb 2023",
    description:
      "Developed and deployed web applications using the MERN stack, gaining practical experience in full-stack development and modern JavaScript technologies.",
    icon: <Atom className="h-10 w-10" />,
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section bg-secondary/5 py-16">
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="container"
      >
        <SectionHeading>Experience</SectionHeading>

        <div className="mx-auto max-w-4xl">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 top-0 ml-[21px] h-full w-[2px] bg-primary/30 md:left-1/2 md:ml-0 md:-translate-x-1/2" />

            {/* Timeline items */}
            <div className="space-y-12">
              {experienceInfo.map((item, index) => (
                <motion.div
                  key={item.id}
                  variants={fadeIn(
                    index % 2 === 0 ? "right" : "left",
                    0.2 * index
                  )}
                  className={`relative flex flex-col md:flex-row ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full border-4 border-background bg-primary/20 md:left-1/2 md:-translate-x-1/2">
                    <div className="h-3 w-3 rounded-full bg-primary" />
                  </div>

                  {/* Content */}
                  <div
                    className={`ml-16 md:ml-0 md:w-[calc(50%-40px)] ${
                      index % 2 === 0
                        ? "md:mr-[40px] md:text-right"
                        : "md:ml-[40px]"
                    }`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="rounded-lg border border-border bg-card p-6 shadow-lg"
                    >
                      <div className="mb-4 flex items-center gap-4">
                        <div className="rounded-full bg-primary/10 p-3 text-primary">
                          {item.icon}
                        </div>
                        <div
                          className={`flex-1 ${
                            index % 2 === 0 ? "md:text-right" : ""
                          }`}
                        >
                          <h3 className="text-xl font-bold">{item.degree}</h3>
                          <p className="text-primary">{item.jobRole}</p>
                        </div>
                      </div>
                      <div className="mb-3 flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{item.duration}</span>
                      </div>
                      <p className="text-muted-foreground">
                        {item.description}
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
