import {ADD_EVENT} from '../constants/ActionTypes';

export const addEvent = (id) => {
  console.log(`ACTIONS: ADDING EVENT WITH ID ${id}`)
  return {
    type: ADD_EVENT,
    payload: {
      'id': id
    }
  }
}
