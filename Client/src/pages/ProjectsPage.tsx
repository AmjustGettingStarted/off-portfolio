import { useEffect, useState } from "react";
import { LayoutGrid, List } from "lucide-react";
import { motion, useScroll, useSpring } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProjectsListView from "@/components/projects/ProjectsListView";
import ProjectsGridView from "@/components/projects/ProjectsGridView";

export default function ProjectsPage() {
    const [viewMode, setViewMode] = useState<"list" | "grid">("list");
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    // Reset scroll to top immediately when the page mounts
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            {/* Top Scroll Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-[2px] bg-[#64748b] origin-left z-50"
                style={{ scaleX }}
            />
            <div className="min-h-screen flex flex-col bg-background">
                <Navbar />

                {/* Main Container - Full Bleed Spacing */}
                <main className="flex-1 max-w-[1400px] mx-auto w-full px-6 sm:px-12 lg:px-20 py-16 mt-12">                {/* Header Area Matching Projects18 Style */}
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-8 border-b border-border/40">
                        <div className="max-w-2xl space-y-3">
                            <h1 className="text-5xl sm:text-7xl font-black tracking-tighter text-foreground uppercase">
                                Projects
                            </h1>
                            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                                Where creativity, craftsmanship, and vision unite to create stunning digital spaces. Discover a comprehensive portfolio of work.
                            </p>
                        </div>

                        {/* View Switcher Toggle */}
                        <div className="hidden sm:inline-flex items-center rounded-lg border border-border bg-card p-1 shadow-sm">
                            <button
                                onClick={() => setViewMode("list")}
                                className={`inline-flex items-center gap-2 rounded-md px-3.5 py-2 text-xs font-semibold transition-all ${viewMode === "list"
                                    ? "bg-primary text-primary-foreground shadow-sm"
                                    : "text-muted-foreground hover:text-foreground"
                                    }`}
                            >
                                <List className="h-4 w-4" />
                                <span>List</span>
                            </button>
                            <button
                                onClick={() => setViewMode("grid")}
                                className={`inline-flex items-center gap-2 rounded-md px-3.5 py-2 text-xs font-semibold transition-all ${viewMode === "grid"
                                    ? "bg-primary text-primary-foreground shadow-sm"
                                    : "text-muted-foreground hover:text-foreground"
                                    }`}
                            >
                                <LayoutGrid className="h-4 w-4" />
                                <span>Grid</span>
                            </button>
                        </div>
                    </div>

                    {/* Dynamic View Content */}
                    <div className="w-full lg:px-20">
                        {viewMode === "list" ? <ProjectsListView /> : <ProjectsGridView />}
                    </div>
                </main>

                <Footer />
            </div>
        </>
    );
}