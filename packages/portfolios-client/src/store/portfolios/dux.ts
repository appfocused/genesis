import { ActionMap, actionCreator } from '../types';

export enum Portfolio {
  Fetch = 'Portfolio/FETCH',
  FetchSuccess = 'Portfolio/FETCH_SUCCESS',
  FetchError = 'Portfolio/FETCH_ERROR'
}

interface Actions {
  [Portfolio.Fetch]: undefined;
}

type PortfolioActions = ActionMap<Actions>[keyof ActionMap<Actions>];

export const createAction = actionCreator<Actions>();
