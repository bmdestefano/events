import { combineReducers } from 'redux';
import EventsReducer from './events/events';

const rootReducer = combineReducers({
  events: EventsReducer,
})

export default rootReducer;
