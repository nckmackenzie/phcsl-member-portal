import { styled } from 'styled-components';
import Table from '../../ui/Table';
import Button from '../../ui/Button';
import LoadingButtonText from '../../ui/LoadingButtonText';
import { capitalizeEveryWord, formatCurrency } from '../../utils/helpers';
import { useReserveUnit } from './useReserveUnit';

const Div = styled.div`
  font-size: 0.875rem;
`;

function UnitsRow({
  unit: {
    id,
    unitNo,
    reservationFee,
    projects: { projectName },
  },
}) {
  const { isReserving, reserveUnit } = useReserveUnit();

  return (
    <Table.Row>
      <Div>{unitNo}</Div>
      <Div>{capitalizeEveryWord(projectName)}</Div>
      <Div>{formatCurrency(reservationFee)}</Div>
      <Div>
        <Button
          size="small"
          disabled={isReserving}
          onClick={() => reserveUnit(id)}
        >
          {isReserving ? <LoadingButtonText text="Reserving..." /> : 'Reserve'}
        </Button>
      </Div>
    </Table.Row>
  );
}

export default UnitsRow;
