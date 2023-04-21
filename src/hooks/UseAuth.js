import React, { createContext, useState } from "react";

import Cookies from "js-cookie";
import { useToast } from "@chakra-ui/react";

import axios from "axios";
const AuthContext = createContext();

export const UseAuth = (props) => {
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const id = "toast";

  const loginHandler = async (email, password) => {
    setIsLoading(true);
    axios
      .post("http://localhost:5000/signin", {
        email: email,
        password: password,
      })
      .then((result) => {
        console.log("login result -->", result.data.token);
        window.location.href = "/dashboard";
        Cookies.set("jwt", result.data.token);
        Cookies.set("user", result.data.user.lastname);
        Cookies.set("isLoggedIn", true);
        setIsLoading(false);
        setIsLoggedIn(true);
        if (!toast.isActive(id)) {
          toast({
            id,
            duration: 2000,
            position: "top",
            status: "success",
            description: "амжилттай нэвтэрлээ!",
          });
        }
      })
      .catch((result) => {
        setIsLoading(false);
        console.log("login err -->", result.data);
        if (!toast.isActive(id)) {
          toast({
            id,
            duration: 2000,
            position: "top",
            status: "error",
            description: "Таны нэвтрэх нэр эсвэл нууц үг буруу байна!",
          });
        }
      });
  };

  const logoutHandler = () => {
    // setIsLoading(true);
    window.location.href = "/login";
    Cookies.remove("jwt");
    Cookies.remove("user");
    Cookies.remove("isLoggedIn");
    setIsLoggedIn(false);
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
