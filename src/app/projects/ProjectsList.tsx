"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

// Project IDs
const projectIds = [
  "cattle-feed-vision",
  "smart-waste-container",
  "guilty-detect-vision",
  "roomstyle-ai",
] as const;

// Icon Components for each project
const icons: Record<string, React.ReactNode> = {
  "cattle-feed-vision": (
    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
  ),
  "smart-waste-container": (
    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
    </svg>
  ),
  "guilty-detect-vision": (
    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  "roomstyle-ai": (
    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  ),
};

// Category color mapping
const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
  "computer-vision": {
    bg: "bg-[var(--cyber-cobalt)]/20",
    text: "text-[var(--cyber-cobalt)]",
    border: "border-[var(--cyber-cobalt)]/50",
  },
  "iot": {
    bg: "bg-[var(--electric-violet)]/20",
    text: "text-[var(--electric-violet-light)]",
    border: "border-[var(--electric-violet)]/50",
  },
  "ai-security": {
    bg: "bg-[var(--deep-magenta)]/20",
    text: "text-[var(--deep-magenta)]",
    border: "border-[var(--deep-magenta)]/50",
  },
  "saas-ai": {
    bg: "bg-emerald-500/20",
    text: "text-emerald-400",
    border: "border-emerald-500/50",
  },
};

const categoryMapping: Record<string, string> = {
  "cattle-feed-vision": "computer-vision",
  "smart-waste-container": "iot",
  "guilty-detect-vision": "ai-security",
  "roomstyle-ai": "saas-ai",
};

export default function ProjectsList() {
  const { t } = useLanguage();

  return (
    <section className="py-20 lg:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-[var(--background-secondary)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-[var(--foreground)]">
              {t.projectsPage.list.title}{" "}
            </span>
            <span className="neon-text">{t.projectsPage.list.titleHighlight}</span>
          </h2>
          <p className="text-[var(--foreground-muted)] max-w-2xl mx-auto">
            {t.projectsPage.list.description}
          </p>
        </motion.div>

        {/* Projects */}
        {projectIds.map((projectId, index) => {
          const project = t.projectsPage.projects[projectId];
          const categoryKey = categoryMapping[projectId];
          const colors = categoryColors[categoryKey];

          return (
            <motion.div
              key={projectId}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="mb-12 last:mb-0"
            >
              <div className="glass-card rounded-3xl p-8 lg:p-12 hover:border-[var(--electric-violet)] transition-all duration-500">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                  {/* Left Content */}
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    {/* Icon & Title */}
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--cyber-cobalt)] via-[var(--electric-violet)] to-[var(--deep-magenta)] flex items-center justify-center text-white shadow-lg">
                        {icons[projectId]}
                      </div>
                      <div>
                        <h3 className="text-2xl lg:text-3xl font-bold text-[var(--foreground)]">
                          {project.title}
                        </h3>
                        {/* Category Badge */}
                        <span
                          className={`inline-flex items-center px-3 py-1 mt-2 text-xs font-medium rounded-full border ${colors.bg} ${colors.text} ${colors.border}`}
                        >
                          {project.category}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-[var(--foreground-muted)] text-lg leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-[var(--foreground)] mb-3 uppercase tracking-wider">
                        {t.projectsPage.labels.technologies}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech: string) => (
                          <span
                            key={tech}
                            className="px-4 py-2 text-sm rounded-full bg-[var(--background-tertiary)] border border-[var(--electric-violet)]/40 text-[var(--foreground-muted)] shadow-[0_0_6px_rgba(123,31,162,0.15)] hover:border-[var(--electric-violet)]/60 transition-all duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Challenge */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-[var(--foreground)] mb-3 uppercase tracking-wider">
                        {t.projectsPage.labels.challenge}
                      </h4>
                      <p className="text-[var(--foreground-muted)] leading-relaxed">
                        {project.challenge}
                      </p>
                    </div>
                  </div>

                  {/* Right Content - Features & Results */}
                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    {/* Features */}
                    <div>
                      <h4 className="text-sm font-semibold text-[var(--foreground)] mb-4 uppercase tracking-wider">
                        {t.projectsPage.labels.features}
                      </h4>
                      <div className="space-y-3">
                        {project.features.map((feature: string, featureIndex: number) => (
                          <motion.div
                            key={featureIndex}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: featureIndex * 0.1 }}
                            className="flex items-start space-x-3"
                          >
                            <div className="w-6 h-6 rounded-full bg-[var(--electric-violet)]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <svg
                                className="w-4 h-4 text-[var(--electric-violet-light)]"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                            </div>
                            <span className="text-[var(--foreground-muted)]">
                              {feature}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
