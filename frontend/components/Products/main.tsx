import styled from 'styled-components';

import { SM_BREAK_POINT } from '../../lib/cssVariables';
import { MainButton } from '../styles/Button';
import { ID_SECTION } from './our-products';

const Section = styled.section`
  align-items: center;
  display: flex;
  min-height: 100vh;
  padding: 1rem 1rem 1rem 6.25rem;
  position: relative;
  width: 100%;

  @media (max-width: ${SM_BREAK_POINT}) {
    padding: 1rem;
  }
`;

const HeroContent = styled.div`
  background-color: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  border-radius: 0.25rem;
  display: flex;
  flex-direction: column;
  max-width: 100%;
  padding: 3.75rem;
  width: 30.9rem;

  @media (max-width: ${SM_BREAK_POINT}) {
    padding: 1.5rem;
  }
`;

export const Title = styled.h2`
  color: var(--gray);
  font-size: 3rem;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 2rem;

  @media (max-width: ${SM_BREAK_POINT}) {
    font-size: 2rem;
  }
`;

export const Paragraph = styled.p`
  color: var(--gray);
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1.4;
  margin-bottom: 3.75rem;
`;

export const Video = styled.video`
  height: 100%;
  left: 0;
  object-fit: cover;
  pointer-events: none;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: -1;
`;

export default function Main() {
  const handleClick = () => {
    document.getElementById(ID_SECTION).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Section>
      <HeroContent>
        <Title>High-Quality Equipment Just for you</Title>
        <Paragraph>Our equipment is made from selected and best quality materials that are suitable for your goals</Paragraph>
        <MainButton type="button" onClick={handleClick}>Shop Now</MainButton>
      </HeroContent>
      <Video src="https://res.cloudinary.com/dcqu0udnd/video/upload/v1620865628/sickfits/bgvideo_drkb4v.mp4" autoPlay muted loop />
    </Section>
  );
}
