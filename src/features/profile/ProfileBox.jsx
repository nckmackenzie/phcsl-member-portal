import { css, styled } from 'styled-components';
import { BsFileEarmarkPdf } from 'react-icons/bs';
import Tabs from './Tabs';
import { useState } from 'react';
import DetailsForm from './DetailsForm';
import SecurityForm from './SecurityForm';

const StyledProfileBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const Actions = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 0.8rem;

  @media (min-width: 640px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 0;
  }
`;

const DownloadButton = styled.button`
  box-shadow: var(--shadow-sm);
  border-radius: var(--border-radius-sm);
  padding: 0.25rem 0.5rem;
  border: none;
  background-color: var(--color-brand-400);
  color: var(--color-brand-50);
  font-weight: 500;
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  align-self: stretch;

  @media (min-width: 640px) {
    justify-content: flex-start;
  }
`;

const FormArea = styled.div`
  ${props =>
    props.type === 'My Details' &&
    css`
      max-width: 56rem;
    `}
  ${props =>
    props.type === 'Security' &&
    css`
      max-width: 32rem;
    `}

  border: 1px solid var(--color-grey-100);
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-sm);
  border-radius: var(--border-radius-sm);
  padding: 0.5rem;
`;

function ProfileBox() {
  const [activeTab, setActiveTab] = useState('My Details');
  return (
    <StyledProfileBox>
      <Actions>
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <DownloadButton>
          <BsFileEarmarkPdf /> <span>Download Statement</span>
        </DownloadButton>
      </Actions>
      <FormArea type={activeTab}>
        {activeTab === 'My Details' ? <DetailsForm /> : <SecurityForm />}
      </FormArea>
    </StyledProfileBox>
  );
}

export default ProfileBox;
