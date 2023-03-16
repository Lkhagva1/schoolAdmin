import React from "react";
import {
  HStack,
  VStack,
  Text,
  useColorModeValue,
  Flex,
  Link,
  Icon,
  Box,
  Stack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { BsArrowUpShort, BsArrowDownShort } from "react-icons/bs";
const StatCard = ({ data }) => {
  return (
    <motion.div whileHover={{ translateY: -5 }}>
      <Stack
        direction="column"
        rounded="md"
        bg={"#fff"}
        boxShadow={useColorModeValue(
          "2px 4px 6px 1px rgba(160, 174, 192, 0.6)",
          "2px 4px 6px 1px rgba(9, 17, 28, 0.9)"
        )}
        w="100%"
        textAlign="left"
        align="center"
        spacing={0}
        role="group"
        overflow="hidden"
      >
        <HStack
          px={5}
          spacing={4}
          bg={useColorModeValue("white.100", "white.800")}
          w="100%"
        >
          <Flex
            justify="center"
            alignItems="center"
            rounded="lg"
            p={2}
            bg="#45a735"
            position="relative"
            w={12}
            h={12}
            overflow="hidden"
            lineHeight={0}
            boxShadow="inset 0 0 1px 1px rgba(0, 0, 0, 0.015)"
          >
            <Icon as={data.icon} w={6} h={6} color="white" />
          </Flex>
          <VStack spacing={0} align="start" maxW="lg" h="100%">
            <Text as="h3" fontSize="md" noOfLines={2} color="gray.400">
              {data.label}
            </Text>
            <HStack spacing={2}>
              <Text as="h2" fontSize="lg" fontWeight="extrabold">
                {data.score}
              </Text>
              <Flex>
                {Number(data.score) > 100 ? (
                  <Icon as={BsArrowUpShort} w={6} h={6} color="green.400" />
                ) : (
                  <Icon as={BsArrowDownShort} w={6} h={6} color="red.400" />
                )}
                <Text as="h2" fontSize="md">
                  {data.percentage}
                </Text>
              </Flex>
            </HStack>
          </VStack>
          <Box px={2} py={6} d="none" _groupHover={{ d: "flex" }}>
            <Link fontSize="sm">View</Link>
          </Box>
        </HStack>
      </Stack>
    </motion.div>
  );
};

export default StatCard;
