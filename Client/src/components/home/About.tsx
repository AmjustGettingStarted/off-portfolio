
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/utils/animation";
import { SectionHeading } from "@/components/ui/AnimatedText";
import { Code, Layout, Zap, Database, Server } from "lucide-react";

const skills = [
  { name: "HTML & CSS", level: 90, color: "bg-[#e34f26]" },
  { name: "JavaScript", level: 85, color: "bg-[#f7df1e]" },
  { name: "Express.js", level: 80, color: "bg-[#353535]" },
  { name: "Node.js", level: 77, color: "bg-[#68a063]" },
  { name: "React", level: 78, color: "bg-[#61dafb]" },
  { name: "TypeScript", level: 75, color: "bg-[#3178c6]" },
  { name: "Prisma ORM", level: 80, color: "bg-[#1B9AAA]" },
  { name: "Mongoose ORM", level: 79, color: "bg-[#4A2F27]" },
  { name: "MySQL", level: 85, color: "bg-[#00758F]" },
  { name: "Mongo DB", level: 82, color: "bg-[#116149]" },
  { name: "Git/GitHub", level: 72, color: "bg-[#181717]" },
];

const services = [
  {
    icon: <Code className="h-8 w-8" />,
    title: "Web Development",
    description: "Building responsive and performant web applications with modern technologies.",
  },
  {
    icon: <Layout className="h-8 w-8" />,
    title: "Frontend Development",
    description: "Creating engaging user interfaces with attention to detail and performance.",
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: "Performance Optimization",
    description: "Improving app performance and optimizing loading times for better user experience.",
  },
  {
    icon: <Database className="h-8 w-8" />,
    title: "Database Design",
    description: "Designing efficient database schemas and implementing robust data storage solutions.",
  },
  {
    icon: <Server className="h-8 w-8" />,
    title: "Backend Development",
    description: "Building scalable server-side applications and RESTful APIs.",
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
            <p className="mb-4 text-muted-foreground">
              I'm a passionate developer focused on creating elegant and efficient digital solutions. With expertise in modern web technologies, I combine technical skills with creative thinking to build exceptional user experiences.
            </p>
            <p className="mb-6 text-muted-foreground">
              My approach emphasizes clean code, responsive design, and intuitive user interfaces. I'm constantly exploring new technologies and methodologies to deliver cutting-edge solutions that exceed expectations.
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
            <h3 className="mb-6 text-2xl font-medium">Services I offer</h3>
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
                  <p className="text-sm text-muted-foreground">{service.description}</p>
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
