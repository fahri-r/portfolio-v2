import { Box, Flex } from "@chakra-ui/react";
import Head from "next/head";
import React, { ReactElement, Dispatch, SetStateAction } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";

interface MainLayoutProps {
  children: ReactElement;
  setSelectedSection: Dispatch<SetStateAction<string>>;
  selectedSection: string;
  title?: string;
}

const MainLayout = ({
  children,
  setSelectedSection,
  selectedSection,
  title,
}: MainLayoutProps) => {
  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>
          {title ? `${title} - Fahri's homepage` : "Fahri's homepage"}
        </title>
        <meta
          name="title"
          content={title ? `${title} - Fahri's homepage` : "Fahri's homepage"}
        />
        <meta
          name="description"
          content="Muhammad Fahri Ramadhan is a full-stack developer based in Bandung, Indonesia."
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://portfolio-alpha-self-89.vercel.app/"
        />
        <meta
          property="og:title"
          content={title ? `${title} - Fahri's homepage` : "Fahri's homepage"}
        />
        <meta
          property="og:description"
          content="Muhammad Fahri Ramadhan is a full-stack developer based in Bandung, Indonesia."
        />
        <meta property="og:image" content="/images/avatar.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://portfolio-alpha-self-89.vercel.app/"
        />
        <meta
          property="twitter:title"
          content={title ? `${title} - Fahri's homepage` : "Fahri's homepage"}
        />
        <meta
          property="twitter:description"
          content="Muhammad Fahri Ramadhan is a full-stack developer based in Bandung, Indonesia."
        />
        <meta property="twitter:image" content="/images/avatar.jpg" />
      </Head>
      <Flex
        direction={{ base: "column", xl: "row" }}
        as="main"
        mx={"auto"}
        my={{ base: "15px", md: "60px" }}
        mb={{ base: "75px", md: "100px", lg: "60px" }}
        justifyContent="center"
        alignItems="stretch"
        gap={{ base: "15px", md: "25px" }}
        w={{ base: "100%", lg: "95%", xl: 1200 }}
        px={{ base: "12px", md: "15px 12px" }}
      >
        <Sidebar />
        <Box
          minW={"75%"}
          w={{ base: "full", xl: "75%" }}
          position="relative"
          boxSizing="border-box"
        >
          <Navbar
            selectedSection={selectedSection}
            setSelectedSection={setSelectedSection}
          />
          {children}
        </Box>
      </Flex>
    </>
  );
};
export default MainLayout;
