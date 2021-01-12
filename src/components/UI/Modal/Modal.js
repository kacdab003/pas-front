import React, { Component } from 'react';

import Backdrop from '../Backdrop/Backdrop';
import { StyledModal } from './StyledModal';

class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show !== this.props.show;
  }

  render() {
    return (
      <StyledModal>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        {this.props.children}
      </StyledModal>
    );
  }
}

export default Modal;
