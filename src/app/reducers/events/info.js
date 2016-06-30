// state =
// 'id': 0,
// 'name': '',
// 'type': '',
// 'startDate': '',
// 'endDate': '',
// 'startTime': '',
// 'endTime': '',
// 'description': '',
// 'locationName': '',
// 'address': '',
// 'room': '',
// 'city': '',
// 'state': '',
// 'country': '',
// 'postal': '',
// 'primaryContactName': '',
// 'primaryContactEmail': '',
// 'public': true,
// 'audience': '',
// 'tags': [],

// ACTIONS
// -ADD and EDIT
import {ADD_EVENT, EDIT_EVENT} from '../../constants/ActionTypes';




const info = (state = [], action) => {
  switch(action.type) {
    case ADD_EVENT:
      console.log(`REDUCER: ADDING EVENT WITH ID ${action.payload.id}`)

      return [
        ...state,
        {
        'id': action.payload.id,
        'name': '',
        'type': '',
        'startDate': '',
        'endDate': '',
        'startTime': '',
        'endTime': '',
        'description': '',
        'locationName': '',
        'address': '',
        'room': '',
        'city': '',
        'state': '',
        'country': '',
        'postal': '',
        'primaryContactName': '',
        'primaryContactEmail': '',
        'public': true,
        'audience': '',
        'tags': [],
        }
      ]
    case EDIT_EVENT:

    default:
      return state;
  }
}

export default info
