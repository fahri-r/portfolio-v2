import { Inter } from "next/font/google";
import PortfolioSection from "@/components/PortfolioSection";
import MainLayout from "@/components/layouts/MainLayout";
import React, { useState } from "react";
import AboutSection from "@/components/AboutSection";
import ResumeSection from "@/components/ResumeSection";
import ContactSection from "@/components/ContactSection";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [selectedSection, setSelectedSection] = useState("about");

  const section: any = {
    about: <AboutSection />,
    resume: <ResumeSection />,
    contact: <ContactSection />,
    portfolio: <PortfolioSection />,
  };

  return (
    <MainLayout
      selectedSection={selectedSection}
      setSelectedSection={setSelectedSection}
    >
      {section[selectedSection]}
    </MainLayout>
  );
}
