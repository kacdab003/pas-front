import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledNavbarItem = styled.li`
  display: flex;
  list-style: none;
  align-items: center;
  transition: ease-in-out 0.2s;
  &:hover {
    opacity: 0.8;
  }
`;

export const StyledNavbarItemIcon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  margin: 0 1rem;
`;

export const StyledNavlink = styled(Link)`
  color: white;
  text-decoration: none;
`;
