import React, { useEffect, useState } from "react";
import {
  Box,
  Card,
  Heading,
  HStack,
  Link,
  TableContainer,
  useToast,
} from "@chakra-ui/react";
import {
  Button,
  Flex,
  Icon,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
  Stack,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useMemo } from "react";

import { GrFormNext, GrFormPrevious } from "react-icons/gr";

import { FcGraduationCap } from "react-icons/fc";
import { FiTrash2, FiEdit, FiUserPlus, FiEdit2 } from "react-icons/fi";

import axios from "axios";
 const teacherData = [
  {
    "name": "Bat",
    "surname": "Erdene",
    "email": "bat.erdene@example.com",
    "employee_id": "EMP001",
    "qualification": "Bachelor of Education",
    "date_of_birth": "1990-05-10",
    "age": 34,
    "gender": "male",
    "joining_year": 2015,
    "address": "Ulaanbaatar, Mongolia",
    "password": "password123",
    "mobile": "99119911",
    "teaching_area": "Mathematics"
  },
  {
    "name": "Sarantuya",
    "surname": "Bold",
    "email": "sara.bold@example.com",
    "employee_id": "EMP002",
    "qualification": "Master of Arts",
    "date_of_birth": "1985-11-23",
    "age": 39,
    "gender": "female",
    "joining_year": 2010,
    "address": "Erdenet, Mongolia",
    "password": "securepass456",
    "mobile": "88118811",
    "teaching_area": "History"
  }
]
const Teacher = () => {
  const toast = useToast();
  const id = "test";
  const [teacherList, setTeacherList] = useState([]);
  useEffect(() => {
 if (teacherData){
   setTeacherList(teacherData)
 }
  }, []);

  return (
    <Box ml="225px" mt={"30px"} bg={"white"} rounded="lg" boxShadow={"lg"}>
      <Card p="12px 5px" mb="12px" pl={"20px"}>
        <HStack direction={"column"}>
          <Text fontSize="20px" fontWeight="bold">
            <FcGraduationCap />
          </Text>
          <Text fontSize="15px" fontWeight="bold">
            All teachers and staff
          </Text>
          <HStack>
            <Button colorScheme={"green"} alignItems="center" textAlign={"end"}>
              <Link href="/teachers/add">
                <FiUserPlus />
              </Link>
            </Button>
          </HStack>
        </HStack>
      </Card>
      <Flex
        direction="column"
        pt={{ base: "50px", md: "10px" }}
        overflowX={{ sm: "scroll", lg: "scroll" }}
      >
        <Flex justify="space-between" align="center" w="100%">
          <Stack
            direction={{ sm: "column", md: "row" }}
            spacing={{ sm: "4px" }}
            align="center"
            me="12px"
            ml={"20px"}
            my="24px"
            minW={{ sm: "100px", md: "200px" }}
          >
            <Select
              // value={pageSize}
              // onChange={(e) => setPageSize(Number(e.target.value))}
              color="#45a735"
              size="sm"
              borderRadius="12px"
              maxW="75px"
              cursor="pointer"
            >
              <option>5</option>
              <option>10</option>
              <option>15</option>
              <option>20</option>
              <option>25</option>
            </Select>
            <Text fontSize="xs" color="#45a735" fontWeight="normal">
              page layout
            </Text>
          </Stack>
          <Input
            type="text"
            placeholder="search..."
            minW="75px"
            maxW="175px"
            fontSize="sm"
            _focus={{ borderColor: "#45a735" }}
            // onChange={(e) => setGlobalFilter(e.target.value)}
          />
        </Flex>
        <Flex p={6} direction="column">
          <Heading mb={4}></Heading>

          <TableContainer>
            <Table size="sm" variant="striped" alignItems="flex-end">
              <Thead>
                <Tr>
                  <Th w="5%">ID</Th>
                  <Th w="10%">IMG</Th>
                  <Th w="10%">Lastname</Th>
                  <Th w="10%">firstname</Th>
                  <Th w="10%">email</Th>
                  <Th w="10%">employee Id</Th>
                  <Th w="10%">age</Th>
                  <Th w="10%">gender</Th>
                  <Th w="10%">birthday</Th>
                  <Th w="10%">address</Th>
                  <Th w="10%">phone</Th>
                  <Th w="10%">degree</Th>
                  <Th w="10%">dept</Th>
                  <Th w="10%">year of admission</Th>
                  <Th w="10%">action</Th>
                </Tr>
              </Thead>
              <Tbody>
                {teacherList.map((e, index) => (
                  <Tr key={index}>
                    <Td>{index + 1}</Td>
                    <Td></Td>
                    <Td>{e.surname}</Td>
                    <Td>{e.name}</Td>
                    <Td>{e.email}</Td>
                    <Td>{e.empolyee_id} </Td>
                    <Td>{e.age}</Td>
                    <Td>{e.gender}</Td>
                    <Td>{e.date_of_birth}</Td>
                    <Td>{e.address}</Td>
                    <Td>{e.mobile}</Td>
                    <Td>{e.qulification}</Td>
                    <Td>{e.teaching_area}</Td>
                    <Td>{e.joining_year}</Td>
                    <Td>
                      <Button
                        bg={"transparent"}
                        fontSize="13px"
                        // onClick={() => DeleteHandle(e._id)}
                      >
                        <FiEdit2 />
                      </Button>
                      <Button
                        bg={"transparent"}
                        fontSize="13px"
                      >
                        <FiTrash2 />
                      </Button>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </Flex>
        <Flex
          direction={{ sm: "column", md: "row" }}
          justify="space-between"
          align="center"
          px="22px"
          w="100%"
          paddingX={{ md: "22px" }}
        >
          <Text
            fontSize="sm"
            color="#45a735"
            fontWeight="normal"
            mb={{ sm: "24px", md: "0px" }}
          ></Text>
          <Stack direction="row" alignSelf="flex-end" spacing="4px" ms="auto">
            <Button
              variant="no-hover"
              // onClick={() => previousPage()}
              transition="all .5s ease"
              w="40px"
              h="40px"
              borderRadius="50%"
              bg="#fff"
              border="1px solid lightgray"
              // display={
              //   pageSize === 5 ? "none" : canPreviousPage ? "flex" : "none"
              // }
              _hover={{
                bg: "gray.200",
                opacity: "0.7",
                borderColor: "gray.500",
              }}
            >
              <Icon as={GrFormPrevious} w="16px" h="16px" color="gray.400" />
            </Button>

            <Button
              variant="no-hover"
              // onClick={() => nextPage()}
              transition="all .5s ease"
              w="40px"
              h="40px"
              borderRadius="160px"
              bg="#fff"
              border="1px solid lightgray"
              // display={pageSize === 5 ? "none" : canNextPage ? "flex" : "none"}
              _hover={{
                bg: "gray.200",
                opacity: "0.7",
                borderColor: "gray.500",
              }}
            >
              <Icon as={GrFormNext} w="16px" h="16px" color="gray.400" />
            </Button>
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Teacher;
