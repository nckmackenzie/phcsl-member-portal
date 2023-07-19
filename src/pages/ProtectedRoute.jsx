import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../features/authentication/useUser';
import Spinner from '../ui/Spinner';
import { styled } from 'styled-components';

const FullPage = styled.div`
  height: 100dvh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children }) {
  const { isAuthenticated, isLoading } = useUser();
  const navigate = useNavigate();

  useEffect(
    function () {
      if (!isLoading && !isAuthenticated) {
        navigate('/login', { replace: true });
      }
    },
    [isLoading, isAuthenticated, navigate]
  );

  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  if (!isLoading && isAuthenticated) return children;
}

export default ProtectedRoute;
