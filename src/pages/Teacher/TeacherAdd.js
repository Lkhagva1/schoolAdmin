import React, { useState } from "react";
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
  Toast,
  useColorModeValue,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { FcGraduationCap } from "react-icons/fc";
import { FiUserPlus } from "react-icons/fi";
import { Address, Gender, QuaF, Tarea } from "../../components/Variable/QuaF";
import axios from "axios";

const TeacherAdd = () => {
  const toast = useToast();
  const id = "test";
  const [surname, setSurName] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [empolyee_id, setEmpolyee_id] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [date_of_birth, setdate_of_birth] = useState("");
  const [address, setAddress] = useState("");
  const [mobile, setMobile] = useState("");
  const [qulification, setQulification] = useState("");
  const [teachArea, setTeaching_area] = useState("");
  const [joining_year, setjoining_year] = useState("");
  const [password, setPasword] = useState("");

  return (
    <Box ml="225px" mt={"30px"} bg={"white"} rounded="lg" boxShadow={"lg"}>
      <Card p="12px 5px" mb="12px" pl={"20px"}>
        <HStack direction={"column"}>
          <Text fontSize="20px" fontWeight="bold">
            <FcGraduationCap />
          </Text>
          <Text fontSize="15px" fontWeight="bold">
           Teacher add
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
            <FormControl isRequired>
              <FormLabel>Lastname</FormLabel>
              <Input
                value={surname}
                onChange={(e) => setSurName(e.target.value)}
                placeholder="lastname"
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>FirstName</FormLabel>
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="FirstName"
                rounded="md"
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Gender</FormLabel>
              <Select
                placeholder="Gender select"
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
              <FormLabel>Degree</FormLabel>
              <Select
                placeholder="Degree"
                value={qulification}
                id="selectId"
                onChange={(e) => setQulification(e.target.value)}
              >
                {QuaF.map((item) => (
                  <option value={item} key={item}>
                    {" "}
                    {item}{" "}
                  </option>
                ))}
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel>Address</FormLabel>
              <Select
                placeholder="Address select"
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
              <FormLabel>email</FormLabel>
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
              />
              <FormHelperText>We'll never share your email.</FormHelperText>
            </FormControl>
            <FormControl>
              <FormLabel>Birthday</FormLabel>
              <Input
                value={date_of_birth}
                onChange={(e) => setdate_of_birth(e.target.value)}
                type="date"
              />
            </FormControl>
            <FormControl>
              <FormLabel>Dept</FormLabel>
              <Select
                placeholder="Dept select"
                value={teachArea}
                id="selectId"
                onChange={(e) => setTeaching_area(e.target.value)}
              >
                {Tarea.map((item) => (
                  <option value={item} key={item}>
                    {" "}
                    {item}{" "}
                  </option>
                ))}
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel>year of admission</FormLabel>
              <Input
                value={joining_year}
                onChange={(e) => setjoining_year(e.target.value)}
                type="number"
              />
            </FormControl>
          </Stack>
          <Stack w="100%" spacing={3} direction={{ base: "column", md: "row" }}>
            <FormControl>
              <FormLabel>age</FormLabel>
              <NumberInput max={50} min={0}>
                <NumberInputField
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>
            <FormControl>
              <FormLabel>Phone</FormLabel>
              <Input
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                type="number"
              />
            </FormControl>
            <FormControl>
              <FormLabel>employee ID</FormLabel>
              <Input
                value={empolyee_id}
                onChange={(e) => setEmpolyee_id(e.target.value)}
                type="text"
              />
            </FormControl>
            <FormControl>
              <FormLabel>password</FormLabel>
              <Input
                value={password}
                onChange={(e) => setPasword(e.target.value)}
                type="password"
              />
            </FormControl>
          </Stack>
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
            Register
          </Button>
        </VStack>
      </Stack>
    </Box>
  );
};

export default TeacherAdd;
