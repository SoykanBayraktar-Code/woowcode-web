"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
}

export default function ContactForm() {
  const { t } = useLanguage();
  const searchParams = useSearchParams();
  const subjectFromUrl = searchParams.get("subject");
  
  const [mounted, setMounted] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: subjectFromUrl || "",
    message: "",
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (subjectFromUrl) {
      setFormData(prev => ({ ...prev, subject: subjectFromUrl }));
    }
  }, [subjectFromUrl]);

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  // Telefon numarası formatlama fonksiyonu
  const formatPhoneNumber = (value: string): string => {
    // Sadece rakamları al
    const digits = value.replace(/\D/g, "");
    
    // 90 ile başlıyorsa kaldır (kullanıcı +90 yazmış olabilir)
    let cleanDigits = digits;
    if (digits.startsWith("90") && digits.length > 2) {
      cleanDigits = digits.slice(2);
    }
    
    // Max 10 rakam (5XX XXX XX XX)
    const limited = cleanDigits.slice(0, 10);
    
    // Formatlama
    if (limited.length === 0) return "";
    if (limited.length <= 3) return `+90 ${limited}`;
    if (limited.length <= 6) return `+90 ${limited.slice(0, 3)} ${limited.slice(3)}`;
    if (limited.length <= 8) return `+90 ${limited.slice(0, 3)} ${limited.slice(3, 6)} ${limited.slice(6)}`;
    return `+90 ${limited.slice(0, 3)} ${limited.slice(3, 6)} ${limited.slice(6, 8)} ${limited.slice(8)}`;
  };

  // Loading skeleton while mounting
  if (!mounted) {
    return (
      <div className="glass-card rounded-2xl p-8 animate-pulse">
        <div className="h-8 bg-[var(--background-secondary)] rounded w-1/3 mb-6" />
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="h-12 bg-[var(--background-secondary)] rounded" />
            <div className="h-12 bg-[var(--background-secondary)] rounded" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="h-12 bg-[var(--background-secondary)] rounded" />
            <div className="h-12 bg-[var(--background-secondary)] rounded" />
          </div>
          <div className="h-12 bg-[var(--background-secondary)] rounded" />
          <div className="h-32 bg-[var(--background-secondary)] rounded" />
          <div className="h-14 bg-[var(--background-secondary)] rounded" />
        </div>
      </div>
    );
  }

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = t.contact.form.validation.firstNameRequired;
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = t.contact.form.validation.lastNameRequired;
    }

    if (!formData.email.trim()) {
      newErrors.email = t.contact.form.validation.emailRequired;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t.contact.form.validation.emailInvalid;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = t.contact.form.validation.phoneRequired;
    } else if (!/^\+90 5\d{2} \d{3} \d{2} \d{2}$/.test(formData.phone)) {
      newErrors.phone = t.contact.form.validation.phoneInvalid;
    }

    if (!formData.subject.trim()) {
      newErrors.subject = t.contact.form.validation.subjectRequired;
    }

    if (!formData.message.trim()) {
      newErrors.message = t.contact.form.validation.messageRequired;
    } else if (formData.message.trim().length < 20) {
      newErrors.message = t.contact.form.validation.messageMin;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  // Telefon için özel handler - sadece rakam kabul eder ve formatlar
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setFormData((prev) => ({ ...prev, phone: formatted }));
    // Clear error when user starts typing
    if (errors.phone) {
      setErrors((prev) => ({ ...prev, phone: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const subjectOptions = [
    t.contact.form.subjects.consultation,
    t.contact.form.subjects.project,
    t.contact.form.subjects.consultancy,
    t.contact.form.subjects.partnership,
    t.contact.form.subjects.support,
    t.contact.form.subjects.general,
    t.contact.form.subjects.other,
  ];

  const inputClasses = (hasError: boolean) =>
    `w-full px-4 py-3 rounded-xl bg-[var(--background-secondary)] border ${
      hasError
        ? "border-red-500 focus:border-red-500"
        : "border-[var(--neon-blue)]/40 focus:border-[var(--neon-blue)] shadow-[0_0_8px_rgba(13,71,161,0.1)]"
    } text-[var(--foreground)] placeholder-[var(--foreground-muted)] focus:outline-none focus:ring-2 ${
      hasError ? "focus:ring-red-500/20" : "focus:ring-[var(--neon-blue)]/20"
    } transition-all duration-300`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="glass-card rounded-2xl p-8"
    >
      <h2 className="text-2xl font-bold text-[var(--foreground)] mb-6">
        {t.contact.form.title}
      </h2>

      {submitStatus === "success" && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-6 p-4 rounded-xl bg-[var(--neon-green)]/10 border border-[var(--neon-green)]/30"
        >
          <div className="flex items-center">
            <svg
              className="w-5 h-5 text-[var(--neon-green)] mr-3"
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
            <p className="text-[var(--neon-green)]">
              {t.contact.form.success}
            </p>
          </div>
        </motion.div>
      )}

      {submitStatus === "error" && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/30"
        >
          <div className="flex items-center">
            <svg
              className="w-5 h-5 text-red-500 mr-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            <p className="text-red-500">
              {t.contact.form.error}
            </p>
          </div>
        </motion.div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Fields - Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-[var(--foreground)] mb-2"
            >
              {t.contact.form.firstName} <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder={t.contact.form.firstName}
              className={inputClasses(!!errors.firstName)}
            />
            {errors.firstName && (
              <p className="mt-1 text-sm text-red-500">{errors.firstName}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-[var(--foreground)] mb-2"
            >
              {t.contact.form.lastName} <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder={t.contact.form.lastName}
              className={inputClasses(!!errors.lastName)}
            />
            {errors.lastName && (
              <p className="mt-1 text-sm text-red-500">{errors.lastName}</p>
            )}
          </div>
        </div>

        {/* Email & Phone - Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-[var(--foreground)] mb-2"
            >
              {t.contact.form.email} <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="email@example.com"
              className={inputClasses(!!errors.email)}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">{errors.email}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-[var(--foreground)] mb-2"
            >
              {t.contact.form.phone} <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handlePhoneChange}
              inputMode="numeric"
              placeholder="+90 5XX XXX XX XX"
              className={inputClasses(!!errors.phone)}
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
            )}
          </div>
        </div>

        {/* Subject */}
        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-[var(--foreground)] mb-2"
          >
            {t.contact.form.subject} <span className="text-red-500">*</span>
          </label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className={inputClasses(!!errors.subject)}
          >
            <option value="">{t.contact.form.selectSubject}</option>
            {subjectOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.subject && (
            <p className="mt-1 text-sm text-red-500">{errors.subject}</p>
          )}
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-[var(--foreground)] mb-2"
          >
            {t.contact.form.message} <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            placeholder={t.contact.form.messagePlaceholder}
            className={`${inputClasses(!!errors.message)} resize-none`}
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-500">{errors.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
          whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
          className={`w-full py-4 px-6 rounded-xl font-semibold text-[var(--background)] bg-gradient-to-r from-[var(--neon-blue)] to-[var(--electric-violet)] hover:shadow-[0_0_30px_rgba(0,212,255,0.4)] transition-all duration-300 ${
            isSubmitting ? "opacity-70 cursor-not-allowed" : ""
          }`}
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              {t.contact.form.sending}
            </span>
          ) : (
            <span className="flex items-center justify-center">
              {t.contact.form.send}
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
            </span>
          )}
        </motion.button>
      </form>
    </motion.div>
  );
}
