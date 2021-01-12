import styled from 'styled-components';

export const StyledBackdrop = styled.div`
  ${(props) =>
    props.show &&
    `
    display: flex;
    align-items: center;
    justify-content: center;
      width: 100vw;
      height: 100%;
      position: absolute;
      z-index: 100;
      left: 0;
      top: 0;
      background-color: rgba(0, 0, 0, 0.5);
    `}
`;
