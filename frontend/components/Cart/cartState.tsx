import { createContext, ReactChild, useContext, useState } from 'react';

const LocalStateContext = createContext(null);
const LocalStateProvider = LocalStateContext.Provider;

function CartStateProvider({ children }: { children: ReactChild }) {
  const [cartOpen, setCartOpen] = useState(false);

  const toggleCart = () => setCartOpen(!cartOpen);

  const closeCart = () => setCartOpen(false);

  const openCart = () => setCartOpen(true);

  return (
    <LocalStateProvider
      value={{
        cartOpen,
        setCartOpen,
        toggleCart,
        closeCart,
        openCart,
      }}
    >
      {children}
    </LocalStateProvider>
  );
}

function useCart() {
  return useContext(LocalStateContext);
}

export { CartStateProvider, useCart };
