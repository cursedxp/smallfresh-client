import { useState } from "react";
import AddCounter from "./AddCounter.component";
import AddItemButton from "./AddItemButton.component";

export default function ShoppingCart() {
  const [count, setCount] = useState(0);

  const handleAddItem = () => {
    setCount(count + 1);
  };

  const handleRemoveItem = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      {count > 0 ? (
        <AddCounter
          count={count}
          onAdd={handleAddItem}
          onRemove={handleRemoveItem}
        />
      ) : (
        <AddItemButton onClick={handleAddItem} />
      )}
    </div>
  );
}
