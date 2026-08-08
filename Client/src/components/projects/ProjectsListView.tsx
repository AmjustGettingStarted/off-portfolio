import { projects } from "@/data/projects";
import ProjectListCard from "./ProjectListCard";

export default function ProjectsListView() {
    return (
        <div className="flex flex-col gap-8 w-full">
            {projects.map((project, index) => (
                <ProjectListCard
                    key={project.title}
                    project={project}
                    index={index}
                />
            ))}
        </div>
    );
}