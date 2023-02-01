import { createContext, useEffect, useState } from 'react';
import { getLocalStorageWithKey } from '../ts/helperFunctions/localStorage/handleLocalStorage';

export const CartContext = createContext<any>({
  products: [],
});

const CartProvider = (props: any) => {
  const [shoppingCart, setShoppingCart] = useState<any>({
    products: [],
  });

  useEffect(() => {
    if (localStorage.getItem('shoppingCartStorage')) {
      setShoppingCart({
        products: getLocalStorageWithKey('shoppingCartStorage'),
      });
    }
  }, []);

  console.log(shoppingCart);

  return (
    <CartContext.Provider value={{ shoppingCart, setShoppingCart }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
