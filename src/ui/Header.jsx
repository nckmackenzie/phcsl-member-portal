import { styled } from 'styled-components';
import { HiOutlineMenu } from 'react-icons/hi';
import UserMenu from './UserMenu';
import ButtonIcon from './ButtonIcon';
import { useSidebar } from '../context/SidebarContext';

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 0.75rem 1rem;
  border-bottom: 1px solid var(--color-grey-100);

  display: flex;
  gap: 1.5rem;
  align-items: center;
  justify-content: space-between;
  height: 6rem;

  @media (min-width: 1024px) {
    padding: 0.75rem 4rem;
    justify-content: flex-end;
  }
`;

function Header() {
  const { open } = useSidebar();

  return (
    <StyledHeader>
      <ButtonIcon
        color="grey-700"
        className="inline-flex lg:hidden"
        onClick={open}
      >
        <HiOutlineMenu />
      </ButtonIcon>
      <UserMenu />
    </StyledHeader>
  );
}

export default Header;
