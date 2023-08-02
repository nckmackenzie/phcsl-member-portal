import { styled } from 'styled-components';
import { format } from 'date-fns';
import Table from '../../ui/Table';
import Tag from '../../ui/Tag';
import { formatCurrency } from '../../utils/helpers';
import { COLORS } from '../../utils/constants';

const FormattedDate = styled.div`
  font-size: 0.875rem;
`;

const Reference = styled.div`
  font-size: 0.875rem;
`;

const Amount = styled.div`
  font-size: 0.875rem;
  font-weight: 500;
`;

const PayMethod = styled.div`
  font-size: 0.875rem;
  text-transform: uppercase;
`;

const CustomTag = styled(Tag)`
  padding-top: 0.025rem;
  padding-bottom: 0.025rem;
`;

function PaymentsRow({
  payment: {
    receiptDate,
    amount,
    payMethod,
    reference,
    purposes: { purpose },
  },
}) {
  const formatted = purpose === 'unit payments' ? 'project' : purpose;
  return (
    <Table.Row>
      <FormattedDate>
        {format(new Date(receiptDate), 'dd MMM yy')}
      </FormattedDate>
      <CustomTag type={COLORS[formatted]}>{purpose}</CustomTag>
      <Amount>{formatCurrency(amount)}</Amount>
      <PayMethod>{payMethod}</PayMethod>
      <Reference>{reference}</Reference>
    </Table.Row>
  );
}

export default PaymentsRow;
