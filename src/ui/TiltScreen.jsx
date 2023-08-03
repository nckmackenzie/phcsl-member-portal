import { styled } from 'styled-components';
import useMediaQuery from '../hooks/useMediaQuery';

const P = styled.p`
  font-weight: 500;
  font-size: 0.875rem;
  font-style: italic;
  color: var(--color-green-700);
  margin-bottom: 0.5rem;
`;

function TiltScreen() {
  const isTab = useMediaQuery('(min-width: 768px)');

  if (!isTab) return <P>Tilt your screen for a better view</P>;
}

export default TiltScreen;
