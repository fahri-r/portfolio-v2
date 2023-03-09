import { Box, Button, Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { Dispatch, SetStateAction } from "react";

const Navbar = () => {
  const router = useRouter();
  const selectedSection = router.query.tab ?? "about";
  const handleClick = (data: string) => {
    // setSelectedSection(data);
    router.push({ pathname: "/", query: { tab: data } });
  };

  return (
    <Box
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
        {NAV_ITEMS.map((x, i) => (
          <Button
            key={i}
            _hover={{
              textDecoration: "none",
              color:
                x.title == selectedSection
                  ? "orangeYellowCrayola.100"
                  : "white",
            }}
            fontWeight={x.title == selectedSection ? "normal" : "medium"}
            fontSize={{ base: 11, md: 15 }}
            color={
              x.title == selectedSection
                ? "orangeYellowCrayola.100"
                : "lightGray.100"
            }
            p={"20px 7px"}
            variant="link"
            onClick={() => handleClick(x.title)}
            textTransform="capitalize"
          >
            {x.title}
          </Button>
        ))}
      </Flex>
    </Box>
  );
};

interface NavItems {
  title: string;
}

const NAV_ITEMS: NavItems[] = [
  {
    title: "about",
  },
  {
    title: "resume",
  },
  {
    title: "portfolio",
  },
  {
    title: "contact",
  },
];

export default Navbar;
