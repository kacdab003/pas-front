import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavbarItem = styled.li`
  width: auto;
  display: flex;
  list-style: none;
  align-items: center;
  transition: ease-in-out 0.2s;
  &:hover {
    opacity: 0.8;
  }
`;

export const StyledNavbarItemIcon = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  margin: 0 1rem;
  background-image: url(${(props) => props.backgroundImg});
`;

export const StyledNavlink = styled(NavLink)`
  display: flex;
  align-items: center;
  color: white;
  text-decoration: none;
  transition: ease-in-out 0.2s;
  &.active {
    background-color: rgba(255, 255, 255, 0.3);
  }
  &:hover {
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.3);
  }
`;
