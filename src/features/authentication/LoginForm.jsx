import { styled } from 'styled-components';
import { useColors } from '../../hooks/useColors';
import Card from '../../ui/Card';
import FormControl from '../../ui/FormControl';
import Input from '../../ui/Input';
import { useForm } from 'react-hook-form';
import Button from '../../ui/Button';
import Spinner from '../../ui/Spinner';
import { useLogin } from './useLogin';

const StyledLoginForm = styled.main`
  min-height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.img`
  width: 180px;
  height: auto;

  @media (min-width: 1024px) {
    width: 240px;
  }
`;

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const { textColor, bgColor } = useColors();
  const { isLogginIn, login } = useLogin();

  function onSubmit(values) {
    login(values, {
      onSettled: () => reset(),
    });
  }

  return (
    <StyledLoginForm className={`${bgColor} ${textColor}`}>
      <form
        className="max-w-lg w-full mx-4 sm:mx-0"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Card className="flex flex-col gap-4">
          <Logo
            src="/logos/logo_landscape.png"
            alt="PCEA Housing Logo"
            className="self-center"
          />
          <FormControl label="Phone No" error={errors?.email?.message}>
            <Input
              placeholder="test@phcsl.co.ke"
              type="email"
              id="email"
              {...register('email', {
                required: 'Provide your email',
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: 'Invalid email provided',
                },
              })}
            />
          </FormControl>
          <FormControl label="Password" error={errors?.password?.message}>
            <Input
              placeholder="password"
              type="password"
              id="password"
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 6,
                  message: 'Password has to be more than 6 characters',
                },
              })}
            />
          </FormControl>

          <Button
            type="submit"
            size="normal"
            variant="contained"
            disabled={isLogginIn}
            className="flex items-center justify-center gap-1"
          >
            {isLogginIn ? (
              <>
                <Spinner size="small" />
                <span>Authenticating...</span>
              </>
            ) : (
              'Login'
            )}
          </Button>
        </Card>
      </form>
    </StyledLoginForm>
  );
}

export default LoginForm;
