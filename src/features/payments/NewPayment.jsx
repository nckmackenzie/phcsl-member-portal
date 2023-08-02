import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { styled } from 'styled-components';
import Card from '../../ui/Card';
import Spinner from '../../ui/Spinner';
import { useMember } from '../profile/useMember';
import useMediaQuery from '../../hooks/useMediaQuery';
import DesktopForm from './DesktopForm';
import MobileForm from './MobileForm';
import { useSavePayment } from './useSavePayment';

const CustomCard = styled(Card)`
  max-width: 56rem;
  border: 1px solid var(--color-grey-100);
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-sm);
  border-radius: var(--border-radius-sm);
  padding: 0.5rem;

  @media (min-width: 1024px) {
    max-width: 56rem;
  }
`;

const Header = styled.header`
  margin-bottom: 1.5rem;
  & h2 {
    font-size: 1.125rem;
    font-weight: 500;
    color: var(--color-blue-100);
  }
  & p {
    font-size: 0.875rem;
    color: var(--color-grey-400);
  }
`;

export const Select = styled.select`
  border: 1px solid var(--color-grey-300);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-sm);
  padding: 0.375rem 0.75rem;
  box-shadow: var(--shadow-sm);

  @media (min-width: 1536px) {
    padding: 0.5rem 0.75rem;
  }
`;

export const CardFooter = styled.div`
  margin-top: 1rem;
`;

function NewPayment() {
  const { isLoading, memberDetails } = useMember();
  const isDeskop = useMediaQuery('(min-width: 960px)');
  const { isSaving, savePayment } = useSavePayment();

  const [disableProjectFields, setDisableProjectFields] = useState(true);
  const { register, handleSubmit, formState, setValue, getValues } = useForm();
  const { errors } = formState;

  function handleChange(e) {
    if (+e.target.value === 4) {
      setDisableProjectFields(false);
      setValue('project', '');
    } else {
      setDisableProjectFields(true);
    }
    setValue('balance', '');
  }

  function handleProjectChange(e) {
    if (e.target.value !== '') setValue('balance', '60000');
    else setValue('balance', '');
  }

  const validateProject = value => {
    if (getValues('purpose') === '4' && value === '') {
      return 'Project is required for Unit Payment';
    }
    return true; // Return true for successful validation
  };

  function onSubmit(values) {
    const formDetails = {
      receiptDate: new Date(),
      memberId: 1,
      unitId: values.project ? values.project : null,
      purposeId: +values.purpose,
      amount: parseFloat(values.amount),
      payMethod: 'Mpesa',
      reference: 'RTX1290090XS',
    };
    savePayment(formDetails);
  }

  if (isLoading) return <Spinner />;
  return (
    <CustomCard>
      <Header>
        <h2>New Payment</h2>
        <p>
          This is a new MPESA payment that will prompt for MPESA pin once you
          press Submit
        </p>
      </Header>
      {isDeskop ? (
        <DesktopForm
          onSubmit={onSubmit}
          disableProjectFields={disableProjectFields}
          memberDetails={memberDetails}
          register={register}
          handleSubmit={handleSubmit}
          errors={errors}
          handleChange={handleChange}
          validateProject={validateProject}
          handleProjectChange={handleProjectChange}
          isSaving={isSaving}
        />
      ) : (
        <MobileForm
          onSubmit={onSubmit}
          disableProjectFields={disableProjectFields}
          memberDetails={memberDetails}
          register={register}
          handleSubmit={handleSubmit}
          errors={errors}
          handleChange={handleChange}
          validateProject={validateProject}
          handleProjectChange={handleProjectChange}
          isSaving={isSaving}
        />
      )}
    </CustomCard>
  );
}

export default NewPayment;
