import React, { Component } from 'react';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
//import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';

import reducer from './reducers';
import SidebarOperationType from './containers/SidebarOperationType.js';
import SidebarRooms from './containers/SidebarRooms.js';
import Map from './containers/Map.js';
import Loading from './components/Loading.js';
import { loadGMaps, loadPolygons } from './actions';
import './App.css';

//const loggerMiddleware = createLogger();

const store = createStore(reducer,applyMiddleware(thunkMiddleware/*, loggerMiddleware*/));

store.dispatch(loadGMaps());
store.dispatch(loadPolygons());

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<div className="App">
					<div className="Sidebar">
				        <SidebarOperationType/>
				        <SidebarRooms/>
					</div>
					<Map/>
					<Loading/>
				</div>
			</Provider>
		);
	}
}

export default App;