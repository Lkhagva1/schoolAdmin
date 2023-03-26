import React from "react";
import {
  Box,
  Button,
  Card,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Stack,
  Text,
  Textarea,
  useColorModeValue,
  useToast,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import { FcGraduationCap } from "react-icons/fc";
import { useState } from "react";
const NoticeAdd = () => {
  const toast = useToast();
  const id = "test";
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const createNotice = () => {
    axios
      .post("http://localhost:5000/addnotice", {
        title,
        content,
      })
      .then(function (response) {
        console.log("data", response);
        if (!toast.isActive(id)) {
          toast({
            id,
            duration: 2000,
            position: "top",
            status: "success",
            description: "Амжилттай!",
          });
        }
      })
      .catch(function (error) {
        if (!toast.isActive(id)) {
          toast({
            id,
            duration: 2000,
            position: "top",
            status: "error",
            description: error.response.data.message
              ? error.response.data.message
              : "Алдаа гарлаа!",
          });
        }
        console.log(error);
      });
  };
  return (
    <Box
      ml="505px"
      mr={"200px"}
      mt={"30px"}
      bg={"white"}
      rounded="lg"
      boxShadow={"lg"}
    >
      <Card p="12px 5px" mb="12px" pl={"20px"}>
        <HStack direction={"column"}>
          <Text fontSize="20px" fontWeight="bold">
            <FcGraduationCap />
          </Text>
          <Text fontSize="15px" fontWeight="bold">
            Мэдэгдэл явуулах
          </Text>
        </HStack>
      </Card>
      <Stack
        spacing={8}
        w="100%"
        bg={useColorModeValue("white", "gray.700")}
        rounded="lg"
        boxShadow="lg"
        p={{ base: 5, sm: 10 }}
        mt={"20px"}
        pl="230px"
      >
        <VStack spacing={4} w="100%">
          <Stack w="100%" spacing={3} direction={{ base: "column", md: "row" }}>
            <FormControl>
              <FormLabel>гарчиг</FormLabel>
              <Input
                value={title}
                h="50px"
                onChange={(e) => setTitle(e.target.value)}
                type="text"
              />
            </FormControl>
          </Stack>
          <FormControl>
            <FormLabel>тайлбар</FormLabel>
            <Textarea
              placeholder=" тайлбар"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </FormControl>
        </VStack>
        <VStack w="100%">
          <Button
            bg="green.300"
            color="white"
            _hover={{
              bg: "green.500",
            }}
            rounded="md"
            w={{ base: "100%", md: "max-content" }}
            onClick={() => createNotice()}
          >
            Бүртгэх
          </Button>
        </VStack>
      </Stack>
    </Box>
  );
};

export default NoticeAdd;
