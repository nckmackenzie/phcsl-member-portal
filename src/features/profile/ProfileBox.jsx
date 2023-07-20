import { styled } from 'styled-components';
import Tabs from './Tabs';

const StyledProfileBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

function ProfileBox() {
  return (
    <StyledProfileBox>
      <Actions>
        <Tabs />
      </Actions>
    </StyledProfileBox>
  );
}

export default ProfileBox;
