import { motion } from "framer-motion";
import { fadeIn, scaleInHover } from "@/utils/animation";
import { ArrowUpRight } from "lucide-react";

type ProjectCardProps = {
  title: string;
  description: string;
  imgUrl: string;
  link?: string;
  tags: string[];
  index: number;
};

const ProjectCard = ({
  title,
  description,
  imgUrl,
  link,
  tags,
  index,
}: ProjectCardProps) => {
  return (
    <motion.div
      variants={fadeIn("up", index * 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      whileHover="hover"
      className="w-full"
    >
      <motion.div
        variants={scaleInHover}
        className="group relative overflow-hidden rounded-xl border border-border bg-card shadow-md transition-all duration-300 ease-out-expo hover:shadow-xl"
      >
        <div className="relative h-64 w-full overflow-hidden">
          <img
            src={imgUrl}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-700 ease-out-expo group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-0 transition-opacity duration-300 ease-out-expo group-hover:opacity-100" />

          {link && (
            <motion.a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 right-4 rounded-full bg-primary p-3 text-primary-foreground opacity-0 shadow-lg transition-all duration-300 ease-out-expo group-hover:opacity-100"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowUpRight className="h-5 w-5" />
            </motion.a>
          )}
        </div>

        <div className="p-6">
          <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
          <p className="mt-2 line-clamp-2 text-justify text-sm text-muted-foreground">
            {description}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="inline-flex items-center rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
