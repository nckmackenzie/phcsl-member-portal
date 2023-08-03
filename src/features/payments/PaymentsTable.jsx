import Table from '../../ui/Table';
import Spinner from '../../ui/Spinner';
import { useGetPayments } from './useGetPayments';
import PaymentsRow from './PaymentsRow';
import Pagination from '../../ui/Pagination';

function PaymentsTable() {
  const { isLoading, payments, count } = useGetPayments();
  //   console.log(count);

  if (isLoading) return <Spinner />;

  return (
    <Table columns="1fr 1fr 1fr 1fr 1fr">
      <Table.Header>
        <div>Date</div>
        <div>Purpose</div>
        <div>Amount</div>
        <div>Payment Method</div>
        <div>Reference</div>
      </Table.Header>
      <Table.Body
        data={payments}
        render={payment => <PaymentsRow key={payment.id} payment={payment} />}
      />
      <Table.Footer>
        <Pagination count={count} />
      </Table.Footer>
    </Table>
  );
}

export default PaymentsTable;
