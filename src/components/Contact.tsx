import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "manimegalaikavin22@gmail.com", href: "mailto:manimegalaikavin22@gmail.com" },
    { icon: Phone, label: "Phone", value: "+91 7010045820", href: "tel:+15551234567" },
    { icon: MapPin, label: "Location", value: "Tamilnadu,India", href: "#" },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/manimegalaikavin22-debug", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/manimegalai-v-02a561327/", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
            Get In Touch
          </h2>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold mb-4 glow-text">Let's Connect</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out!
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4 p-4 rounded-xl glass-card hover:bg-primary/5 transition-colors group"
                  >
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <info.icon className="text-primary" size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      <p className="font-medium">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <p className="text-sm text-muted-foreground mb-4">Follow me on social media</p>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-4 rounded-xl glass-card hover:bg-primary/10 transition-colors"
                    >
                      <social.icon className="text-primary" size={24} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    className="bg-background/50 border-primary/20 focus:border-primary"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    className="bg-background/50 border-primary/20 focus:border-primary"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project..."
                    rows={5}
                    className="bg-background/50 border-primary/20 focus:border-primary resize-none"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full neon-border bg-primary/20 hover:bg-primary/30 group"
                >
                  <Send className="mr-2 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </Button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
