import styled from 'styled-components';

const ProductsListStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
`;

export default function Feature() {
  return (
    <div>
      <h2>Feature</h2>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae accusantium asperiores sed autem, dolorum quasi voluptatem enim voluptas ab perspiciatis, blanditiis esse odio, doloremque mollitia magnam est animi error ratione.</p>
    </div>
  );
}
