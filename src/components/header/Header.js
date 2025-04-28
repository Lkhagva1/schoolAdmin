import React, { useEffect, useState } from "react";
import {
  IconButton,
  Avatar,
  Box,
  Flex,
  HStack,
  VStack,
  useColorModeValue,
  Text,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Image,
  Stack,
  InputGroup,
  Input,
} from "@chakra-ui/react";
import {
  FiChevronRight,
  FiMenu,
  FiBell,
  FiChevronDown,
  FiSearch,
} from "react-icons/fi";
import { BiExpand, BiPaperPlane, BiSearch } from "react-icons/bi";

import { useContext } from "react";
import Cookies from "js-cookie";
import { navData } from "../sidebar/SideBarData";
import { useLocation } from "react-router-dom";
import UseAuth from "../../hooks/UseAuth";

const Header = ({ onOpen, ...rest }) => {
  const location = useLocation();
  const { logoutHandler } = useContext(UseAuth);
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="14"
      w={{ base: "full", md: "85%", lg: "85%" }}
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      boxShadow={"md"}
      rounded={"lg"}
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent={{ base: "space-between", md: "flex-end" }}
      {...rest}
    >
      <IconButton
        display={{ base: "flex", md: "none" }}
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />
      <VStack
        alignItems={"flex-start"}
        spacing={0}
        display={{ base: "none", base: "none", lg: "flex" }}
      >
        <Breadcrumb
          spacing="4px"
          separator={<FiChevronRight color="gray.500" />}
        >
          <BreadcrumbItem>
            <BreadcrumbLink href="/dashboard" fontSize={12}>
              Pages

            </BreadcrumbLink>
          </BreadcrumbItem>
          {navData.filter((e) => e.toLink !== "/profile") ? (
            location.pathname === "/" ? null : location.pathname ? (
              <BreadcrumbItem>
                <BreadcrumbLink href={location.pathname} fontSize={12}>
                  {
                    navData.find(
                      (e) =>
                        e.toLink.split("/")[1] ===
                        location.pathname.split("/")[1]
                    ).title
                  }
                </BreadcrumbLink>
              </BreadcrumbItem>
            ) : null
          ) : null}
        </Breadcrumb>
        <Text color={"#45A735"} fontWeight={"medium"} fontSize={12}>
          {location.pathname === "/dashboard"
            ? "dashboard"
            : location.pathname === "/profile"
            ? "profile"
            : location.pathname === "/students"
            ? "students"
            : location.pathname === "/students/add"
            ? "students add"
            : location.pathname === "/teachers"
            ? "teachers"
            : location.pathname === "/teachers/add"
            ? "teachers add"
            : location.pathname === "/club"
            ? "club"
            : location.pathname === "/club/add"
            ? "club add"
            : location.pathname === "/complain"
            ? "complain"
            : location.pathname === "/notice"
            ? "notice"
            : location.pathname === "/notice/add"
            ? "notice add"
            : location.pathname === "/subject"
            ? "subject"
            : location.pathname === "/calendar"
            ? "calendar"
            : location.pathname === "/event"
            ? "event"
            : location.pathname === "/library"
            ? "library"
            : location.pathname === "/chat"
            ? "chat"
            : null}
        </Text>
      </VStack>
      <Flex flex={{ base: 1 }} justify={{ base: "center", md: "end" }}>
        <Box
          textAlign={{ base: "center", md: "left" }}
          fontFamily={"heading"}
          color={useColorModeValue("gray.800", "white")}
        >
          <Stack spacing={5} mr="50px">
            <InputGroup bg="white" borderRadius="5px" color="black">
              <Input placeholder="хайх.." fontSize="10px" />
              <IconButton
                display={{ base: "flex", md: "flex" }}
                variant="outline"
                aria-label="open menu"
                icon={<FiSearch />}
              />
            </InputGroup>
          </Stack>
        </Box>
      </Flex>

      <HStack spacing={{ base: "0", md: "6" }}>
        <IconButton
          size="lg"
          variant="ghost"
          aria-label="open menu"
          icon={<BiExpand />}
        />
        <IconButton
          size="lg"
          variant="ghost"
          aria-label="open menu"
          icon={<BiPaperPlane />}
        />
        <IconButton
          size="lg"
          variant="ghost"
          aria-label="open menu"
          icon={<FiBell />}
        />
        <Flex alignItems={"center"}>
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: "none" }}
            >
              <HStack>
                <Avatar
                  size={"sm"}
                  src={
                    "https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                  }
                />
                <VStack
                  display={{ base: "none", md: "flex" }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2"
                >
                  <Text fontSize="sm">{Cookies.get("user")}</Text>
                  <Text fontSize="xs" color="#45a735">
                    Admin
                  </Text>
                </VStack>
                <Box display={{ base: "none", md: "flex" }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue("white", "gray.900")}
              borderColor={useColorModeValue("gray.200", "gray.700")}
            >
              <MenuItem>Профайл</MenuItem>
              <MenuItem>Тохиргоо</MenuItem>
              <MenuItem>Данс</MenuItem>
              <MenuDivider />
              <MenuItem onClick={()=>logoutHandler(true)}>Гарах</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
};

export default Header;
