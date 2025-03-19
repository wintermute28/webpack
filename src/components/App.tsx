import { useState } from "react";
import classes from "./App.module.scss";
import { Link, Outlet } from "react-router-dom";
import About from "@/pages/about/About";
export const App = () => {
  const [count, setCount] = useState<number>(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <div>
      <Link to={"/about"}>about</Link>
      <hr />
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
