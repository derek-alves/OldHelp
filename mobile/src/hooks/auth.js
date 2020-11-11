import React, {
  createContext,
  useCallback,
  useState,
  useEffect,
  useContext,
} from "react";
import AsyncStorage from "@react-native-community/async-storage";

import api from "../services/api";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStoragedData() {
      const [token, user] = await AsyncStorage.multiGet([
        "@OldHelp:token",
        "@OldHelp:user",
      ]);

      if (token[1] && user[1]) {
        api.defaults.headers.authorization = `Bearer ${token[1]}`;

        setData({ token: token[1], user: JSON.parse(user[1]) });
      }

      setLoading(false);
    }

    loadStoragedData();
  }, []);

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post("/sessions", {
      email,
      password,
    });

    const { user, token } = response.data;

    await AsyncStorage.multiSet([
      ["@OldHelp:token", token],
      ["@OldHelp:user", JSON.stringify(user)],
    ]);

    api.defaults.headers.authorization = `Bearer ${token}`;

    setData({
      user,
      token,
    });
  }, []);

  const signOut = useCallback(async () => {
    await AsyncStorage.multiRemove(["@OldHelp:token", "@OldHelp:user"]);
    setData({});
  }, []);

  const updateUser = useCallback(
    async (user) => {
      await AsyncStorage.setItem("@OldHelp:user", JSON.stringify(user));

      setData({
        token: data.token,
        user,
      });
    },
    [setData, data.token]
  );

  return (
    <AuthContext.Provider
      value={{ user: data.user, loading, signIn, signOut, updateUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
}
