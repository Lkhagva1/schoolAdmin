import React from "react";
import {
  Box,
  Button,
  Card,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Radio,
  RadioGroup,
  Select,
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
import { CName, Credit_Data } from "../../components/Variable/QuaF";
const Subject = () => {
  const toast = useToast();
  const id = "test";
  const [sName, setsName] = useState("");
  const [sCode, setsCode] = useState("");
  const [sClass, setsClass] = useState("");
  const [sCredit, setsCredit] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const createNotice = () => {
    axios
      .post("http://localhost:5000/addSub", {
        sub_name: sName,
        sub_code: sCode,
        sub_class: sClass,
        sub_credit: sCredit,
        sub_type: selectedOption,
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
            Үзэх хичээл
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
              <FormLabel>Хичээлийн нэр</FormLabel>
              <Input
                value={sName}
                h="50px"
                placeholder="Хичээлийн нэр"
                onChange={(e) => setsName(e.target.value)}
                type="text"
              />
            </FormControl>
            <FormControl>
              <FormLabel>Хичээлийн код</FormLabel>
              <Input
                value={sCode}
                h="50px"
                placeholder="Хичээлийн код"
                onChange={(e) => setsCode(e.target.value)}
                type="text"
              />
            </FormControl>
          </Stack>
          <Stack w="100%" spacing={3} direction={{ base: "column", md: "row" }}>
            <FormControl>
              <FormLabel>курс</FormLabel>
              <Select
                placeholder="курс сонгох"
                value={sClass}
                id="selectId"
                onChange={(e) => setsClass(e.target.value)}
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
              <FormLabel>кредит</FormLabel>
              <Select
                placeholder="кредит сонгох"
                value={sCredit}
                id="selectId"
                onChange={(e) => setsCredit(e.target.value)}
              >
                {Credit_Data.map((item) => (
                  <option value={item} key={item}>
                    {" "}
                    {item}{" "}
                  </option>
                ))}
              </Select>
            </FormControl>
          </Stack>
          <RadioGroup defaultValue="2">
            <Stack spacing={5} direction="row">
              <Radio
                colorScheme="red"
                value="Theoretical"
                checked={selectedOption === "Theoretical"}
                onChange={(e) => setSelectedOption(e.target.value)}
              >
                Лекц
              </Radio>
              <Radio
                colorScheme="green"
                value="Practical"
                checked={selectedOption === "Practical"}
                onChange={(e) => setSelectedOption(e.target.value)}
              >
                Танхим
              </Radio>
            </Stack>
          </RadioGroup>
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

export default Subject;
