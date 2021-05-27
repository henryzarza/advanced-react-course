import Image from 'next/image';
import styled from 'styled-components';

import { SM_BREAK_POINT } from '../../lib/cssVariables';

const Section = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 5.5rem auto;
  max-width: var(--maxWidth);
  padding: 0 1rem;
  width: 100%;

  @media (max-width: ${SM_BREAK_POINT}) {
    justify-content: center;
    margin: 1rem auto;
    padding: 1rem;
  }
`;

const Item = styled.div`
  align-items: center;
  display: flex;
`;

const InnerContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.5rem;
`;

const Title = styled.h6`
  color: var(--gray);
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 1.45;
`;

const Text = styled.span`
  color: var(--gray-3);
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.3;
`;

const CONTENT = [
  {
    src: "/static/trophy.svg",
    alt: "Trophy",
    title: "High Quality",
    text: "Crafted from top materials"
  },
  {
    src: "/static/guarantee.svg",
    alt: "Guarantee",
    title: "Warrany Protection",
    text: "Over 2 years"
  },
  {
    src: "/static/shipping.svg",
    alt: "Shipping",
    title: "Free Shipping",
    text: "Order over $150"
  },
  {
    src: "/static/customer-support.svg",
    alt: "Customer support",
    title: "24 / 7 Support",
    text: "Dedicated support"
  }
];

export default function Feature() {
  return (
    <Section>
      {CONTENT.map(el => (
        <Item key={el.title}>
          <Image
            src={el.src}
            alt={el.alt}
            width={40}
            height={40}
            quality={100}
          />
          <InnerContent>
            <Title>{el.title}</Title>
            <Text>{el.text}</Text>
          </InnerContent>
        </Item>
      ))}
    </Section>
  );
}
