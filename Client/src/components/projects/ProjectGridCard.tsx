import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

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
    const indexFormatted = `#${String(index + 1).padStart(2, "0")}`;
    const [primaryTag] = project.tags;

    // Only show tooltip if description is long enough to potentially truncate
    const isDescriptionLong = project.description.length > 100;

    return (
        <TooltipProvider>
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
                    className="group relative flex flex-col w-full h-auto p-1 rounded-3xl border border-neutral-200 dark:border-white/0 bg-white dark:bg-neutral-900/60 shadow-md transition-all duration-300 hover:border-neutral-300 dark:hover:border-white/20"
                >
                    {/* Image Section with subtle inner border */}
                    <div className="relative h-[230px] w-full shrink-0 overflow-hidden rounded-3xl border border-black/5 dark:border-white/[0.08]">
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                            style={{ backgroundImage: `url(${project.imgUrl})` }}
                        />

                        {/* Gradient overlay for text contrast */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                        {/* Title & Primary Tag at Top */}
                        <div className="absolute top-0 inset-x-0 p-3">
                            <h3 className="truncate text-sm font-bold tracking-tight text-white">
                                {project.title}
                            </h3>
                            {primaryTag && (
                                <p className="mt-0.5 truncate text-[11px] font-medium text-white/70">
                                    {primaryTag}
                                </p>
                            )}
                        </div>

                        {/* Tags overlay at the bottom left of image section, shown on hover */}
                        <div className="absolute bottom-3 left-3 right-14 flex flex-wrap gap-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            {project.tags.slice(0, 6).map((tag) => (
                                <span
                                    key={tag}
                                    className="rounded-full bg-black/50 backdrop-blur-md px-2 py-0.5 text-[10px] font-medium text-white/90 border border-white/20"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* Arrow Button */}
                        <div className="absolute bottom-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white transition-all duration-300 group-hover:bg-white group-hover:text-black">
                            <ArrowUpRight className="h-4 w-4 transition-transform duration-300" />
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="flex flex-col p-2.5">
                        {/* Meta Header */}
                        <div className="mb-1.5 flex items-center gap-2">
                            {primaryTag && (
                                <span className="rounded-full bg-neutral-100 dark:bg-white/10 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-neutral-700 dark:text-white/80 border border-neutral-200 dark:border-white/10">
                                    {primaryTag}
                                </span>
                            )}
                            <span className="font-mono text-[10px] text-neutral-400 dark:text-white/40">
                                {indexFormatted}
                            </span>
                        </div>

                        {/* Description Section */}
                        {isDescriptionLong ? (
                            <Tooltip delayDuration={200}>
                                <TooltipTrigger asChild>
                                    <p className="text-xs leading-snug text-neutral-600 dark:text-white/60 line-clamp-2 hover:text-neutral-900 dark:hover:text-white/90 transition-colors cursor-pointer">
                                        {project.description}
                                    </p>
                                </TooltipTrigger>
                                <TooltipContent
                                    side="bottom"
                                    className="max-w-xs bg-white dark:bg-neutral-900 text-neutral-800 dark:text-neutral-100 border border-neutral-200 dark:border-white/10 shadow-lg text-xs p-2.5 rounded-xl"
                                >
                                    <p className="leading-relaxed">{project.description}</p>
                                </TooltipContent>
                            </Tooltip>
                        ) : (
                            <p className="text-xs leading-snug text-neutral-600 dark:text-white/60 line-clamp-2">
                                {project.description}
                            </p>
                        )}
                    </div>
                </a>
            </motion.div>
        </TooltipProvider>
    );
}