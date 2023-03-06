import React from "react";
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
import AuthContext from "../../hooks/UseAuth";
import { useContext } from "react";

const Header = ({ onOpen, ...rest }) => {
  const { logoutHandler } = useContext(AuthContext);
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="14"
      pos={"fixed"}
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

      <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
        <Box
          textAlign={{ base: "center", md: "left" }}
          fontFamily={"heading"}
          color={useColorModeValue("gray.800", "white")}
        >
          <Stack spacing={5} mr="50px">
            <InputGroup bg="white" borderRadius="5px" color="black">
              <Input placeholder="Search.." fontSize="10px" />
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
                  <Text fontSize="sm">admin</Text>
                  <Text fontSize="xs" color="gray.600">
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
              <MenuItem>Profile</MenuItem>
              <MenuItem>Settings</MenuItem>
              <MenuItem>Billing</MenuItem>
              <MenuDivider />
              <MenuItem onClick={logoutHandler}>Sign out</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
};

export default Header;
