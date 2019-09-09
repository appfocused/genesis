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
import { ActionTypes, PortfolioActions } from '../store/portfolios/dux';
import { createAction } from '../store/types';

const portfoliosResponseMapper = ({ data }: AxiosResponse) => {
  return data;
};

const getPortfoliosEpic: Epic<any, any, AppState> = (action$, store) =>
  action$.pipe(
    ofType(ActionTypes.Fetch),
    switchMap(action =>
      from(getPortfoliosService()).pipe(
        map(portfoliosResponseMapper),
        map(res => createAction(ActionTypes.FetchSuccess, res)),
        catchError(error => of(createAction(ActionTypes.FetchError, error)))
      )
    )
  );

const createPortfolioEpic: Epic<any, any, AppState> = (action$, store) =>
  action$.pipe(
    ofType(ActionTypes.Create),
    switchMap(action =>
      from(createPortfolioService(action.payload)).pipe(
        map(res => createAction(ActionTypes.CreateSuccess, res)),
        map(() => createAction(ActionTypes.Fetch)),
        tap(action.payload.onSuccess),
        catchError(error => of(console.warn(error)))
      )
    )
  );

const deletePortfolioEpic: Epic<any, any, AppState> = (action$, store) => {
  return action$.pipe(
    ofType(ActionTypes.Delete),
    switchMap(action =>
      from(deletePortfolioService(action.payload.id)).pipe(
        map(res => createAction(ActionTypes.DeleteSuccess, res)),
        map(() => createAction(ActionTypes.Fetch)),
        catchError(error => of(console.warn(error)))
      )
    )
  );
};

export const portfolioEpics = [createPortfolioEpic, getPortfoliosEpic, deletePortfolioEpic];
