import axios from "../axios";
import React, { createContext, useContext, useState } from "react";
import UserContext from "../context/UserContext";
import Cookies from "js-cookie";
import { useToast } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
const AuthContext = createContext();

export const UseAuth = (props) => {
  const { setIsLoading, loginSuccess } = useContext(UserContext);
  const history = useHistory();
  const toast = useToast();
  const id = "toast";
  const [user, setUser] = useState(false);
  const loginHandler = async (user, pass) => {
    console.log("login", user, pass);
    setIsLoading(true);
    axios
      .post("api/login", {
        username: user,
        password: pass,
      })
      .then((result) => {
        console.log("login result -->", result.data);

        loginSuccess(
          result.data.accessToken,
          result.data.refreshToken,
          result.data.username
        );
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("login err -->", err.response);
        setIsLoading(false);
        // if (!toast.isActive(id)) {
        //   toast({
        //     id,
        //     duration: 2000,
        //     position: "top",
        //     status: "error",
        //     description:
        //       err.response.status === 400
        //         ? "Таны нэвтрэх нэр эсвэл нууц үг буруу байна!"
        //         : "Холболтын алдаа",
        //   });
        // }
      });
  };

  const logoutHandler = async () => {
    // const refToken = Cookies.get("refreshToken");
    // setIsLoading(false);
    setUser(false);
  };
  // try {
  //   axios
  //     .post("", { TheRefreshToken: refToken })
  //     .then((result) => {
  //       Cookies.remove("username");
  //       Cookies.remove("accessToken");
  //       Cookies.remove("refreshToken");
  //       Cookies.remove("user");
  //       setUser(false);
  //       setIsLoading(false);
  //     })
  //     .catch((error) => {
  //       setIsLoading(false);
  //     });
  // } catch (e) {
  // console.log(e);
  //   }
  // };

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
