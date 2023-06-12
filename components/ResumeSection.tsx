import { Profile } from "@/data/profile";
import { gradient } from "@/lib/gradient";
import { shadow } from "@/lib/shadow";
import {
  Box,
  Flex,
  Heading,
  List,
  ListItem,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { SlGraduation, SlBriefcase } from "react-icons/sl";
import SectionLayout from "./layouts/SectionLayout";
import { Months } from "@/data/months";

const ResumeSection = () => {
  const firstMotion = {
    animate: {
      opacity: [0, 1],
      transition: { ease: "easeOut", duration: 0.4 },
    },
  };
  return (
    <SectionLayout title="Resume">
      <Box mb={"30px"} pt="15px">
        <Flex alignItems="center" gap={"15px"} mb={"25px"}>
          <Flex
            w={{ base: "30px", md: "48px" }}
            h={{ base: "30px", md: "48px" }}
            borderRadius={{ base: "8px", md: "12px" }}
            fontSize={18}
            position="relative"
            bg={gradient.borderGradientOnyx[100]}
            justifyContent="center"
            alignItems="center"
            color="orangeYellowCrayola.100"
            boxShadow={{ base: shadow.base[100], xl: shadow.xl[100] }}
            zIndex={1}
            _before={{
              content: '""',
              position: "absolute",
              inset: "1px",
              bg: "eerieBlack.100",
              borderRadius: "inherit",
              zIndex: -1,
            }}
          >
            <SlGraduation width={"35px"} />
          </Flex>
          <Heading
            fontSize={{ base: 18, md: 24 }}
            color="whiteAlpha.900"
            textTransform="capitalize"
          >
            Education
          </Heading>
        </Flex>
        <List fontSize={{ base: 14, md: 15 }} ml={{ base: "45px", md: "65px" }}>
          {Profile.studies.map((x, i) => (
            <ListItem
              key={i}
              mb={"20px"}
              position="relative"
              _notLast={{
                _before: {
                  left: { base: "-30px", md: "-40px" },
                  content: '""',
                  position: "absolute",
                  top: "-25px",
                  width: "1px",
                  height: "calc(100% + 50px)",
                  background: "jet.100",
                },
              }}
              _after={{
                height: "8px",
                width: "8px",
                left: { base: "-33px", md: "-43px" },
                content: '""',
                position: "absolute",
                top: "5px",
                background: gradient.textGradientYellow[100],
                borderRadius: "50%",
                boxShadow: "0 0 0 4px #383838",
              }}
            >
              <Heading
                as="h4"
                fontSize={15}
                lineHeight={"1.3"}
                mb={"7px"}
                color="whiteAlpha.900"
                textTransform="capitalize"
                fontWeight="normal"
              >
                {x.name}
              </Heading>
              <Box
                as="span"
                color="vegasGold.100"
                fontWeight="normal"
                lineHeight={"1.6"}
              >
                {x.year}
              </Box>
              <Text
                maxW={700}
                color="lightGray.100"
                fontWeight="light"
                lineHeight={"1.6"}
              >
                {x.description}
              </Text>
            </ListItem>
          ))}
        </List>
      </Box>

      <Box mb={"30px"}>
        <Flex alignItems="center" gap={"15px"} mb={"25px"}>
          <Flex
            w={{ base: "30px", md: "48px" }}
            h={{ base: "30px", md: "48px" }}
            borderRadius={{ base: "8px", md: "12px" }}
            fontSize={18}
            position="relative"
            bg={gradient.borderGradientOnyx[100]}
            justifyContent="center"
            alignItems="center"
            color="orangeYellowCrayola.100"
            boxShadow={{ base: shadow.base[100], xl: shadow.xl[100] }}
            zIndex={1}
            _before={{
              content: '""',
              position: "absolute",
              inset: "1px",
              bg: "eerieBlack.100",
              borderRadius: "inherit",
              zIndex: -1,
            }}
          >
            <SlBriefcase width={"35px"} />
          </Flex>
          <Heading
            fontSize={{ base: 18, md: 24 }}
            color="whiteAlpha.900"
            textTransform="capitalize"
          >
            Experience
          </Heading>
        </Flex>
        <List fontSize={{ base: 14, md: 15 }} ml={{ base: "45px", md: "65px" }}>
          {Profile.experiences.map((x, i) => (
            <ListItem
              key={i}
              mb={"20px"}
              position="relative"
              _notLast={{
                _before: {
                  left: { base: "-30px", md: "-40px" },
                  content: '""',
                  position: "absolute",
                  top: "-25px",
                  width: "1px",
                  height: "calc(100% + 50px)",
                  background: "jet.100",
                },
              }}
              _after={{
                height: "8px",
                width: "8px",
                left: { base: "-33px", md: "-43px" },
                content: '""',
                position: "absolute",
                top: "5px",
                background: gradient.textGradientYellow[100],
                borderRadius: "50%",
                boxShadow: "0 0 0 4px #383838",
              }}
            >
              <Heading
                as="h4"
                fontSize={15}
                lineHeight={"1.3"}
                mb={"7px"}
                color="whiteAlpha.900"
                textTransform="capitalize"
              >
                {x.name}
              </Heading>
              <Box
                as="span"
                color="vegasGold.100"
                fontWeight="normal"
                lineHeight={"1.6"}
              >
                {`${Months[x.in.month - 1]}  ${x.in.year} - `}
                {x.out ? `${Months[x.out.month - 1]}  ${x.in.year}` : "Present"}
              </Box>
              <Text
                maxW={700}
                color="lightGray.100"
                fontWeight="light"
                lineHeight={"1.6"}
              >
                {x.description}
              </Text>
            </ListItem>
          ))}
        </List>
      </Box>
      <SimpleGrid columns={{ base: 1, md: 2 }} gap={"25px"}>
        <Box>
          <Heading
            as="h3"
            mb={"20px"}
            fontSize={{ base: 18, md: 24 }}
            color="whiteAlpha.900"
            textTransform="capitalize"
            pl={{ base: "unset", md: "5px" }}
          >
            Programming Skills
          </Heading>
          <List
            p={"25px 30px 30px 30px"}
            position="relative"
            bg={gradient.borderGradientOnyx[100]}
            borderRadius={"14px"}
            boxShadow={{ base: shadow.base[200], xl: shadow.xl[200] }}
            cursor="pointer"
            zIndex={1}
            _before={{
              content: '""',
              position: "absolute",
              inset: "1px",
              background: gradient.bgGradientJet[100],
              borderRadius: "inherit",
              zIndex: -1,
            }}
          >
            {Profile.programmingSkills.map((x, i) => (
              <ProgressItem
                key={i}
                label={x.title}
                value={x.value.toString()}
              />
            ))}
          </List>
        </Box>
        <Box>
          <Heading
            as="h3"
            mb={"20px"}
            fontSize={{ base: 18, md: 24 }}
            color="whiteAlpha.900"
            textTransform="capitalize"
            pl={{ base: "unset", md: "5px" }}
          >
            Language Skills
          </Heading>
          <List
            p={"25px 30px 30px 30px"}
            position="relative"
            bg={gradient.borderGradientOnyx[100]}
            borderRadius={"14px"}
            boxShadow={{ base: shadow.base[200], xl: shadow.xl[200] }}
            cursor="pointer"
            zIndex={1}
            _before={{
              content: '""',
              position: "absolute",
              inset: "1px",
              background: gradient.bgGradientJet[100],
              borderRadius: "inherit",
              zIndex: -1,
            }}
          >
            {Profile.languageSkills.map((x, i) => (
              <ProgressItem
                key={i}
                label={x.title}
                value={x.value.toString()}
              />
            ))}
          </List>
        </Box>
      </SimpleGrid>
    </SectionLayout>
  );
};

interface ProgressItemProps {
  label: string;
  value: string;
}

const ProgressItem = ({ label, value }: ProgressItemProps) => (
  <ListItem _notLast={{ mb: "25px" }}>
    <Flex alignItems="center" mb={"8px"} justifyContent="space-between">
      <Heading
        as="h5"
        fontWeight="medium"
        color="whiteAlpha.900"
        textTransform="capitalize"
        fontSize={{ base: 13, md: 15 }}
      >
        {label}
      </Heading>
      <Text
        color="lightGray.100"
        fontWeight="light"
        fontSize={{ base: 13, md: 15 }}
      >
        {`${value}%`}
      </Text>
    </Flex>
    <Box bg="jet.100" w={"full"} h={"8px"} borderRadius={"10px"}>
      <Box
        w={`${value}%`}
        h={"full"}
        bg={gradient.textGradientYellow[100]}
        borderRadius={"inherit"}
      ></Box>
    </Box>
  </ListItem>
);

export default ResumeSection;
