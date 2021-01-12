import React, { Component } from 'react';

import Backdrop from '../Backdrop/Backdrop';
import { StyledModal } from './StyledModal';

class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show !== this.props.show;
  }

  render() {
    return (
      <Backdrop show={this.props.show} clicked={this.props.modalClosed}>
        <StyledModal show={this.props.show}>{this.props.children}</StyledModal>
      </Backdrop>
    );
  }
}

export default Modal;
