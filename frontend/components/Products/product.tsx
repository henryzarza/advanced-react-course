import Link from 'next/link';
import styled from 'styled-components';

import { Heart } from '../Icons';
import { MainButton } from '../styles/Button';
import formatMoney from '../../lib/formatMoney';
// import DeleteProduct from './DeleteProduct';
// import AddToCart from './AddToCart';

const Img = styled.img`
  object-fit: cover;
  height: 18.75rem;
  transform: scale(1);
  transition: transform var(--transition-duration) var(--transition-function);
  width: 100%;
`;

const InnerContent = styled.div`
  align-items: center;
  background-color: rgba(0,0,0,0.2);
  backdrop-filter: blur(4px);
  bottom: 0;
  display: flex;
  left: 0;
  padding: 1rem;
  position: absolute;
  right: 0;
  top: 0;
  transition: transform var(--transition-duration) var(--transition-function);
  transform: translateY(100%);
`;

const Item = styled.div`
  background-color: var(--light-gray);
  box-shadow: 1px 2px 4px rgba(0,0,0,0.25);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  width: 100%;

  &:hover,
  &:active {
    ${Img} {
      transform: scale(1.1);
    }

    ${InnerContent} {
      transform: translateY(0);
    }
  }
`;

const ImgContainer = styled.div`
  line-height: 0;
  overflow: hidden;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 1rem;
  position: relative;
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

const HeartIc = styled.button`
  border: none;
  background-color: rgba(0,0,0,0.2);
  cursor: pointer;
  line-height: 0;
  padding: 0.2rem;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 1;

  svg path {
    stroke: var(--white);
    transition: all var(--transition-duration) var(--transition-function);
  }

  &:hover,
  &:focus {
    svg path {
      fill: var(--red);
      stroke: var(--red);
    }
  }
`;

const IcBtn = styled(MainButton)`
  background-color: var(--light-gray);
  color: var(--gray);
  border-color: var(--gray);
  font-weight: 500;
  padding: 0.5rem;

  &:first-of-type {
    margin-right: 0.5rem;
  }

  &:hover,
  &:focus,
  &:active {
    background-color: var(--red);
    border-color: var(--red);
    color: var(--white);
  }
`;

interface Props {
  product: {
    id: string;
    name: string;
    price: number;
    photo: {
      id: string;
      image: {
        publicUrlTransformed: string;
      }
    }
  }
}

export default function Product({ product }: Props) {
  return (
    <Item>
      {/* TODO: implement this */}
      <HeartIc type="button">
        <Heart width={30} height={30} />
      </HeartIc>
      <Link href={`/product/${product.id}`}>
        <ImgContainer>
          <Img
            src={product.photo.image.publicUrlTransformed}
            alt={product.name}
          />
        </ImgContainer>
      </Link>
      <Content>
        <Name>{product.name}</Name>
        <Price>{formatMoney(product.price)}</Price>
        <InnerContent>
          <IcBtn type="button">Edit</IcBtn>
          <IcBtn type="button">Delete</IcBtn>
        </InnerContent>
      </Content>
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
