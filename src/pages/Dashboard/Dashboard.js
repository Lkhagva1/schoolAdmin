import React from "react";
import { Box, Flex, SimpleGrid, VStack } from "@chakra-ui/react";
import { statsData } from "../../components/StatCard/StatData";
import StatCard from "../../components/StatCard/StatCard";

const Dashboard = () => {
  return (
    <Flex
      flexDirection="column"
      maxW="7xl"
      pt={{ base: "120px", md: "75px" }}
      ml={"250px"}
    >
      <SimpleGrid columns={{ sm: 1, md: 2, xl: 4 }} spacing="24px" mb="20px">
        {statsData.map((data, index) => (
          <StatCard key={index} data={data} />
        ))}
      </SimpleGrid>
    </Flex>
  );
};

export default Dashboard;
