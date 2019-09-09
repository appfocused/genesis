import { ActionMap, actionCreator } from '../types';
import { PortfolioModel } from './reducers';

export enum ActionTypes {
  Fetch = 'Portfolio/FETCH',
  FetchSuccess = 'Portfolio/FETCH_SUCCESS',
  FetchError = 'Portfolio/FETCH_ERROR',
  Create = 'Portfolio/CREATE',
  CreateSuccess = 'Portfolio/CREATE_SUCCESS',
  CreateError = 'Portfolio/CREATE_ERROR',
  Delete = 'Portfolio/DELETE',
  DeleteSuccess = 'Portfolio/DELETE_SUCCESS',
  DeleteError = 'Portfolio/DELETE_ERROR'
}

interface Actions {
  [ActionTypes.Fetch]: undefined;
  [ActionTypes.FetchSuccess]: Partial<PortfolioModel>[];
  [ActionTypes.Create]: { name: string; ccy: string; onSuccess?: () => void };
  [ActionTypes.CreateSuccess]: Partial<PortfolioModel>;
  [ActionTypes.Delete]: { id: string };
  [ActionTypes.DeleteSuccess]: Partial<PortfolioModel>;
}

export type PortfolioActions = ActionMap<Actions>[keyof ActionMap<Actions>];

export const createAction = actionCreator<Actions>();
