import * as React from 'react';
import Heading from '@appfocused/ui-components/dist/es/components/Heading';
import Button from '@appfocused/ui-components/dist/es/components/Button';
import Modal from '@appfocused/ui-components/dist/es/components/Modal';
import Input from '@appfocused/ui-components/dist/es/components/Input';

import AddIcon from '@material-ui/icons/AddOutlined';
import { useDispatch } from 'react-redux';
import { createPortfolio } from '../../store/portfolios/actions';

export const CreatePortfolio: React.FunctionComponent = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [portfolioName, setPortfolioName] = React.useState();
  const dispatch = useDispatch();

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPortfolioName(e.target.value);
  };

  const handleCreatePortfolio = () => {
    dispatch(
      createPortfolio({
        name: portfolioName,
        ccy: 'GBP',
        onSuccess: () => {
          setIsModalOpen(false);
        }
      })
    );
  };

  return (
    <>
      <Button intent="secondary" onClick={handleModalOpen}>
        <AddIcon /> Add Portfolio
      </Button>
      <Modal isOpen={isModalOpen} onClose={handleModalClose}>
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
