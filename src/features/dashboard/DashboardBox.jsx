import { styled } from 'styled-components';
import Stats from './Stats';
import Chart from './Chart';
import Payments from './Payments';

const DashboardLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ChartArea = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  max-width: 100%;

  @media (min-width: 1024px) {
    grid-template-columns: 2fr 1fr;
  }
`;

function DashboardBox() {
  return (
    <DashboardLayout>
      <Stats />
      <ChartArea>
        <Chart />
        <Payments />
      </ChartArea>
    </DashboardLayout>
  );
}

export default DashboardBox;
