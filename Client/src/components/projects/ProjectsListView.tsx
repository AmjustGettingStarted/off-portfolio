import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import ProjectListCard from "./ProjectListCard";

export default function ProjectsListView() {
    return (
        <div className="flex flex-col gap-8 w-full">
            {projects.map((project, index) => (
                <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{
                        duration: 0.35,
                        delay: (index % 4) * 0.08,
                        ease: "easeOut",
                    }}
                >
                    <ProjectListCard project={project} index={index} />
                </motion.div>
            ))}
        </div>
    );
}