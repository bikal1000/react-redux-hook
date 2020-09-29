import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './rootReducer';
import { createLogger } from 'redux-logger';

const logger = createLogger({
  collapsed: true,
});
const store = createStore(
  reducer,
  undefined,
  composeWithDevTools(applyMiddleware(thunk, logger))
);

export default store;
