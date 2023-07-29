import { styled } from 'styled-components';

const StyledSelect = styled.select`
  border: 1px solid var(--color-grey-300);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-sm);
  padding: 0.375rem 0.75rem;
  box-shadow: var(--shadow-sm);

  @media (min-width: 1536px) {
    padding: 0.5rem 0.75rem;
  }
`;

function Select({ defaultValue, options, register, id, validations = {} }) {
  return (
    <StyledSelect
      id={id}
      defaultValue={defaultValue}
      {...register(id, validations)}
    >
      {options?.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </StyledSelect>
  );
}

export default Select;
