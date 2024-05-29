import Typography from "@mui/material/Typography";
import React from "react";
import { Link } from "react-router-dom";
// import bulbai from "../../../public/bulbai.png";

const Logo = () => {
  return (
    <div
      style={{
        display: "flex",
        marginRight: "auto",
        alignItems: "center",
        gap: "15px",
      }}
    >
      <Link to={"/"}>
        <img
          src="yaffa.png"
          alt="bulbai"
          width={"40px"}
          height={"40px"}
          className="image-inverted"
        />

      </Link>
      <Typography
          sx={{
            display: { md: "block", sm: "none", xs: "none" },
            mr: "auto",
            fontWeight: "800",
            textShadow: "2px 2px 20px #000",
          }}
        >
            <span style={{fontSize: '20px' }}>YAFFA</span><br/><span style={{fontSize: '10px'}}>your ai chat Boo</span>
        </Typography>
    </div>
  );
};

export default Logo;
