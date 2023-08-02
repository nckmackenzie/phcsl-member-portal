import Button from '../../ui/Button';
import FormControlRow from '../../ui/FormControlRow';
import Input from '../../ui/Input';
import LoadingButtonText from '../../ui/LoadingButtonText';
import { Select, CardFooter } from './NewPayment';

function DesktopForm({
  onSubmit,
  disableProjectFields,
  handleSubmit,
  memberDetails,
  errors,
  register,
  handleChange,
  validateProject,
  handleProjectChange,
  isSaving,
}) {
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControlRow label="Member Name">
        <Input
          type="text"
          id="memberName"
          disabled={true}
          defaultValue={memberDetails.fullName}
        />
      </FormControlRow>
      <FormControlRow label="Contact" error={errors?.contact?.message}>
        <Input
          type="text"
          id="contact"
          defaultValue={memberDetails.contact}
          {...register('contact', {
            required: 'Phone no is required',
            minLength: { value: 10, message: 'invalid contact' },
            maxLength: { value: 10, message: 'invalid contact' },
          })}
        />
      </FormControlRow>
      <FormControlRow label="Amount" error={errors?.amount?.message}>
        <Input
          type="number"
          id="amount"
          {...register('amount', {
            required: 'Amount is required',
            min: { value: 100, message: 'Amount has to be more than 100' },
          })}
        />
      </FormControlRow>
      <FormControlRow
        label="Purpose Of Payment"
        error={errors?.purpose?.message}
      >
        <Select
          id="purpose"
          {...register('purpose', {
            required: 'Select purpose for payment',
            onChange: handleChange,
          })}
        >
          <option value="">Select Purpose</option>
          <option value="2">Shares</option>
          <option value="3">Deposit</option>
          <option value="4">Unit Payment</option>
        </Select>
      </FormControlRow>
      <FormControlRow label="Project" error={errors?.project?.message}>
        <Select
          id="project"
          disabled={disableProjectFields}
          defaultValue=""
          {...register('project', {
            onChange: handleProjectChange,
            validate: validateProject,
          })}
        >
          <option value="">Select Project</option>
          <option value="3">Ebenezar Gardens - 12</option>
          <option value="8">Riziki Gardens - 4</option>
        </Select>
      </FormControlRow>
      <FormControlRow label="Current Balance" defaultValue="">
        <Input
          type="number"
          id="balance"
          disabled={true}
          {...register('balance')}
        />
      </FormControlRow>
      <CardFooter>
        <Button disabled={isSaving}>
          {isSaving ? <LoadingButtonText text="Saving..." /> : 'Submit'}
        </Button>
      </CardFooter>
    </form>
  );
}

export default DesktopForm;
