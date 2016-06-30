'use strict'

import { connect } from 'react-redux';
import { addEvent } from '../actions/index';
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
    }
  }
}

const VerticalStepper = connect(
  mapStateToProps,
  mapDispatchToProps
)(compVerticalStepper);

export default VerticalStepper;
