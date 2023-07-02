import React from "react";
import { BeatLoader } from "react-spinners";
import { AppBar, Toolbar } from "@mui/material";

const AuthContext = React.createContext({
  AuthData: { user_id: "", email: "", role: "anonymous", isLoggedIn: false },
  LoginUser: () => {},
  LogoutUser: () => {},
});

export default AuthContext;

export function AuthProvider({ children }: any) {
  const [AuthData, setAuthData] = React.useState({
    user_id: "",
    email: "",
    role: "anonymous",
    isLoggedIn: false,
  });
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    // axios api call
    const success = false;
    if (success) {
      setAuthData({
        user_id: "01",
        email: "giannis@gmail.com",
        role: "admin",
        isLoggedIn: true,
      });
    }
    setIsLoading(false);
  }, []);

  const LoginUser = React.useCallback(() => {
    // axios call with form data
    setAuthData({
      user_id: "01",
      email: "giannis@gmail.com",
      role: "admin",
      isLoggedIn: true,
    });
  }, []);

  const LogoutUser = React.useCallback(() => {
    setAuthData({
      user_id: "",
      email: "",
      role: "anonymous",
      isLoggedIn: false,
    });
  }, []);

  return (
    <AuthContext.Provider value={{ AuthData, LoginUser: LoginUser, LogoutUser: LogoutUser }}>
      {isLoading ? (
        <>
          <AppBar position="fixed" sx={{ backgroundColor: "#1490b9" }}>
            <Toolbar></Toolbar>
          </AppBar>
          <BeatLoader size={20} color={"#123abc"} loading={isLoading} />
        </>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
}
