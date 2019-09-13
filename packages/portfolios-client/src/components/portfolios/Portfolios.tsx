import * as React from 'react';
import { Heading } from '@appfocused/ui-components/dist/es';
import { useDispatch, useSelector } from 'react-redux';
import { ReducerEntity } from '../../store/types';
import { PortfolioModel } from '../../store/portfolios/reducers';
import { AppState } from '../../store/store';
import { createAction, ActionTypes } from '../../store/portfolios/dux';

export const Portfolios: React.FunctionComponent<{}> = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(createAction(ActionTypes.Fetch));
  }, []);

  const { isLoading, data } = useSelector<AppState, ReducerEntity<PortfolioModel>>(
    state => state.portfoliosReducer
  );

  const handleDelete = (e: React.SyntheticEvent, portfolioId: string) => {
    e.preventDefault();
    dispatch(createAction(ActionTypes.Delete, { id: portfolioId }));
  };

  return (
    <>
      <Heading>Portfolios</Heading>

      {isLoading && <div>Loading...</div>}

      {data.map(portfolio => {
        return (
          <div key={portfolio.id}>
            {portfolio.name}{' '}
            <a href="#" onClick={(e: React.SyntheticEvent) => handleDelete(e, portfolio.id)}>
              Delete
            </a>
          </div>
        );
      })}
    </>
  );
};
