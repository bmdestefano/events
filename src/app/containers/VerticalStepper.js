'use strict'

import { connect } from 'react-redux';
import { addEvent, editEvent } from '../actions/index';
import compVerticalStepper from '../components/VerticalStepper';

const mapStateToProps = (state) => {
  return {
    info: state.events.info
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddEvent: (id) => {
      console.log(`CONTAINER: ADDING EVENT WITH ID ${id}`)
      dispatch(addEvent(id))
    },
    onEditEvent: (id, field, value) => {
      console.log(`CONTAINER: EDITING EVENT ${id} WITH ${field} AND ${value}`);
      dispatch(editEvent(id, field, value));
    }
  }
}

const VerticalStepper = connect(
  mapStateToProps,
  mapDispatchToProps
)(compVerticalStepper);

export default VerticalStepper;
