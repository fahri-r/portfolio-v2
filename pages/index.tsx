import { Inter } from "next/font/google";
import PortfolioSection from "@/components/PortfolioSection";
import MainLayout from "@/components/layouts/MainLayout";
import React, { useState } from "react";
import AboutSection from "@/components/AboutSection";
import ResumeSection from "@/components/ResumeSection";
import ContactSection from "@/components/ContactSection";
import { useRouter } from "next/router";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

interface HomeProps {
  section: string;
  category: string;
}

const Home = ({ section, category }: HomeProps) => {
  const router = useRouter();

  const sections: any = {
    about: <AboutSection />,
    resume: <ResumeSection />,
    contact: <ContactSection />,
    portfolio: <PortfolioSection category={category} />,
  };

  return (
    <MainLayout>{section ? sections[section] : sections.about}</MainLayout>
  );
};

export default Home;

export async function getServerSideProps(context: any) {
  let section: string;
  if (context.query.tab) {
    section = context.query.tab;
  } else {
    section = "";
  }

  let category: string;
  if (context.query.category) {
    category = context.query.category;
  } else {
    category = "";
  }

  return {
    props: {
      section,
      category,
    },
  };
}
