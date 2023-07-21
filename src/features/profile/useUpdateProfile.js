import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateMemberDetails } from '../../services/profileApi';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export function useUpdateProfile() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { isLoading: isUpdating, mutate: updateProfile } = useMutation({
    mutationFn: values => updateMemberDetails(values),
    onSuccess: () => {
      queryClient.invalidateQueries();
      navigate('/');
    },
    onError: error => toast.error(error.message),
  });

  return { isUpdating, updateProfile };
}
