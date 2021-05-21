import { ReactChild } from 'react';
import { createGlobalStyle } from 'styled-components';

import Navbar from './Navbar';

const GlobalStyles = createGlobalStyle`
  html {
    --red: #F52020;
    --black: #000;
    --gray: #3A3A3A;
    --gray-2: #616161;
    --gray-3: #898989;
    --light-gray: #F4F5F7;
    --white: #FFF;
    --maxWidth: 1200px;
    --transition-duration: 290ms;
    --transition-function: cubic-bezier(0.79,0.01,0.38,0.99);
    font-size: 16px;
  }
  *, *::before, *::after {
    box-sizing: border-box;
    font-family: 'Noto Sans KR', sans-serif;
    margin: 0;
    padding: 0;
  }
`;

export default function Page({ children }: { children: ReactChild }) {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      {children}
    </>
  );
}
