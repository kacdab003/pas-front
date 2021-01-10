import { Link } from 'react-router-dom';
import styled from 'styled-components';
import notFoundImage from '../../assets/images/404/browser.svg';
export const StyledNotFound = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const NotFoundImage = styled.div`
  width: 60rem;
  height: 30rem;
  background-image: url(${notFoundImage});
  background-size: 60rem 30rem;
  margin: 1rem;
`;

export const StyledReturnLink = styled(Link)`
  text-decoration: none;
  color: #e62a94;
  transition: ease-in-out 0.2s;
  &:hover {
    color: #005fee;
  }
`;
