import React from 'react';
import { Modal, ModalActions, ModalContent, ModalHeader } from 'semantic-ui-react';

export const ModalWrapper = ({ open, actions, header, content }) => {
  return (
    <Modal basic closeOnDimmerClick={false} closeOnEscape={false} open={open} size='tiny'>
      <ModalHeader>{header}</ModalHeader>
      <ModalContent>{content}</ModalContent>
      <ModalActions>{actions}</ModalActions>
    </Modal>
  );
};
