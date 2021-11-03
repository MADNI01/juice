import { useEffect, useState } from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import classes from "./Social.module.css";
const Social = () => {


  return (
    <div className={classes.social}>
      <FaFacebookF />
      <FaInstagram />
      <FaTwitter />
    </div>
  );
};

export default Social;
