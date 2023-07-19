import styled from 'styled-components';
import { Menu, Transition } from '@headlessui/react';
import { HiOutlineChevronDown } from 'react-icons/hi2';
import UserMenu from './UserMenu';
import { Fragment } from 'react';
import Button from './Button';
// import HeaderMenu from './HeaderMenu';
// import UserAvatar from '../features/authentication/UserAvatar';

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 0.75rem 4rem;
  border-bottom: 1px solid var(--color-grey-100);

  display: flex;
  gap: 1.5rem;
  align-items: center;
  justify-content: flex-end;
`;

const MenuButton = styled(Menu.Button)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  padding: 0.5rem 1rem;
  border-radius: var(--border-radius-sm);

  &:hover {
    background-color: var(--color-grey-100);
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  }
`;

const MenuItems = styled(Menu.Item)`
  position: absolute;
  right: 0;
  margin-top: 0.5rem;
  background-color: var(--color-grey-0);
  width: 14rem;
  border-radius: var(--border-radius-sm);
`;

function Header() {
  return (
    <StyledHeader>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <MenuButton>
            <UserMenu />
            <HiOutlineChevronDown />
          </MenuButton>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <MenuItems className="origin-top-right divide-y divide-gray-100 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <Menu.Item>
              <Button variant="transparent">Test</Button>
            </Menu.Item>
          </MenuItems>
        </Transition>
      </Menu>
    </StyledHeader>
  );
}

export default Header;
