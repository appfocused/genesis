// Inspiration
// https://stackblitz.com/edit/react-confirmasservice
// https://stackoverflow.com/questions/50359837/show-confirmation-dialog-using-redux-observable

import ReactDOM from 'react-dom';
import React from 'react';
import { Modal, Button } from '@appfocused/ui-components/dist/es';

const mainContainer = document.getElementById('portal-container');

interface ConfirmActionOptions {
  confirmationText?: string;
  confirmButtonText?: string;
  cancelButtonText?: string;
}

export const confirmAction = ({
  confirmationText = 'Confirm action',
  confirmButtonText = 'Confirm',
  cancelButtonText = 'Cancel'
}: ConfirmActionOptions = {}) => {
  return new Promise(resolve => {
    let isOpen = true;
    let render: any;

    const hideModal = () => {
      isOpen = false;
      render();
    };

    const handleConfirm = () => {
      hideModal();
      resolve(true);
    };

    const handleReject = () => {
      hideModal();
      resolve(false);
    };

    const handleClose = () => {
      hideModal();
      resolve(false);
    };

    render = () => {
      ReactDOM.render(
        <Modal isOpen={isOpen} onClose={handleClose}>
          <>
            <div>{confirmationText}</div>
            <Button onClick={handleReject}>{cancelButtonText}</Button>
            <Button intent="danger" onClick={handleConfirm}>
              {confirmButtonText}
            </Button>
          </>
        </Modal>,
        mainContainer
      );
    };

    render();
  });
};
