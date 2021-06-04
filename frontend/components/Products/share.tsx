import styled from 'styled-components';
import Image from 'next/image';

const Section = styled.section`
  background-color: var(--cream);
  display: flex;
  flex-direction: column;
  padding: 2rem 0;
  width: 100%;
`;

const Title = styled.h2`
  color: var(--gray);
  font-size: 2.25rem;
  font-weight: 700;
  line-height: 1.3;
  margin-bottom: 3rem;
  text-align: center;
`;

const SubTitle = styled.h5`
  color: var(--gray-2);
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 1.3;
  margin-bottom: 0.5rem;
  text-align: center;
`;

const ImageContainer = styled.div`
  height: 46rem;
  position: relative;
  width: 100%;

  img {
    max-width: 100%;
  }
`;

export default function Share() {
  return (
    <Section>
      <SubTitle>Share your progress with</SubTitle>
      <Title>#ilovesickfits</Title>
      <ImageContainer>
        <Image
          src="/static/share.png"
          alt="People doing exercise"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          quality={100}
        />
      </ImageContainer>
    </Section>
  );
}
