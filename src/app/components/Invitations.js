import React, {Component} from 'react';
import {render} from 'react-dom';
import {Card, CardActions, CardHeader} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';

const users = [
	{id: 0, name: 'Sam Smith', image: 'https://randomuser.me/api/portraits/med/men/83.jpg', field: 'business'},
	{id: 1, name: 'Donald Moore', image: 'https://randomuser.me/api/portraits/med/men/84.jpg', field: 'marketing'},
	{id: 2, name: 'Steve Jones', image: 'https://randomuser.me/api/portraits/med/men/85.jpg', field: 'business'},
	{id: 3, name: 'John Doe', image: 'https://randomuser.me/api/portraits/med/men/86.jpg', field: 'marketing'},
	{id: 4, name: 'James Wright', image: 'https://randomuser.me/api/portraits/med/men/87.jpg', field: 'finance'},
];

let length = 0;

class Invitations extends Component{
	constructor(props, context){
		super(props, context);

		this.state = {
			invitations: [],
			activeUsers: users,
		}
	}

	getInitialUsersState(){
		let invitations = this.state.invitations;
		const result = users.filter(function(user, key){
			return invitations.indexOf(user) == -1;
		});
		return result;
	}

	renderUsers(users){
		return users.map((user, index) => {
			return(
				<Card key={index}>
					<CardHeader
						title={user.name}
						avatar={user.image}
					/>
					<CardActions>
						<FlatButton label="Invite" onClick={() => this.inviteUser(user.id)} />
					</CardActions>
				</Card>
			);
		})
	}

	inviteUser(userId){
		const invite = this.state.activeUsers.filter(function(user, key) {
			return user.id == userId;
		});
		let invitations = this.state.invitations.push(invite[0]);
		this.setState({invitations: this.state.invitations});
		const result = this.state.activeUsers.filter(function(user, key) {
			return user.id != userId;
		});
		this.setState({activeUsers: result});
	}

	uninviteUser(userObject){
		const invitations = this.state.invitations.filter(function(user, key) {
			return user.id != userObject.id;
		});
		this.setState({invitations: invitations});
		const user = users.filter(function(user, key) {
			return user.id == userObject.id;
		});
		let activeUsers = this.state.activeUsers.push(user[0]);
		this.setState({activeUsers: this.state.activeUsers});
	}

	renderInvites(){
		console.log(this.state);
		return this.state.invitations.map((invite, index) => {
			return(
				<div>{invite.name}<FlatButton label="Uninvite" onClick={() => this.uninviteUser(invite)} /></div>
			);
		});
	}

	renderFilters(){
		return (
			<div>
				<Checkbox 
					label="Business" />
				<Checkbox 
					label="Finance" />
				<Checkbox 
					label="Marketing" />		
			</div>
		);
	}

	searchUsers(event){
		let searchValue = event.target.value;
		let users = (length >= searchValue.length) ? this.getInitialUsersState() : this.state.activeUsers;
		length = searchValue.length;
		const result = users.filter(function(user, key) {
		    return user.name.toLowerCase().indexOf(searchValue) != -1;
		});
		this.setState({activeUsers: result});
	}

	render(){
		return(
			<div>
				<div style={{float:'left',width:'33%'}}>
					{this.renderFilters()}
				</div>
				<div style={{float:'left',width:'33%'}}>
					<TextField
						hintText="Search"
						fullWidth={true}
						onChange={(e) => this.searchUsers(e)}
					/>
					{this.renderUsers(this.state.activeUsers)}
				</div>
				<div style={{float:'left',width:'33%'}}>
					{this.renderInvites()}
				</div>
			</div>
		);
	}
}

export default Invitations;