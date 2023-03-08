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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Fahri's homepage" />
        <meta name="author" content="Muhammad Fahri Ramadhan" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta property="og:site_name" content="Fahri's homepage" />
        <meta name="og:title" content={title ?? "Fahri's homepage"} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/avatar.png" />
        <title>
          {title ? `${title} - Fahri's homepage` : "Fahri's homepage"}
        </title>
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
