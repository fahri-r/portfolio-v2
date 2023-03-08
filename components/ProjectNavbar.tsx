import { Box, Button, Flex, Link } from "@chakra-ui/react";
import React, { Dispatch, SetStateAction } from "react";

interface ProjectNavbarProps {
  github?: string;
  site?: string;
}

const ProjectNavbar = ({ github, site }: ProjectNavbarProps) => {
  return (
    <Box
      display={github || site ? "block" : "none"}
      as="nav"
      position={{ base: "fixed", lg: "absolute" }}
      top={{ lg: 0 }}
      bottom={{ base: 0, lg: "unset" }}
      right={{ lg: 0 }}
      left={{ base: 0, lg: "unset" }}
      borderRadius={{ base: "20px 20px 0 0", lg: "0 20px" }}
      p={{ md: "0 20px" }}
      boxShadow="none"
      bg="hsla(240, 1%, 17%, 0.75)"
      backdropFilter={"blur(10px)"}
      borderWidth={"1px"}
      borderStyle="solid"
      borderColor="jet.100"
      zIndex={5}
      w={{ base: "full", lg: "fit-content" }}
    >
      <Flex
        gap={{ md: "30px" }}
        p={{ base: "0 10px", md: "0 20px" }}
        flexWrap="wrap"
        justifyContent="center"
        alignItems="center"
      >
        {github && (
          <Link
            _hover={{
              textDecoration: "none",
              color: "white",
            }}
            fontWeight="medium"
            fontSize={{ base: 11, md: 15 }}
            color={"lightGray.100"}
            p={"20px 7px"}
            variant="link"
            textTransform="capitalize"
            href={github}
            isExternal
          >
            Github
          </Link>
        )}
        {site && (
          <Link
            _hover={{
              textDecoration: "none",
              color: "white",
            }}
            fontWeight="medium"
            fontSize={{ base: 11, md: 15 }}
            color={"lightGray.100"}
            p={"20px 7px"}
            variant="link"
            textTransform="capitalize"
            href={site}
            isExternal
          >
            Site
          </Link>
        )}
      </Flex>
    </Box>
  );
};

export default ProjectNavbar;
