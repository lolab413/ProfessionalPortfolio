import { useState } from "react";
import { Sidebar, SidebarContext } from "@/components/layout/Sidebar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Resume } from "@/components/sections/Resume";
import { Contact } from "@/components/sections/Contact";
import { motion } from "framer-motion";

export default function Home() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <SidebarContext.Provider value={{ isOpen, setIsOpen }}>
      <div className="flex min-h-screen bg-background">
        <Sidebar />
        <motion.main
          layout
          className="flex-1"
          style={{
            marginLeft: isOpen ? "225px" : "64px",
          }}
        >
          <Hero />
          <About />
          <Projects />
          <Resume />
          <Contact />
        </motion.main>
      </div>
    </SidebarContext.Provider>
  );
}