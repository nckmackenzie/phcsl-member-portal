import { useQuery } from '@tanstack/react-query';
import { getProjects } from '../../services/unitsApi';

export function useGetProjects() {
  const { isLoading, data } = useQuery({
    queryFn: getProjects,
    queryKey: ['unique-projects'],
  });

  return { isLoading, data };
}
