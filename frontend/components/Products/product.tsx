import Link from 'next/link';
import styled from 'styled-components';

// import ItemStyles from './styles/ItemStyles';
// import Title from './styles/Title';
// import PriceTag from './styles/PriceTag';
// import formatMoney from '../lib/formatMoney';
// import DeleteProduct from './DeleteProduct';
// import AddToCart from './AddToCart';

const Img = styled.img`
  object-fit: cover;
  height: 18.75rem;
  transform: scale(1);
  transition: transform var(--transition-duration) var(--transition-function);
  width: 100%;
`;

const Item = styled.div`
  background-color: var(--light-gray);
  box-shadow: 1px 2px 4px rgba(0,0,0,0.25);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;

  &:hover ${Img} {
    transform: scale(1.1);
  }
`;

const ImgContainer = styled.div`
  overflow: hidden;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

const Name = styled.h6`
  color: var(--gray);
  font-size: 1.3rem;
  font-weight: 500;
  line-height: 1.15;
  margin-bottom: 0.625rem;
`;

const Price = styled(Name)`
  font-weight: 900;
  margin-bottom: 0;
`;

export default function Product() {
  return (
    <Item>
      <Link href="/product/3">
        <ImgContainer>
          <Img
            src="https://res.cloudinary.com/dcqu0udnd/image/upload/v1621029999/sickfits/image_2_siz4xw.png"
            alt="Mock"
            // src={product?.photo?.image?.publicUrlTransformed}
            // alt={product.name}
          />
        </ImgContainer>
      </Link>
      <Content>
        <Name>Leviosa</Name>
        <Price>$ 50.00</Price>
      </Content>
      {/* <Link href={`/product/${product.id}`}>{product.name}</Link> */}
      {/* <PriceTag>{formatMoney(product.price)}</PriceTag> */}
      {/* <div className="buttonList">
        <Link
          href={{
            pathname: 'update',
            query: {
              id: product.id,
            },
          }}
        >
          Edit
        </Link>
        <AddToCart id={product.id} />
        <DeleteProduct id={product.id}>Delete</DeleteProduct>
      </div> */}
    </Item>
  );
}

/* Product.propTypes = {
  product: shape({
    id: string,
    name: string,
    price: number,
    description: string,
    photo: shape({
      id: string,
      image: shape({
        publicUrlTransformed: string,
      }),
    }),
  }),
}; */
