import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import  {useAuth}  from "../../context/AuthContext";

const ChatItem = ({
  content,
  role,
}: {
  content: string;
  role: "user" | "assistant";
}) => {
    const auth = useAuth()
  return role === "assistant" ? (
    <Box sx={{ display: "flex", p: 2, bgcolor: "#2f4f4f", my: 2, gap: 2 }}>
      <Avatar sx={{ ml: "0" }}>
        <img src="unnamed.png" alt="yaffa" width={"100%"} />
      </Avatar>
      <Box>
        <Typography color={"#d2b48c"} fontSize={"20px"}>
          {content}
        </Typography>
      </Box>
    </Box>
  ) : (
    <Box sx={{ display: "flex", p: 2, bgcolor: "hwb(360, 100%, 100%)",  gap: 2 }}>
    <Avatar sx={{ ml: "0",bgcolor:"#87ceeb", color:"black" }}>
    {auth?.user?.name[0]}
            {auth?.user?.name.split(" ")[1][0]}
    </Avatar>
    <Box>
      <Typography color={"#ffebcd"} fontSize={"20px"}>
        {content}
      </Typography>
    </Box>
  </Box>
  );
};

export default ChatItem;
