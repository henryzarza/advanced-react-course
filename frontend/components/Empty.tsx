import Image from 'next/image';
import styled from 'styled-components';

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  max-width: var(--maxWidth);
  min-height: 100vh;
  padding: 0 1rem;
  width: 100%;
`;

const ImageContainer = styled.div`
  max-width: 27rem;
  min-height: 30rem;
  position: relative;
  width: 100%;
`;

const Title = styled.h2`
  color: var(--gray);
  font-weight: 700;
  font-size: 2.8rem;
  line-height: 1.2;
  margin-bottom: 1.5rem;
`;

export default function Empty({ title }: { title: string }) {
  return (
    <Container>
      <Title>{title}</Title>
      <ImageContainer>
        <Image
          src="/static/404.png"
          alt="Empty concept illustration designed by slidesgo"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          quality={100}
        />
      </ImageContainer>
    </Container>
  );
}
