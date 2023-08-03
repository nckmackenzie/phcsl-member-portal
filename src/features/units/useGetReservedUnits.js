import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getReservedUnits } from '../../services/unitsApi';
import { useSearchParams } from 'react-router-dom';
import { PAGE_SIZE } from '../../utils/constants';

export function useGetReservedUnits() {
  const [searchParam] = useSearchParams();
  const queryClient = useQueryClient();

  const page = searchParam.get('page') ? Number(searchParam.get('page')) : 1;

  const filteredValue = searchParam.get('projectId');
  const filter =
    !filteredValue || filteredValue === 'all'
      ? null
      : { field: 'projectId', value: filteredValue };

  const {
    isLoading: isLoadingUnits,
    data: { data: reservedUnits, count } = {},
  } = useQuery({
    queryFn: () => getReservedUnits({ filter, page }),
    queryKey: ['available-units', filter, page],
  });

  //PREFETCHING QUERIES
  const pageCount = Math.ceil(count / PAGE_SIZE);
  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ['available-units', filter, page + 1],
      queryFn: () => getReservedUnits({ filter, page: page + 1 }),
    });

  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ['available-units', filter, page - 1],
      queryFn: () => getReservedUnits({ filter, page: page - 1 }),
    });

  return { isLoadingUnits, reservedUnits, count };
}
