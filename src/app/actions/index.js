import {ADD_EVENT, EDIT_EVENT} from '../constants/ActionTypes';

export const addEvent = (id) => {
  console.log(`ACTIONS: ADDING EVENT WITH ID ${id}`)
  return {
    type: ADD_EVENT,
    payload: {
      'id': id
    }
  }
}

export const editEvent = (id, field, value) => {
	console.log(`ACTIONS: EDITING EVENT ${id} WITH ${field} AND ${value}`);
	return {
		type: EDIT_EVENT,
		payload: {
			'id': id,
			'field': field,
			'value': value
		}
	}
}