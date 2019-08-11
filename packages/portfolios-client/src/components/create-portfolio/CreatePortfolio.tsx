import * as React from 'react';
import Heading from '@appfocused/ui-components/dist/es/components/Heading';
import Button from '@appfocused/ui-components/dist/es/components/Button';
import Modal from '@appfocused/ui-components/dist/es/components/Modal';
import Input from '@appfocused/ui-components/dist/es/components/Input';

import AddIcon from '@material-ui/icons/AddOutlined';
import { endpoints } from '../../utils/api-utils';

export const CreatePortfolio: React.FunctionComponent = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleModalClose = () => {
    setIsOpen(false);
  };

  const handleModalOpen = () => {
    setIsOpen(true);
  };

  const handleCreatePortfolio = () => {
    const url = endpoints.portfolios;
    const data = { test: '123' };
    fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'no-cors', // no-cors, cors, *same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow', // manual, *follow, error
      referrer: 'no-referrer', // no-referrer, *client
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
  };

  return (
    <>
      <Button intent="secondary" onClick={handleModalOpen}>
        <AddIcon /> Add Portfolio
      </Button>
      <Modal isOpen={isOpen} onClose={handleModalClose}>
        <>
          <Heading>Create Portfolio</Heading>
          <p>lorem ipsum</p>
          <Input />
          <Button intent="primary" onClick={handleCreatePortfolio}>
            Create
          </Button>
        </>
      </Modal>
    </>
  );
};
