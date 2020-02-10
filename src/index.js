import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PomodoroApp from './component/PomodoroApp.js';
import { Provider } from 'react-redux';
import store from './redux/store' ;

ReactDOM.render(
	<Provider store={store}>
		<PomodoroApp />
	</Provider>, 
	document.getElementById('root')
);

