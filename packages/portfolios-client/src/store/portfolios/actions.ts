import { createAction } from '../types';
import { Portfolio } from './reducers';
import { deletePortfolioService } from '../../services/portfolios';

export const FETCH_PORTFOLIOS = 'FETCH_PORTFOLIOS';
export const FETCH_PORTFOLIOS_SUCCESS = 'FETCH_PORTFOLIOS_SUCCESS';
export const FETCH_PORTFOLIOS_ERROR = 'FETCH_PORTFOLIOS_ERROR';

export const CREATE_PORTFOLIO = 'CREATE_PORTFOLIO';
export const CREATE_PORTFOLIO_SUCCESS = 'CREATE_PORTFOLIO_SUCCESS';

export const DELETE_PORTFOLIO = 'DELETE_PORTFOLIO';
export const DELETE_PORTFOLIO_SUCCESS = 'DELETE_PORTFOLIO_SUCCESS';
export const DELETE_PORTFOLIO_ERROR = 'DELETE_PORTFOLIO_ERROR';

export const fetchPortfolios = () => createAction(FETCH_PORTFOLIOS);
export const fetchPortfoliosSuccess = <T>(payload: T) =>
  createAction(FETCH_PORTFOLIOS_SUCCESS, payload);
export const fetchPortfoliosError = <E>(error: E) => createAction(FETCH_PORTFOLIOS_ERROR, error);

interface CreatePortfolioParams {
  name: string;
  ccy: string;
  onSuccess?: () => void;
}
export const createPortfolio = (params: CreatePortfolioParams) =>
  createAction(CREATE_PORTFOLIO, params);
export const createPortfolioSuccess = (payload: any) =>
  createAction(CREATE_PORTFOLIO_SUCCESS, payload);

export const deletePortfolio = (portfolioId: string) => createAction(DELETE_PORTFOLIO, portfolioId);
export const deletePortfolioSuccess = (payload: any) =>
  createAction(DELETE_PORTFOLIO_SUCCESS, payload);

export type PortfolioActions =
  | typeof FETCH_PORTFOLIOS
  | typeof FETCH_PORTFOLIOS_SUCCESS
  | typeof FETCH_PORTFOLIOS_ERROR
  | typeof CREATE_PORTFOLIO
  | typeof CREATE_PORTFOLIO_SUCCESS
  | typeof DELETE_PORTFOLIO
  | typeof DELETE_PORTFOLIO_SUCCESS
  | typeof DELETE_PORTFOLIO_ERROR;
