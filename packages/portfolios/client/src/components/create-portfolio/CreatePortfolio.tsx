import * as React from 'react';
import Heading from '@appfocused/ui-components/dist/es/components/Heading';
import Button from '@appfocused/ui-components/dist/es/components/Button';
import Modal from '@appfocused/ui-components/dist/es/components/Modal';
import Input from '@appfocused/ui-components/dist/es/components/Input';
import { Intent } from '@appfocused/ui-components/dist/es';

import AddIcon from '@material-ui/icons/AddOutlined';

export const CreatePortfolio: React.FunctionComponent = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleModalClose = () => {
    setIsOpen(false);
  };

  const handleModalOpen = () => {
    setIsOpen(true);
  };

  return (
    <>
      <Button intent={Intent.Primary} onClick={handleModalOpen}>
        <AddIcon /> Add Portfolio
      </Button>
      <Modal isOpen={isOpen} onClose={handleModalClose}>
        <>
          <Heading>Create Portfolio</Heading>
          <p>lorem ipsum</p>
          <Input />
          <Button intent={Intent.Primary}>Create</Button>
        </>
      </Modal>
    </>
  );
};
