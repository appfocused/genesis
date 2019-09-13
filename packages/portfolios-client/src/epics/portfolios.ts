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
import { AxiosResponse } from 'axios';
import { ActionTypes, PortfolioActions, createAction, TypeMap } from '../store/portfolios/dux';
import { PortfolioModel } from '../store/portfolios/reducers';

const portfoliosResponseMapper = <T = any>({ data }: AxiosResponse<T>) => {
  return data;
};

const getPortfoliosEpic: Epic<PortfolioActions, any, AppState> = (action$, store) =>
  action$.pipe(
    ofType<PortfolioActions, TypeMap[ActionTypes.Fetch]>(ActionTypes.Fetch),
    switchMap(() =>
      from(getPortfoliosService()).pipe(
        map(res => portfoliosResponseMapper<PortfolioModel[]>(res)),
        map(res => createAction(ActionTypes.FetchSuccess, res)),
        catchError(error => of(createAction(ActionTypes.FetchError, error)))
      )
    )
  );

const createPortfolioEpic: Epic<PortfolioActions, any, AppState> = (action$, store) =>
  action$.pipe(
    ofType<PortfolioActions, TypeMap[ActionTypes.Create]>(ActionTypes.Create),
    switchMap(action =>
      from(createPortfolioService(action.payload)).pipe(
        map(res => portfoliosResponseMapper<PortfolioModel>(res)),
        map(res => createAction(ActionTypes.CreateSuccess, res)),
        map(() => createAction(ActionTypes.Fetch)),
        tap(action.payload.onSuccess),
        catchError(error => of(console.warn(error)))
      )
    )
  );

const deletePortfolioEpic: Epic<any, any, AppState> = (action$, store) => {
  return action$.pipe(
    ofType<PortfolioActions, TypeMap[ActionTypes.Delete]>(ActionTypes.Delete),
    switchMap(action =>
      from(deletePortfolioService(action.payload.id)).pipe(
        map(res => portfoliosResponseMapper<PortfolioModel>(res)),
        map(res => createAction(ActionTypes.DeleteSuccess, res)),
        map(() => createAction(ActionTypes.Fetch)),
        catchError(error => of(console.warn(error)))
      )
    )
  );
};

export const portfolioEpics = [createPortfolioEpic, getPortfoliosEpic, deletePortfolioEpic];
