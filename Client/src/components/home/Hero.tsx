import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/utils/animation";
import { ArrowDown } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center py-16"
    >
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="absolute -right-[10%] top-[10%] h-[400px] w-[400px] rounded-full bg-primary/10 blur-[100px]"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="absolute -left-[5%] bottom-[10%] h-[300px] w-[300px] rounded-full bg-primary/10 blur-[100px]"
        />
      </div>

      <motion.div
        variants={staggerContainer(0.1, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="container mx-auto px-4 mt-4 sm:mt-0"
      >
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
          <div className="text-center md:text-left">
            <motion.div
              variants={fadeIn("down")}
              className="mb-4 inline-block rounded-full bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground"
            >
              Welcome To My Portfolio
            </motion.div>

            <motion.h1
              variants={fadeIn("up", 0.2)}
              className="mb-6 text-4xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl"
            >
              <span className="text-primary">
                <Typewriter
                  words={[
                    "Transforming Ideas Into Reality",
                    "Building the Future, One Commit at a Time",
                    "Designs Into Code",
                    "Problems Into Products",
                    "Crafting Impact, One Commit at a Time",
                  ]}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </span>
            </motion.h1>

            <motion.p
              variants={fadeIn("up", 0.3)}
              className="mb-8 text-lg text-muted-foreground md:text-xl"
            >
              Bringing ideas to life through seamless, elegant digital
              solutions. Let's create something extraordinary together!
            </motion.p>

            <motion.div
              variants={fadeIn("up", 0.4)}
              className="flex flex-col space-y-4 sm:flex-row sm:justify-start sm:space-x-4 sm:space-y-0"
            >
              <motion.a
                href="#projects"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.a>
              <motion.a
                href="#contact"
                className="inline-flex items-center justify-center rounded-lg border border-border bg-background px-6 py-3 text-sm font-medium transition-colors hover:bg-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.a>
            </motion.div>
          </div>

          <motion.div
            variants={fadeIn("left", 0.4)}
            className="mx-auto flex max-w-xl flex-col items-center justify-center md:items-end rounded-lg pt-4"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="overflow-hidden mx-auto rounded-2xl border-4 border-primary/20 shadow-xl "
            >
              <motion.img
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                // src="/edit.gif"
                src="/typing.gif"
                // src="/Avatar.jpg"
                // src="/coding-typing.gif"
                alt="Profile"
                className="object-cover object-top "
              />
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.5)}
              className="mt-4 rounded-lg bg-card p-4 shadow-lg"
            >
              <h3 className="mb-2 text-lg font-medium">About Me</h3>
              <p className="text-sm text-muted-foreground">
                I'm Harshith MV, a web developer passionate about building
                intuitive and engaging digital experiences. Excited to learn,
                grow, and contribute to impactful projects
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      <motion.a
        href="#projects"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1.2,
          duration: 1,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center justify-center -ml-12 -mb-12 md:-mb-0"
      >
        <span className="mb-2 text-sm text-muted-foreground">Scroll Down</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </motion.a>
    </section>
  );
};

export default Hero;
