import { styled } from 'styled-components';
import Tag from '../../ui/Tag';
import { formatCurrency } from '../../utils/helpers';

const StyledPayment = styled.div`
  /* display: flex;
  align-items: center;
  justify-content: space-between; */
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  font-size: 0.875rem;
  padding-bottom: 0.25rem;
  border-bottom: 1px solid var(--color-grey-200);
`;

const CustomTag = styled(Tag)`
  padding-top: 0.025rem;
  padding-bottom: 0.025rem;
`;

const Amount = styled.div`
  font-weight: 600;
  /* color: var(--color-brand-400); */
`;

const colors = {
  deposits: 'yellow',
  shares: 'blue',
  project: 'green',
};

function Payment({ purpose, amount, date }) {
  return (
    <StyledPayment>
      <CustomTag type={colors[purpose]}>{purpose}</CustomTag>
      <div>{date}</div>
      <Amount>{formatCurrency(amount)}</Amount>
    </StyledPayment>
  );
}

export default Payment;
