import React, { createContext, useContext, useState } from "react";

import Cookies from "js-cookie";
import { useToast } from "@chakra-ui/react";
import { useHistory, useLocation } from "react-router-dom";
import axios from "axios";
const AuthContext = createContext();

export const UseAuth = (props) => {
  const history = useHistory();
  const toast = useToast();
  const id = "toast";
  // const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // };

  const loginHandler = async (email, password, type) => {
    // console.log("login", user, password);
    axios
      .post("http://localhost:5000/signin", {
        email: email,
        password: password,
      })
      .then((result) => {
        console.log("login result -->", result.data);
        Cookies.set("jwt", result.data.token);
        Cookies.set("user", result.data.user.lastname);
        Cookies.set("isLoggedIn", true);
        localStorage.setItem(
          "currentUser",
          JSON.stringify(result.data.lastname)
        );
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
        console.log("login err -->", result.data);
        if (!toast.isActive(id)) {
          toast({
            id,
            duration: 2000,
            position: "top",
            status: "error",
            description:
              result.response.status === 400
                ? "Таны нэвтрэх нэр эсвэл нууц үг буруу байна!"
                : "Холболтын алдаа",
          });
        }
      });
  };

  const logoutHandler = async () => {
    Cookies.remove("jwt");
    Cookies.remove("user");
    Cookies.remove("isLoggedIn");
  };

  return (
    <AuthContext.Provider
      value={{
        loginHandler,
        logoutHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
