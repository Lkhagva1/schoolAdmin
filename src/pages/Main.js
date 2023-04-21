import {
  Box,
  Flex,
  Stack,
  VStack,
  useColorModeValue,
  // useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import Header from "../components/header/Header";
import SideBar from "../components/sidebar/SideBar";
// import { UseAuth } from "../hooks/UseAuth";
// import { useLocation } from "react-router-dom";

const Main = ({ children }) => {
  // const { isOpen, onOpen, onClose } = useDisclosure();
  // const context = useContext(UseAuth);
  // const location = useLocation();
  return (
    // <Box
    //   as="section"
    //   minH="100vh"
    //   bg={useColorModeValue("gray.50", "gray.900")}
    // >
    //   <SideBar
    //     onClose={() => onClose}
    //     display={{ base: "none", md: "unset" }}
    //   />
    //   <Drawer
    //     autoFocus={false}
    //     isOpen={isOpen}
    //     placement="left"
    //     onClose={onClose}
    //     returnFocusOnClose={false}
    //     onOverlayClick={onClose}
    //   >
    //     <DrawerContent>
    //       <SideBar onClose={onClose} />
    //     </DrawerContent>
    //   </Drawer>
    //   {/* mobilenav */}
    //   <Header onOpen={onOpen} />
    //   <Box>{children}</Box>
    // </Box>
    <Box
      as="section"
      minH="100vh"
      bg={useColorModeValue("gray.50", "gray.900")}
    >
      <Flex w={"full"} bg={"#F7FAFC"} h="100vh">
        <SideBar
          // onClose={() => onClose}
          display={{ base: "none", md: "unset" }}
        />
        <VStack w="full" spacing={"0"}>
          <Stack mx={"10"} w={"full"}>
            <Header />
          </Stack>
          <VStack
            w="full"
            h={"full"}
            overflowY="auto"
            sx={{
              "&::-webkit-scrollbar": {
                width: "10px",
                borderRadius: "8px",
                backgroundColor: `rgba(0, 0, 0, 0.05)`,
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: `rgba(0, 0, 0, 0.05)`,
                borderRadius: "8px",
              },
            }}
          >
            <Stack
              w={{ base: "xs", md: "100%", lg: "98%" }}
              mt={{
                base: "1",
                md: "6",
                lg: "8",
              }}
              mx={{
                base: "2",
                md: "8",
                lg: "5",
              }}
              alignSelf={{ base: "center", md: "center", lg: "flex-start" }}
            >
              {children}
            </Stack>
          </VStack>
        </VStack>
      </Flex>
    </Box>
  );
};

export default Main;
