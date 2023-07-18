import styled from 'styled-components';

const Input = styled.input`
  border: 1px solid var(--color-grey-300);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-sm);
  padding: 0.375rem 0.75rem;
  box-shadow: var(--shadow-sm);

  @media (min-width: 1536px) {
    padding: 0.5rem 0.75rem;
  }
`;

export default Input;
