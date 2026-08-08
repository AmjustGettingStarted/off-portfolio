import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

type Project = {
    title: string;
    description: string;
    imgUrl: string;
    link?: string;
    tags: string[];
};

type ProjectListCardProps = {
    project: Project;
    index: number;
};

export default function ProjectListCard({ project, index }: ProjectListCardProps) {
    const indexFormatted = `/${String(index + 1).padStart(2, "0")}`;

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="w-full"
        >
            <a
                href={project.link || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block w-full overflow-hidden bg-black shadow-2xl transition-all duration-500 ease-in-out p-6 sm:p-10 h-auto md:h-[300px] md:hover:h-[420px] flex flex-col justify-between rounded-xl"
            >
                {/* Background Image Layer */}
                <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105 will-change-transform"
                    style={{ backgroundImage: `url(${project.imgUrl})` }}
                />

                {/* Dark Overlay (Slightly darker on mobile so screenshot background text doesn't clash) */}
                <div className="absolute inset-0 bg-black/90 md:bg-black/85 group-hover:bg-black/40 transition-colors duration-500 ease-in-out" />

                {/* Main Content Wrapper */}
                <div className="relative z-10 flex flex-col justify-between h-full w-full space-y-6 md:space-y-0">

                    {/* Top/Main Grid Content */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start w-full">

                        {/* Left Column: Number & Title */}
                        <div className="md:col-span-6 lg:col-span-7 space-y-2">
                            <div className="flex items-center gap-3">
                                <span className="text-2xl sm:text-3xl font-mono font-bold text-white/60 group-hover:text-white transition-colors duration-300">
                                    {indexFormatted}
                                </span>
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white/60 group-hover:text-white transition-colors duration-300 leading-tight">
                                    {project.title}
                                </h2>
                            </div>

                            {project.tags[0] && (
                                <p className="text-xs uppercase tracking-widest text-white/60 group-hover:text-white font-semibold transition-colors duration-300 pt-1">
                                    {project.tags[0]}
                                </p>
                            )}
                        </div>

                        {/* Right Column: Description & View Button */}
                        <div className="md:col-span-6 lg:col-span-5 flex flex-col justify-between space-y-4">
                            <p className="text-sm sm:text-base text-white/60 group-hover:text-white transition-colors duration-300 leading-relaxed font-normal line-clamp-3">
                                {project.description}
                            </p>

                            {/* View Project Button (Visible on mobile, hover-revealed on desktop) */}
                            <div>
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white font-medium text-sm transition-all duration-300 opacity-100 md:opacity-0 md:group-hover:opacity-100 md:translate-y-2 md:group-hover:translate-y-0">
                                    <span>View project</span>
                                    <ArrowUpRight className="h-4 w-4" />
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Bottom Tag Bar */}
                    {project.tags.length > 1 && (
                        <div className="flex flex-wrap gap-2 items-center pt-4 border-t border-white/10">
                            {project.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="text-xs font-medium px-3 py-1 rounded-full bg-white/5 group-hover:bg-white/10 backdrop-blur-md text-white/60 group-hover:text-white border border-white/10 transition-colors duration-300"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}

                </div>
            </a>
        </motion.div>
    );
}