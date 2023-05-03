import React from "react";
import { auth, app } from "../../firebase";
import { Box, Button, Center, Heading, Stack, Text } from "@chakra-ui/react";
import { ChatIcon } from "@chakra-ui/icons";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { FcGraduationCap } from "react-icons/fc";
import { useHistory } from "react-router-dom";

const Sign = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const history = useHistory();
  return (
    <>
      <Center h="100vh" position={"fixed"} ml={"318px"}>
        <Stack
          align="center"
          bgColor="gray.600"
          p={16}
          rounded="3xl"
          spacing={12}
          boxShadow="lg"
        >
          <Box
            bgColor="blue.500"
            w="fit-content"
            p={5}
            rounded="3xl"
            boxShadow="md"
          >
            <ChatIcon w="100px" h="100px" color="white" />
          </Box>

          <Button
            boxShadow="md"
            onClick={() =>
              signInWithGoogle("", history.push("/chat"), {
                prompt: "select_account",
              })
            }
          >
            Sign In with Google
          </Button>
        </Stack>
      </Center>
    </>
  );
};

export default Sign;
