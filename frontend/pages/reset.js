import { shape, string } from 'prop-types';
import RequestReset from '../components/RequestReset';
import Reset from '../components/Reset';

export default function ResetPage({ query }) {
  if (!query?.token) {
    return (
      <div>
        <h6>Sorry you must supply a token</h6>
        <RequestReset />
      </div>
    );
  }
  return (
    <div>
      <h4>RESET YOUR PASSWORD</h4>
      <Reset token={query.token} />
    </div>
  );
}

ResetPage.propTypes = {
  query: shape({
    token: string,
  }),
};
