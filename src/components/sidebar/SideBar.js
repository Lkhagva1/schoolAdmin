import React from "react";
import {
  Box,
  CloseButton,
  Flex,
  useColorModeValue,
  Image,
  Icon,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  Text,
  AccordionPanel,
  Divider,
  Stack,
  HStack,
  Center,
  VStack,
  Menu,
  MenuButton,
  Avatar,
  MenuList,
  Button,
  MenuItem,
  color,
} from "@chakra-ui/react";
import { navData } from "./SideBarData";

import logo from "../../assets/logo/7799135-removebg.png";
import img from "../../assets/infire/Regular/fatal error_2.png";
import { NavLink, useLocation } from "react-router-dom";
const SideBar = ({ onClose, ...rest }) => {
  const location = useLocation();
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      overflowY={"scroll"}
      overflowX={"hidden"}
      css={{
        "&::-webkit-scrollbar": {
          width: "1px",
        },

        "&::-webkit-scrollbar-thumb": {
          background: "#f8f8f8",
          borderRadius: "24px",
        },
      }}
      overflow={{ bg: "green" }}
      boxShadow={"md"}
      rounded={"lg"}
      h="full"
      {...rest}
    >
      <Flex
        h="20"
        alignItems="center"
        mx="1"
        justifyContent="space-between"
        mb={"30px"}
      >
        <Image
          src={logo}
          objectFit="contain"
          width={{ base: "50%", md: "full", lg: "full" }}
        />
        <CloseButton
          display={{ base: "block", md: "none" }}
          onClick={onClose}
        />
      </Flex>
      <Divider />
      <Accordion allowMultiple w="100%">
        <Stack spacing={1}>
          {navData.map((e, index) =>
            e.subTitle ? (
              <AccordionItem key={index} border="none">
                <AccordionButton
                  _focus={{ border: "none" }}
                  justifyContent={"space-between"}
                  _hover={{
                    backgroundColor: "#F7F7F7",
                    borderRadius: 10,
                  }}
                  as={NavLink}
                  to={e.toLink}
                  m={0}
                >
                  <HStack align="center" cursor="pointer">
                    <Center
                      bg={
                        location.pathname.split("/")[1] ===
                        e.toLink.split("/")[1]
                          ? "#45A735"
                          : "#fff"
                      }
                      boxShadow={"base"}
                      borderRadius={"lg"}
                      p={2}
                    >
                      <Icon
                        fontSize="16"
                        color={
                          location.pathname.split("/")[1] ===
                          e.toLink.split("/")[1]
                            ? "#fff"
                            : "#45A735"
                        }
                        as={e.icon}
                      />
                    </Center>
                    <Text
                      w={"full"}
                      color={
                        location.pathname.split("/")[1] ===
                        e.toLink.split("/")[1]
                          ? "#000"
                          : "#A0A0A0"
                      }
                      fontSize={"sm"}
                      fontWeight={
                        location.pathname.split("/")[1] ===
                        e.toLink.split("/")[1]
                          ? "medium"
                          : "normal"
                      }
                      ml={"2"}
                    >
                      {e.title}
                    </Text>
                  </HStack>
                  <AccordionIcon
                    color={
                      location.pathname.split("/")[1] === e.toLink.split("/")[1]
                        ? "#45a735"
                        : "#A0A0A0"
                    }
                  />
                </AccordionButton>
                <AccordionPanel py={0} my={2}>
                  <VStack align="center" cursor="pointer" ml={2}>
                    {e.subTitle.map((e, i) => (
                      <HStack
                        key={i}
                        as={NavLink}
                        to={e.toLink}
                        alignSelf="flex-start"
                        align={"center"}
                        w={"100%"}
                        p={2}
                        mt={e.title === "Interval" ? 4 : 0}
                        transition="all 0.3s"
                        _hover={{
                          backgroundColor: "#F7F7F7",
                          borderRadius: 10,
                        }}
                      >
                        <Icon
                          fontSize="16"
                          color={
                            location.pathname.split("/")[2] ===
                            e.toLink.split("/")[2]
                              ? "#45A735"
                              : "#A0A0A0"
                          }
                          as={e.icon}
                        />
                        <Text
                          w={"full"}
                          color={
                            location.pathname.split("/")[2] ===
                            e.toLink.split("/")[2]
                              ? "#000"
                              : "#A0A0A0"
                          }
                          fontSize={"sm"}
                          fontWeight={
                            location.pathname.split("/")[2] ===
                            e.toLink.split("/")[2]
                              ? "medium"
                              : "normal"
                          }
                        >
                          {e.title}
                        </Text>
                      </HStack>
                    ))}
                  </VStack>
                </AccordionPanel>
              </AccordionItem>
            ) : e.toLink === "/login" ? null : (
              <NavLink
                className={"navLink"}
                key={index}
                to={e.toLink}
                style={{
                  textDecoration: "none",
                  alignSelf: "center",
                  width: "100%",
                  marginLeft: "30px",
                  marginTop: "8px",
                  marginBottom: "8px",
                }}
                activeStyle={{
                  backgroundColor: "#f8f8f8",
                  borderRadius: 10,
                }}
              >
                <HStack align="center" cursor="pointer">
                  <Center
                    bg={
                      location.pathname.split("/")[1] === e.toLink.split("/")[1]
                        ? "#45A735"
                        : "#fff"
                    }
                    boxShadow={"base"}
                    borderRadius={"lg"}
                    p={2}
                  >
                    <Icon
                      fontSize="16"
                      color={
                        location.pathname.split("/")[1] ===
                        e.toLink.split("/")[1]
                          ? "#fff"
                          : "#45A735"
                      }
                      as={e.icon}
                    />
                  </Center>
                  <Text
                    w={"full"}
                    color={
                      location.pathname.split("/")[1] === e.toLink.split("/")[1]
                        ? "#000"
                        : "#A0A0A0"
                    }
                    fontSize={"sm"}
                    fontWeight={
                      location.pathname.split("/")[1] === e.toLink.split("/")[1]
                        ? "medium"
                        : "normal"
                    }
                    ml={"2"}
                  >
                    {e.title}
                  </Text>
                </HStack>
              </NavLink>
            )
          )}
        </Stack>
      </Accordion>
      <Divider />
      <Flex
        h="20"
        alignItems="center"
        mx="1"
        justifyContent="space-between"
        mb={"30px"}
        mt={"30px"}
      >
        <Image
          src={img}
          objectFit="contain"
          width={{ base: "50%", md: "50%", lg: "full" }}
          h={{ base: "100%", md: "50%", lg: "full" }}
        />
      </Flex>
    </Box>
  );
};

export default SideBar;
