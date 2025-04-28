import React, { createContext, useState } from "react";

import Cookies from "js-cookie";
import { useToast } from "@chakra-ui/react";

import axios from "axios";
const AuthContext = createContext();
const user = {
  password: "admin",
  email: "admin"
};
export const UseAuth = (props) => {
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const id = "toast";

  const loginHandler = async (email, password) => {
    setIsLoading(true);
    if (email === user.email && password === user.password) {
      console.log("login result -->", user.email);
      window.location.href = "/dashboard";
      Cookies.set("jwt", user.email);
      Cookies.set("user", user.email);
      Cookies.set("isLoggedIn", true);
      setIsLoading(false);
      setIsLoggedIn(true);

      if (!toast.isActive(id)) {
        toast({
          id,
          duration: 2000,
          position: "top",
          status: "success",
          description: "Амжилттай нэвтэрлээ!",
        });
      }
    } else {
      setIsLoading(false);
      if (!toast.isActive(id)) {
        toast({
          id,
          duration: 2000,
          position: "top",
          status: "error",
          description: "Таны нэвтрэх нэр эсвэл нууц үг буруу байна!",
        });
      }
    }
  };

  const logoutHandler =async (boolean) => {
    console.log("logout result -->", boolean);
    if (boolean === true) {
      setIsLoading(true);

      // Cookies-уудыг устгана
      Cookies.remove("jwt");
      Cookies.remove("user");
      Cookies.remove("isLoggedIn");

      // State-ийг шинэчилнэ
      setIsLoggedIn(false);
      setIsLoading(false);

      // Нэвтрэх хуудас руу буцаана
      window.location.href = "/login";
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isLoading,
        isLoggedIn,
        setIsLoading,
        loginHandler,
        logoutHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
