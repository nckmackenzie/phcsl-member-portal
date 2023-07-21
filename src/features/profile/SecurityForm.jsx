import FormControl from '../../ui/FormControl';
import Button from '../../ui/Button';
import Input from '../../ui/Input';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

function SecurityForm() {
  const { register, handleSubmit, getValues, formState, reset } = useForm();
  const { errors } = formState;

  function onSubmit() {
    toast.success('Password changed successfully!');
    reset();
  }

  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
      <FormControl label="Old Password" error={errors?.oldPassword?.message}>
        <Input
          type="password"
          id="oldPassword"
          {...register('oldPassword', { required: 'Old Password is required' })}
        />
      </FormControl>
      <FormControl label="New Password" error={errors?.newPassword?.message}>
        <Input
          type="password"
          id="newPassword"
          {...register('newPassword', {
            required: 'New Password is required',
            minLength: {
              value: 8,
              message: 'Password needs to be at least 8 characters',
            },
          })}
        />
      </FormControl>
      <FormControl
        label="Confirm Password"
        error={errors?.confirmPassword?.message}
      >
        <Input
          type="password"
          id="confirmPassword"
          {...register('confirmPassword', {
            required: 'Confirm new password',
            minLength: {
              value: 8,
              message: 'Password needs to be at least 8 characters',
            },
            validate: value =>
              getValues().newPassword === value || 'Passwords need to match',
          })}
        />
      </FormControl>
      <Button className="self-start">Update Password</Button>
    </form>
  );
}

export default SecurityForm;
