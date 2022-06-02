import React, { useState , useLayoutEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { restocked, ordered } from "./icecreamSlice";
import {} from "./icecreamSlice";


const IceCreamViev = () => {
  const dispatch = useDispatch();
  const numOfIceCreams = useSelector((state) => state.icecream.numOfIcecreams);
  const [value, setValue] = useState(1);
  return (
    <div>
      <h2>Number of Ice Creams - {numOfIceCreams}</h2>
      <button onClick={() => dispatch(ordered())}>Order Ice Cream</button>
      <input type='number' onChange={(e) => setValue(e.target.value)} value={value}></input>
      <button onClick={() => dispatch(restocked(parseInt(value)))}>
        Restock Ice Creams
      </button>
    </div>
  );
};

export default IceCreamViev;
