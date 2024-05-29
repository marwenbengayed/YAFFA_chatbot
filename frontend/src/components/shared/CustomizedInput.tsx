import React from "react";
import TextField from "@mui/material/TextField";

type Props = {
  name: String;
  type: String;
  label: String;
};

const CustomizedInput = (props: Props) => {
  return (
    <TextField
    margin="normal"
      InputLabelProps={{ style: { color: "white" } }}
      name={props.name}
      label={props.label}
      type={props.type}
      inputProps={{
        style: {
          width: "400px",
          borderRadius: 10,
          fontSize: 20,
          color: "white",
        },
      }}
    />
  );
};

export default CustomizedInput;
