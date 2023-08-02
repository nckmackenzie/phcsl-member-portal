import { styled } from 'styled-components';
import Spinner from './Spinner';

const StyledButtonText = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

function LoadingButtonText({ text }) {
  return (
    <StyledButtonText>
      <Spinner size="small" />
      <span>{text}</span>
    </StyledButtonText>
  );
}

export default LoadingButtonText;
