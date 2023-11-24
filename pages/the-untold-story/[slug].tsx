import { Inter } from "next/font/google";
import React from "react";
import SectionLayout from "@/components/layouts/SectionLayout";
import { Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { PortfolioItemProps } from "@/data/portfolio";
import ProjectLayout from "@/components/layouts/ProjectLayout";
import { NotionAPI } from "notion-client";
import { NotionRenderer } from "react-notion-x";
import { gradient } from "@/lib/gradient";

const inter = Inter({ subsets: ["latin"] });
interface Props {
  data: any;
}

export default function Home({ data }: Props) {
  const initialBox = {
    rest: {
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    initial: {
      scale: [0, 1],
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    hover: {
      scale: 1,
      transition: {
        duration: 0,
        ease: "easeInOut",
      },
    },
  };
  const hoverBox = {
    rest: {
      scale: [1.1, 1],
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    hover: {
      scale: [1, 1.1],
      filter: "brightness(50%)",
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };
  return (
    <ProjectLayout github={""} site={""} title={""} thumbnail={""}>
      <SectionLayout title={"The Untold Story"}>
        <NotionRenderer
          recordMap={data}
          fullPage={true}
          darkMode={true}
          disableHeader
        />
      </SectionLayout>
    </ProjectLayout>
  );
}

export async function getServerSideProps(context: any) {
  const slug = context.query.slug;
  const notion = new NotionAPI();
  const data = await notion.getPage(slug);
  return {
    props: {
      data,
    },
  };
}
