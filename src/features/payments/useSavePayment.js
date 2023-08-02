import { useMutation } from '@tanstack/react-query';
import { createPayment } from '../../services/payment';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export function useSavePayment() {
  const navigate = useNavigate();
  const { isLoading: isSaving, mutate: savePayment } = useMutation({
    mutationFn: details => createPayment(details),
    onSuccess: () => {
      navigate('/payments');
    },
    onError: error => toast.error(error.message),
  });

  return { isSaving, savePayment };
}
