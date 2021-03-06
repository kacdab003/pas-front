import styled from 'styled-components';

export const StyledSubmitButton = styled.button`
  width: 30%;
  height: 3rem;
  border-radius: 20px;
  font-size: 1.2rem;
  background-color: #e62a94;
  color: white;
  transition: ease-in-out 0.2s;
  &:hover {
    ${(props) =>
      props.disabled
        ? `color: black;
    background-color: darkgrey;
    cursor: not-allowed;`
        : `color: #e62a94;
    background-color: white;
    border: 1px solid #e62a94;
    cursor: pointer;`}
  }

  ${(props) =>
    props.disabled
      ? `color: black;
    background-color: darkgrey;
    border: 1px solid black;`
      : null}
`;

export const SubmitButtonWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;
