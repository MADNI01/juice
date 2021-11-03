import classes from "./Red.module.css";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { BsArrowDownShort, BsArrowUpShort } from "react-icons/bs";
import Social from "../social/Social";
import Image from "next/image";
const Data = [
  {
    background: "radial-gradient(rgb(167, 44, 70), rgb(59, 18, 28))",
    juice: "red.webp",
    fruit1: "Strawberry.webp",
    fruit2: "Strawberry2.webp",
    fruit3: "Strawberry3.webp",
    name: "Date A Nut",
  },
  {
    background: "radial-gradient(#563057, rgb(59, 18, 28))",
    juice: "purple.webp",
    fruit1: "blueberry.webp",
    fruit2: "blueberry2.webp",
    fruit3: "blueberry.webp",
    name: "Berrified",
  },
  {
    background: "radial-gradient(#65a648, rgb(59, 18, 28))",
    juice: "green.webp",
    fruit1: "nane.webp",
    fruit2: "nane2.webp",
    fruit3: "kiki.webp",
    name: "The Tummy Tuck",
  },
  {
    background: "radial-gradient(#4a2711, rgb(59, 18, 28))",
    juice: "brown.webp",
    fruit1: "nut.webp",
    fruit2: "nut2.webp",
    fruit3: "nut.webp",
    name: "Choco Loco",
  },
  {
    background: "radial-gradient(#f18f38, rgb(59, 18, 28))",
    juice: "yellow.webp",
    fruit1: "peach.webp",
    fruit2: "peach2.webp",
    fruit3: "peach3.webp",
    name: "Spicy Mango Tango",
  },
];
const Red = () => {
  const [counter, setCounter] = useState(0);
  const [theme, setTheme] = useState(Data[counter]);
  const [disable, setDisable] = useState(false);
  const fruitRef = useRef(null);
  const juiceRef = useRef(null);
  const bgRef = useRef(null);
  const nameRef = useRef(null);
  const backTextRef1 = useRef(null);
  const backTextRef2 = useRef(null);

  const nextBgHandler = (e) => {
    setDisable(true);
    setCounter(e);
    gsap.from(bgRef.current, 1, { y: "-105%" });
    gsap.to(bgRef.current, 1.5, {
      y: 0,
      ease: "Expo.easeInOut",
      onComplete: () => {
        gsap.set(bgRef.current, { clearProps: "y" });
      },
    });
    gsap.to(bgRef.current, { zIndex: 2 });
    setTimeout(() => {
      gsap.to(bgRef.current, { zIndex: -1 });
      setTheme(Data[e]);
    }, 800);
    gsap.to(backTextRef1.current, 1.3, { x: 1800, ease: "Expo.easeInOut" });
    gsap.to(backTextRef2.current, 1.3, { x: -1800, ease: "Expo.easeInOut" });
    gsap.to(nameRef.current, 1.3, {
      y: -800,
      ease: "Expo.easeInOut",
      delay: 0.1,
    });
    gsap.to(fruitRef.current, 1.3, {
      y: "-110%",
      opacity:0,
      ease: "Expo.easeInOut",
      delay: 0.1,
    });
    gsap.to(juiceRef.current, 1.5, {
      y: 800,
      opacity:0,
      ease: "Expo.easeInOut",
      delay: 0.1,
    });
    setTimeout(() => {
      // back Name ref
      gsap.from(backTextRef1.current, 1.3, { x: "-160%", ease: "Expo.easeIn" });
      gsap.to(backTextRef1.current, 1.3, { x: 0, ease: "Expo.easeOut" });
      gsap.from(backTextRef2.current, 1.3, { x: "160%", ease: "Expo.easeIn" });
      gsap.to(backTextRef2.current, 1.3, { x: 0, ease: "Expo.easeOut" });
      // name Ref
      gsap.from(nameRef.current, 1.3, { y: "700%", ease: "Expo.easeIn" });
      gsap.to(nameRef.current, 1.7, { y: 0, ease: "Expo.easeOut" });
      // Fruit Ref
      gsap.from(fruitRef.current, 1, { y: "100%" });
      gsap.to(fruitRef.current, 1.5, { y: 0,opacity:1, ease: "Expo.easeOut" });
      // juice Ref
      gsap.from(juiceRef.current, 1, { y: "-130%" });
      gsap.to(juiceRef.current, 1.5, {
        y: 0,
        opacity:1,
        ease: "Expo.easeOut",
        onComplete: function () {
          gsap.set(juiceRef.current, { clearProps: "all" });
        },
      });
      setDisable(false);
    }, 1100);
  };

  const prevBgHandler = (e) => {
    setDisable(true);
    setCounter(e);
    gsap.from(bgRef.current, 1, { y: "105%" });
    gsap.to(bgRef.current, 1.5, {
      y: 0,
      ease: "Expo.easeInOut",
      onComplete: () => {
        gsap.set(bgRef.current, { clearProps: "y" });
      },
    });
    gsap.to(bgRef.current, { zIndex: 2 });
    gsap.to(nameRef.current, 1.3, {
      y: 800,
      ease: "Expo.easeInOut",
      delay: 0.1,
    });
    gsap.to(backTextRef1.current, 1.3, { x: -800, ease: "Expo.easeInOut" });
    gsap.to(backTextRef2.current, 1.3, { x: 800, ease: "Expo.easeInOut" });
    gsap.to(fruitRef.current, 1.3, {
      y: "-100%",
      opacity:0,
      ease: "Expo.easeInOut",
      delay: 0.1,
    });
    gsap.to(juiceRef.current, 1.5, {
      y: 800,
      opacity:0,
      ease: "Expo.easeInOut",
      delay: 0.1,
    });
    setTimeout(() => {
      gsap.to(bgRef.current, { zIndex: -1 });
      setTheme(Data[e]);
    }, 800);
    setTimeout(() => {
      // back Name ref
      gsap.from(backTextRef1.current, 1.3, { x: "160%", ease: "Expo.easeIn" });
      gsap.to(backTextRef1.current, 1.3, { x: 0, ease: "Expo.easeOut" });
      gsap.from(backTextRef2.current, 1.3, { x: "-160%", ease: "Expo.easeIn" });
      gsap.to(backTextRef2.current, 1.3, { x: 0, ease: "Expo.easeOut" });
      // juice Name ref
      gsap.from(nameRef.current, 1.3, { y: "-160%", ease: "Expo.easeIn" });
      gsap.to(nameRef.current, 1.3, { y: 0, ease: "Expo.easeOut" });
      // Fruit Ref
      gsap.from(fruitRef.current, 1, { y: "100%" });
      gsap.to(fruitRef.current, 1.5, { y: 0,opacity:1, ease: "Expo.easeOut" });
      // juice Ref
      gsap.from(juiceRef.current, 1, { y: "-130%" });
      gsap.to(juiceRef.current, 1.5, {
        y: 0,
        opacity:1,
        ease: "Expo.easeOut",
        onComplete: function () {
          gsap.set(juiceRef.current, { clearProps: "all" });
        },
      });
      setDisable(false);
    }, 1100);
  };
  return (
    <div className={classes.red}>
      <Social />
      <div
        className={classes.background1}
        style={{ background: theme?.background }}
      ></div>
      <div
        className={classes.background2}
        style={{ background: Data[counter].background }}
        ref={bgRef}
      ></div>
      <div className={classes.container}>
        <div className={`${classes.arrows} ${disable && classes.active}`}>
          <BsArrowDownShort
            onClick={() => nextBgHandler(counter == 4 ? 0 : counter + 1)}
            style={{}}
          >
            Next
          </BsArrowDownShort>
          <BsArrowUpShort
            onClick={() => prevBgHandler(counter == 0 ? 4 : counter - 1)}
          >
            prev
          </BsArrowUpShort>
        </div>
        <div className={classes.nav}>
          <h1>LOGO</h1>
        </div>
        <div className={classes.name} ref={nameRef}>
          <h2>{theme?.name}</h2>
        </div>
        <div className={classes.backtext}>
          <h2 ref={backTextRef1}>FRESH</h2>
          <h2 ref={backTextRef2}>JUICE</h2>
        </div>
        <div className={`${classes.dots} ${disable && classes.active}`}>
          {Data.map((i, n) => (
            <div
              key={i}
              onClick={
                n > counter ? () => nextBgHandler(n) : () => prevBgHandler(n)
              }
              className={n == counter ? classes.active : null}
            ></div>
          ))}
        </div>
        <div className={classes.main}>
          {/* <div className={classes.shadow}></div> */}
          <div className={classes.materials} ref={fruitRef}>
            <div className={classes.fruit}>
              <img src={theme?.fruit1} />
            </div>
            <div className={classes.fruit}>
              <img src={theme?.fruit1} />
            </div>
            <div className={classes.fruit}>
              <img src={theme?.fruit1} />
            </div>
            <div className={classes.fruit}>
              <img src={theme?.fruit2} />
            </div>
            <div className={classes.fruit}>
              <img src={theme?.fruit2} />
            </div>
            <div className={classes.fruit}>
              <img src={theme?.fruit2} />
            </div>
            <div className={classes.fruit}>
              <img src={theme?.fruit3} />
            </div>
            <div className={classes.fruit}>
              <img src={theme?.fruit3} />
            </div>
            <div className={classes.fruit}>
              <img src={theme?.fruit3} />
            </div>
          </div>
          <h2>Fresh juice</h2>
          <div className={classes.juice} ref={juiceRef}>
            <img src={theme?.juice} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Red;
