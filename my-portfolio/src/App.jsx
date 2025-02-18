import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaXTwitter, FaInstagram } from "react-icons/fa6";

const socialLinks = [
  { icon: <FaGithub />, url: "https://github.com/ziewenn" },
  { icon: <FaLinkedin />, url: "https://linkedin.com/in/yekosar" },
  { icon: <FaXTwitter />, url: "https://x.com/ziewenn" },
  { icon: <FaInstagram />, url: "https://instagram.com/yekosar" },
];

const skills = {
  languages: ["JavaScript", "Python", "C"],
  frontend: ["React", "Next.js", "TailwindCSS", "HTML", "CSS"],
  backend: ["Node.js", "SQL"],
  tools: ["Git", "VSCode", "Figma", "Photoshop"],
};

const projects = [
  {
    title: "SVG to PNG/ICO/WebP Converter",
    description:
      "A modern, browser-based tool for converting SVG files to PNG, ICO, and WebP formats with advanced quality controls and batch processing capabilities.",
    details:
      "This converter offers advanced options including custom scaling, quality presets, DPI settings, and background color choices. It provides a real-time preview, detailed file information, and conversion history, all within a responsive design.",
    technologies: ["React", "Node.js"],
    features: [
      "🖼️ Convert SVG to multiple formats: PNG (High quality), ICO (Multiple sizes: 16x16, 32x32, 48x48, 64x64, 128x128), WebP (Optimized compression)",
      "🎨 Advanced Options: Custom scaling (1x to 16x), Quality presets (Best, Optimized, Custom), Custom DPI settings, Background color options (Transparent, White, Black, Custom)",
      "💫 Real-time Preview: Live preview of conversion, Background toggle for transparency check, Actual size display",
      "📊 File Information: Original file size, Converted file size, Image dimensions, DPI information",
      "📜 Conversion History: Recent conversions list, Quick re-download option, Preview thumbnails",
      "🎯 User Experience: Drag and drop support, Progress indicator, Error handling, Responsive design",
    ],
    github: "https://github.com/ziewenn/svg-to-png-converter",
    demo: "https://ziewenn.github.io/svg-to-png-converter/",
  },
  {
    title: "School Scheduling System",
    description:
      "An automated system for creating and managing school schedules.",
    details:
      "Built with modern technologies to streamline the scheduling process.",
    technologies: ["React", "Node.js"],
    features: [
      "Automated schedule generation",
      "Conflict resolution",
      "Real-time updates",
      "User-friendly interface",
    ],
    github: "",
    demo: "",
  },
];

// Use explicit easing arrays instead of easing strings.
const easeOutEasing = [0.33, 1, 0.68, 1];

const navVariants = {
  hidden: { y: -50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.4, ease: easeOutEasing },
  },
};

const leftVariants = {
  hidden: { x: -50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.4, ease: easeOutEasing },
  },
};

const rightVariants = {
  hidden: { x: 50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.4, ease: easeOutEasing },
  },
};

const hideVariants = {
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.2, ease: easeOutEasing },
  },
  hidden: {
    opacity: 0,
    scale: 0.8,
    transition: { duration: 0.2, ease: easeOutEasing },
  },
};

export default function Portfolio() {
  const [isProjectsExpanded, setIsProjectsExpanded] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#141E30] to-[#243B55] flex flex-col">
      <div className="max-w-6xl mx-auto p-6">
        {/* Top Navigation Bar */}
        <motion.div
          variants={navVariants}
          initial="hidden"
          animate="visible"
          className="flex justify-between items-center p-6 bg-white/10 backdrop-blur-md rounded-2xl shadow-lg mb-8 relative z-20 border border-white/20"
        >
          <img
            src="/ziewen.png"
            alt="My Logo"
            className="h-12 w-12 object-contain"
          />
          <motion.button
            onClick={() => setIsProjectsExpanded(!isProjectsExpanded)}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 12px rgba(255,255,255,0.3)",
              transition: { duration: 0.4, ease: easeOutEasing },
            }}
            whileTap={{
              scale: 0.95,
              transition: { duration: 0.4, ease: easeOutEasing },
            }}
            className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-3 rounded-xl font-medium text-sm transition-all border border-white/20"
          >
            {isProjectsExpanded ? "Hide Projects" : "View Projects"}
          </motion.button>
        </motion.div>

        {/* Main Grid Layout */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 md:grid-rows-2 items-stretch">
          {/* Left Column - Profile Image */}
          <motion.div
            variants={isProjectsExpanded ? hideVariants : leftVariants}
            initial="hidden"
            animate={isProjectsExpanded ? "hidden" : "visible"}
            className="h-full flex"
          >
            <div className="relative bg-[#1D2125] rounded-2xl flex-1 overflow-hidden">
              <img
                src="/ziewen blue dream.png"
                alt="Profile"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2D343B] to-transparent opacity-60" />
            </div>
          </motion.div>

          {/* Middle Column - Socials & About */}
          <motion.div
            variants={isProjectsExpanded ? hideVariants : leftVariants}
            initial="hidden"
            animate={isProjectsExpanded ? "hidden" : "visible"}
            className="flex flex-col h-full gap-6"
          >
            {/* Social Links */}
            <motion.div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl flex justify-between items-center shadow-lg border border-white/20">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl text-white transition-colors"
                  whileHover={{ scale: 1.1, color: "#A78BFA", duration: 0.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </motion.div>

            {/* About Box */}
            <div className="bg-white/10 backdrop-blur-md p-10 rounded-2xl shadow-lg border border-white/20 text-center flex flex-col h-full justify-center">
              <h2 className="text-3xl font-bold text-white mb-6">
                Hey! I&apos;m Eren
              </h2>
              <p className="text-white text-lg leading-relaxed">
                Computer Engineering student at METU
              </p>
            </div>
          </motion.div>

          {/* Right Column - Skills & Technologies */}
          <motion.div
            variants={isProjectsExpanded ? hideVariants : rightVariants}
            initial="hidden"
            animate={isProjectsExpanded ? "hidden" : "visible"}
            className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-white/20 md:col-start-3 md:row-span-2 h-min"
          >
            <h3 className="text-white text-xl font-semibold mb-6">
              Skills & Technologies
            </h3>
            <div className="space-y-4">
              {Object.entries(skills).map(([category, items]) => (
                <div
                  key={category}
                  className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20"
                >
                  <h4 className="text-white uppercase text-sm mb-3">
                    {category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill, index) => (
                      <span
                        key={index}
                        className="bg-white/20 text-white text-sm px-3 py-1 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Projects Box */}
          <motion.div
            // Conditionally apply left-side animation when projects are not expanded
            variants={!isProjectsExpanded ? leftVariants : {}}
            initial={!isProjectsExpanded ? "hidden" : undefined}
            animate="visible"
            layout
            className={`bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-white/20 ${
              isProjectsExpanded
                ? "absolute inset-0 z-40 overflow-y-auto"
                : "md:col-start-1 md:col-span-2 md:row-start-2 h-full"
            }`}
          >
            {isProjectsExpanded ? (
              <div>
                <h2 className="text-3xl font-bold text-white mb-8">Projects</h2>
                {projects.map((project, index) => (
                  <motion.div
                    key={index}
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0px 0px 12px rgba(255,255,255,0.3)",
                    }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-white/10 backdrop-blur-md p-8 rounded-xl mb-6 last:mb-0 border border-white/20"
                  >
                    <h3 className="text-2xl font-semibold text-white mb-6">
                      {project.title}
                    </h3>
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-medium text-white mb-2">
                          Description
                        </h4>
                        <p className="text-white leading-relaxed">
                          {project.description} {project.details}
                        </p>
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-white mb-2">
                          Technologies
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, i) => (
                            <span
                              key={i}
                              className="bg-white/20 text-white px-3 py-1 rounded-full text-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-white mb-2">
                          Key Features
                        </h4>
                        <ul className="space-y-2">
                          {project.features.map((feature, i) => (
                            <li
                              key={i}
                              className="text-white flex items-center"
                            >
                              <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex gap-4">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-colors border border-white/20"
                        >
                          <FaGithub />
                          View Code
                        </a>
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-2 rounded-lg hover:opacity-90 transition-colors"
                        >
                          Live Demo
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Projects</h2>
                <div className="grid grid-cols-1 gap-4">
                  {projects.map((project, index) => (
                    <motion.div
                      key={index}
                      onClick={() => setIsProjectsExpanded(true)}
                      className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 shadow-lg cursor-pointer"
                      whileHover={{
                        scale: 1.02,
                        boxShadow: "0px 0px 12px rgba(255,255,255,0.3)",
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <h3 className="text-xl font-semibold text-white mb-4">
                        {project.title}
                      </h3>
                      <p className="text-white">{project.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
