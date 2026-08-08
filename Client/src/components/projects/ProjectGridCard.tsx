import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

type Project = {
    title: string;
    description: string;
    imgUrl: string;
    link?: string;
    tags: string[];
};

type ProjectGridCardProps = {
    project: Project;
    index: number;
};

export default function ProjectGridCard({ project, index }: ProjectGridCardProps) {
    const indexFormatted = `/${String(index + 1).padStart(2, "0")}`;

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="w-full"
        >
            <a
                href={project.link || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block w-full overflow-hidden rounded-2xl border border-border/60 bg-black/80 shadow-md transition-all duration-500 p-6 h-[380px] hover:h-[440px] flex flex-col justify-between"
            >
                {/* Background Image with Blur, Zoom & Contrast Shift */}
                <div
                    className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-out group-hover:scale-105 filter brightness-[0.25] blur-[3px] group-hover:brightness-[0.50] group-hover:blur-0"
                    style={{ backgroundImage: `url(${project.imgUrl})` }}
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/60 transition-opacity duration-500 group-hover:bg-black/40" />

                {/* Content Container */}
                <div className="relative z-10 flex flex-col justify-between h-full text-white">

                    {/* Top Bar: Index & Main Tag */}
                    <div className="flex items-center justify-between">
                        <span className="text-lg font-mono text-white/50 group-hover:text-white/80 transition-colors font-bold">
                            {indexFormatted}
                        </span>
                        {project.tags[0] && (
                            <span className="text-[11px] uppercase tracking-wider text-white/60 group-hover:text-white/90 transition-colors font-semibold px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10">
                                {project.tags[0]}
                            </span>
                        )}
                    </div>

                    {/* Bottom Content Area */}
                    <div className="space-y-3">
                        <h3 className="text-2xl font-bold tracking-tight text-white/80 group-hover:text-white transition-colors line-clamp-1">
                            {project.title}
                        </h3>
                        <p className="text-xs text-white/60 group-hover:text-white/80 transition-colors line-clamp-3 leading-relaxed">
                            {project.description}
                        </p>

                        {/* Slide-up View Button */}
                        <div className="pt-2 flex items-center justify-between">
                            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white font-medium text-xs transition-all duration-500 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0">
                                <span>View project</span>
                                <ArrowUpRight className="h-3.5 w-3.5" />
                            </div>

                            <span className="text-[10px] text-white/40 group-hover:text-white/70 font-mono transition-colors">
                                {project.tags.length} Tags
                            </span>
                        </div>
                    </div>

                </div>
            </a>
        </motion.div>
    );
}