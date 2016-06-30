import React from 'react'
import { connect } from 'react-redux'
import { addTicket } from '../actions'
import FlatButton from 'material-ui/FlatButton'
import PlusSign from 'material-ui/svg-icons/content/add'

let AddTicket = ({ dispatch }) => {
	return (
		<FlatButton 
			label="Add Free Ticket" 
			labelPosition="after" 
			primary={true} 
			icon={<PlusSign />} 
			style={{float: 'left'}} 
			onClick={e => {
				dispatch(addTicket('free'))
			}}/>
	);
}
AddTicket = connect()(AddTicket)

export default AddTicket