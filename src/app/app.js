import React from 'react';
import {render} from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import eventsApp from './reducers'
import Main from './components/Main'; 

injectTapEventPlugin();

let store = createStore(eventsApp);

render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('app')
)