import { motion } from "framer-motion";
import { Code2, Database, Palette, Wrench } from "lucide-react";

const skillCategories = [
  {
    icon: Code2,
    title: "Frontend",
    color: "text-cyan-400",
    skills: [
      { name: "React/Next.js", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "TailwindCSS", level: 95 },
      { name: "Three.js", level: 75 },
    ],
  },
  {
    icon: Database,
    title: "Backend",
    color: "text-purple-400",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "PostgreSQL", level: 80 },
      { name: "MongoDB", level: 85 },
      { name: "GraphQL", level: 75 },
    ],
  },
  {
    icon: Palette,
    title: "Design",
    color: "text-pink-400",
    skills: [
      { name: "UI/UX Design", level: 85 },
      { name: "Figma", level: 90 },
      { name: "Framer Motion", level: 88 },
      { name: "3D Animation", level: 70 },
    ],
  },
  {
    icon: Wrench,
    title: "Tools",
    color: "text-blue-400",
    skills: [
      { name: "Git", level: 95 },
      { name: "Docker", level: 80 },
      { name: "AWS", level: 75 },
      { name: "CI/CD", level: 85 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
            Skills & Expertise
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
                className="glass-card rounded-2xl p-6 space-y-6"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-primary/10">
                    <category.icon className={category.color} size={28} />
                  </div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.1 }}
                    >
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.1 + 0.3, duration: 1 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
