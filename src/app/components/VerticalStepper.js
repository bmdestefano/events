import React, {Component} from 'react';
import {render} from 'react-dom';
import {
	Step,
	Stepper,
	StepButton,
	StepContent
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import Subheader from 'material-ui/Subheader';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';
import CTAutoComplete from './CTAutoComplete';
import Tickets from './Tickets';
import Reminders from './Reminders';
import States from 'ustates';

class VerticalStepper extends Component{
	constructor(props, context){
		super(props, context);

		this.handleNext = this.handleNext.bind(this);
		this.handlePrev = this.handlePrev.bind(this);
		this.handleEventTypeDropdownChange = this.handleEventTypeDropdownChange.bind(this);
		this.handleStateDropdownChange = this.handleStateDropdownChange.bind(this);
		this.handlePrivacyDropdownChange = this.handlePrivacyDropdownChange.bind(this);
		this.handleAttendSettingDropdownChange = this.handleAttendSettingDropdownChange.bind(this);

		this.state = {
			stepIndex: 0,
			dropdownValue: 1,
			stateValue: 'AL',
			privacyValue: 1,
			attendSettingValue: 1,
		};
	}
	componentWillMount(){
		//componentWillReceiveProps
		//componentDidMount
		//componentDidReceiveProps
		//componentWillUnmount
		//componentDidUnmount
		let newId = this.props.info.length;
		this.props.onAddEvent(newId);
	}
	handleNext(){
		const stepIndex = this.state.stepIndex;
		if(stepIndex < 2)
			this.setState({stepIndex: stepIndex + 1});
	}

	handlePrev(){
		const stepIndex = this.state.stepIndex;
		if(stepIndex > 0)
			this.setState({stepIndex: stepIndex - 1});
	}

	showInvitations(){

	}

	renderStepActions(step) {
		return (
		<div style={{margin: '12px 0', float: 'left'}}>
			{step == 4 && (
				<RaisedButton
					label="Save"
					disableTouchRipple={true}
					disableFocusRipple={true}
					primary={true}
					onTouchTap={this.showInvitations}
					style={{marginRight: 12}}
				/>
			)}
			{step < 4 && (
				<RaisedButton
					label="Next"
					disableTouchRipple={true}
					disableFocusRipple={true}
					primary={true}
					onTouchTap={this.handleNext}
					style={{marginRight: 12}}
				/>
			)}
			{step > 0 && step < 4 && (
			<FlatButton
				label="Back"
				disableTouchRipple={true}
				disableFocusRipple={true}
				onTouchTap={this.handlePrev}
			/>
			)}
		</div>
		);
	}

	renderStates(){
		const states = [];
		let i = 1;
		for(var code in States){
			if(i == 50)
				break;
			states.push(<MenuItem value={code} primaryText={code} />);
			i++;
		}
		return (
			<DropDownMenu style={{width: '25%', float: 'right', marginTop: '15px'}} maxHeight={300} value={this.state.stateValue} onChange={this.handleStateDropdownChange}>
				{states}
			</DropDownMenu>
		);
	}

	handleEventTypeDropdownChange(event, index, value) {
		this.setState({dropdownValue: value});
	}

	handleStateDropdownChange(event, index, value) {
		this.setState({stateValue: value});
	}

	handlePrivacyDropdownChange(event, index, value) {
		this.setState({privacyValue: value});
	}

	handleAttendSettingDropdownChange(event, index, value) {
		this.setState({attendSettingValue: value});
	}

	render() {
		console.log(this.props)
		const stepIndex = this.state.stepIndex;

		return(
			<div style={{width: "100%", maxWidth: 767, margin: 'auto'}}>
				<Stepper activeStep={stepIndex} linear={false} orientation="vertical">
					<Step>
						<StepButton onClick={() => this.setState({stepIndex: 0})}>
							Name & Details
						</StepButton>
						<StepContent>
							<TextField hintText="i.e. Alumni Night" floatingLabelText="Event Name" fullWidth={true} /><br />
							<Subheader style={{width: '25%', float: 'left', 'padding': 0}}>Event Type:</Subheader>
							<DropDownMenu style={{width: '75%'}} value={this.state.dropdownValue} onChange={this.handleEventTypeDropdownChange}>
								<MenuItem value={1} primaryText="Career Fair" />
								<MenuItem value={2} primaryText="OCR" />
								<MenuItem value={3} primaryText="Job Shadow" />
								<MenuItem value={4} primaryText="Workshop" />
								<MenuItem value={5} primaryText="Other" />
							</DropDownMenu><br />
							<DatePicker hintText="Start Date" mode="landscape" />
							<TimePicker hintText="Start Time" />
							<DatePicker hintText="End Date" mode="landscape" />
							<TimePicker hintText="End Time" />
							<TextField floatingLabelText="Event Description" /><br />
							{this.renderStepActions(0)}
						</StepContent>
					</Step>
					<Step>
						<StepButton onClick={() => this.setState({stepIndex: 1})}>
							Location
						</StepButton>
						<StepContent>
							<TextField hintText="i.e. Cambridge Innovation Center" floatingLabelText="Location Name" fullWidth={true} /><br />
							<TextField hintText="i.e. 123 Center St" floatingLabelText="Address" style={{width: '74%', float: 'left'}} />
							<TextField hintText="i.e. 12" floatingLabelText="Room/Floor" style={{width: '25%', float: 'right'}} />
							<TextField hintText="i.e. Boston" floatingLabelText="City" style={{width: '74%', float: 'left'}} />
							{this.renderStates()}
							<TextField hintText="i.e. United States" floatingLabelText="Country" style={{width: '74%', float: 'left'}} />
							<TextField hintText="i.e. 02113" floatingLabelText="Postal Code" style={{width: '25%', float: 'right'}} />
							{this.renderStepActions(1)}
						</StepContent>
					</Step>
					<Step>
						<StepButton onClick={() => this.setState({stepIndex: 2})}>
							Privacy & Tags
						</StepButton>
						<StepContent>
							<TextField floatingLabelText="Primary Contanct Name" style={{width: '49%', float: 'left'}} />
							<TextField floatingLabelText="Primary Contact E-Mail" style={{width: '49%', float: 'right'}} />
							<DropDownMenu style={{width: '49%', float: 'left'}} value={this.state.privacyValue} onChange={this.handlePrivacyDropdownChange}>
								<MenuItem value={1} primaryText="Public" />
								<MenuItem value={2} primaryText="Invite Only" />
							</DropDownMenu>
							<DropDownMenu style={{width: '49%', float: 'right'}} value={this.state.attendSettingValue} onChange={this.handleAttendSettingDropdownChange}>
								<MenuItem value={1} primaryText="Everyone" />
								<MenuItem value={2} primaryText="Alumni" />
								<MenuItem value={3} primaryText="Students" />
							</DropDownMenu>
							<CTAutoComplete />
							{this.renderStepActions(2)}
						</StepContent>
					</Step>
					<Step>
						<StepButton onClick={() => this.setState({stepIndex: 3})}>
							Tickets (Optional)
						</StepButton>
						<StepContent>
							<Tickets />
							{this.renderStepActions(3)}
						</StepContent>
					</Step>
					<Step>
						<StepButton onClick={() => this.setState({stepIndex: 4})}>
							Reminders
						</StepButton>
						<StepContent>
							<Reminders />
							{this.renderStepActions(4)}
						</StepContent>
					</Step>
				</Stepper>
			</div>
		);
	}
}

export default VerticalStepper;
