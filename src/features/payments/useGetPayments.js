import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';
import { getPayments } from '../../services/payment';
import { PAGE_SIZE } from '../../utils/constants';

export function useGetPayments() {
  const [searchParams] = useSearchParams();
  const queryClient = useQueryClient();
  const filterValue = searchParams.get('purposeId');

  const filter =
    !filterValue || filterValue === 'all'
      ? null
      : { field: 'purposeId', value: filterValue };
  const page = searchParams.get('page') ? Number(searchParams.get('page')) : 1;

  const { isLoading, data: { data: payments, count } = {} } = useQuery({
    queryKey: ['payments', filter, page],
    queryFn: () => getPayments({ filter, page }),
  });

  //PREFETCHING QUERIES
  const pageCount = Math.ceil(count / PAGE_SIZE);
  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ['payments', filter, page + 1],
      queryFn: () => getPayments({ filter, page: page + 1 }),
    });

  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ['payments', filter, page - 1],
      queryFn: () => getPayments({ filter, page: page - 1 }),
    });

  return { isLoading, payments, count };
}
