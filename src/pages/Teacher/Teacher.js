import React from "react";
import { Box, Card, HStack, Link } from "@chakra-ui/react";
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
import {
  TiArrowSortedDown,
  TiArrowSortedUp,
  TiArrowUnsorted,
} from "react-icons/ti";
import { FcGraduationCap } from "react-icons/fc";
import { FiTrash2, FiEdit, FiUserPlus } from "react-icons/fi";
import {
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from "react-table";
const Teacher = () => {
  const columns = useMemo(() => columnsData1, []);
  const data = useMemo(() => columnsData2, []);
  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    gotoPage,
    pageCount,
    prepareRow,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    setPageSize,
    setGlobalFilter,
    state,
  } = tableInstance;
  const createPages = (count) => {
    let arrPageCount = [];

    for (let i = 1; i <= count; i++) {
      arrPageCount.push(i);
    }

    return arrPageCount;
  };
  const { pageIndex, pageSize, globalFilter } = state;
  return (
    <Box ml="225px" mt={"30px"} bg={"white"} rounded="lg" boxShadow={"lg"}>
      <Card p="12px 5px" mb="12px" pl={"20px"}>
        <HStack direction={"column"}>
          <Text fontSize="20px" fontWeight="bold">
            <FcGraduationCap />
          </Text>
          <Text fontSize="15px" fontWeight="bold">
            Бүх багш ажилчид
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
        w={{ sm: "50%", md: "100%", lg: "100%" }}
        overflowX={{ sm: "scroll", lg: "hidden" }}
      >
        <Flex justify="space-between" align="center" w="100%">
          <Stack
            direction={{ sm: "column", md: "row" }}
            spacing={{ sm: "4px", md: "12px" }}
            align="center"
            me="12px"
            ml={"20px"}
            my="24px"
            minW={{ sm: "100px", md: "200px" }}
          >
            <Select
              value={pageSize}
              onChange={(e) => setPageSize(Number(e.target.value))}
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
              хуудасны хувиарлалт
            </Text>
          </Stack>
          <Input
            type="text"
            placeholder="хайх..."
            minW="75px"
            maxW="175px"
            fontSize="sm"
            _focus={{ borderColor: "#45a735" }}
            onChange={(e) => setGlobalFilter(e.target.value)}
          />
        </Flex>
        <Table
          {...getTableProps()}
          variant="striped"
          color="gray.700"
          mb="24px"
        >
          <Thead>
            {headerGroups.map((headerGroup) => (
              <Tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <Th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    pe="0px"
                  >
                    <Flex
                      justify="space-between"
                      align="center"
                      fontSize={{ sm: "10px", lg: "12px" }}
                      color="gray.400"
                    >
                      {column.render("Header")}
                      <Icon
                        w={{ sm: "10px", md: "14px" }}
                        h={{ sm: "10px", md: "14px" }}
                        color={columns.isSorted ? "gray.500" : "gray.400"}
                        float="right"
                        as={
                          column.isSorted
                            ? column.isSortedDesc
                              ? TiArrowSortedDown
                              : TiArrowSortedUp
                            : TiArrowUnsorted
                        }
                      />
                    </Flex>
                  </Th>
                ))}
                <Th textAlign={"center"}>action</Th>
              </Tr>
            ))}
          </Thead>
          <Tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <Tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <Td {...cell.getCellProps()} fontSize={{ sm: "14px" }}>
                        {cell.render("Cell")}
                      </Td>
                    );
                  })}
                  <Td textAlign={"center"}>
                    <Button
                      bg={"transparent"}
                      fontSize="13px"
                      // onClick={() => DeleteHandle(e._id)}
                    >
                      <FiEdit color="green" />
                    </Button>
                    <Button
                      bg={"transparent"}
                      fontSize="13px"
                      // onClick={() => DeleteHandle(e._id)}
                    >
                      <FiTrash2 color="green" />
                    </Button>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
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
            Showing {pageSize * pageIndex + 1} to{" "}
            {pageSize * (pageIndex + 1) <= columnsData2.length
              ? pageSize * (pageIndex + 1)
              : columnsData2.length}{" "}
            of {columnsData2.length} entries
          </Text>
          <Stack direction="row" alignSelf="flex-end" spacing="4px" ms="auto">
            <Button
              variant="no-hover"
              onClick={() => previousPage()}
              transition="all .5s ease"
              w="40px"
              h="40px"
              borderRadius="50%"
              bg="#fff"
              border="1px solid lightgray"
              display={
                pageSize === 5 ? "none" : canPreviousPage ? "flex" : "none"
              }
              _hover={{
                bg: "gray.200",
                opacity: "0.7",
                borderColor: "gray.500",
              }}
            >
              <Icon as={GrFormPrevious} w="16px" h="16px" color="gray.400" />
            </Button>
            {pageSize === 5 ? (
              <NumberInput
                max={pageCount - 1}
                min={1}
                w="75px"
                mx="6px"
                defaultValue="1"
                onChange={(e) => gotoPage(e)}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper onClick={() => nextPage()} />
                  <NumberDecrementStepper onClick={() => previousPage()} />
                </NumberInputStepper>
              </NumberInput>
            ) : (
              createPages(pageCount).map((pageNumber) => {
                return (
                  <Button
                    variant="no-hover"
                    transition="all .5s ease"
                    onClick={() => gotoPage(pageNumber - 1)}
                    w="40px"
                    h="40px"
                    borderRadius="160px"
                    bg={pageNumber === pageIndex + 1 ? "#45a735" : "#fff"}
                    border="1px solid lightgray"
                    _hover={{
                      bg: "gray.200",
                      opacity: "0.7",
                      borderColor: "gray.500",
                    }}
                  >
                    <Text
                      fontSize="xs"
                      color={pageNumber === pageIndex + 1 ? "#fff" : "gray.600"}
                    >
                      {pageNumber}
                    </Text>
                  </Button>
                );
              })
            )}
            <Button
              variant="no-hover"
              onClick={() => nextPage()}
              transition="all .5s ease"
              w="40px"
              h="40px"
              borderRadius="160px"
              bg="#fff"
              border="1px solid lightgray"
              display={pageSize === 5 ? "none" : canNextPage ? "flex" : "none"}
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
