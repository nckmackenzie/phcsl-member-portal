import { styled } from 'styled-components';
import { useUser } from '../features/authentication/useUser';

const StyledUserMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  /* cursor: pointer;
  padding: 0.5rem 1rem;
  border-radius: var(--border-radius-sm);

  &:hover {
    background-color: var(--color-grey-100);
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  } */
`;

const UserAvatar = styled.img`
  width: 3rem;
  aspect-ratio: 1;
`;

const UserName = styled.p`
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: capitalize;
  color: var(--color-grey-800);
`;

function UserMenu() {
  const { user } = useUser();
  const src =
    user?.user_metadata?.avatar ||
    'https://igqjyslipxclzwcefxrb.supabase.co/storage/v1/object/sign/avatars/default-user.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL2RlZmF1bHQtdXNlci5qcGciLCJpYXQiOjE2ODk3NjQxODYsImV4cCI6MTcyMTMwMDE4Nn0.OK70TmAKYENoOoALgJSCsgtdITzrN2pHf704CrV9lQI&t=2023-07-19T10%3A56%3A26.266Z';
  const fullName = user?.user_metadata?.fullName || 'administrator';

  //   console.log(user);
  return (
    <StyledUserMenu>
      <UserAvatar src={src} alt={`Avatar for user ${fullName}`} />
      <UserName>{fullName}</UserName>
    </StyledUserMenu>
  );
}

export default UserMenu;
