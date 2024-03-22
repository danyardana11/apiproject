import { useState } from "react";
import Button from "./button";

export default function QuantityBtn({parentClassname,decClassName,inpClassName,incClassName}) {
  const [increment, setIncrement] = useState(1);
  return (
    <div className={parentClassname}>
      <Button
        onClick={() => {
          increment >= 1 ? setIncrement(increment - 1) : setIncrement(0);
        }}
        className={decClassName}
        name="quantity-subtract"
        id="quantity-subtract"
      >
        -
      </Button>
      <input
        className={inpClassName}
        name="quantity"
        id="quantity"
        value={increment}
      ></input>
      <Button
        onClick={() => {
          setIncrement(increment + 1);
        }}
        className={incClassName}
        name="quantity-add"
        id="quantity-add"
      >
        +
      </Button>
    </div>
  );
}
