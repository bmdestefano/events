import React, {PropTypes} from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import RemoveIcon from 'material-ui/svg-icons/content/remove';

const Ticket = ({type, onClick}) => {
	return(
		<div>
			<TextField floatingLabelText="Ticket Name" /><br />
			<TextField floatingLabelText="Qty" /><br />
			<TextField floatingLabelText="Price" disabled={(type == 'free') ? true : false}/>
			<FlatButton 
				label="" 
				labelPosition="after" 
				primary={true} 
				icon={<RemoveIcon />} 
				style={{float: 'left'}} 
				onClick={onClick}/>
		</div>
	);
}

Ticket.propTypes = {
	type: PropTypes.string.isRequired,
}

export default Ticket;