import { gradient } from "@/lib/gradient";
import { shadow } from "@/lib/shadow";
import { Box, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionLayoutProps {
  children: ReactNode;
  title?: string;
}

const SectionLayout = ({ children, title }: SectionLayoutProps) => {
  const firstMotion = {
    animate: {
      opacity: [0, 1],
      transition: { ease: "easeOut", duration: 0.4 },
    },
  };
  return (
    <Box
      as={motion.article}
      initial="animate"
      animate="animate"
      variants={firstMotion}
      animation="fade 0.5s ease backwards"
      minH="full"
      w="auto"
      boxShadow={shadow.xl[500]}
      mx="auto"
      p={"30px"}
      bg="eerieBlack.200"
      borderWidth={"1px"}
      borderStyle="solid"
      borderColor="jet.100"
      borderRadius={"20px"}
    >
      <Heading
        as="h2"
        mb={{ base: "15px", md: "30px" }}
        pb={{ base: "7px", md: "20px" }}
        fontWeight="semibold"
        position="relative"
        fontSize={{ base: 24, md: 32 }}
        color="whiteAlpha.900"
        textTransform="capitalize"
        _after={{
          w: { base: "30px", md: "40px" },
          h: { base: "3px", md: "5px" },
          content: '""',
          position: "absolute",
          bottom: 0,
          left: 0,
          background: gradient.textGradientYellow[100],
          borderRadius: "3px",
        }}
      >
        {title}
      </Heading>

      {children}
    </Box>
  );
};

export default SectionLayout;
