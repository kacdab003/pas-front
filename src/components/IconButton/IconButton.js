import styled from 'styled-components';

export const IconButton = styled.button`
  display: block;
  width: 1.5rem;
  height: 1.5rem;
  background-color: transparent;
  background-image: url(${(props) => props.src});
  background-size: cover;
  transition: ease-in-out 0.2s;
  outline: 0;
  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;
