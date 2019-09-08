import { Epic, ofType } from 'redux-observable';
import { Action } from 'redux';
import { AppState } from '../store/store';
import { filter, switchMap, map, catchError, ignoreElements, tap, delay } from 'rxjs/operators';
import { from, of } from 'rxjs';
import {
  getPortfoliosService,
  createPortfolioService,
  deletePortfolioService
} from '../services/portfolios';
import {
  fetchPortfoliosSuccess,
  fetchPortfoliosError,
  FETCH_PORTFOLIOS,
  CREATE_PORTFOLIO,
  fetchPortfolios,
  createPortfolioSuccess,
  deletePortfolio,
  DELETE_PORTFOLIO,
  deletePortfolioSuccess
} from '../store/portfolios/actions';
import { AxiosResponse } from 'axios';

const portfoliosResponseMapper = ({ data }: AxiosResponse) => {
  return data;
};

const getPortfoliosEpic: Epic<any, any, AppState> = (action$, store) =>
  action$.pipe(
    ofType(FETCH_PORTFOLIOS),
    switchMap(action =>
      from(getPortfoliosService()).pipe(
        map(portfoliosResponseMapper),
        map(fetchPortfoliosSuccess),
        catchError(error => of(fetchPortfoliosError(error)))
      )
    )
  );

const createPortfolioEpic: Epic<any, any, AppState> = (action$, store) =>
  action$.pipe(
    ofType(CREATE_PORTFOLIO),
    switchMap(action =>
      from(createPortfolioService(action.payload)).pipe(
        map(res => createPortfolioSuccess(res)),
        map(fetchPortfolios),
        tap(action.payload.onSuccess),
        catchError(error => of(console.warn(error)))
      )
    )
  );

const deletePortfolioEpic: Epic<any, any, AppState> = (action$, store) => {
  return action$.pipe(
    ofType(DELETE_PORTFOLIO),
    switchMap(action =>
      from(deletePortfolioService(action.payload)).pipe(
        map(res => deletePortfolioSuccess(res)),
        map(fetchPortfolios),
        catchError(error => of(console.warn(error)))
      )
    )
  );
};

export const portfolioEpics = [createPortfolioEpic, getPortfoliosEpic, deletePortfolioEpic];
