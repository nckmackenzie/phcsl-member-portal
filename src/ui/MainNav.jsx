import {
  HiBanknotes,
  HiOutlineHome,
  HiOutlineUser,
  HiOutlineHomeModern,
} from 'react-icons/hi2';
import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';
import { useSidebar } from '../context/SidebarContext';

const StyledMainNav = styled.nav``;

const NavItems = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const StyledLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    color: var(--color-grey-600);
    font-size: 1rem;
    font-weight: 500;
    padding: 0.75rem 1.5rem;
    transition: all 0.3s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-50);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 1.5rem;
    height: 1.5rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`;

function MainNav() {
  const { close } = useSidebar();
  return (
    <StyledMainNav>
      <NavItems>
        <li>
          <StyledLink to="/" onClick={close}>
            <HiOutlineHome />
            <span>Dashboard</span>
          </StyledLink>
        </li>
        <li>
          <StyledLink to="/payments" onClick={close}>
            <HiBanknotes />
            <span>Payments</span>
          </StyledLink>
        </li>
        <li>
          <StyledLink to="/available-units" onClick={close}>
            <HiOutlineHomeModern />
            <span>Available Units</span>
          </StyledLink>
        </li>
        <li>
          <StyledLink to="/my-profile" onClick={close}>
            <HiOutlineUser />
            <span>My Profile</span>
          </StyledLink>
        </li>
      </NavItems>
    </StyledMainNav>
  );
}

export default MainNav;
