"use client";

import { ReactNode } from "react";
import { LanguageProvider } from "@/context/LanguageContext";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingContact from "@/components/ui/FloatingContact";

interface ClientLayoutProps {
  children: ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  return (
    <LanguageProvider>
      <Header />
      <main>{children}</main>
      <Footer />
      <FloatingContact />
    </LanguageProvider>
  );
}
