import { CartStyles, Supreme, CloseButton, TotalPrice, Backdrop, EmptyCart } from '../styles/CartStyles';
import formatMoney, { calcTotalPrice } from '../../lib/formatMoney';
import { useUser } from '../../lib/User';
import { EmptyShoppingCart } from '../Icons';

import { useCart } from './cartState';
import CartItem from './CartItem';
import Checkout from './Checkout';

export default function Cart() {
  const me = useUser();
  const { cartOpen, closeCart } = useCart();

  if (!me) return null;

  return (
    <>
      <CartStyles open={cartOpen}>
        <header>
          <Supreme>{me.name}'s Cart</Supreme>
          <CloseButton onClick={closeCart} aria-label="Close cart">&times;</CloseButton>
        </header>
        {me.cart.length === 0 ? (
          <EmptyCart>
            <EmptyShoppingCart />
            <h3>You don't have anything in the cart yet</h3>
          </EmptyCart>
        ) : (
          <>
            <ul>
              {me.cart.map((cartItem) => (
                <CartItem key={cartItem.id} item={cartItem} />
              ))}
            </ul>
            <footer>
              <TotalPrice>{formatMoney(calcTotalPrice(me.cart))}</TotalPrice>
              <Checkout />
            </footer>
          </>
        )}
      </CartStyles>
      <Backdrop open={cartOpen} />
    </>
  );
}
