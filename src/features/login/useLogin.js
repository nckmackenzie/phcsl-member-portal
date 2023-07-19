import { useMutation, useQueryClient } from '@tanstack/react-query';
import { login as loginApi } from '../../services/authApi';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { isLoading: isLogginIn, mutate: login } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: ({ user }) => {
      queryClient.setQueryData(['user'], user);
      navigate('/', { replace: true });
    },
    onError: error => toast.error(error.message),
  });

  return { isLogginIn, login };
}
