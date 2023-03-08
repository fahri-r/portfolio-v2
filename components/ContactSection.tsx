import { gradient } from "@/lib/gradient";
import { shadow } from "@/lib/shadow";
import { transition } from "@/lib/transition";
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Input,
  Text,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { IoPaperPlane } from "react-icons/io5";
import SectionLayout from "./layouts/SectionLayout";
import { useForm } from "react-hook-form";

const ContactSection = () => {
  const toast = useToast();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    fetch("/api/message", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(() => {
        toast({
          title: "Message submitted.",
          description: "We've sent your message to Muhammad Fahri Ramadhan.",
          status: "success",
          duration: 9000,
          isClosable: true,
          position: "top-right",
        });
        reset();
      })
      .catch(() => {
        toast({
          title: "Can't submit your message.",
          description:
            "Unfortunately your message couldn't be sent to Muhammad Fahri Ramadhan. Please fill all required fields.",
          status: "error",
          duration: 9000,
          isClosable: true,
          position: "top-right",
        });
      });
  };

  const firstMotion = {
    animate: {
      opacity: [0, 1],
      transition: { ease: "easeOut", duration: 0.4 },
    },
  };
  return (
    <SectionLayout title="Contact">
      <Box pt={"15px"} mb={"10px"}>
        <form action="#">
          <Grid templateColumns="repeat(4, 1fr)" w="full" gap={"30px"}>
            <GridItem colSpan={{ base: 4, md: 2 }}>
              <Input
                h={55}
                p={{ base: "13px 20px", md: "15px 20px" }}
                fontSize={{ base: 14, md: 15 }}
                color="whiteAlpha.900"
                fontWeight="normal"
                borderWidth="1px"
                borderStyle="solid"
                borderColor={errors.fullName ? "red.300" : "jet.100"}
                borderRadius={"14px"}
                outline="none"
                w="full"
                bg="none"
                placeholder="Full name"
                {...register("fullName", { required: true })}
                required
              />
            </GridItem>
            <GridItem colSpan={{ base: 4, md: 2 }}>
              <Input
                h={55}
                p={{ base: "13px 20px", md: "15px 20px" }}
                fontSize={{ base: 14, md: 15 }}
                color="whiteAlpha.900"
                fontWeight="normal"
                borderWidth="1px"
                borderStyle="solid"
                borderColor={errors.email ? "red.300" : "jet.100"}
                borderRadius={"14px"}
                outline="none"
                w="full"
                bg="none"
                placeholder="Email"
                type="email"
                {...register("email", {
                  required: true,
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                required
              />
            </GridItem>
            <GridItem colSpan={4}>
              <Input
                h={55}
                p={{ base: "13px 20px", md: "15px 20px" }}
                fontSize={{ base: 14, md: 15 }}
                color="whiteAlpha.900"
                fontWeight="normal"
                borderWidth="1px"
                borderStyle="solid"
                borderColor={errors.subject ? "red.300" : "jet.100"}
                borderRadius={"14px"}
                outline="none"
                w="full"
                bg="none"
                placeholder="Subject"
                {...register("subject", { required: true })}
                required
              />
            </GridItem>
            <GridItem colSpan={4}>
              <Textarea
                minH={"300px"}
                resize="vertical"
                p={{ base: "13px 20px", md: "15px 20px" }}
                fontSize={{ base: 14, md: 15 }}
                color="whiteAlpha.900"
                fontWeight="normal"
                borderWidth="1px"
                borderStyle="solid"
                borderColor={errors.message ? "red.300" : "jet.100"}
                borderRadius={"14px"}
                outline="none"
                w="full"
                bg="none"
                placeholder="Message"
                {...register("message", { required: true })}
                required
              />
            </GridItem>
            <GridItem
              colSpan={{ base: 4, lg: 1 }}
              colStart={{ base: 1, lg: 4 }}
            >
              <Flex
                onClick={handleSubmit(onSubmit)}
                opacity={0.7}
                cursor="not-allowed"
                p={{ base: "13px 20px", md: "15px 20px" }}
                fontSize={{ base: 14, md: 16 }}
                position="relative"
                bg={gradient.borderGradientOnyx[100]}
                color="orangeYellowCrayola.100"
                justifyContent="center"
                alignItems="center"
                gap={"10px"}
                borderRadius={"14px"}
                textTransform="capitalize"
                boxShadow={{ base: shadow.base[300], xl: shadow.xl[300] }}
                zIndex={1}
                transition={transition[100]}
                _before={{
                  content: '""',
                  position: "absolute",
                  inset: "1px",
                  background: gradient.bgGradientJet[100],
                  borderRadius: "inherit",
                  zIndex: -1,
                  transition: transition[100],
                }}
              >
                <IoPaperPlane />
                <Text>Submit</Text>
              </Flex>
            </GridItem>
          </Grid>
        </form>
      </Box>
    </SectionLayout>
  );
};

export default ContactSection;
