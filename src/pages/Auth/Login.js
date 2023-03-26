import {
  Button,
  Heading,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  VStack,
  Icon,
  Flex,
  Box,
} from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { BiLock, BiUserCircle, BiLockOpen } from "react-icons/bi";
import { FiEye, FiEyeOff } from "react-icons/fi";
import RoundedButton from "../../components/Button/RoundedButton";
import AuthContext from "../../hooks/UseAuth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const history = useHistory();
  const { loginHandler } = useContext(AuthContext);

  return (
    <Box height={"full"}>
      {/* <Heading as="h3" size="lg" color={"#45A735"} fontWeight={"medium"}>
        Нэвтрэх
      </Heading> */}
      <Flex
        bg={"white"}
        p={12}
        borderRadius={12}
        boxShadow="lg"
        height={"full"}
      >
        <VStack w={"xs"} align={"flex-start"} spacing={10} mt={"200px"}>
          <Heading as="h3" size="lg" color={"#45A735"} fontWeight={"medium"}>
            Нэвтрэх
          </Heading>
          <VStack w={"full"} spacing={8}>
            <InputGroup alignItems={"center"} justifyContent={"center"}>
              <InputLeftElement children={<BiUserCircle color="black" />} />
              <Input
                variant={"flushed"}
                placeholder={"Хэрэглэгчийн нэр"}
                type={"text"}
                width={"full"}
                fontSize={15}
                fontWeight={"normal"}
                color={"#000"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                _hover={{
                  borderColor: "#45A735",
                }}
                _focus={{
                  borderColor: "#45A735",
                }}
              />
            </InputGroup>

            <InputGroup justifyContent={"center"} alignContent={"center"}>
              <InputLeftElement
                pointerEvents="none"
                children={<BiLock color="black" />}
              />
              <Input
                variant={"flushed"}
                placeholder={"Нууц үг"}
                type={show ? "text" : "password"}
                width={"full"}
                fontSize={15}
                fontWeight={"normal"}
                color={"#000"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                _hover={{
                  borderColor: "#45A735",
                }}
                _focus={{
                  borderColor: "#45A735",
                }}
                onKeyPress={(e) => {
                  if (email && password) {
                    if (e.key === "Enter") {
                      loginHandler(email, password);
                    }
                  }
                }}
              />
              <InputRightElement
                children={
                  <Icon
                    as={show ? FiEye : FiEyeOff}
                    w={4}
                    h={4}
                    mr={"2"}
                    color="#45A735"
                    onClick={() => setShow(!show)}
                    cursor={"pointer"}
                  />
                }
              />
            </InputGroup>

            <HStack w={"full"} align={"center"} justify={"space-between"}>
              <Button
                variant={"link"}
                fontWeight={"normal"}
                fontSize={15}
                // color={"#000"}
                onClick={() => history.push("/signup")}
                alignItems={"center"}
                justifyContent={"center"}
              >
                Нууц үг сэргээх
                <Icon as={"<BiLockOpen />"} ml="1" />
              </Button>
            </HStack>
          </VStack>
          <RoundedButton
            title={"Нэвтрэх"}
            width={"full"}
            onClick={() => loginHandler(email, password)}
          />
        </VStack>
      </Flex>
    </Box>
  );
};

export default Login;
