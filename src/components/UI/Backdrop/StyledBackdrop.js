import styled from 'styled-components';

export const StyledBackdrop = styled.div`
  ${(props) =>
    props.show && {
      width: '100%',
      height: '100%',
      position: 'fixed',
      zIndex: '100',
      left: '0',
      top: '0',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    }}
`;
