import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { ordered, restocked } from "./cakeSlice";

const CakeViev = () => {
  const numOfCakes = useAppSelector((state) => state.cake.numOfCakes);
  const [value, setValue] = useState("");
  const dispatch = useAppDispatch();
  return (
    <div>
      <h2>Number of Cakes - {numOfCakes}</h2>
      <button onClick={() => dispatch(ordered())}>Order Cake</button>
      <input
        type="number"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      ></input>
      <button onClick={() => dispatch(restocked(parseInt(value)))}>
        Restock Ice Creams
      </button>
    </div>
  );
};

export default CakeViev;
