"use client";

import { motion, useMotionValue, useSpring, useTransform, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { waLink } from "@/lib/site";

// Counter animation component
function AnimatedCounter({ value, suffix = "", duration = 2 }: { value: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  useEffect(() => {
    if (!isInView) return;
    
    let startTime: number;
    let animationFrame: number;
    
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * value));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };
    
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, value, duration]);
  
  return (
    <div ref={ref} className="text-3xl sm:text-4xl font-bold neon-text mb-2">
      {count}{suffix}
    </div>
  );
}

// Floating particle component
function FloatingParticle({ delay, duration, x, y, size }: { delay: number; duration: number; x: number; y: number; size: number }) {
  return (
    <motion.div
      className="absolute rounded-full bg-[var(--neon-blue)]"
      style={{
        width: size,
        height: size,
        left: `${x}%`,
        top: `${y}%`,
        opacity: 0.3,
      }}
      animate={{
        y: [0, -30, 0],
        opacity: [0.1, 0.4, 0.1],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

export default function HeroSection() {
  const { t, language } = useLanguage();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Mouse tracking for parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 150 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);
  
  // Parallax transforms for different layers
  const gridX = useTransform(springX, [-500, 500], [10, -10]);
  const gridY = useTransform(springY, [-500, 500], [10, -10]);
  const orb1X = useTransform(springX, [-500, 500], [30, -30]);
  const orb1Y = useTransform(springY, [-500, 500], [30, -30]);
  const orb2X = useTransform(springX, [-500, 500], [-20, 20]);
  const orb2Y = useTransform(springY, [-500, 500], [-20, 20]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      mouseX.set(e.clientX - centerX);
      mouseY.set(e.clientY - centerY);
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Generate random particles
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    delay: Math.random() * 2,
    duration: Math.random() * 3 + 3,
  }));

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Grid Pattern with Parallax */}
      <motion.div 
        className="absolute inset-0 bg-[linear-gradient(rgba(0,212,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,212,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"
        style={{ x: gridX, y: gridY }}
      />
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <FloatingParticle
            key={particle.id}
            x={particle.x}
            y={particle.y}
            size={particle.size}
            delay={particle.delay}
            duration={particle.duration}
          />
        ))}
      </div>
      
      {/* Gradient Orbs with Parallax */}
      <motion.div 
        className="absolute top-1/4 -left-32 w-96 h-96 bg-[var(--neon-blue)] rounded-full mix-blend-multiply filter blur-[128px] opacity-20"
        style={{ x: orb1X, y: orb1Y }}
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.15, 0.25, 0.15] 
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[var(--neon-green)] rounded-full mix-blend-multiply filter blur-[128px] opacity-20"
        style={{ x: orb2X, y: orb2Y }}
        animate={{ 
          scale: [1.1, 1, 1.1],
          opacity: [0.2, 0.15, 0.2] 
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Additional floating orb */}
      <motion.div 
        className="absolute top-1/2 left-1/2 w-64 h-64 bg-[var(--electric-violet)] rounded-full mix-blend-multiply filter blur-[100px] opacity-10"
        animate={{ 
          x: [0, 50, -50, 0],
          y: [0, -30, 30, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-[var(--border-color-bright)] bg-[var(--background-secondary)] mb-8 shadow-[0_0_10px_rgba(123,31,162,0.2)]"
          >
            <span className="w-2 h-2 bg-[var(--neon-green)] rounded-full animate-pulse" />
            <span className="text-sm text-[var(--foreground-muted)]">{t.hero.badge}</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          >
            <span className="text-[var(--foreground)]">{t.hero.title} </span>
            <span className="neon-text">{t.hero.titleHighlight}</span>
            {t.hero.titleEnd && <><br /><span className="text-[var(--foreground)]">{t.hero.titleEnd}</span></>}
          </motion.h1>

          {/* Subheading with enhanced typography */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-[var(--foreground-muted)] max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            {t.hero.description}
          </motion.p>
          
          {/* Key benefits - enhanced typography */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex flex-wrap justify-center gap-4 mb-10"
          >
            <span className="px-4 py-2 rounded-full bg-gradient-to-r from-[var(--neon-blue)]/15 to-[var(--electric-violet)]/15 border border-[var(--neon-blue)]/50 text-[var(--neon-blue)] font-semibold text-sm shadow-[0_0_12px_rgba(13,71,161,0.25)]">
              {t.hero.badge}
            </span>
            <span className="px-4 py-2 rounded-full bg-gradient-to-r from-[var(--neon-green)]/15 to-[var(--neon-blue)]/15 border border-[var(--neon-green)]/50 text-[var(--neon-green)] font-semibold text-sm shadow-[0_0_12px_rgba(123,31,162,0.25)]">
              {t.hero.badgeScalable}
            </span>
            <span className="px-4 py-2 rounded-full bg-gradient-to-r from-[var(--electric-violet)]/15 to-[var(--deep-magenta)]/15 border border-[var(--electric-violet)]/50 text-[var(--electric-violet)] font-semibold text-sm shadow-[0_0_12px_rgba(123,31,162,0.3)]">
              {t.hero.badgeAdvantage}
            </span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Link href="/services">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(0,212,255,0.4)" }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 rounded-xl font-semibold text-[var(--background)] bg-gradient-to-r from-[var(--neon-blue)] to-[var(--electric-violet)] hover:from-[var(--electric-violet)] hover:to-[var(--deep-magenta)] transition-all duration-300 shadow-[0_0_20px_rgba(0,212,255,0.3)] flex items-center gap-2"
              >
                <span>{t.hero.ctaServices}</span>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.button>
            </Link>
            <a href={waLink(language)} target="_blank" rel="noopener noreferrer">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(37,211,102,0.45)" }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 rounded-xl font-semibold text-white bg-[#25D366] hover:bg-[#20bd5a] transition-all duration-300 shadow-[0_0_20px_rgba(37,211,102,0.35)] flex items-center gap-2"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.247-.694.247-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.886 9.885M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.334.101 11.893c0 2.096.549 4.142 1.595 5.945L0 24l6.305-1.654a11.96 11.96 0 005.71 1.454h.005c6.581 0 11.94-5.335 11.943-11.894 0-3.18-1.26-6.165-3.55-8.41" />
                </svg>
                <span>{t.hero.ctaWhatsApp}</span>
              </motion.button>
            </a>
            <Link href={`/contact?subject=${encodeURIComponent(t.contact.form.subjects.consultation)}`}>
              <motion.button
                whileHover={{ scale: 1.05, borderColor: "var(--neon-blue)" }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 rounded-xl font-semibold text-[var(--foreground)] border-2 border-[var(--neon-blue)]/50 hover:border-[var(--neon-blue)] hover:text-[var(--neon-blue)] transition-all duration-300 flex items-center gap-2 bg-gradient-to-r from-[var(--neon-blue)]/5 to-[var(--electric-violet)]/5 backdrop-blur-sm shadow-[0_0_15px_rgba(13,71,161,0.2)] hover:shadow-[0_0_25px_rgba(13,71,161,0.35)]"
              >
                <span>{t.hero.ctaConsultation}</span>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.206" />
                </svg>
              </motion.button>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { value: 0, suffix: "", label: t.hero.stats.founded, static: "2024" },
              { value: 7, suffix: "+", label: t.hero.stats.expertise, static: "" },
              { value: 0, suffix: "", label: t.hero.stats.support, static: "7/24" },
              { value: 0, suffix: "", label: t.hero.stats.response, static: language === "EN" ? "24h" : "24s" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="text-center"
              >
                {stat.static ? (
                  <div className="text-3xl sm:text-4xl font-bold neon-text mb-2">{stat.static}</div>
                ) : (
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                )}
                <div className="text-sm text-[var(--foreground-muted)]">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-[var(--neon-blue)]/40 rounded-full flex items-start justify-center p-2 shadow-[0_0_10px_rgba(13,71,161,0.2)]"
        >
          <div className="w-1 h-2 bg-[var(--neon-blue)] rounded-full" />
        </motion.div>
        <span className="text-[10px] text-[var(--foreground-muted)] tracking-wider uppercase">{t.hero.scrollText}</span>
      </motion.div>
    </section>
  );
}
