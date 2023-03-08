import { Category } from "@/data/category";
import { Portfolio } from "@/data/portfolio";
import { gradient } from "@/lib/gradient";
import { shadow } from "@/lib/shadow";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Link,
  List,
  ListItem,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { AiOutlineEye } from "react-icons/ai";
import React, { useState } from "react";
import SectionLayout from "./layouts/SectionLayout";

const PortfolioSection = () => {
  const [data, setData] = useState(Portfolio);
  const [active, setActive] = useState("All");
  const [menuLabel, setMenuLabel] = useState<string | null>();
  const [isShowed, setIsShowed] = useState<boolean>(false);

  const firstMotion = {
    animate: {
      opacity: [0, 1],
      transition: { ease: "easeOut", duration: 0.4 },
    },
  };

  const handleFilterClick = (label: string) => {
    if (label == "All") {
      setData(Portfolio);
      setActive("All");
      setMenuLabel("All");
    } else {
      const filteredPortfolio = Portfolio.filter((x) => x.category == label);
      setData(filteredPortfolio);
      setActive(label);
      setMenuLabel(label);
    }
  };

  return (
    <SectionLayout title="Portfolio">
      <Box pt={"15px"}>
        <Box
          display={{ base: "block", md: "none" }}
          position="relative"
          mb={"25px"}
        >
          <Button
            bg="eerieBlack.200"
            color="lightGray.100"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            width="full"
            padding={"12px 16px"}
            borderWidth={"1px"}
            borderStyle="solid"
            borderColor="jet.100"
            borderRadius={"14px"}
            fontSize="14px"
            fontWeight="light"
            variant="unstyled"
            onClick={() => setIsShowed(!isShowed)}
          >
            <Text>{menuLabel ?? "Select Category"}</Text>
            <ChevronDownIcon />
          </Button>
          <List
            bg="eerieBlack.200"
            position="absolute"
            top={"calc(100% + 6px)"}
            w={"full"}
            p={"6px"}
            borderWidth={"1px"}
            borderStyle="solid"
            borderColor="jet.100"
            borderRadius={"14px"}
            zIndex={2}
            display={isShowed ? "block" : "none"}
          >
            <ListItem>
              <Button
                bg="eerieBlack.200"
                color="lightGray.100"
                fontSize={14}
                fontWeight="light"
                textTransform="capitalize"
                w="full"
                p={"8px 10px"}
                borderRadius={"8px"}
                variant="unstyled"
                textAlign="left"
                onClick={() => handleFilterClick("All")}
              >
                All
              </Button>
            </ListItem>

            {Category.map((x, i) => (
              <ListItem>
                <Button
                  bg="eerieBlack.200"
                  color="lightGray.100"
                  fontSize={14}
                  fontWeight="light"
                  textTransform="capitalize"
                  w="full"
                  p={"8px 10px"}
                  borderRadius={"8px"}
                  variant="unstyled"
                  textAlign="left"
                  onClick={() => handleFilterClick(x.label)}
                >
                  {x.label}
                </Button>
              </ListItem>
            ))}
          </List>
        </Box>

        <Flex
          justifyContent="flex-start"
          alignItems="center"
          gap={"25px"}
          pl={"5px"}
          mb={"30px"}
          display={{ base: "none", md: "flex" }}
        >
          <Button
            color={
              active == "All" ? "orangeYellowCrayola.100" : "lightGray.100"
            }
            fontSize={15}
            variant="link"
            onClick={() => handleFilterClick("All")}
            _hover={{
              textDecoration: "none",
              color: active == "All" ? "orangeYellowCrayola.100" : "white",
            }}
            fontWeight={active == "All" ? "normal" : "medium"}
          >
            All
          </Button>
          {Category.map((x, i) => (
            <Button
              color={
                active == x.label ? "orangeYellowCrayola.100" : "lightGray.100"
              }
              fontSize={15}
              fontWeight={x.label == active ? "normal" : "medium"}
              variant="link"
              onClick={() => handleFilterClick(x.label)}
              _hover={{
                textDecoration: "none",
                color: active == x.label ? "orangeYellowCrayola.100" : "white",
              }}
            >
              {x.label}
            </Button>
          ))}
        </Flex>
      </Box>

      <Grid
        gridTemplateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap={"30px"}
        mb={"10px"}
      >
        {data.map((x, i) => (
          <PortfolioItem
            key={i}
            imgUrl={x.thumbnail}
            title={x.title}
            category={x.category}
            slug={x.slug}
          />
        ))}
      </Grid>
    </SectionLayout>
  );
};

interface PortfolioItemProps {
  imgUrl: string;
  title: string;
  category: string;
  slug: string;
}

const PortfolioItem = ({
  imgUrl,
  title,
  category,
  slug,
}: PortfolioItemProps) => {
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
    <GridItem
      as={motion.div}
      initial="initial"
      animate="rest"
      whileHover="hover"
    >
      <Box as={motion.div} variants={initialBox}>
        <Link
          w="full"
          h="full"
          role="group"
          _hover={{ textDecoration: "none" }}
          href={`/${slug}`}
        >
          <Box
            w="full"
            h={200}
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
            <Box
              bg="jet.100"
              color="orangeYellowCrayola.100"
              position="absolute"
              top="50%"
              left="50%"
              transform={"translate(-50%, -50%) scale(0.8)"}
              fontSize={20}
              p={"18px"}
              borderRadius={"12px"}
              opacity={0}
              zIndex={1}
              _groupHover={{
                opacity: 1,
              }}
            >
              <AiOutlineEye />
            </Box>
            <Box as={motion.div} variants={hoverBox} w="full" h="full">
              <Image
                src={imgUrl}
                w="full"
                h="full"
                objectFit="cover"
                objectPosition="top"
              />
            </Box>
          </Box>
          <Heading
            as="h3"
            color="whiteAlpha.900"
            fontSize={15}
            fontWeight="normal"
            textTransform="capitalize"
            lineHeight={"1.3"}
            ml={"10px"}
          >
            {title}
          </Heading>
          <Text
            color="lightGray.700"
            fontSize={14}
            fontWeight="light"
            ml={"10px"}
          >
            {category}
          </Text>
        </Link>
      </Box>
    </GridItem>
  );
};

export default PortfolioSection;
