import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  Flex,
  Grid,
  SimpleGrid,
  Table,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
  useColorMode,
  useColorModeValue,
  Td,
  Link,
} from "@chakra-ui/react";
import { statsData } from "../../components/Dashboard/StatData";
import StatCard from "../../components/Dashboard/StatCard";
import {
  barChartData,
  barChartOptions,
  lineChartDataCharts2,
  lineChartOptionsCharts2,
} from "../../components/Variable/ChartData";
import { calendarDataCalendar } from "../../components/Dashboard/CalendarData";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import LineChart from "../../components/charts/LineChart";
import BarChart from "../../components/charts/BarChart";
import axios from "axios";
const teacher = [
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
const Dashboard = () => {
  const textColor = useColorModeValue("gray.700", "white");
  const tableRowColor = useColorModeValue("#F7FAFC", "navy.900");
  const borderColor = useColorModeValue("gray.200", "gray.600");
  const textTableColor = useColorModeValue("gray.500", "white");
  const events = [{ title: "Meeting", start: new Date() }];
  const { colorMode } = useColorMode();
  const [teacherList, setTeacherList] = useState([]);
  useEffect(() => {
    if (teacher.length > 0) {
      setTeacherList(teacher);
    }
  }, []);

  return (
    <Flex
      flexDirection="column"
      pt={{ base: "120px", md: "25px" }}
      ml="250px"
      mr={"20px"}
    >
      <SimpleGrid columns={{ sm: 1, md: 2, xl: 4 }} spacing="20px " mb={"20px"}>
        {statsData.map((data, index) => (
          <StatCard key={index} data={data} />
        ))}
      </SimpleGrid>

      <Grid
        templateColumns={{ sm: "1fr", lg: "2fr 1fr" }}
        templateRows={{ lg: "repeat(2, auto)" }}
        gap="20px"
      >
        <Card
          bg={
            colorMode === "dark" ? "navy.800" : "white"
            // : "linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%)"
          }
          p="0px"
          maxW={{ sm: "320px", md: "100%" }}
        >
          <Flex direction="column" mb="40px" p="28px 0px 0px 22px">
            <Text color="#222" fontSize="lg" fontWeight="bold" mb="6px">
              Student enrollment
            </Text>
            <Text color="#fff" fontSize="sm">
              <Text as="span" color="green.400" fontWeight="bold">
                (+5) more{" "}
              </Text>
              in 2022
            </Text>
          </Flex>
          <Box minH="300px">
            <LineChart
              chartData={lineChartDataCharts2}
              chartOptions={lineChartOptionsCharts2}
            />
          </Box>
        </Card>
        <Card p="0px" maxW={{ sm: "320px", md: "100%" }}>
          <Flex direction="column" mb="0px" p="28px 0px 0px 22px">
            <Text color="gray.400" fontSize="sm" fontWeight="bold" mb="6px">
              Calendar
            </Text>
            <Text color={"gray.500"} fontSize="lg" fontWeight="bold">
              Today
            </Text>
          </Flex>
          <Box minH="300px">
            {/* <BarChart chartData={barChartData} chartOptions={barChartOptions} /> */}
            <FullCalendar
              plugins={[dayGridPlugin]}
              headerToolbar={true}
              eventBackgroundColor="green"
              initialView="dayGridMonth"
              contentHeight="500"
              events={calendarDataCalendar}
              editable={false}
              minHeight="400px"
              height="400px"
              slotWidth={10}
              customIcons={false}
            />
          </Box>
        </Card>
        <Card p="0px" maxW={{ sm: "320px", md: "100%" }} pb={"70px"}>
          <Flex direction="column">
            <Flex align="center" justify="space-between" p="22px">
              <Text fontSize="lg" color={textColor} fontWeight="bold">
                Teachers and staff
              </Text>
              <Button colorScheme="green" maxH="30px" fontSize={"12px"}>
                <Link href={"/teachers"}>See all</Link>
              </Button>
            </Flex>
            <Box overflow={{ sm: "scroll", lg: "hidden" }}>
              <Table>
                <Thead>
                  <Tr bg={tableRowColor}>
                    <Th color="gray.400" borderColor={borderColor}>
                      Teacher's name
                    </Th>
                    <Th color="gray.400" borderColor={borderColor}>
                      Department
                    </Th>
                    <Th color="gray.400" borderColor={borderColor}>
                      Gender
                    </Th>
                    <Th color="gray.400" borderColor={borderColor}>
                      The day I joined
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {teacherList.map((el, index, arr) => {
                    return (
                      <Tr key={index}>
                        <Td
                          color={textTableColor}
                          fontSize="sm"
                          fontWeight="bold"
                          borderColor={borderColor}
                          border={index === arr.length - 1 ? "none" : null}
                        >
                          {el.surname}
                        </Td>
                        <Td
                          color={textTableColor}
                          fontSize="sm"
                          border={index === arr.length - 1 ? "none" : null}
                          borderColor={borderColor}
                        >
                          {el.teaching_area}
                        </Td>
                        <Td
                          color={textTableColor}
                          fontSize="sm"
                          border={index === arr.length - 1 ? "none" : null}
                          borderColor={borderColor}
                        >
                          {el.gender}
                        </Td>
                        <Td
                          color={textTableColor}
                          fontSize="sm"
                          border={index === arr.length - 1 ? "none" : null}
                          borderColor={borderColor}
                        >
                          {el.joining_year}
                        </Td>
                      </Tr>
                    );
                  })}
                </Tbody>
              </Table>
            </Box>
          </Flex>
        </Card>
        <Card p="0px" maxW={{ sm: "320px", md: "100%" }}>
          <Flex direction="column">
            <Flex align="center" justify="space-between" p="22px">
              <Text fontSize="lg" color={textColor} fontWeight="bold">
                Average class attendance
              </Text>
              <Button colorScheme="green" maxH="30px" fontSize={"12px"}>
                See all
              </Button>
            </Flex>
          </Flex>
          <BarChart chartData={barChartData} chartOptions={barChartOptions} />
        </Card>
      </Grid>
    </Flex>
  );
};

export default Dashboard;
