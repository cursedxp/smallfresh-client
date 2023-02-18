import { createContext, useState } from "react";

const ShopContext = createContext();

function ShopContextWrapper(props) {
  const [basket, setBasket] = useState;
  return (
    <ShopContext.Provider setBasket={setBasket}>
      {props.children}
    </ShopContext.Provider>
  );
}

export { ShopContext, ShopContextWrapper };
