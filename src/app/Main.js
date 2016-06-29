import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import VerticalStepper from './components/VerticalStepper'

const muiTheme = getMuiTheme({
	palette: {
		primary1Color: "#00A9E0",
		accent1Color: "#EA7600",
	},
});

class Main extends Component {
	render() {
		return (
			<MuiThemeProvider muiTheme={muiTheme}>
				<div>
					<AppBar title="Colby College" />
					<h1>Create A New Event</h1>
					<VerticalStepper />
				</div>
			</MuiThemeProvider>
		);
	}
}

export default Main;