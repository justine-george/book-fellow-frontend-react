import axios from "axios";

const api = axios.create({
  baseURL: "https://mockapi.example.com", // Replace with your actual API URL when ready
});

export const login = async (email: string, password: string) => {
  // Simulating API call
  await new Promise((resolve) => setTimeout(resolve, 1000));
  if (email === "user@example.com" && password === "password") {
    return { token: "mock_token_12345" };
  }
  throw new Error("Invalid credentials");
};

export const register = async (email: string, password: string) => {
  // Simulating API call
  console.log("Registering user:", email, password);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return { token: "mock_token_67890" };
};

export default api;
