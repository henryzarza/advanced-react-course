import { ReactChild } from 'react';
import { createGlobalStyle } from 'styled-components';

import Header from './Header';

const GlobalStyles = createGlobalStyle`
  html {
    --red: #F52020;
    --black: #000;
    --gray: #3A3A3A;
    --gray-2: #616161;
    --gray-3: #898989;
    --white: #FFF;
    --maxWidth: 1200px;
    font-size: 62.5%;
  }
  *, *::before, *::after {
    box-sizing: border-box;
    font-family: 'Noto Sans KR', sans-serif;
  }
  body {
    font-size: 1rem;
    line-height: 1.3;
    margin: 0;
    padding: 0;
  }
`;

export default function Page({ children }: { children: ReactChild }) {
  return (
    <>
      <GlobalStyles />
      <Header />
      {children}
    </>
  );
}
