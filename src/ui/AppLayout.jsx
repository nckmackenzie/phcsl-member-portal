import { Outlet } from 'react-router-dom';
import { styled } from 'styled-components';
import Header from './Header';
import Sidebar from './Sidebar';
import { SidebarProvider } from '../context/SidebarContext';

const StyledAppLayout = styled.div`
  display: flex;
  overflow: hidden;
  height: 100dvh;
  /* display: grid;
  grid-template-columns: 16.25rem 1fr;
  grid-template-rows: auto 1fr; */
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 0%;
`;

const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 1.5rem 1.5rem 3rem;
  height: calc(100dvh - 6rem);
  overflow: scroll;

  @media (min-width: 1024px) {
    padding: 2.5rem 3rem 4rem;
  }
  /* height: 890px */
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

function AppLayout() {
  return (
    <SidebarProvider>
      <StyledAppLayout>
        <Sidebar />
        <ContentWrapper>
          <Header />
          <Main>
            <Container>
              <Outlet />
            </Container>
          </Main>
        </ContentWrapper>
      </StyledAppLayout>
    </SidebarProvider>
  );
}

export default AppLayout;
