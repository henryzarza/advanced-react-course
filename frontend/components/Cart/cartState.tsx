import { createContext, ReactChild, useContext, useState } from 'react';

const LocalStateContext = createContext(null);
const LocalStateProvider = LocalStateContext.Provider;

function CartStateProvider({ children }: { children: ReactChild }) {
  const [cartOpen, setCartOpen] = useState(false);

  const closeCart = () => setCartOpen(false);

  const openCart = () => setCartOpen(true);

  return (
    <LocalStateProvider
      value={{
        cartOpen,
        closeCart,
        openCart
      }}
    >
      {children}
    </LocalStateProvider>
  );
}

function useCart() {
  return useContext(LocalStateContext);
}

export { CartStateProvider, useCart, LocalStateProvider };
