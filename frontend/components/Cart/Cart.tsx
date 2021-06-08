import { CartStyles, Supreme, CloseButton, TotalPrice, Backdrop } from '../styles/CartStyles';
import formatMoney, { calcTotalPrice } from '../../lib/formatMoney';
import { useUser } from '../../lib/User';
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
          <CloseButton onClick={closeCart}>&times;</CloseButton>
        </header>
        <ul>
          {me.cart.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))}
        </ul>
        <footer>
          <TotalPrice>{formatMoney(calcTotalPrice(me.cart))}</TotalPrice>
          <Checkout />
        </footer>
      </CartStyles>
      <Backdrop open={cartOpen} />
    </>
  );
}
