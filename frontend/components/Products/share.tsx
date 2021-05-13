import styled from 'styled-components';

const ProductsListStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
`;

export default function Share() {
  return (
    <div>
      <h2>Share</h2>
      <p>Amor</p>
    </div>
  );
}
