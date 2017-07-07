import { combineReducers } from 'redux';
import staffReducer from './reducer_staff';

const rootReducer = combineReducers({
  staff: staffReducer
});

export default rootReducer;
