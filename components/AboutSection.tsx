import { Profile } from "@/data/profile";
import { gradient } from "@/lib/gradient";
import { shadow } from "@/lib/shadow";
import { transition } from "@/lib/transition";
import {
  Box,
  Flex,
  Heading,
  Image,
  Link,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import SectionLayout from "./layouts/SectionLayout";

const AboutSection = () => {
  const router = useRouter();
  return (
    <SectionLayout title="About Me">
      <Box
        as="section"
        mb={"40px"}
        color="lightGray.100"
        fontSize={{ base: 14, md: 15 }}
        fontWeight="light"
        lineHeight={"1.6"}
        dangerouslySetInnerHTML={{
          __html: Profile.description,
        }}
      />

      <Box as="section" mb={"35px"}>
        <Heading
          as="h3"
          mb={"20px"}
          fontSize={{ base: 18, md: 24 }}
          color="whiteAlpha.900"
          textTransform="capitalize"
        >
          Services
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={"20px 25px"}>
          {Profile.services.map((x, i) => (
            <Flex
              key={i}
              cursor="pointer"
              direction={{ base: "column", md: "row" }}
              justifyContent={{ base: "center", md: "flex-start" }}
              alignItems={{ base: "center", md: "flex-start" }}
              gap={{ base: "10px", md: "18px" }}
              p={"30px"}
              position="relative"
              bg={gradient.borderGradientOnyx[100]}
              borderRadius={"14px"}
              boxShadow={{ base: shadow.base[200], xl: shadow.xl[200] }}
              zIndex={1}
              _before={{
                content: '""',
                position: "absolute",
                inset: "1px",
                background: gradient.bgGradientJet[100],
                borderRadius: "inherit",
                zIndex: -1,
              }}
              onClick={() => router.push(x.href)}
            >
              <Box mt={"5px"}>
                <Image
                  m="auto"
                  src={x.imgUrl}
                  minW={"40px"}
                  objectFit="contain"
                  objectPosition="center"
                />
              </Box>
              <Box textAlign={{ base: "center", md: "left" }}>
                <Heading
                  as="h4"
                  mb={"7px"}
                  fontSize={18}
                  color="whiteAlpha.900"
                  textTransform="capitalize"
                >
                  {x.title}
                </Heading>
                <Text
                  color="lightGray.100"
                  fontSize={15}
                  fontWeight={"light"}
                  lineHeight={"1.6"}
                >
                  {x.description}
                </Text>
              </Box>
            </Flex>
          ))}
        </SimpleGrid>
      </Box>

      <Box as="section" mb={"15px"}>
        <Heading
          as="h3"
          fontSize={24}
          color="whiteAlpha.900"
          textTransform="capitalize"
        >
          Clients
        </Heading>
        <Flex
          gap={{ base: "15px", md: "50px" }}
          m={{ base: "0 -15px", md: "0 -30px" }}
          p={{ base: "25px", md: "45px" }}
          scrollPaddingX={{ base: "25px", md: "45px" }}
          justifyContent="flex-start"
          alignItems="flex-start"
          overflowX="auto"
          scrollBehavior="smooth"
          overscrollBehaviorX="contain"
          scrollSnapType="inline"
          sx={{
            "::-webkit-scrollbar-button": { width: "100px" },
            "::-webkit-scrollbar": {
              width: "5px",
              height: "5px",
            },
            "::-webkit-scrollbar-track": {
              background: "onyx.100",
              borderRadius: "5px",
            },
            "::-webkit-scrollbar-thumb": {
              background: "orangeYellowCrayola.100",
              borderRadius: "5px",
            },
          }}
        >
          {Profile.clients.map((x, i) => (
            <Box
              minW={{ base: "50%", md: "calc(25% - 38px)" }}
              scrollSnapAlign="start"
              key={i}
              h={200}
              maxH={200}
            >
              <Link href={x.href} w="full" isExternal>
                <Image
                  h="full"
                  w="full"
                  src={x.imgUrl}
                  filter={"grayscale(1)"}
                  transition={transition[100]}
                  alt={x.name}
                  objectFit="contain"
                  objectPosition="center"
                  _hover={{
                    filter: "grayscale(0)",
                  }}
                />
              </Link>
            </Box>
          ))}
        </Flex>
      </Box>
    </SectionLayout>
  );
};
export default AboutSection;
