import { combineEpics } from 'redux-observable';
import { portfolioEpics } from './portfolios';

export const epics = combineEpics(...portfolioEpics);
