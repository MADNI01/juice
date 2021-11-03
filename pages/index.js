import Head from "next/head";
import Red from "../components/red/Red";

import classes from "../styles/Home.module.css";



export default function Home() {

  return (
    <div className={classes.container}>

      <Red />

    </div>
  );
}
