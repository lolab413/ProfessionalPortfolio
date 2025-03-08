import { useState, useEffect } from "react";
import { Sidebar, SidebarContext } from "@/components/layout/Sidebar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Resume } from "@/components/sections/Resume";
import { Contact } from "@/components/sections/Contact";
import { motion } from "framer-motion";
import { AchievementBadge } from "@/components/gamification/AchievementBadge";
import { ProgressBar } from "@/components/gamification/ProgressBar";
import { CollectibleStar } from "@/components/gamification/CollectibleStar";

export default function Home() {
  const [isOpen, setIsOpen] = useState(true);
  const [achievements, setAchievements] = useState({
    about: false,
    projects: false,
    resume: false,
    contact: false
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const section = entry.target.id;
            setAchievements(prev => ({
              ...prev,
              [section]: true
            }));
          }
        });
      },
      { threshold: 0.5 }
    );

    ['about', 'projects', 'resume', 'contact'].forEach(id => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <SidebarContext.Provider value={{ isOpen, setIsOpen }}>
      <div className="flex min-h-screen bg-background">
        <Sidebar />
        <ProgressBar />
        <motion.main
          layout
          className="flex-1"
          style={{
            marginLeft: isOpen ? "225px" : "64px",
          }}
        >
          <Hero />
          <section id="about">
            <CollectibleStar sectionId="about" />
            <About />
          </section>
          <section id="projects">
            <CollectibleStar sectionId="projects" />
            <Projects />
          </section>
          <section id="resume">
            <CollectibleStar sectionId="resume" />
            <Resume />
          </section>
          <section id="contact">
            <CollectibleStar sectionId="contact" />
            <Contact />
          </section>
        </motion.main>

        <AchievementBadge 
          title="About Me Master"
          isVisible={achievements.about}
        />
        <AchievementBadge
          title="Project Explorer"
          isVisible={achievements.projects}
        />
        <AchievementBadge
          title="Resume Reader"
          isVisible={achievements.resume}
        />
        <AchievementBadge
          title="Connection Established"
          isVisible={achievements.contact}
        />
      </div>
    </SidebarContext.Provider>
  );
}