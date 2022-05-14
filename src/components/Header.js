import React from "react";
import Input from "./Input";
import classes from "../components/Header.module.css";

const Header = (props) => {
  return (
    <>
    <div className={classes.logo}><span className={classes.logotext}>Image Gallery</span></div>
    <div className={classes.headdiv}>
      <header className={classes.header}>
        <div className={classes["text-box"]}>
          <h1 className={classes["heading-primary"]}>Download High Quality Images by Creators</h1>
          <span className={classes["heading-sub"]}>Over 2.4 million+ stock Images by our talented community</span>
          <Input change={props.change} submit={props.submit} />
        </div>
      </header>
    </div>
    </>
  )
};

export default Header;