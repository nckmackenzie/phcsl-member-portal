import { styled } from 'styled-components';
import Card from '../../ui/Card';
import Payment from './Payment';

const StyledPayments = styled.div``;

const StyledCard = styled(Card)`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  & h3 {
    font-weight: 500;
    margin-bottom: 1rem;
  }
`;

const PAYMENTS = [
  { id: 1, date: '12-01-2023', amount: 73000, purpose: 'project' },
  { id: 2, date: '08-02-2023', amount: 2500, purpose: 'deposits' },
  { id: 3, date: '21-02-2023', amount: 4000, purpose: 'shares' },
  { id: 4, date: '04-03-2023', amount: 50000, purpose: 'project' },
  { id: 5, date: '16-04-2023', amount: 2500, purpose: 'deposits' },
  { id: 6, date: '05-05-2023', amount: 2500, purpose: 'deposits' },
  { id: 7, date: '23-05-2023', amount: 4000, purpose: 'shares' },
  { id: 8, date: '12-06-2023', amount: 2500, purpose: 'deposits' },
  { id: 9, date: '04-05-2023', amount: 4000, purpose: 'deposits' },
];

function Payments() {
  return (
    <StyledPayments>
      <StyledCard>
        <h3>Recent payments</h3>
        {PAYMENTS.map(payment => (
          <Payment key={payment.id} {...payment} />
        ))}
      </StyledCard>
    </StyledPayments>
  );
}

export default Payments;
