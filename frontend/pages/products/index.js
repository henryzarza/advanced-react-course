import { useRouter } from 'next/dist/client/router';
import Products from '../../components/Products';
import Pagination from '../../components/Pagination.tsx';

export default function ProductPage() {
  const { query } = useRouter();
  const page = parseInt(query.page);

  return (
    <>
      <Pagination page={page || 1} />
      <Products page={page || 1} />
    </>
  );
}
