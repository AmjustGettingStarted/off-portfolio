import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/utils/animation";
import { SectionHeading } from "@/components/ui/AnimatedText";
import { Layout, Zap, Server, Code, Layers, Database } from "lucide-react";


const skills = [
  // Core Frontend & Languages
  { name: "NextJS", level: 85, color: "bg-zinc-900 dark:bg-zinc-100" },      // Inverted monochrome
  { name: "TypeScript", level: 80, color: "bg-[#3178C6]" },                  // TypeScript blue
  { name: "React", level: 85, color: "bg-[#008B8B] dark:bg-[#61DAFB]" },     // Teal (Light) / Cyan (Dark)
  { name: "JavaScript", level: 80, color: "bg-[#D4AC0D] dark:bg-[#F7DF1E]" }, // Gold (Light) / Yellow (Dark)
  { name: "TailwindCSS", level: 90, color: "bg-[#06B6D4]" },                 // Tailwind cyan
  { name: "HTML & CSS", level: 85, color: "bg-[#E44D26]" },                  // HTML orange-red
  { name: "ShadcnUI", level: 85, color: "bg-slate-600 dark:bg-slate-300" },  // Neutral Slate

  // Backend, Databases & Auth
  { name: "Node.js", level: 75, color: "bg-[#5FA04E]" },                     // Node green
  { name: "Express.js", level: 75, color: "bg-stone-600 dark:bg-stone-300" },// Warm Stone/Grey
  { name: "PostgreSQL", level: 75, color: "bg-[#336791] dark:bg-[#4169E1]" },// Postgres Navy / Royal Blue
  { name: "Prisma ORM", level: 75, color: "bg-[#0C344B] dark:bg-[#2D3748]" },// Prisma Teal / Indigo-Grey
  { name: "Supabase", level: 80, color: "bg-[#3ECF8E]" },                    // Supabase emerald green
  { name: "Convex", level: 75, color: "bg-[#EE342F]" },                      // Convex red

  // Tools & Workflows
  { name: "Git/GitHub", level: 80, color: "bg-[#F05032]" },                  // Git red-orange
  { name: "Java", level: 60, color: "bg-[#F89820]" },                        // Java orange
];



const services = [
  {
    icon: <Layout className="h-8 w-8" />,
    title: "Frontend Engineering",
    description:
      "Crafting responsive, high-performance web applications using Next.js (App Router), React 19, TypeScript, and Tailwind CSS v4.",
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: "Web Performance & Accessibility",
    description:
      "Optimizing web applications for max performance, client-side caching, fluid layout responsiveness, and a11y compliance.",
  },
  {
    icon: <Server className="h-8 w-8" />,
    title: "Full-Stack Architecture",
    description:
      "Engineering robust end-to-end architectures leveraging Node.js, Express, Prisma ORM, and PostgreSQL databases.",
  },
  {
    icon: <Code className="h-8 w-8" />,
    title: "Component Design Systems",
    description:
      "Architecting modular, accessible, and scalable UI component workflows with Shadcn/UI, Radix UI, and Framer Motion.",
  },
  {
    icon: <Layers className="h-8 w-8" />,
    title: "Real-Time & AI Integration",
    description:
      "Integrating real-time document persistence (Convex), LLMs (Gemini API), and webhooks for modern web applications.",
  },
  {
    icon: <Database className="h-8 w-8" />,
    title: "Auth & Multi-Tenant Systems",
    description:
      "Implementing RBAC permissions, multi-tier scheduling, credit workflows, and secure auth using Supabase RLS and Clerk.",
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
