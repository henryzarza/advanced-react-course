import { any } from 'prop-types';

export default function Page({ children }) {
  return (
    <div>
      <h1>Page Component</h1>
      {children}
    </div>
  );
}

Page.propTypes = {
  children: any,
};
