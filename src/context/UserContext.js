import Cookies from "js-cookie";
import React, { createContext, useState } from "react";
const UserContext = createContext();

export const UserStore = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [accessToken, setAccessToken] = useState("");
  const [refreshToken, setRefreshToken] = useState("");
  const [username, setUsername] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(false);

  const loginSuccess = (accToken, refToken, name) => {
    Cookies.set("accessToken", accToken);
    Cookies.set("refreshToken", refToken);
    Cookies.set("username", name);
    Cookies.set("user", true);
    setAccessToken(accToken);
    setRefreshToken(refToken);
    setUsername(name);
    setUser(true);
  };
  return (
    <UserContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        accessToken,
        setAccessToken,
        refreshToken,
        setRefreshToken,
        username,
        setUsername,
        isLoading,
        setIsLoading,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContext;
