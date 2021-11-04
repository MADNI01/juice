import { useEffect, useRef } from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import gsap from "gsap";
import classes from "./Social.module.css";
const Social = () => {
  const socialRef = useRef(null)
  useEffect(()=>{
    gsap.from(socialRef.current,1,{x:-100})
    gsap.to(socialRef.current,3,{x:0,ease: "Expo.easeOut"})
  },[])



  return (
    <div className={classes.social} ref={socialRef}>
      <FaFacebookF />
      <FaInstagram />
      <FaTwitter />
    </div>
  );
};

export default Social;
