import Cookies from "js-cookie";
import React, { createContext, useState } from "react";
const UserContext = createContext();

export const UserStore = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState("");
  const [refreshToken, setRefreshToken] = useState("");
  const [username, setUsername] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const loginSuccess = (Token, refToken, name) => {
    Cookies.set("token", Token);
    Cookies.set("refreshToken", refToken);
    Cookies.set("username", name);
    Cookies.set("user", true);
    setToken(Token);
    setRefreshToken(refToken);
    setUsername(name);
  };

  return (
    <UserContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        token,
        setToken,
        refreshToken,
        setRefreshToken,
        username,
        setUsername,
        isLoading,
        setIsLoading,
        loginSuccess,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContext;
