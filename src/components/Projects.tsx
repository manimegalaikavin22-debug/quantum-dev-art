import { motion } from "framer-motion";
import { Github, ExternalLink, Code } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with real-time inventory management and payment integration.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com",
    live: "https://example.com",
    color: "from-cyan-500 to-blue-500",
  },
  {
    title: "AI Task Manager",
    description: "Smart task management app with AI-powered prioritization and natural language processing.",
    technologies: ["React", "TypeScript", "OpenAI", "Firebase"],
    github: "https://github.com",
    live: "https://example.com",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "3D Portfolio Website",
    description: "Interactive portfolio showcasing projects with immersive 3D animations and effects.",
    technologies: ["React", "Three.js", "Framer Motion", "TailwindCSS"],
    github: "https://github.com",
    live: "https://example.com",
    color: "from-pink-500 to-rose-500",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="glass-card rounded-2xl overflow-hidden h-full">
                  {/* Project Image/Gradient */}
                  <div className={`h-48 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                    <motion.div
                      className="absolute inset-0 bg-black/40 flex items-center justify-center"
                      whileHover={{ backgroundColor: "rgba(0,0,0,0.6)" }}
                    >
                      <Code size={60} className="text-white opacity-50" />
                    </motion.div>
                  </div>

                  {/* Project Details */}
                  <div className="p-6 space-y-4">
                    <h3 className="text-2xl font-bold glow-text">{project.title}</h3>
                    <p className="text-muted-foreground">{project.description}</p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-3 pt-4">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 neon-border hover:bg-primary/10"
                        asChild
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github size={16} className="mr-2" />
                          Code
                        </a>
                      </Button>
                      <Button
                        size="sm"
                        className="flex-1 bg-primary/20 hover:bg-primary/30 neon-border"
                        asChild
                      >
                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                          <ExternalLink size={16} className="mr-2" />
                          Live
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
