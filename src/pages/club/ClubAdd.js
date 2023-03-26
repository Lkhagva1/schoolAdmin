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
const ClubAdd = () => {
  const toast = useToast();
  const id = "test";
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const createClub = () => {
    axios
      .post("http://localhost:5000/addclub", {
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
            Клуб нэмэх
          </Text>
          {/* <HStack>
          <Button colorScheme={"green"} alignItems="center" textAlign={"end"}>
            <FiUserPlus />
          </Button>
        </HStack> */}
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
          {/* <Stack w="100%" spacing={3} direction={{ base: "column", md: "row" }}>
            <FormControl isRequired>
              <FormLabel>Овог</FormLabel>
              <Input
                value={surname}
                onChange={(e) => setSurName(e.target.value)}
                placeholder="овог"
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Нэр</FormLabel>
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Ahmad"
                rounded="md"
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Эхийн нэр</FormLabel>
              <Input
                value={mother_name}
                onChange={(e) => setMother_name(e.target.value)}
                type="text"
                placeholder="Ahmad"
                rounded="md"
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Эцэг нэр</FormLabel>
              <Input
                value={father_name}
                onChange={(e) => setFather_name(e.target.value)}
                type="text"
                placeholder="Ahmad"
                rounded="md"
              />
            </FormControl>
          </Stack>
          <Stack w="100%" spacing={3} direction={{ base: "column", md: "row" }}>
            <FormControl isRequired>
              <FormLabel>Хүйс</FormLabel>
              <Select
                placeholder="Хүйс сонгох"
                value={gender}
                id="selectId"
                onChange={(e) => setGender(e.target.value)}
              >
                {Gender.map((item) => (
                  <option value={item} key={item}>
                    {" "}
                    {item}{" "}
                  </option>
                ))}
              </Select>
            </FormControl>
            <FormControl isRequired>
              <FormLabel>курс</FormLabel>
              <Select
                placeholder="курс сонгох"
                id="selectId"
                value={clsName}
                onChange={(e) => setClsName(e.target.value)}
              >
                {CName.map((item) => (
                  <option value={item} key={item}>
                    {" "}
                    {item}{" "}
                  </option>
                ))}
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel>Хаяг</FormLabel>
              <Select
                placeholder="Хаяг сонгох"
                id="selectId"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              >
                {Address.map((item) => (
                  <option value={item} key={item}>
                    {" "}
                    {item}{" "}
                  </option>
                ))}
              </Select>
            </FormControl>
          </Stack>
          <Stack w="100%" spacing={3} direction={{ base: "column", md: "row" }}>
            <FormControl>
              <FormLabel>Цахим хаяг</FormLabel>
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
              />
              <FormHelperText>We'll never share your email.</FormHelperText>
            </FormControl>
            <FormControl>
              <FormLabel>төрсөн он сар өдөр</FormLabel>
              <Input
                value={date_of_birth}
                onChange={(e) => setDate_of_birth(e.target.value)}
                type="date"
              />
            </FormControl>
            <FormControl>
              <FormLabel>элссэн он</FormLabel>
              <Input
                value={addmision_year}
                onChange={(e) => setAddmision_year(e.target.value)}
                type="number"
              />
            </FormControl>
          </Stack> */}
          <Stack w="100%" spacing={3} direction={{ base: "column", md: "row" }}>
            <FormControl>
              <FormLabel>клубын нэр</FormLabel>
              <Input
                value={title}
                h="50px"
                onChange={(e) => setTitle(e.target.value)}
                type="text"
              />
            </FormControl>
          </Stack>
          <FormControl>
            <FormLabel>Үйл ажиллагаа</FormLabel>
            <Textarea
              placeholder="үйл ажиллагааны тайлбар"
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
            onClick={() => createClub()}
          >
            Бүртгэх
          </Button>
        </VStack>
      </Stack>
    </Box>
  );
};

export default ClubAdd;
