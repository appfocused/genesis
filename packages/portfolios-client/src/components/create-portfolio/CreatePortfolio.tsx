import * as React from 'react';
import Heading from '@appfocused/ui-components/dist/es/components/Heading';
import Button from '@appfocused/ui-components/dist/es/components/Button';
import Modal from '@appfocused/ui-components/dist/es/components/Modal';
import Input from '@appfocused/ui-components/dist/es/components/Input';

import AddIcon from '@material-ui/icons/AddOutlined';
import { endpoints } from '../../utils/api-utils';

export const CreatePortfolio: React.FunctionComponent = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [portfolioName, setPortfolioName] = React.useState();

  const handleModalClose = () => {
    setIsOpen(false);
  };

  const handleModalOpen = () => {
    setIsOpen(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPortfolioName(e.target.value);
  };

  const handleCreatePortfolio = () => {
    const url = endpoints.portfolios;
    const data = { name: portfolioName, ccy: 'GBP' };
    fetch(url, {
      method: 'POST',
      cache: 'no-cache',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      redirect: 'follow',
      referrer: 'no-referrer',
      body: JSON.stringify(data)
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
          <Input onChange={handleInputChange} />
          <Button intent="primary" onClick={handleCreatePortfolio}>
            Create
          </Button>
        </>
      </Modal>
    </>
  );
};
