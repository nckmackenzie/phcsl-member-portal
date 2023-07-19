// import styled, { css } from 'styled-components';

import { css, styled } from 'styled-components';

const sizes = {
  small: css`
    font-size: 0.75rem;
    padding: 0.25rem 0.5rem;
    text-transform: uppercase;
    font-weight: 600;
    text-align: center;
  `,
  normal: css`
    font-size: 0.875rem;
    padding: 0.75rem 1rem;
    font-weight: 500;
  `,
  large: css`
    font-size: 1rem;
    padding: 0.75rem 1.5rem;
    font-weight: 500;
  `,
};

const variations = {
  contained: css`
    color: var(--color-brand-50);
    background-color: var(--color-brand-600);

    &:hover {
      background-color: var(--color-brand-700);
    }

    &:disabled {
      background-color: var(--color-brand-50);
      color: var(--color-brand-700);
    }
  `,

  outlined: css`
    color: var(--color-grey-600);
    background: var(--color-grey-0);
    border: 1px solid var(--color-brand-200);

    &:hover {
      background-color: var(--color-grey-50);
    }
  `,

  transparent: css`
    color: var(--color-grey-600);
    background: var(--color-grey-0);

    &:hover {
      background-color: var(--color-grey-50);
    }
  `,

  danger: css`
    color: var(--color-red-100);
    background-color: var(--color-red-700);

    &:hover {
      background-color: var(--color-red-800);
    }
  `,
};

const Button = styled.button`
  text-transform: uppercase;
  border: none;
  border-radius: var(--border-radius-sm);
  cursor: pointer;

  ${props => variations[props.variant]}
  ${props => sizes[props.size]}

  &:disabled {
    cursor: not-allowed;
  }
`;

Button.defaultProps = {
  size: 'normal',
  variant: 'contained',
};

export default Button;
