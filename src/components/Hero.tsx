import { motion } from "framer-motion";
import { Download, Mail, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import FloatingIcons from "./FloatingIcons";

export default function Hero() {
  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Mail, href: "mailto:your.email@example.com", label: "Email" },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent" />
      
      {/* 3D Floating Icons Background */}
      <FloatingIcons />

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-6xl md:text-8xl font-bold mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <span className="gradient-text">Full Stack</span>
              <br />
              <span className="glow-text">Developer</span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-muted-foreground mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Crafting digital experiences with code, creativity, and innovation
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 justify-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Button
                size="lg"
                className="neon-border bg-primary/10 hover:bg-primary/20 text-primary group"
              >
                <Download className="mr-2 group-hover:animate-bounce" />
                Download Resume
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="neon-border hover:bg-primary/10"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                <Mail className="mr-2" />
                Contact Me
              </Button>
            </motion.div>

            <motion.div
              className="flex gap-6 justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1.2, duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <motion.div
            className="w-1.5 h-3 bg-primary rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
