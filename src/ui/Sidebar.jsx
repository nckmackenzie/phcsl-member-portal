import styled, { css } from 'styled-components';
import Logo from './Logo';
import { useSidebar } from '../context/SidebarContext';
import { useOutsideClick } from '../hooks/useOutsideClick';
// import MainNav from './MainNav';
// import Uploader from '../data/Uploader';

const StyledSidebar = styled.aside`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 9999;
  overflow-y: hidden;
  ${props =>
    props.opened === 'false' &&
    css`
      transform: translateX(-100%);
    `}
  ${props =>
    props.opened === 'true' &&
    css`
      transform: translateX(0);
    `}

  width: 18.25rem;
  background-color: var(--color-grey-0);
  padding: 2rem 1.5rem;
  border-right: 1px solid var(--color-grey-100);
  display: flex;
  flex-direction: column;
  gap: 2rem;
  transition: all 450ms linear;
  height: 100dvh;

  @media (min-width: 1024px) {
    position: static;
    transform: translateX(0);
  }
`;
function Sidebar() {
  const { opened, close } = useSidebar();
  const ref = useOutsideClick(close);

  return (
    <StyledSidebar opened={opened.toString()} ref={ref}>
      <Logo />
      {/* <Logo />
      <MainNav /> */}
    </StyledSidebar>
  );
}

export default Sidebar;
