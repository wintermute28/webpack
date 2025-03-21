import { useState } from "react";
import classes from "./App.module.scss";
import { Link, Outlet } from "react-router-dom";
import About from "@/pages/about/About";
import imgPng from "@/assets/cubes.png";
import imgJpg from "@/assets/Cat.jpg";
import ImgSvg from "@/assets/alien.svg";
export const App = () => {
  const [count, setCount] = useState<number>(0);

  const increment = () => {
    TODO();
    // setCount((prev) => prev + 1);
  };

  const decrement = () => {
    setCount((prev) => prev - 1);
  };

  function TODO() {
    TODO2();
  }

  function TODO2() {
    throw new Error();
  }

  // if (__PLATFORM__ === "desktop") {
  //   return (
  //     <div>
  //       <h1>ISDESKTOPPLATFORM</h1>
  //     </div>
  //   );
  // }

  // if (__PLATFORM__ === "mobile") {
  //   return (
  //     <div>
  //       <h1>ISMOBILEPLATFORM</h1>
  //     </div>
  //   );
  // }

  return (
    <div data-testid={"App.DataTestId"}>
      <h1 data-testid={"PLATFORM"}>PLATFORM={__PLATFORM__}</h1>
      {/* <div>{a}</div> */}
      <h1></h1>
      <div>
        <img width={100} src={imgPng} alt="imgPng" />
        <img width={100} src={imgJpg} alt="imgJpg" />
      </div>
      <div>
        <ImgSvg width={50} height={50} style={{ color: "red" }} />
      </div>
      <Link to={"/about"}>about</Link>
      <br />
      <Link to={"/shop"}>shop</Link>
      <h3>Counter</h3>
      <h4 className={classes.value}>{count}</h4>
      <button className={classes.button} onClick={increment}>
        Increment
      </button>
      <button className={classes.button} onClick={decrement}>
        Decrement
      </button>
      <Outlet />
    </div>
  );
};
