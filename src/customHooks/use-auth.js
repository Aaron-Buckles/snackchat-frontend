import React, { useState, useEffect, useContext, createContext } from "react";
import userService from "../services/userService";
import Cookies from "js-cookie";
import jsonwebtoken from "jsonwebtoken";
import { toast } from "react-toastify";

const authContext = createContext();

// Provider component that wraps your app and makes auth object ...
// ... available to any child component that calls useAuth().
export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

// Hook for child components to get the auth object ...
// ... and re-render when it changes.
export const useAuth = () => {
  return useContext(authContext);
};

// Provider hook that creates auth object and handles state
function useProvideAuth() {
  // I changed the default to false, so that it makes the use signin if they're not already
  // I can see problems with this approach. Might ask the user to sign in when they already are
  const [user, setUser] = useState(false);

  const signin = async loginInfo => {
    const response = await userService.loginUser(loginInfo);
    Cookies.set("token", response.token);
    setUser(jsonwebtoken.decode(response.token));
    console.log(response);
    return response;
  };

  const signup = async userInfo => {
    const response = await userService.postUser(userInfo);
    console.log(response);

    // setUser(response.user)
  };

  const signout = () => {
    Cookies.remove("token");
    setUser(false);
    toast.success("Successfully logged out");
  };

  // Subscribe to user on mount
  // Because this sets state in the callback it will cause any ...
  // ... component that utilizes this hook to re-render with the ...
  // ... latest auth object.
  useEffect(() => {
    if (Cookies.get("token")) {
      // get cookie, send to backend, validate it, if expire make login again, if get token back assign it
      setUser(jsonwebtoken.decode(Cookies.get("token")));
    } else {
      setUser(null);
    }
    // const unsubscribe = () => {
    //     if (Cookies.get("token")) {
    //         // get cookie, send to backend, validate it, if expire make login again, if get token back assign it
    //         setUser(jsonwebtoken.decode(Cookies.get("token")));
    //     } else {
    //         setUser(null);
    //     }
    // };

    // // Cleanup subscription on unmount
    // return () => unsubscribe();
  }, []);

  // Return the user object and auth methods
  return {
    user,
    signin,
    signup,
    signout
  };
}
