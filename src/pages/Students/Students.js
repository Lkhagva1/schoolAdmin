import React, { useEffect, useState } from "react";
import {
  Box,
  Card,
  CardHeader,
  Heading,
  HStack,
  Link,
  TableContainer,
  VStack,
} from "@chakra-ui/react";
import {
  columnsData1,
  columnsData2,
} from "../../components/Students/StudentData";
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
import { FiTrash2, FiEdit, FiUserPlus, FiEdit2 } from "react-icons/fi";
import { FcGraduationCap } from "react-icons/fc";
import axios from "axios";
const studentData = [{
  "name": "John",
    "surname": "Doe",
    "mother_name": "Jane Doe",
    "father_name": "Richard Doe",
    "email": "john.doe@example.com",
    "Roll_No": "12345",
    "age": 25,
    "gender": "Male",
    "date_of_birth": "1998-03-15",
    "address": "123 Main St, Springfield",
    "mobile": "+1234567890",
    "clsName": "Class A",
    "addmision_year": 2021,
    "password": "securePassword123"
},
{
  "name": "John",
    "surname": "Doe",
    "mother_name": "Jane Doe",
    "father_name": "Richard Doe",
    "email": "john.doe@example.com",
    "Roll_No": "12345",
    "age": 25,
    "gender": "Male",
    "date_of_birth": "1998-03-15",
    "address": "123 Main St, Springfield",
    "mobile": "+1234567890",
    "clsName": "Class A",
    "addmision_year": 2021,
    "password": "securePassword123"
}
]
const Students = () => {
  const [studentList, setStudentList] = useState([]);
  useEffect(() => {
   if (studentData){
     setStudentList(studentData)
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
            All Students
          </Text>
          <HStack>
            <Button colorScheme={"green"} alignItems="center" textAlign={"end"}>
              <Link href="/students/add">
                <FiUserPlus />
              </Link>
            </Button>
          </HStack>
        </HStack>
      </Card>
      <Flex
        direction="column"
        // pt={{ base: "50px", md: "10px" }}
        w={{ sm: "50%", md: "100%", lg: "100%" }}
        overflowX={{ sm: "scroll", lg: "hidden" }}
      >
        <Flex justify="space-between" align="center" w="100%">
          <Stack
            direction={{ sm: "column", md: "row" }}
            spacing={{ sm: "4px", md: "12px" }}
            align="center"
            me="12px"
            my="24px"
            ml={"20px"}
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
                  <Th w="10%">img</Th>
                  <Th w="10%">Lastname</Th>
                  <Th w="10%">Firstname</Th>
                  <Th w="10%">Rd</Th>
                  <Th w="10%"> MotherName</Th>
                  <Th w="10%">email</Th>
                  <Th w="10%">cource</Th>
                  <Th w="10%">age</Th>
                  <Th w="10%">gender</Th>
                  <Th w="10%">birthday</Th>
                  <Th w="10%">phone</Th>
                  <Th w="10%">Roll no</Th>
                  <Th w="10%">address</Th>
                  <Th w="10%">year of admission</Th>
                  <Th w="10%">action</Th>
                </Tr>
              </Thead>
              <Tbody>
                {studentList.map((e, index) => (
                  <Tr key={index}>
                    <Td>{index + 1}</Td>
                    <Td></Td>
                    <Td>{e.surname}</Td>
                    <Td>{e.name}</Td>
                    <Td>{e.father_name}</Td>
                    <Td>{e.mother_name}</Td>
                    <Td>{e.email}</Td>
                    <Td>{e.clsName} </Td>
                    <Td>{e.age}</Td>
                    <Td>{e.gender}</Td>
                    <Td>{e.date_of_birth}</Td>
                    <Td>{e.mobile}</Td>
                    <Td>{e.Roll_No}</Td>
                    <Td>{e.address}</Td>
                    <Td>{e.addmision_year}</Td>
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
                        // onClick={() => DeleteHandle(e._id)}
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
          >
            qw123456
          </Text>
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

export default Students;
