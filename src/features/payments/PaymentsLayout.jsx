import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import Filter from '../../ui/Filter';
import PaymentsTable from './PaymentsTable';
import useMediaQuery from '../../hooks/useMediaQuery';

const StyledPaymentsLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Actions = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  gap: 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-self: auto;
    gap: 0;
  }
`;

const filterOptions = [
  { value: 'all', label: 'All' },
  { value: '2', label: 'Shares' },
  { value: '3', label: 'Deposits' },
  { value: '4', label: 'Project' },
];

const CustomizedLink = styled(Link)`
  font-size: 0.875rem;
  padding: 0.75rem 1rem;
  font-weight: 500;
  color: var(--color-grey-600);
  background: var(--color-grey-0);
  border-radius: var(--border-radius-sm);
  box-shadow: inset 0 0 0 1px var(--color-brand-200);
  align-self: flex-start;

  &:hover {
    background-color: var(--color-grey-50);
  }
`;

function PaymentsLayout() {
  const isTab = useMediaQuery('(min-width: 768px)');
  return (
    <StyledPaymentsLayout>
      <Actions>
        <CustomizedLink to="/payments/new">New Payment</CustomizedLink>
        <Filter filterField="purposeId" options={filterOptions} />
      </Actions>
      {!isTab && <p>Tilt your screen for a better view</p>}
      <PaymentsTable />
    </StyledPaymentsLayout>
  );
}

export default PaymentsLayout;
