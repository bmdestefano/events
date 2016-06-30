import { combineReducers } from 'redux';
import InfoReducer from './info';

const eventsReducer = combineReducers({
  info: InfoReducer,
})

export default eventsReducer;
