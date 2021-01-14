import React from 'react';
import { StyledMessage, MessageWrapper } from './StyledMessage';

const Message = ({ message, messageType }) => {
  let displayedMessage;

  if (!message && messageType === 'ERROR') {
    displayedMessage = 'Coś poszło nie tak...';
  } else if (!message && messageType !== 'ERROR') {
    displayedMessage = 'Operacja zakończona sukcesem';
  } else {
    displayedMessage = message;
  }

  return (
    <MessageWrapper messageType={messageType}>
      <StyledMessage>{displayedMessage}</StyledMessage>
    </MessageWrapper>
  );
};

export default Message;
