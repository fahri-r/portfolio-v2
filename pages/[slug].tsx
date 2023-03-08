import { Inter } from "next/font/google";
import PortfolioSection from "@/components/PortfolioSection";
import MainLayout from "@/components/layouts/MainLayout";
import React, { useState } from "react";
import AboutSection from "@/components/AboutSection";
import ResumeSection from "@/components/ResumeSection";
import ContactSection from "@/components/ContactSection";
import SectionLayout from "@/components/layouts/SectionLayout";
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { AiOutlineEye } from "react-icons/ai";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Portfolio } from "@/data/portfolio";
import ProjectLayout from "@/components/layouts/ProjectLayout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  const { slug } = router.query;
  const data = Portfolio.find((p) => p.slug === slug);

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
    <ProjectLayout
      github={data?.github}
      site={data?.site}
      title={data?.title}
      thumbnail={data?.thumbnail}
    >
      <SectionLayout title={data?.title}>
        <Flex
          justifyContent="flex-start"
          alignItems="center"
          gap={{ base: "10px", lg: "25px" }}
          mb={"30px"}
        >
          {data?.tools.map((x, i) => (
            <Text
              key={i}
              p={{ base: "3px 12px", md: "5px 18px" }}
              color="white"
              bg="onyx.100"
              fontSize={{ base: 11, md: 12 }}
              fontWeight="light"
              borderRadius={"8px"}
            >
              {x}
            </Text>
          ))}
        </Flex>
        <Flex direction="column" gap={"30px"} mb={"10px"}>
          {data?.images.map((x, i) => (
            <Box
              key={i}
              as={motion.div}
              variants={initialBox}
              w="full"
              h="full"
              position="relative"
              overflow="hidden"
              borderRadius={"16px"}
              mb={"15px"}
              _before={{
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "transparent",
                zIndex: 1,
              }}
            >
              <Box as={motion.div} variants={hoverBox} w="full" h="full">
                <Image
                  src={x}
                  w="full"
                  h="full"
                  objectFit="cover"
                  objectPosition="top"
                  loading="lazy"
                />
              </Box>
            </Box>
          ))}
        </Flex>
      </SectionLayout>
    </ProjectLayout>
  );
}
