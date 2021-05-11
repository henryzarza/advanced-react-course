import { useState } from 'react';
import Image from 'next/image';

import Index from '../components/Signin/Index';
import Register from '../components/Signin/Register';
import RequestReset from '../components/Signin/RequestReset';
import { Container, ImageContainer } from '../components/styles/Signin';
import { SCREENS } from '../components/Signin/constant';

// TODO: redirect when the user is already logged
export default function SignIn() {
  const [screenType, setScreenType] = useState(SCREENS.SIGN_IN);
  let Cmp = Index;

  switch (screenType) {
    case SCREENS.REGISTER:
      Cmp = Register;
      break;
    case SCREENS.RESET_PASSWORD:
      Cmp = RequestReset;
      break;
    default:
      Cmp = Index;
      break;
  }

  return (
    <Container>
      <Cmp onChange={setScreenType} />
      <ImageContainer>
        <Image
          src="/static/banner.jpeg"
          alt="Women doing exercise"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          quality={100}
        />
      </ImageContainer>
    </Container>
  );
}
