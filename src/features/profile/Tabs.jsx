import { css, styled } from 'styled-components';

const StyledTabs = styled.div`
  border: 1px solid var(--color-grey-100);
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-sm);
  border-radius: var(--border-radius-sm);
  padding: 0.25rem;
  display: flex;
  gap: 0.25rem;
  width: max-content;
`;

const Tab = styled.button`
  background-color: var(--color-grey-0);
  border: none;

  ${props =>
    props.active === 'true' &&
    css`
      background-color: var(--color-brand-600);
      color: var(--color-brand-50);
    `}

  border-radius: var(--border-radius-sm);
  font-weight: 500;
  font-size: 0.875rem;
  /* To give the same height as select */
  padding: 0.275rem 0.5rem;
  transition: all 0.3s;

  &:hover:not(:disabled) {
    background-color: var(--color-brand-600);
    color: var(--color-brand-50);
  }
`;

const TABS = ['My Details', 'Security'];

function Tabs({ activeTab, setActiveTab }) {
  function handleClick(e) {
    setActiveTab(e.target.textContent);
  }
  return (
    <StyledTabs>
      {TABS.map(tab => (
        <Tab
          key={tab}
          active={(activeTab === tab).toString()}
          onClick={handleClick}
        >
          {tab}
        </Tab>
      ))}
    </StyledTabs>
  );
}

export default Tabs;
