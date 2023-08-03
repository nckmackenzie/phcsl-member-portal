import Table from '../../ui/Table';
import Pagination from '../../ui/Pagination';
import UnitRow from './UnitsRow';

function AvailableUnitsTable({ data, count }) {
  return (
    <Table columns="1fr 1fr 1fr 0.5fr">
      <Table.Header>
        <div>Unit No</div>
        <div>Project</div>
        <div>Reservation Fee</div>
        <div>Actions</div>
      </Table.Header>
      <Table.Body
        data={data}
        render={unit => <UnitRow key={unit.id} unit={unit} />}
      />
      <Table.Footer>
        <Pagination count={count} />
      </Table.Footer>
    </Table>
  );
}

export default AvailableUnitsTable;
