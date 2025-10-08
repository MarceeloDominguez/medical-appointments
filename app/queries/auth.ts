import { useAuth } from "@/contexts/AuthContext";
import { loginUser, registerUser } from "@/services/authService";
import { User } from "@/type/type";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import * as SecureStore from "expo-secure-store";

export const useRegisterUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (user: User) =>
      registerUser(user.name, user.email, user.password, user.role),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["auth"] });
    },
    onError: (error) => {
      console.error("Error registering user:", error);
    },
  });
};

export const useLoginUser = () => {
  const queryClient = useQueryClient();
  const { setUser } = useAuth();

  return useMutation({
    mutationFn: async ({
      email,
      password,
    }: {
      email: string;
      password: string;
    }) => loginUser(email, password),
    onSuccess: async (data) => {
      await SecureStore.setItemAsync("token", data.token);
      await SecureStore.setItemAsync("user", JSON.stringify(data.user));

      setUser(data.user);

      queryClient.invalidateQueries({ queryKey: ["auth"] });
    },
    onError: (error) => {
      console.error("Error logging in user:", error);
    },
  });
};
