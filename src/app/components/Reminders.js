import React, {Component} from 'react';
import PlusSign from 'material-ui/svg-icons/content/add';
import FlatButton from 'material-ui/FlatButton';
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';
import TextField from 'material-ui/TextField';
import RemoveIcon from 'material-ui/svg-icons/content/remove';

class Reminders extends Component{
	constructor(props, context){
		super(props, context);

		this.state = {
			reminders : [],
		}
	}

	renderReminderList(){
		const reminders = this.state.reminders;
		if(typeof reminders[0] === 'undefined')
			return true;
		return reminders.map((reminder, index) => {
			return(
				<div key={reminder.key}>
					<DatePicker hintText="Day" mode="landscape" />
					<TimePicker hintText="Time" />
					<TextField floatingLabelText="Reminder Text" />
					<RemoveIcon onClick={() => this.deleteReminder(reminder.key)}/><br />
				</div>
			);
		})

	}

	addReminder(){
		const reminders = this.state.reminders;

		reminders.push({key: (reminders.length > 0) ? reminders.length : 0});

		this.setState({reminders : reminders});
	}

	deleteReminder(key){
		const reminderKey = key;
		const result = this.state.reminders.filter(function(reminder, key) {
		    return reminder.key != reminderKey;
		});
		this.setState({reminders: result});
	}

	render(){
		return(
			<div>
				<FlatButton 
					label="Add Reminder" 
					labelPosition="after" 
					primary={true} 
					icon={<PlusSign />} 
					style={{float: 'left'}} 
					onClick={() => this.addReminder(this)}/>
				{this.renderReminderList()}
			</div>
		);
	}
}

export default Reminders;