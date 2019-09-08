import * as React from 'react';
import { Heading } from '@appfocused/ui-components/dist/es';
import { getPortfoliosService } from '../../services/portfolios';
import { fetchPortfolios, deletePortfolio } from '../../store/portfolios/actions';
import { useDispatch, useSelector } from 'react-redux';
import { ReducerEntity } from '../../store/types';
import { Portfolio } from '../../store/portfolios/reducers';
import { AppState } from '../../store/store';

export const Portfolios: React.FunctionComponent<{}> = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchPortfolios());
  }, []);

  const { isLoading, data } = useSelector<AppState, ReducerEntity<Portfolio>>(
    state => state.portfoliosReducer
  );

  const handleDelete = (e: React.SyntheticEvent, portfolioId: string) => {
    e.preventDefault();
    dispatch(deletePortfolio(portfolioId));
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
