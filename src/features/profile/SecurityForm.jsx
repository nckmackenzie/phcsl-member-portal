import FormControl from '../../ui/FormControl';
import Button from '../../ui/Button';
import Input from '../../ui/Input';
function SecurityForm() {
  return (
    <form className="flex flex-col gap-3">
      <FormControl label="Old Password">
        <Input type="password" id="oldPassword" />
      </FormControl>
      <FormControl label="New Password">
        <Input type="password" id="newPassword" />
      </FormControl>
      <FormControl label="Confirm Password">
        <Input type="password" id="confirmPassword" />
      </FormControl>
      <Button className="self-start">Update Password</Button>
    </form>
  );
}

export default SecurityForm;
