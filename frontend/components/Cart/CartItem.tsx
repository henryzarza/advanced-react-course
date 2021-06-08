import { CartItemStyles } from '../styles/CartStyles';
import formatMoney from '../../lib/formatMoney';
import RemoveFromCart from './RemoveFromCart';

interface Props {
  item: {
    product: {
      name: string;
      price: number;
      quantity: number;
      photo: {
        image: {
          publicUrlTransformed: string;
        }
      }
    },
    quantity: number;
    id: string;
  }
}

export default function CartItem({ item }: Props) {
  const { product } = item;

  if (!product) return null;

  return (
    <CartItemStyles>
      <img
        src={product.photo.image.publicUrlTransformed}
        alt={product.name}
      />
      <div>
        <h3>{product.name}</h3>
        <p>
          <em>
            {item.quantity} &times; {formatMoney(product.price)} each
          </em>
          <strong>
            {formatMoney(product.price * item.quantity)}
          </strong>
        </p>
      </div>
      <RemoveFromCart id={item.id} />
    </CartItemStyles>
  );
}
