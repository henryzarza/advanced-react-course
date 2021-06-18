import Image from 'next/image';
import Link from 'next/link';

import { Container, ImageContainer, Form, FormContent, Title } from '../components/styles/Signin';
import { MainButton } from '../components/styles/Button';
import Reset from '../components/Signin/Reset';

interface Props {
  query: {
    token?: string;
  }
}

export default function ResetPage({ query }: Props) {
  return (
    <Container>
      {query?.token ? <Reset token={query.token} /> : (
        <Form>
          <FormContent>
            <Title>Sorry you must supply a token</Title>
            <Link href="/signin">
              <MainButton type="button">Request Reset</MainButton>
            </Link>
          </FormContent>
        </Form>
      )}
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
