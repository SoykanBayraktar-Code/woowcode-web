"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutTeam() {
  const { t } = useLanguage();

  const stats = [
    { value: "50+", label: t.about.team.stats.projects },
    { value: "15+", label: t.about.team.stats.clients },
    { value: "10+", label: t.about.team.stats.team },
    { value: "5+", label: t.about.team.stats.experience },
  ];

  const expertise = [
    {
      title: t.about.team.expertise.ai.title,
      skills: t.about.team.expertise.ai.skills,
    },
    {
      title: t.about.team.expertise.data.title,
      skills: t.about.team.expertise.data.skills,
    },
    {
      title: t.about.team.expertise.autonomous.title,
      skills: t.about.team.expertise.autonomous.skills,
    },
    {
      title: t.about.team.expertise.software.title,
      skills: t.about.team.expertise.software.skills,
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-[var(--background-secondary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-[var(--foreground)]">{t.about.team.title} </span>
            <span className="neon-text">{t.about.team.titleHighlight}</span>
          </h2>
          <p className="text-lg text-[var(--foreground-muted)] max-w-2xl mx-auto">
            {t.about.team.description}
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass-card rounded-2xl p-6 text-center"
            >
              <div className="text-4xl lg:text-5xl font-bold neon-text mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-[var(--foreground-muted)]">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Expertise Areas */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertise.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-2xl p-6"
            >
              <h3 className="text-lg font-semibold text-[var(--foreground)] mb-4">
                {area.title}
              </h3>
              <div className="space-y-2">
                {area.skills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center space-x-2 text-sm text-[var(--foreground-muted)]"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--neon-blue)]" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Team Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 glass-card rounded-2xl p-8 lg:p-12 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-b from-[var(--neon-blue)]/10 to-transparent rounded-full filter blur-[100px]" />
          
          <div className="relative z-10">
            <svg
              className="w-12 h-12 mx-auto text-[var(--neon-blue)] mb-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
            
            <blockquote className="text-xl lg:text-2xl text-[var(--foreground)] font-medium mb-4 max-w-3xl mx-auto">
              &ldquo;{t.about.team.philosophy.quote}&rdquo;
            </blockquote>
            
            <p className="text-[var(--foreground-muted)]">
              — {t.about.team.philosophy.author}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
