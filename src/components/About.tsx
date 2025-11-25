import { motion } from "framer-motion";
import { User, Mail, Phone, MapPin } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

export default function About() {
  const personalInfo = [
    { icon: User, label: "Name", value: "Your Name" },
    { icon: Mail, label: "Email", value: "your.email@example.com" },
    { icon: Phone, label: "Phone", value: "+1 (555) 123-4567" },
    { icon: MapPin, label: "Location", value: "San Francisco, CA" },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="glass-card p-8 rounded-2xl">
                <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-accent p-1">
                  <div className="w-full h-full rounded-full overflow-hidden">
                    <img 
                      src={profilePhoto} 
                      alt="Profile" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  {personalInfo.map((info, index) => (
                    <motion.div
                      key={info.label}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-4 p-3 rounded-lg hover:bg-primary/5 transition-colors"
                    >
                      <div className="p-2 rounded-lg bg-primary/10">
                        <info.icon className="text-primary" size={20} />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{info.label}</p>
                        <p className="font-medium">{info.value}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h3 className="text-3xl font-bold glow-text">
                Passionate Developer & Creative Thinker
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a full-stack developer with a passion for creating beautiful, functional, and user-centered digital experiences. With expertise in modern web technologies, I transform ideas into elegant solutions.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My journey in tech has been driven by curiosity and a love for problem-solving. I specialize in building scalable applications using React, Node.js, and cutting-edge tools. I'm always exploring new technologies and methodologies to stay at the forefront of web development.
              </p>
              <div className="flex flex-wrap gap-3 pt-4">
                {["React", "TypeScript", "Node.js", "Three.js", "Tailwind CSS"].map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="px-4 py-2 rounded-full glass-card text-sm font-medium"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
