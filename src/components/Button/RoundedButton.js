import { Button } from "@chakra-ui/react";
import React from "react";

const RoundedButton = ({ title, width, onClick, disable }) => {
  return (
    <Button
      w={width}
      bg={"#45A735"}
      rounded={"full"}
      shadow={"md"}
      color={"#fff"}
      fontWeight={"normal"}
      fontSize={15}
      onClick={onClick}
      _hover={{
        bg: "#5AB54B",
      }}
      _focus={{
        outline: "none",
      }}
      disabled={disable}
    >
      {title}
    </Button>
  );
};

export default RoundedButton;
