import axios from "axios";
export const loginUser = async (email: string, password: string) => {
  const res = await axios.post("/user/login", { email, password });
  if (res.status !== 200) {
    throw new Error("Unable to login");
  }
  const data = await res.data;
  return data;
};

export const checkAuthStatus = async () => {
  const res = await axios.get("/user/auth-status");
  if (res.status !== 200) {
    throw new Error("Unable to authenticate");
  }
  const data = await res.data;
  return data;
};

export const sendChatRequest = async (message: string) => {
  const res = await axios.post("/chat/new", { message });
  if (res.status !== 200) {
    throw new Error("Unable to send chat");
  }
  const data = await res.data;
  return data;
};

// import axios, { AxiosResponse } from 'axios';

// export const sendChatRequest = async (message: string) => {
//   try {
//     const res: AxiosResponse = await axios.post("/api/v1/chat/new", { message });
//     if (res.status !== 200) {
//       throw new Error("Unexpected status code: " + res.status);
//     }
//     return res.data;
//   } catch (error: any) { // Explicitly specify the type of error as 'any'
//     if (error.response && error.response.status === 422) {
//       // Handle 422 Unprocessable Entity error
//       throw new Error("Unable to process the request: " + error.response.data.message);
//     } else {
//       throw new Error("Failed to send chat: " + error.message);
//     }
//   }
// };

export const getUserChats = async () => {
  const res = await axios.get("/chat/all-chats");
  if (res.status !== 200) {
    throw new Error("Unable to send chat");
  }
  const data = await res.data;
  return data;
};