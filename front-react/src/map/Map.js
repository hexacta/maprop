import React, { Component } from 'react';
import loadGoogleMaps from "load-google-maps-api";
import q from 'q';
import Polygon from "./Polygon.js";
import './Map.css';

class Map extends Component {
	constructor(props){
		super(props);
		this.state = {mode: 'ratio'};
		this.polygons = [];
		this.key = 'AIzaSyB6cuVrCJvwyNos7SsUWZ0D1UjiwwvmiZM';
		this.center = { lng: -58.4537674321647, lat: -34.5966342484152 };
		this.zoom = 12;
		this.mapType = 'terrain';
		this.mapDidLoad = this.mapDidLoad.bind(this);
		this.polygonDataDidLoad = this.polygonDataDidLoad.bind(this);
		this.drawPolygons = this.drawPolygons.bind(this);
	}
	componentDidMount(){
		let mapPromise = loadGoogleMaps({key: this.key});
		mapPromise.then(this.mapDidLoad);
		let dataPromise = fetch('http://localhost:3001/data').then(response => response.json());
		dataPromise.then(this.polygonDataDidLoad);
		q.all([mapPromise, dataPromise]).then(this.drawPolygons);
	}
	mapDidLoad(gmaps){
		this.gmaps = gmaps;
		this.map = new gmaps.Map(this.mapDiv, {
			zoom: this.zoom,
			center: this.center,
			mapTypeId: this.mapType
		});
	}
	polygonDataDidLoad(result){
		this.polygonData = result;
		this.erasePolygons();
		this.max = Math.max(...this.polygonData.map(a => a[this.state.mode]));
		this.min = Math.min(...this.polygonData.map(a => a[this.state.mode]));
		this.polygonData.forEach(data => {
			data.mode = this.state.mode;
			data.scale = (data[data.mode] - this.min) / (this.max - this.min);
			this.polygons.push(new Polygon(data));
		});
	}
	erasePolygons(){
		this.polygons.forEach(polygon => polygon.detachFromMap());
		this.polygons = [];
	}
	drawPolygons(){
		this.polygons.forEach(polygon => polygon.attachToMap(this.map, this.gmaps));
	}
	render() {
		return (
			<div className="Map">
				<div ref={(div) => { this.mapDiv = div; }}></div>
			</div>
		);
	}
}

export default Map;
