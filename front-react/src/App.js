import React, { Component } from 'react';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
//import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';

import reducer from './reducers';
import SidebarOperationType from './containers/SidebarOperationType.js';
import SidebarPropertyType from './containers/SidebarPropertyType.js';
import SidebarRooms from './containers/SidebarRooms.js';
import SidebarSurface from './containers/SidebarSurface.js';
import Map from './containers/Map.js';
import Loading from './components/infobar/Loading.js';
import Information from './components/infobar/Information.js';
import Range from './components/infobar/Range.js';
import { loadGMaps, loadPropertyData } from './actions';
import './App.css';

//const loggerMiddleware = createLogger();

const store = createStore(reducer,applyMiddleware(thunkMiddleware/*, loggerMiddleware*/));

store.dispatch(loadGMaps());
store.dispatch(loadPropertyData());

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<div className="App">
					<div className="Sidebar">
						<h2>Filtros</h2>
				        <SidebarOperationType/>
				        <SidebarPropertyType/>
				        <SidebarRooms/>
				        <SidebarSurface/>
					</div>
					<Map/>
					<div className="Infobar">
						<h2>Informaci&oacute;n</h2>
						<Loading/>
						<Information/>
						<Range/>
					</div>
				</div>
			</Provider>
		);
	}
}

export default App;