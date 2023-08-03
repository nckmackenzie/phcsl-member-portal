import { styled } from 'styled-components';
import Filter from '../../ui/Filter';
import Spinner from '../../ui/Spinner';
import TiltScreen from '../../ui/TiltScreen';
import { capitalizeEveryWord } from '../../utils/helpers';
import { useGetProjects } from './useGetProjects';
import { useGetReservedUnits } from './useGetReservedUnits';
import AvailableUnitsTable from './AvailableUnitsTable';

function getUniqueObjects(array) {
  const uniqueSet = new Set();
  const uniqueObjects = [];

  array.forEach(obj => {
    const projectId = obj.projectId;
    if (!uniqueSet.has(projectId)) {
      uniqueSet.add(projectId);
      uniqueObjects.push(obj);
    }
  });

  return uniqueObjects;
}

const StyledUnitsLayout = styled.div`
  width: fit-content;
`;

function UnitsLayout() {
  const { isLoading, data } = useGetProjects();
  const { isLoadingUnits, count, reservedUnits } = useGetReservedUnits();

  if (isLoading || isLoadingUnits) return <Spinner />;

  const projects = data?.map(unit => ({
    projectId: unit.projectId,
    projectName: capitalizeEveryWord(unit.projects.projectName),
  }));

  const uniqueProjects = getUniqueObjects(projects).map(project => ({
    value: project.projectId.toString(),
    label: project.projectName,
  }));

  const filterOptions = [{ value: 'all', label: 'All' }, ...uniqueProjects];

  return (
    <>
      <StyledUnitsLayout>
        <TiltScreen />
        <Filter filterField="projectId" options={filterOptions} />
      </StyledUnitsLayout>
      <AvailableUnitsTable data={reservedUnits} count={count} />
    </>
  );
}

export default UnitsLayout;
