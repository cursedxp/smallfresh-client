import { createContext, useState } from "react";

const ShopContext = createContext();

function ShopContextWrapper(props) {
  const [basket, setBasket] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);

  return (
    <ShopContext.Provider value={{ setBasket, isLoading, isLoggedIn, user }}>
      {props.children}
    </ShopContext.Provider>
  );
}

export { ShopContext, ShopContextWrapper };
