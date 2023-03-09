import { Profile } from "@/data/profile";
import { gradient } from "@/lib/gradient";
import { shadow } from "@/lib/shadow";
import {
  Box,
  Flex,
  Heading,
  Image,
  Link,
  SimpleGrid,
  Text,
  Icon,
  Button,
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useState } from "react";
import {
  AiOutlineCalendar,
  AiOutlineEnvironment,
  AiOutlineFileText,
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineMail,
} from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { IconType } from "react-icons/lib";

const Sidebar = () => {
  const [index, setIndex] = useState<number[]>([]);

  const handleClick = (isExpanded: boolean) => {
    if (isExpanded) {
      setIndex([]);
    } else {
      setIndex([0]);
    }
  };
  return (
    <Accordion
      index={useBreakpointValue({ base: index, xl: [0] })}
      allowMultiple
      as={"aside"}
      position={{ base: "relative", xl: "sticky" }}
      top={{ xl: "60px" }}
      maxH={"max-content"}
      h={"100%"}
      zIndex={1}
      w="full"
      boxShadow={shadow.xl[500]}
      mx={"auto"}
      p={{
        base: "15px 15px 15px 15px",
        md: "30px 30px 30px 30px",
        xl: "60px 30px 30px 30px",
      }}
      overflow="hidden"
      bg="eerieBlack.200"
      borderWidth={"1px"}
      borderStyle="solid"
      borderColor="jet.100"
      borderRadius={"20px"}
    >
      <Flex
        as={Link}
        href={"/"}
        _hover={{ textDecoration: "none" }}
        direction={{ base: "row", xl: "column" }}
        gap={{ base: "15px", md: "25px" }}
        position="relative"
        justifyContent="flex-start"
        alignItems="center"
      >
        <Box
          borderRadius={{ base: "20px", md: "30px" }}
          bg="onyx.100"
          boxSize={{ base: "80px", md: 150 }}
          overflow="clip"
        >
          <Image src={Profile.imgUrl} alt={Profile.name} display="block" />
        </Box>
        <Box>
          <Heading
            as="h1"
            whiteSpace="nowrap"
            textAlign={{ base: "left", xl: "center" }}
            mb={{ base: "10px", md: "15px" }}
            color="whiteAlpha.900"
            fontSize={{ base: 17, md: 26 }}
            fontWeight="medium"
            letterSpacing="-0.25px"
          >
            {Profile.name}
          </Heading>
          <Text
            m="auto"
            p={{ base: "3px 12px", md: "5px 18px" }}
            color="white"
            bg="onyx.100"
            fontSize={{ base: 11, md: 12 }}
            fontWeight="light"
            w={"max-content"}
            borderRadius={"8px"}
          >
            {Profile.job}
          </Text>
        </Box>
      </Flex>
      <AccordionItem border="none">
        {({ isExpanded }) => (
          <>
            <AccordionButton
              border="none"
              p={0}
              onClick={() => handleClick(isExpanded)}
            >
              <Button
                _focus={{
                  background: gradient.bgGradientYellow[100],
                  _before: {
                    content: '""',
                    background: gradient.bgGradientYellow[200],
                  },
                }}
                _hover={{
                  background: gradient.bgGradientYellow[100],
                  _before: {
                    content: '""',
                    background: gradient.bgGradientYellow[200],
                  },
                }}
                display={{ base: "block", xl: "none" }}
                top={"0"}
                right={"0"}
                p={"10px 15px"}
                position="absolute"
                borderRadius={"0 15px"}
                fontSize={13}
                color="orangeYellowCrayola.100"
                bg={gradient.borderGradientOnyx[100]}
                boxShadow={{ base: shadow.base[200], xl: shadow.xl[200] }}
                zIndex={1}
                _before={{
                  content: '""',
                  position: "absolute",
                  inset: "1px",
                  borderRadius: "inherit",
                  background: gradient.bgGradientJet[100],
                  zIndex: -1,
                }}
                variant="link"
              >
                <Text display={{ base: "none", md: "block" }}>
                  Show Contacts
                </Text>

                <Box display={{ base: "block", md: "none" }}>
                  <IoIosArrowDown />
                </Box>
              </Button>
            </AccordionButton>
            <AccordionPanel opacity={1} w="full" p="unset">
              <Box
                m={{ base: "16px 0", md: "32px 0" }}
                w={"100%"}
                h={"1px"}
                bg="jet.100"
              />
              <SimpleGrid
                columns={{ base: 1, md: 2, xl: 1 }}
                gap={{ base: "16px", md: "30px 15px" }}
              >
                <SidebarItem
                  title="Email"
                  icon={AiOutlineMail}
                  value={Profile.email}
                />
                <SidebarItem
                  title="Age"
                  icon={AiOutlineCalendar}
                  value={Math.floor(
                    (new Date().valueOf() - new Date(Profile.dob).valueOf()) /
                      1000 /
                      (60 * 60 * 24) /
                      365.25
                  ).toString()}
                />
                <SidebarItem
                  title="Location"
                  icon={AiOutlineEnvironment}
                  value={Profile.location}
                />
                <SidebarItem
                  title="Freelance"
                  icon={AiOutlineFileText}
                  value={Profile.freelance ? "Available" : "Unavailable"}
                />
              </SimpleGrid>
              <Box
                m={{ base: "16px 0", md: "32px 0", xl: "15px 0" }}
                w={"100%"}
                h={"1px"}
                bg="jet.100"
                opacity={{ base: 1, xl: 0 }}
              />
              <Flex
                justifyContent={{ base: "flex-start", xl: "center" }}
                alignItems="center"
                gap={"15px"}
                pb={"4px"}
                pl={"7px"}
                visibility="visible"
              >
                <SocialItem
                  href={`https://github.com/${Profile.github}`}
                  icon={AiOutlineGithub}
                />
                <SocialItem
                  href={`https://www.instagram.com/${Profile.instagram}`}
                  icon={AiOutlineInstagram}
                />
                <SocialItem
                  href={`https://www.linkedin.com/in/${Profile.linkedin}`}
                  icon={AiOutlineLinkedin}
                />
              </Flex>
            </AccordionPanel>
          </>
        )}
      </AccordionItem>
    </Accordion>
  );
};

interface SidebarItemProps {
  title: string;
  value: string;
  icon: IconType;
}

const SidebarItem = ({ title, value, icon }: SidebarItemProps) => (
  <Flex minW={"100%"} alignItems="center" gap={"16px"}>
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
      <Icon as={icon} width={"35px"} />
    </Flex>
    <Box maxW={"calc(100% - 64px)"} w={"calc(100% - 64px)"}>
      <Text
        color="lightGray.700"
        fontSize={{ base: 11, md: 12 }}
        textTransform="uppercase"
        mb={"2px"}
      >
        {title}
      </Text>
      <Link
        fontSize={{ base: 13, md: 14 }}
        fontWeight="light"
        whiteSpace="nowrap"
        overflow="hidden"
        textOverflow="ellipsis"
        color="whiteAlpha.900"
        _hover={{
          textDecoration: "none",
        }}
      >
        {value}
      </Link>
    </Box>
  </Flex>
);

interface SocialItemProps {
  href: string;
  icon: IconType;
}

const SocialItem = ({ href, icon }: SocialItemProps) => (
  <Link
    href={href}
    color="lightGray.700"
    fontSize={18}
    textDecoration="none"
    _hover={{ color: "lightGray.100" }}
    isExternal
  >
    <Icon as={icon} />
  </Link>
);

export default Sidebar;
