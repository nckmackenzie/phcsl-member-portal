import { styled } from 'styled-components';

const Tag = styled.span`
  width: fit-content;
  text-transform: uppercase;
  font-size: 0.6875rem;
  font-weight: 600;
  padding: 0.25rem 0.75rem;
  border-radius: 100px;

  color: var(--color-${props => props.type}-700);
  background-color: var(--color-${props => props.type}-100);
`;

export default Tag;
