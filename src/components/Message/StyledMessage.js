import styled from 'styled-components';

export const MessageWrapper = styled.div`
  background-color: ${({ messageType }) => (messageType === 'ERROR' ? '#ffcccc' : '#A6D785')};
  border: 1px solid ${({ messageType }) => (messageType === 'ERROR' ? 'red' : 'green')};
  padding: 0.5rem;
  border-radius: 5px;
  max-width: 30rem;
  text-align: center;
  margin: auto;
`;

export const StyledMessage = styled.p`
  color: black;
  font-weight: bold;
  font-size: 1.5rem;
`;
