import { ReducerEntity } from '../types';
import { ActionTypes, PortfolioActions } from './dux';

export interface PortfoliosState {
  portfolios: ReducerEntity<PortfolioModel>;
}

export interface PortfolioModel {
  id: string;
  name: string;
  ccy: string;
  createAt: string;
}

const initialState: ReducerEntity<PortfolioModel> = {
  data: [],
  isLoading: false,
  hasError: false
};

export function portfoliosReducer(
  state = initialState,
  action: PortfolioActions
): ReducerEntity<PortfolioModel> {
  switch (action.type) {
    case ActionTypes.Fetch: {
      return {
        ...state,
        isLoading: true,
        hasError: false
      };
    }

    case ActionTypes.FetchSuccess: {
      return {
        ...state,
        data: action.payload,
        isLoading: false
      };
    }

    case ActionTypes.FetchError: {
      return {
        ...state,
        hasError: true
      };
    }

    default:
      return state;
  }
}
