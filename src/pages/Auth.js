import { HStack, Image, VStack, Box } from "@chakra-ui/react";
import React from "react";
import back from "../assets/infire/Acid/6528450.jpg";

const Auth = ({ children }) => {
  return (
    <Box>
      <HStack w={"full"} h={"100vh"}>
        <VStack w={"full"} h={"full"}>
          <Image src={back} height={"full"} w={"full"} objectFit={"cover"} />
        </VStack>
        <HStack
          h={"full"}
          align={"center"}
          justify={"center"}
          borderRadius={"md"}
          bg={"cyan.50"}
        >
          {children}
        </HStack>
      </HStack>
    </Box>
  );
};

export default Auth;
