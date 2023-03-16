import React from "react";
import {
  Box,
  Button,
  Card,
  FormControl,
  FormHelperText,
  FormLabel,
  HStack,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
  Stack,
  Text,
  Textarea,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { FcGraduationCap } from "react-icons/fc";
import { FiUserPlus } from "react-icons/fi";
const TeacherAdd = () => {
  return (
    <Box ml="225px" mt={"30px"} bg={"white"} rounded="lg" boxShadow={"lg"}>
      <Card p="12px 5px" mb="12px" pl={"20px"}>
        <HStack direction={"column"}>
          <Text fontSize="20px" fontWeight="bold">
            <FcGraduationCap />
          </Text>
          <Text fontSize="15px" fontWeight="bold">
            Багш нэмэх
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
          <Stack w="100%" spacing={3} direction={{ base: "column", md: "row" }}>
            <FormControl isRequired>
              <FormLabel>Овог</FormLabel>
              <Input placeholder="First name" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Нэр</FormLabel>
              <Input type="text" placeholder="Ahmad" rounded="md" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Хүйс</FormLabel>
              <Select placeholder="Хүйс сонгох">
                <option>Эрэгтэй</option>
                <option>эмэгтэй</option>
              </Select>
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Зэрэг</FormLabel>
              <Input type="text" placeholder="баклавр" rounded="md" />
            </FormControl>
            <FormControl>
              <FormLabel>Хаяг</FormLabel>
              <Select placeholder="Хаяг сонгох">
                <option>Улаанбаатар</option>
                <option>Аймаг</option>
              </Select>
            </FormControl>
          </Stack>
          <Stack w="100%" spacing={3} direction={{ base: "column", md: "row" }}>
            <FormControl>
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
              <FormHelperText>We'll never share your email.</FormHelperText>
            </FormControl>
            <FormControl>
              <FormLabel>Хэлтэс</FormLabel>
              <Select placeholder="хэлтэс сонгох">
                <option>Програм хангамж</option>
                <option>эмч</option>
                <option>сувилагч</option>
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel>Amount</FormLabel>
              <NumberInput max={50} min={10}>
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>
          </Stack>
          <FormControl id="message">
            <FormLabel>Message</FormLabel>
            <Textarea size="lg" placeholder="Enter your message" rounded="md" />
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
          >
            Бүртгэх
          </Button>
        </VStack>
      </Stack>
    </Box>
  );
};

export default TeacherAdd;
