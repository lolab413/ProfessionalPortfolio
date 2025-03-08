import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const skills: Record<string, string[]> = {
  "Frontend": ["React", "TypeScript", "Tailwind CSS", "Next.js"],
  "Backend": ["Node.js", "Express", "PostgreSQL", "REST APIs"],
  "Tools": ["Git", "Docker", "AWS", "CI/CD"]
};

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Who I Am</h3>
              <p className="text-muted-foreground">
                I'm a passionate full-stack developer with a focus on creating 
                intuitive and performant web applications. With [X] years of 
                experience, I've worked on various projects ranging from small 
                business websites to large-scale enterprise applications.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Skills</h3>
              <div className="space-y-4">
                {Object.entries(skills).map(([category, items]) => (
                  <div key={category}>
                    <h4 className="font-medium mb-2">{category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {items.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-primary/10 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
