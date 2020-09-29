import { combineReducers } from 'redux';
import taskReducer from './task/taskReducer';

const reducer = combineReducers({
  task: taskReducer,
});

export default reducer;
