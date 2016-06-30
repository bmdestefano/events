import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import VerticalStepper from './containers/VerticalStepper';
import configureStore from './stores/index';
import { Provider, connect } from 'react-redux';

const store = configureStore();

const muiTheme = getMuiTheme({
	palette: {
		primary1Color: "#00A9E0",
		accent1Color: "#EA7600",
	},
});

class Main extends Component {
	render() {
		return (
			<Provider store={store}>
				<MuiThemeProvider muiTheme={muiTheme}>
					<div>
						<AppBar title="Colby College" />
						<h1>Create A New Event</h1>
						<VerticalStepper />
					</div>
				</MuiThemeProvider>
			</Provider>
		);
	}
}

export default Main;
