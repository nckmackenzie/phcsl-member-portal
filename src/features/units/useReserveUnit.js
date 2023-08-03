import { useMutation, useQueryClient } from '@tanstack/react-query';
import { reserveUnit as reserveUnitApi } from '../../services/unitsApi';
import { toast } from 'react-hot-toast';

export function useReserveUnit() {
  const queryClient = useQueryClient();
  const { isLoading: isReserving, mutate: reserveUnit } = useMutation({
    mutationFn: id => reserveUnitApi(id),
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
    onError: error => toast.error(error.message),
  });

  return { isReserving, reserveUnit };
}
