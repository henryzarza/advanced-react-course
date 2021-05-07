import Image from 'next/image';
import Index from '../components/Signin/Index';
// import Register from '../components/Signin/Register';
// import RequestReset from '../components/Signin/RequestReset';
import { Container, ImageContainer } from '../components/styles/Signin';

export default function SignIn() {
  return (
    <Container>
      <Index />
      {/* <Register /> */}
      {/* <RequestReset /> */}
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
