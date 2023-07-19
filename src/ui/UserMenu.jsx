import { styled } from 'styled-components';
import { useUser } from '../features/authentication/useUser';
import { useTheme } from '../context/ThemeContext';
import {
  HiChevronDown,
  HiChevronUp,
  HiOutlineArrowLeftOnRectangle,
  HiOutlineMoon,
  HiOutlineSun,
} from 'react-icons/hi2';
import { useState } from 'react';
import { useOutsideClick } from '../hooks/useOutsideClick';
import { useLogout } from '../features/authentication/useLogout';

const StyledUserMenu = styled.div`
  position: relative;
  cursor: pointer;
  padding: 0.5rem 1rem;
  border-radius: var(--border-radius-sm);
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
`;

const UserAvatar = styled.img`
  width: 3rem;
  aspect-ratio: 1;
  border-radius: 50%;
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`;

const UserName = styled.p`
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: capitalize;
  color: var(--color-grey-800);
`;

const DropDown = styled.div`
  position: absolute;
  right: 0;
  margin-top: 1rem;
  background-color: var(--color-grey-0);
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  border-radius: var(--border-radius-sm);
  width: 15rem;
  border: 1px solid var(--color-grey-100);

  & ul {
    display: flex;
    flex-direction: column;

    & li {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 1rem;
      padding: 0.5rem;
      color: inherit;

      &:not(:last-child) {
        border-bottom: 1px solid var(--color-grey-100);
      }

      &:hover {
        background-color: var(--color-grey-50);
      }
    }
  }
`;

function UserMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useUser();
  const { isDarkMode, toggleTheme } = useTheme();
  const ref = useOutsideClick(close);
  const { logout } = useLogout();

  function close() {
    setIsOpen(false);
  }
  const src =
    user?.user_metadata?.avatar ||
    import.meta.env.VITE_REACT_APP_DEFAULT_AVATAR;
  const fullName = user?.user_metadata?.fullName || 'administrator';

  return (
    <StyledUserMenu onClick={() => setIsOpen(open => !open)} ref={ref}>
      <div className="flex items-center gap-2">
        <UserAvatar src={src} alt={`Avatar for user ${fullName}`} />
        <UserName>{fullName}</UserName>
        {isOpen ? <HiChevronUp /> : <HiChevronDown />}
      </div>
      {isOpen && (
        <DropDown>
          <ul>
            <li onClick={toggleTheme}>
              {isDarkMode ? (
                <HiOutlineSun size={24} />
              ) : (
                <HiOutlineMoon size={24} />
              )}
              <span>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
            </li>
            <li onClick={logout}>
              <HiOutlineArrowLeftOnRectangle size={24} />
              <span>Logout</span>
            </li>
          </ul>
        </DropDown>
      )}
    </StyledUserMenu>
  );
}

export default UserMenu;
