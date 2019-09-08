import { createStore, applyMiddleware, combineReducers, Action } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import { portfoliosReducer } from './portfolios/reducers';
import { createEpicMiddleware } from 'redux-observable';
import { epics } from '../epics';

const rootReducer = combineReducers({
  portfoliosReducer
});
export type AppState = ReturnType<typeof rootReducer>;

export const configureStore = () => {
  const epicMiddleware = createEpicMiddleware<Action, Action, AppState>();
  const middlewares = [thunkMiddleware, epicMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const store = createStore(rootReducer, composeWithDevTools(middlewareEnhancer));

  epicMiddleware.run(epics);

  return store;
};
