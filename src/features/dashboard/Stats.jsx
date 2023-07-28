import { styled } from 'styled-components';
import {
  LiaPercentSolid,
  LiaPiggyBankSolid,
  LiaMoneyCheckAltSolid,
} from 'react-icons/lia';
import { BsHouses } from 'react-icons/bs';
import Stat from './Stat';
import { formatCurrency } from '../../utils/helpers';

const StyledStats = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  gap: 1rem;

  @media (min-width: 640px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

function Stats() {
  return (
    <StyledStats>
      <Stat
        title="Shares"
        icon={<LiaPercentSolid />}
        value={formatCurrency('20000')}
        color="blue"
      />
      <Stat
        title="Deposit"
        icon={<LiaPiggyBankSolid />}
        value={formatCurrency('160000')}
        color="green"
      />
      <Stat
        title="Unit Payments"
        icon={<BsHouses />}
        value={formatCurrency('600000')}
        color="yellow"
      />
      <Stat
        title="Unit Balances"
        icon={<LiaMoneyCheckAltSolid />}
        value={formatCurrency('600000')}
        color="silver"
      />
    </StyledStats>
  );
}

export default Stats;
