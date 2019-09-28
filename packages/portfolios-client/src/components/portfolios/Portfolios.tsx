import * as React from 'react';
import { Heading, Modal } from '@appfocused/ui-components/dist/es';
import { useDispatch, useSelector } from 'react-redux';
import { ReducerEntity } from '../../store/types';
import { PortfolioModel } from '../../store/portfolios/reducers';
import { AppState } from '../../store/store';
import { createAction, ActionTypes, PortfolioActions } from '../../store/portfolios/dux';
import { confirmAction } from '../Confirm/ConfirmationService';

export const Portfolios: React.FunctionComponent<{}> = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(createAction(ActionTypes.Fetch));
  }, []);

  const { isLoading, data } = useSelector<AppState, ReducerEntity<PortfolioModel>>(
    state => state.portfoliosReducer
  );

  const handleDelete = async (e: React.SyntheticEvent, { id, name }: PortfolioModel) => {
    e.preventDefault();
    const isConfirmed = await confirmAction({
      confirmationText: `Delete "${name}" portfolio?`,
      confirmButtonText: 'Delete'
    });

    if (isConfirmed) {
      dispatch(createAction(ActionTypes.Delete, { id }));
    }
  };

  return (
    <>
      <Heading>Portfolios</Heading>

      {isLoading && <div>Loading...</div>}

      {data.map(portfolio => {
        return (
          <div key={portfolio.id}>
            {portfolio.name}{' '}
            <a href="#" onClick={(e: React.SyntheticEvent) => handleDelete(e, portfolio)}>
              Delete
            </a>
          </div>
        );
      })}
    </>
  );
};
