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
  Link,
  VStack,
} from "@chakra-ui/react";

import logo from "../../assets/logo/7799135-removebg.png";
import img from "../../assets/infire/Regular/fatal error_2.png";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import { navData } from "./SideBarData";
const SideBar = () => {
  const location = useLocation();
  const history = useHistory();
  return (
    <Flex
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
    >
      <VStack align={"center"} mx={"3"} justify={"space-between"} h={"full"}>
        <Flex
          h="20"
          alignItems="center"
          mx="1"
          justifyContent="space-between"
          mb={"30px"}
        >
          <HStack
            h="10"
            alignItems={"center"}
            mx="2"
            mt={"3"}
            mb={"1"}
            onClick={() => history.push("/dashboard")}
            cursor={"pointer"}
          >
            <Image
              src={logo}
              objectFit="contain"
              width={{ base: "50%", md: "full", lg: "full" }}
            />
            <CloseButton display={{ base: "block", md: "none" }} />
          </HStack>
        </Flex>
        <Divider />
        <Accordion allowMultiple w="100%">
          <Stack spacing={1}>
            {navData.map((e, index) =>
              e.drop ? (
                <AccordionItem key={index} border="none">
                  <AccordionButton
                    _focus={{ border: "none" }}
                    justifyContent={"space-between"}
                    _hover={{
                      backgroundColor: "#F7F7F7",
                      borderRadius: 10,
                    }}
                    style={{
                      textDecoration: "none",
                      width: "90%",
                      padding: 7,
                    }}
                    as={Link}
                    // t={e.toLink}
                    m={0}
                  >
                    <HStack align="center" cursor="pointer">
                      <Center
                        bg={
                          history.location.pathname.split("/")[1] ===
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
                            history.location.pathname.split("/")[1] ===
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
                          history.location.pathname.split("/")[1] ===
                          e.toLink.split("/")[1]
                            ? "#000"
                            : "#A0A0A0"
                        }
                        fontSize={"sm"}
                        fontWeight={
                          history.location.pathname.split("/")[1] ===
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
                        history.location.pathname.split("/")[1] ===
                        e.toLink.split("/")[1]
                          ? "#000"
                          : "#A0A0A0"
                      }
                    />
                  </AccordionButton>
                  <AccordionPanel py={0} my={2}>
                    <VStack align="center" cursor="pointer" ml={2}>
                      {e.drop.map((e, i) => (
                        <HStack
                          key={i}
                          as={Link}
                          href={e.toLink}
                          alignSelf="flex-start"
                          align={"center"}
                          w={"100%"}
                          p={2}
                          style={{
                            textDecoration: "none",

                            width: "90%",
                            padding: 8,
                          }}
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
                              history.location.pathname.split("/")[2] ===
                              e.toLink.split("/")[2]
                                ? "#45A735"
                                : "#A0A0A0"
                            }
                            as={e.icon}
                          />
                          <Text
                            w={"full"}
                            color={
                              history.location.pathname.split("/")[2] ===
                              e.toLink.split("/")[2]
                                ? "#000"
                                : "#A0A0A0"
                            }
                            fontSize={"sm"}
                            fontWeight={
                              history.location.pathname.split("/")[2] ===
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
              ) : e.toLink === "/profile" ||
                e.toLink === "/login" ||
                e.toLink === "/message/:id" ||
                e.toLink === "/chat/login" ? null : (
                <Link
                  className={"Link"}
                  key={index}
                  href={e.toLink}
                  style={{
                    textDecoration: "none",

                    width: "90%",
                    padding: 8,
                  }}
                  activeStyle={{
                    backgroundColor: "#fff",
                    borderRadius: 10,
                  }}
                >
                  <HStack align="center" cursor="pointer">
                    <Center
                      bg={
                        history.location.pathname.split("/")[1] ===
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
                          history.location.pathname.split("/")[1] ===
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
                        history.location.pathname.split("/")[1] ===
                        e.toLink.split("/")[1]
                          ? "#000"
                          : "#A0A0A0"
                      }
                      fontSize={"sm"}
                      fontWeight={
                        history.location.pathname.split("/")[1] ===
                        e.toLink.split("/")[1]
                          ? "medium"
                          : "normal"
                      }
                      ml={"2"}
                    >
                      {e.title}
                    </Text>
                  </HStack>
                </Link>
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
      </VStack>
    </Flex>
  );
};

export default SideBar;
