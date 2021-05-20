// import { useRouter } from 'next/dist/client/router';
import styled from 'styled-components';

import Main from '../../components/Products/main';
import Share from '../../components/Products/share';
import Feature from '../../components/Products/feature';
import OurProducts from '../../components/Products/our-products';
import Pagination from '../../components/Products/pagination';

const MainContent = styled.main`
  display: flex;
  flex-direction: column;
`;

export default function ProductPage() {
  // const { query } = useRouter();
  // const page = parseInt(query.page);

  return (
    <MainContent>
      <Main />
      <Feature />
      <OurProducts />
      {/* <Pagination page={page || 1} /> */}
      <Pagination page={1} />
      <Share />
    </MainContent>
  );
}
