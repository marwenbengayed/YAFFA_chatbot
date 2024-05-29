import React, {  useLayoutEffect, useRef, useState } from "react";
import { Avatar, Box, Button, IconButton, Typography } from "@mui/material";
import { useAuth } from "../context/AuthContext";
import red from "@mui/material/colors/red";
import ChatItem from "../components/chat/ChatItem";
import { TbMessageCircleUp } from "react-icons/tb";
import { getUserChats, sendChatRequest } from "../helpers/api-communicator";
import toast from "react-hot-toast";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const Chat = () => {

  const inputRef = useRef<HTMLInputElement | null>(null);
  const auth = useAuth();
  const [chatMessages, setChatMessages] = useState<Message[]>([]);
  const handleSubmit = async () => {
    const content = inputRef.current?.value as string;
    if (inputRef && inputRef.current) {
      inputRef.current.value = "";
    }
    const newMessage: Message = { role: "user", content };
    setChatMessages((prev) => [...prev, newMessage]);
    const chatData = await sendChatRequest(content);
    setChatMessages([...chatData.chats]);
    
  };

useLayoutEffect(() => {
  if (auth?.isLoggedIn && auth.user) {
    toast.loading("loading chats", {id: "loadchats"});
    getUserChats().then((data) => {
      setChatMessages([...data.chats]);
      toast.success ("successfully loaded chats", {id: "loadchats"})
    }).catch(err =>{
      console.log(err);
      toast.error ("loading failed", {id:"loadchats"})
  });
  }
}, [auth]);



  return (
    <div className="chat-body">
      <Box
        sx={{
          display: "flex",
          flex: 1,
          width: "100%",
          height: "100%",
          mt: 3,
          gap: 3,
        }}
      >
        <Box
          sx={{
            display: { md: "flex", xs: "none", sm: "none" },
            flex: 0.2,
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              display: "flex",
              width: "100%",
              height: "60vh",
              bgcolor: "rgb(17, 29, 39)",
              borderRadius: 5,
              flexDirection: "column",
              mx: 3,
            }}
          >
            <Avatar
              sx={{
                mx: "auto",
                my: 2,
                bgcolor: "#87ceeb",
                color: "black",
                fontWeight: 700,
              }}
            >
              {auth?.user?.name[0]}
              {auth?.user?.name.split(" ")[1][0]}
            </Avatar>
            <Typography sx={{ mx: "auto", fontFamily: "work sans" }}>
              Hey, how you doing ? <br /> how can i help you today ?..
            </Typography>
            <Typography
              sx={{ mx: "auto", fontFamily: "work sans", my: 4, p: 3 }}
            >
              Ask me anything, but please, remember to avoid sharing private
              infos...
            </Typography>
            <Button
              sx={{
                width: "200px",
                my: "auto",
                color: "white",
                fontWeight: "700",
                borderRadius: 3,
                mx: "auto",
                bgcolor: red[300],
                ":hover": {
                  bgcolor: red.A400,
                },
              }}
            >
              Clear Conversation
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flex: { md: 0.8, xs: 1, sm: 1 },
            flexDirection: "column",
            px: 3,
          }}
        >
          <Typography
            sx={{ fontSize: "40px", color: "white", mb: 2, mx: "auto" }}
          >
            Yaffa v1.0.0
          </Typography>
          <Box
            sx={{
              width: "100%",
              height: "60vh",
              borderRadius: 3,
              mx: "auto",
              display: "flex",
              flexDirection: "column",
              overflow: "scroll",
              overflowX: "hidden ",
              scrollBehavior: "smooth",
              overflowY: "auto",
            }}
          >
            {chatMessages.map((chat, index) => (
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              <ChatItem content={chat.content} role={chat.role} key={index} />
            ))}
          </Box>
          <div
            style={{
              width: "100%",
              padding: "20px",
              borderRadius: 8,
              backgroundColor: "rgb(17,27,39)",
              display: "flex",
              margin: "auto",
            }}
          >
            {" "}
            <input
              ref={inputRef}
              type="text"
              style={{
                width: "100%",
                backgroundColor: "transparent",
                padding: "10px",
                border: "none",
                outline: "none",
                color: "#deb887",
                fontSize: "20px",
              }}
            />
            <IconButton
              onClick={handleSubmit}
              sx={{ ml: "auto", color: "#00ffff" }}
            >
              <TbMessageCircleUp />
            </IconButton>
          </div>
        </Box>
      </Box>
    </div>
  );
};

export default Chat;
