import React from "react";
// import { TextField } from "@mui/material";
import classes from "./Input.module.css";

const Input = (props) => {
  return (
      <form className={classes["form-styles"]} onSubmit={props.submit}>
        <input className={classes["input-field"]} placeholder="Search high resolution Images, categories, wallpapers" label="Search" onChange={props.change} />
      </form>
  );
};

export default Input;
