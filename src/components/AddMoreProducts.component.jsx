import { useState } from "react";
import AddCounter from "./AddCounter.component";
import AddOneButton from "./AddOneButton.component";

export default function AddMoreProducts() {
  const [count, setCount] = useState(0);
  const [showCounter, setShowCounter] = useState(false);

  const handleClick = () => {
    setCount((prevCount) => {
      return prevCount + 1;
    });
    setShowCounter(true);
  };

  return (
    <div>
      <AddOneButton onClick={handleClick} />
      {count && <AddCounter />}
    </div>
  );
}
