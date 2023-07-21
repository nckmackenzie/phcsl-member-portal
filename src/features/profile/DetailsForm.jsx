import { styled } from 'styled-components';
import FormControl from '../../ui/FormControl';
import Button from '../../ui/Button';
import Input from '../../ui/Input';
// import FileUpload from '../../ui/FileUpload';
import Spinner from '../../ui/Spinner';
import { useMember } from './useMember';
import { useForm } from 'react-hook-form';
// import { toast } from 'react-hot-toast';
import { useUpdateProfile } from './useUpdateProfile';
import LoadingButtonText from '../../ui/LoadingButtonText';

const StyledForm = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
`;

const Avatar = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  margin-bottom: 1rem;
`;

function DetailsForm() {
  const { isLoading, memberDetails = {} } = useMember();
  const { isUpdating, updateProfile } = useUpdateProfile();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  function onSubmit(values) {
    // if (values.avatar.length && Number(values.avatar[0].size) > 1000000) {
    //   toast.error('Image exceeds allowed size(1MB)');
    //   return;
    // }
    updateProfile(values);
  }

  if (isLoading) return <Spinner />;

  return (
    <>
      <Avatar
        src={
          memberDetails?.avatar || import.meta.env.VITE_REACT_APP_DEFAULT_AVATAR
        }
        alt={`avatar for ${memberDetails?.fullName}`}
      />
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <FormControl label="Full Name" error={errors?.fullName?.message}>
          <Input
            type="text"
            id="fullName"
            defaultValue={memberDetails?.fullName}
            {...register('fullName', { required: 'Name is required' })}
            disabled={isUpdating}
          />
        </FormControl>
        <FormControl label="ID No" error={errors?.idNo?.message}>
          <Input
            type="text"
            id="idNo"
            defaultValue={memberDetails?.idNo}
            {...register('idNo', {
              required: 'Id No is required',
              minLength: {
                value: 6,
                message: 'ID No cannot be less than six characters',
              },
            })}
            disabled={isUpdating}
          />
        </FormControl>
        <FormControl label="Contact" error={errors?.contact?.message}>
          <Input
            type="text"
            id="contact"
            maxLength={10}
            defaultValue={memberDetails?.contact}
            {...register('contact', {
              required: 'Contact is required',
              minLength: { value: 10, message: 'Invalid contact provided' },
              maxLength: { value: 10, message: 'Invalid contact provided' },
            })}
            disabled={isUpdating}
          />
        </FormControl>
        <FormControl label="Email" error={errors?.email?.message}>
          <Input
            type="email"
            id="email"
            defaultValue={memberDetails?.email}
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: 'Invalid email provided',
              },
            })}
            disabled={isUpdating}
          />
        </FormControl>
        <FormControl label="Member #">
          <Input
            type="text"
            id="memberId"
            defaultValue={memberDetails?.memberId}
            readOnly
          />
        </FormControl>
        <div></div>
        {/* <FormControl label="Profile Picture">
          <FileUpload
            id="avatar"
            color="secondary"
            {...register('avatar')}
            disabled={isUpdating}
          />
        </FormControl> */}
        <div className="flex gap-2">
          <Button disabled={isUpdating} className="flex items-center gap-1">
            {isUpdating ? (
              <LoadingButtonText text="Updating..." />
            ) : (
              'Update Details'
            )}
          </Button>
        </div>
      </StyledForm>
    </>
  );
}

export default DetailsForm;
