import { useQuery } from '@tanstack/react-query';
import { getMemberDetails } from '../../services/profileApi';

export function useMember() {
  const { isLoading, data: memberDetails } = useQuery({
    queryKey: ['member'],
    queryFn: getMemberDetails,
  });

  return { isLoading, memberDetails };
}
