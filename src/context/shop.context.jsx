import { createContext } from "react";

const ShopContext = createContext();

function ShopContextWrapper(props) {
  return <ShopContext.Provider>{props.children}</ShopContext.Provider>;
}

export { ShopContext, ShopContextWrapper };
