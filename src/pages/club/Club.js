import React, {useEffect, useState} from "react";
import {
    Box,
    Card,
    Heading,
    HStack,
    Link,
    TableContainer,
} from "@chakra-ui/react";
import {
    Button,
    Flex,
    Icon,
    Input,
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
import {GrFormNext, GrFormPrevious} from "react-icons/gr";
import {FiTrash2, FiUserPlus, FiEdit2} from "react-icons/fi";
import {FcGraduationCap} from "react-icons/fc";
const item = {
    clubName: "Club Name",
    stuDetail: {
        name: "Student Name",
        clsName: "Class Name",
        Roll_No: "Roll Number"
    }
};
const Club = () => {
    const [Clublist, setClublist] = useState([item]);

    const filterIssue = Clublist && Clublist.filter((item) => !item.isIssue);
    return (
        <Box ml="225px" mt={"30px"} bg={"white"} rounded="lg" boxShadow={"lg"}>
            <Card p="12px 5px" mb="12px" pl={"20px"}>
                <HStack direction={"column"}>
                    <Text fontSize="20px" fontWeight="bold">
                        <FcGraduationCap/>
                    </Text>
                    <Text fontSize="15px" fontWeight="bold">
                        All clubs
                    </Text>
                    <HStack>
                        <Button colorScheme={"green"} alignItems="center" textAlign={"end"}>
                            <Link href="/club/add">
                                <FiUserPlus/>
                            </Link>
                        </Button>
                    </HStack>
                </HStack>
            </Card>
            <Flex
                direction="column"
                // pt={{ base: "50px", md: "10px" }}
                w={{sm: "50%", md: "100%", lg: "100%"}}
                overflowX={{sm: "scroll", lg: "hidden"}}
            >
                <Flex justify="space-between" align="center" w="100%">
                    <Stack
                        direction={{sm: "column", md: "row"}}
                        spacing={{sm: "4px", md: "12px"}}
                        align="center"
                        me="12px"
                        my="24px"
                        ml={"20px"}
                        minW={{sm: "100px", md: "200px"}}
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
                        placeholder="хайх..."
                        minW="75px"
                        maxW="175px"
                        fontSize="sm"
                        _focus={{borderColor: "#45a735"}}
                        // onChange={(e) => setGlobalFilter(e.target.value)}
                    />
                </Flex>
                <Flex p={6} direction="column">
                    <Heading mb={4}></Heading>
                    <TableContainer>
                        <Table size="sm" variant="striped" alignItems="flex-end">
                            <Thead>
                                <Tr>
                                    <Th w="5%">Club name</Th>
                                    <Th w="10%">Name</Th>
                                    <Th w="10%">course</Th>
                                    <Th w="10%">Roll No.</Th>
                                    <Th w="10%">action</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {filterIssue &&
                                    filterIssue.map((item, index) => (
                                        <Tr key={index}>
                                            <Td>{item.clubName}</Td>
                                            <Td>{item.stuDetail.name}</Td>
                                            <Td>{item.stuDetail.clsName}</Td>
                                            <Td>{item.stuDetail.Roll_No}</Td>
                                            <Td>
                                                <Button
                                                    bg={"transparent"}
                                                    fontSize="13px"
                                                >
                                                    <FiEdit2/>
                                                </Button>
                                                <Button
                                                    bg={"transparent"}
                                                    fontSize="13px"
                                                    // onClick={() => DeleteHandle(e._id)}
                                                >
                                                    <FiTrash2/>
                                                </Button>
                                            </Td>
                                        </Tr>
                                    ))}
                            </Tbody>
                        </Table>
                    </TableContainer>
                </Flex>
                <Flex
                    direction={{sm: "column", md: "row"}}
                    justify="space-between"
                    align="center"
                    px="22px"
                    w="100%"
                    paddingX={{md: "22px"}}
                >
                    <Text
                        fontSize="sm"
                        color="#45a735"
                        fontWeight="normal"
                        mb={{sm: "24px", md: "0px"}}
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
                            <Icon as={GrFormPrevious} w="16px" h="16px" color="gray.400"/>
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
                            <Icon as={GrFormNext} w="16px" h="16px" color="gray.400"/>
                        </Button>
                    </Stack>
                </Flex>
            </Flex>
        </Box>
    );
};

export default Club;
