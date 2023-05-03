import {
  Flex,
  Text,
  Box,
  Heading,
  HStack,
  VStack,
  Container,
  Button,
} from "@chakra-ui/react";
// import { useRouter } from "next/router";
import { auth, db } from "../../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { Avatar, ChatEngine } from "react-chat-engine";
import { Card, IconButton, Input } from "@chakra-ui/react";
import { ArrowLeftIcon } from "@chakra-ui/icons";
import { FcGraduationCap } from "react-icons/fc";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Message from "./Message";
import {
  addDoc,
  collection,
  serverTimestamp,
  onSnapshot,
  query,
  orderBy,
} from "@firebase/firestore";

const Chat = () => {
  const [user] = useAuthState(auth);
  const history = useHistory();
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const divforscroll = useRef(null);
  // const [user, setUser] = useState(false);
  console.log("eww", user);
  useEffect(() => {
    const q = query(collection(db, "Messages"), orderBy("createAt"));
    const un = onAuthStateChanged(auth, (data) => {
      // setUser(data);
      // setLoading(false);
      // history.push("/chats");
    });
    const subscrite = onSnapshot(q, (snap) => {
      setMessages(
        snap.docs.map((item) => {
          const id = item.id;
          return { id, ...item.data() };
        })
      );
    });
    return () => {
      un();
      subscrite();
    };
  }, []);

  // const getFile = async (url) => {
  //   const response = await fetch(url);
  //   const data = await response.blob();
  //   return new File([data], "userPhoto.jpg", { type: "image/jpg" });
  // };
  // useEffect(() => {
  //   if (!user) {
  //     history.push("/");
  //     return;
  //   }
  //   axios
  //     .get("https://api.chatengine.io/users/me", {
  //       headers: {
  //         "project-id": "b1b22344-37fe-4395-93d1-82023a1be9c0",
  //         "user-name": user.email,
  //         "user-secret": user.uid,
  //       },
  //     })
  //     .then(() => {
  //       setLoading(false);
  //     })
  //     .catch(() => {
  //       let formdata = new FormData();
  //       formdata.append("email", user.email);
  //       formdata.append("username", user.displayName);
  //       formdata.append("secret", user.uid);
  //       getFile(user.photoURL).then((Avatar) => {
  //         formdata.append("avatar", Avatar, Avatar.name);
  //         axios
  //           .post("https://api.chatengine.io/users/", formdata, {
  //             headers: {
  //               "private-key": "fae0e818-f377-4530-9607-6b25430477b3",
  //             },
  //           })
  //           .then(() => setLoading(false))
  //           .catch((error) => console.log(error));
  //       });
  //     });
  // }, [user, history]);
  // if (!user || loading) return "loading...";
  const submithandler = async (e) => {
    e.preventDefault();
    try {
      setMessage("");
      await addDoc(collection(db, "Messages"), {
        text: message,
        uid: user.uid,
        uri: user.photoURL,
        createAt: serverTimestamp(),
      });
      divforscroll.current.scrollIntoView({ behavior: "smooth" });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Box ml="220px">
      <Box align={"center"}>
        <Card p="12px 5px" mb="12px" pl={"20px"}>
          <Text fontSize="15px" fontWeight="bold">
            гарах
          </Text>

          <IconButton
            size="sm"
            isRound
            icon={<ArrowLeftIcon />}
            onClick={() => signOut(auth)}
          />
        </Card>
      </Box>
      <Box bg="red.50">
        <Container h="70vh" bg="white">
          <VStack h={"full"} py={"4"}>
            <VStack h={"full"} w={"full"} overflowY={"auto"}>
              {messages.map((item) => (
                <Message
                  key={item.id}
                  user={item.uid === user.uid ? "me" : "other"}
                  text={item.text}
                  uri={item.uri}
                />
              ))}
              <div ref={divforscroll}></div>
            </VStack>
            <form
              onSubmit={submithandler}
              style={{ width: "100%", background: "#f7f7f7" }}
            >
              <HStack>
                <Input
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="text"
                />
                <Button type="submit" colorScheme="purple">
                  send
                </Button>
              </HStack>
            </form>
          </VStack>
        </Container>
      </Box>
      {/* <ChatEngine
        height="50%"
        projectID="
          b1b22344-37fe-4395-93d1-82023a1be9c0"
        userName="{user.email}"
        userSecret="{user.uid}"
      /> */}
    </Box>
  );
};

export default Chat;
