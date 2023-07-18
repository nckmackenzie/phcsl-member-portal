import { styled } from 'styled-components';

const Card = styled.div`
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  padding: 0.5rem 1rem;

  @media (min-width: 640px) {
    padding: 1rem 1.5rem;
  }

  @media (min-width: 1536px) {
    padding: 1.5rem 2rem;
  }
`;

export default Card;
