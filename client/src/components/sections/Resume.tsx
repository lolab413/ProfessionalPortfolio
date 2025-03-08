import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import type { Experience, Education } from "@/lib/types";

const experiences: Experience[] = [
  {
    company: "Tech Corp",
    position: "Senior Full Stack Developer",
    period: "2020 - Present",
    description: [
      "Led development of microservices architecture",
      "Implemented CI/CD pipeline reducing deployment time by 50%",
      "Mentored junior developers and conducted code reviews"
    ]
  },
  // Add more experiences
];

const education: Education[] = [
  {
    school: "University of Technology",
    degree: "Bachelor of Computer Science",
    period: "2016 - 2020",
    description: "Graduated with honors, specialized in Software Engineering"
  },
  // Add more education
];

export function Resume() {
  return (
    <section id="resume" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Resume</h2>
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </Button>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Experience</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {experiences.map((exp, index) => (
                  <div key={index} className="border-l-2 border-primary pl-4">
                    <h3 className="font-semibold">{exp.position}</h3>
                    <p className="text-sm text-muted-foreground">{exp.company} | {exp.period}</p>
                    <ul className="mt-2 list-disc list-inside text-sm space-y-1">
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Education</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="border-l-2 border-primary pl-4">
                    <h3 className="font-semibold">{edu.degree}</h3>
                    <p className="text-sm text-muted-foreground">{edu.school} | {edu.period}</p>
                    <p className="mt-2 text-sm">{edu.description}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
