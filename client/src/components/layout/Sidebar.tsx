import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FiHome, FiUser, FiBriefcase, FiFileText, FiMail, FiChevronsRight } from "react-icons/fi";

const navItems = [
  { href: "/", icon: FiHome, label: "Home" },
  { href: "#about", icon: FiUser, label: "About" },
  { href: "#projects", icon: FiBriefcase, label: "Projects" },
  { href: "#resume", icon: FiFileText, label: "Resume" },
  { href: "#contact", icon: FiMail, label: "Contact" },
];

export function Sidebar() {
  const [open, setOpen] = useState(true);
  const [selected, setSelected] = useState("Home");

  return (
    <motion.nav
      layout
      className="fixed left-0 top-0 z-50 h-screen shrink-0 border-r border-primary/10 bg-background/80 backdrop-blur-sm p-2"
      style={{
        width: open ? "225px" : "fit-content",
      }}
    >
      <div className="flex items-center justify-between mb-4 p-2">
        <motion.div layout className="grid h-10 w-10 place-content-center rounded-md bg-primary text-primary-foreground">
          GD
        </motion.div>
        {open && (
          <motion.div
            layout
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.125 }}
          >
            <span className="block text-sm font-semibold">Game Design</span>
            <span className="block text-xs text-muted-foreground">Portfolio</span>
          </motion.div>
        )}
      </div>

      <div className="space-y-1">
        {navItems.map(({ href, icon: Icon, label }) => (
          <motion.div
            key={href}
            layout
            onClick={() => setSelected(label)}
            className={`relative flex h-10 w-full items-center rounded-md transition-colors ${
              selected === label
                ? "bg-primary/10 text-primary"
                : "text-muted-foreground hover:bg-primary/5"
            }`}
          >
            <motion.div layout className="grid h-full w-10 place-content-center text-lg">
              <Icon />
            </motion.div>
            {open && (
              <motion.span
                layout
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.125 }}
                className="text-sm font-medium"
              >
                {label}
              </motion.span>
            )}
          </motion.div>
        ))}
      </div>

      <motion.button
        layout
        onClick={() => setOpen((prev) => !prev)}
        className="absolute bottom-4 left-0 right-0 border-t border-primary/10 transition-colors hover:bg-primary/5"
      >
        <div className="flex items-center p-2">
          <motion.div layout className="grid h-10 w-10 place-content-center text-lg">
            <FiChevronsRight className={`transition-transform ${open && "rotate-180"}`} />
          </motion.div>
          {open && (
            <motion.span
              layout
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.125 }}
              className="text-sm font-medium"
            >
              Hide Menu
            </motion.span>
          )}
        </div>
      </motion.button>
    </motion.nav>
  );
}
