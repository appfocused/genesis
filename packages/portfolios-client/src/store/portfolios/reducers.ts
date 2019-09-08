import { ReducerEntity, Action, ActionWithPayload } from '../types';
import {
  PortfolioActions,
  FETCH_PORTFOLIOS_SUCCESS,
  FETCH_PORTFOLIOS_ERROR,
  FETCH_PORTFOLIOS
} from './actions';

export interface PortfoliosState {
  portfolios: ReducerEntity<Portfolio>;
}

export interface Portfolio {
  id: string;
  name: string;
  ccy: string;
  createAt: string;
}

const initialState: ReducerEntity<Portfolio> = {
  data: [],
  isLoading: false,
  hasError: false
};

export function portfoliosReducer(state = initialState, action: any): ReducerEntity<Portfolio> {
  switch (action.type) {
    case FETCH_PORTFOLIOS: {
      return {
        ...state,
        isLoading: true,
        hasError: false
      };
    }

    case FETCH_PORTFOLIOS_SUCCESS: {
      return {
        ...state,
        data: action.payload,
        isLoading: false
      };
    }

    case FETCH_PORTFOLIOS_ERROR: {
      return {
        ...state,
        hasError: true
      };
    }

    default:
      return state;
  }
}
