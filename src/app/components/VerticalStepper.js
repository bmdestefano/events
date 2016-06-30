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
import SelectField from 'material-ui/SelectField';

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
		this.handleStateDropdownChange = this.handleStateDropdownChange.bind(this);
		this.handlePrivacyDropdownChange = this.handlePrivacyDropdownChange.bind(this);
		this.handleAttendSettingDropdownChange = this.handleAttendSettingDropdownChange.bind(this);

		this.state = {
			stepIndex: 0,
			dropdownValue: 'career-fair',
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
			<SelectField  
				style={{width: '25%', float: 'right', marginTop: '15px'}} 
				maxHeight={300} value={this.state.stateValue} 
				onChange={this.handleStateDropdownChange}
				floatingLabelText="State">
				{states}
			</SelectField>
		);
	}

	handleEventTypeDropdownChange(event, index, value) {
		this.props.onEditEvent(this.props.info[this.props.info.length - 1].id, 'type', value);
	}

	handleStateDropdownChange(event, index, value) {
		this.props.onEditEvent(this.props.info[this.props.info.length - 1].id, 'state', value);
	}

	handlePrivacyDropdownChange(event, index, value) {
		this.props.onEditEvent(this.props.info[this.props.info.length - 1].id, 'public', value);
	}

	handleAttendSettingDropdownChange(event, index, value) {
		this.props.onEditEvent(this.props.info[this.props.info.length - 1].id, 'audience', value);
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
							<TextField 
								hintText="i.e. Alumni Night" 
								floatingLabelText="Event Name" 
								fullWidth={true} 
								onBlur={(e) => this.props.onEditEvent(this.props.info[this.props.info.length - 1].id, 'name', e.target.value)}/><br />
							<SelectField 
								style={{width: '75%'}} 
								value={this.state.dropdownValue} 
								floatingLabelText="Event Type"
								onChange={this.handleEventTypeDropdownChange.bind(this)}>
								<MenuItem value="career-fair" primaryText="Career Fair" />
								<MenuItem value="ocr" primaryText="OCR" />
								<MenuItem value="job-shadow" primaryText="Job Shadow" />
								<MenuItem value="workshop" primaryText="Workshop" />
								<MenuItem value="other" primaryText="Other" />
							</SelectField><br />
							<DatePicker 
								hintText="Start Date" 
								mode="landscape" 
								onChange={(x, e) => this.props.onEditEvent(this.props.info[this.props.info.length - 1].id, 'startDate', e)}/>
							<TimePicker 
								hintText="Start Time"
								onChange={(x, e) => this.props.onEditEvent(this.props.info[this.props.info.length - 1].id, 'startTime', e)} />
							<DatePicker 
								hintText="End Date" 
								mode="landscape"
								onChange={(x, e) => this.props.onEditEvent(this.props.info[this.props.info.length - 1].id, 'endDate', e)} />
							<TimePicker 
								hintText="End Time"
								onChange={(x, e) => this.props.onEditEvent(this.props.info[this.props.info.length - 1].id, 'endTime', e)} />
							<TextField floatingLabelText="Event Description" 
								onBlur={(e) => this.props.onEditEvent(this.props.info[this.props.info.length - 1].id, 'description', e.target.value)}/><br />
							{this.renderStepActions(0)}
						</StepContent>
					</Step>
					<Step>
						<StepButton onClick={() => this.setState({stepIndex: 1})}>
							Location
						</StepButton>
						<StepContent>
							<TextField 
								hintText="i.e. Cambridge Innovation Center" 
								floatingLabelText="Location Name" 
								fullWidth={true}
								onBlur={(e) => this.props.onEditEvent(this.props.info[this.props.info.length - 1].id, 'locationName', e.target.value)} /><br />
							<TextField 
								hintText="i.e. 123 Center St" 
								floatingLabelText="Address" 
								style={{width: '74%', float: 'left'}}
								onBlur={(e) => this.props.onEditEvent(this.props.info[this.props.info.length - 1].id, 'address', e.target.value)} />
							<TextField 
								hintText="i.e. 12" 
								floatingLabelText="Room/Floor" 
								style={{width: '25%', float: 'right'}}
								onBlur={(e) => this.props.onEditEvent(this.props.info[this.props.info.length - 1].id, 'room', e.target.value)} />
							<TextField 
								hintText="i.e. Boston" 
								floatingLabelText="City" 
								style={{width: '74%', float: 'left'}}
								onBlur={(e) => this.props.onEditEvent(this.props.info[this.props.info.length - 1].id, 'city', e.target.value)} />
							{this.renderStates()}
							<TextField 
								hintText="i.e. United States" 
								floatingLabelText="Country" 
								style={{width: '74%', float: 'left'}}
								onBlur={(e) => this.props.onEditEvent(this.props.info[this.props.info.length - 1].id, 'country', e.target.value)} />
							<TextField 
								hintText="i.e. 02113" 
								floatingLabelText="Postal Code" 
								style={{width: '25%', float: 'right'}}
								onBlur={(e) => this.props.onEditEvent(this.props.info[this.props.info.length - 1].id, 'postal', e.target.value)} />
							{this.renderStepActions(1)}
						</StepContent>
					</Step>
					<Step>
						<StepButton onClick={() => this.setState({stepIndex: 2})}>
							Privacy & Tags
						</StepButton>
						<StepContent>
							<TextField 
								floatingLabelText="Primary Contanct Name" 
								style={{width: '49%', float: 'left'}} 
								onBlur={(e) => this.props.onEditEvent(this.props.info[this.props.info.length - 1].id, 'primaryContactName', e.target.value)}/>
							<TextField 
								floatingLabelText="Primary Contact E-Mail" 
								style={{width: '49%', float: 'right'}} 
								onBlur={(e) => this.props.onEditEvent(this.props.info[this.props.info.length - 1].id, 'primaryContactEmail', e.target.value)}/>
							<SelectField 
								style={{width: '49%', float: 'left'}} 
								value={this.state.privacyValue} 
								onChange={this.handlePrivacyDropdownChange} 
								floatingLabelText="Privacy">
								<MenuItem value={true} primaryText="Public" />
								<MenuItem value={false} primaryText="Invite Only" />
							</SelectField>
							<SelectField 
								style={{width: '49%', float: 'right'}} 
								value={this.state.attendSettingValue} 
								onChange={this.handleAttendSettingDropdownChange}
								floatingLabelText="Audience">
								<MenuItem value="everyone" primaryText="Everyone" />
								<MenuItem value="alumni" primaryText="Alumni" />
								<MenuItem value="students" primaryText="Students" />
							</SelectField>
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
