import styled from 'styled-components';

export const StyledFormikCheckboxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & input[type='checkbox'] {
    width: 3rem;
    height: 3rem;
  }
  & label {
    text-transform: uppercase;
    margin-bottom: 1rem;
  }
`;
