import { Avatar, HStack, Text } from "@chakra-ui/react";
import React from "react";

const Message = ({ text, uri, user = "other" }) => {
  return (
    <HStack
      bg={"gray.100"}
      py="2"
      px={user === "me" ? "4" : "2"}
      borderRadius={"base"}
      alignSelf={user === "me" ? "flex-end" : "flex-start"}
    >
      {user === "other" && <Avatar src={uri} />}
      <Text>{text}</Text>
      {user === "me" && <Avatar src={uri} />}
    </HStack>
  );
};

export default Message;
