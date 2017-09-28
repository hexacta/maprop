import React from 'react';
import PropTypes from 'prop-types';
import Details from "./Details.js";
import Colors from './PolygonColors.js';
import './GoogleMap.css';

const GoogleMap = ({polygons, gmaps}) => {
	this.state = {
		details: {
			x: 200,
			y: 0
		}
	};
	if(gmaps){
		if(!this.map){
			this.map = new gmaps.Map(this.mapDiv, {
				zoom: 12,
				center: { 
					lng: -58.4537674321647, 
					lat: -34.5966342484152 
				},
				mapTypeId: 'terrain'
			});
		}
		polygons.forEach(polygonData => {
			let color = Colors[Math.round(polygonData.scale * (Colors.length-1))];
			polygonData.polygon = new gmaps.Polygon({
				paths: polygonData.coords,
				strokeColor: color,
				strokeOpacity: 0.8,
				strokeWeight: 2,
				fillColor: color,
				fillOpacity: 0.5,
				clickable: true
			});
			polygonData.polygon.setMap(this.map);
			gmaps.event.addListener(polygonData.polygon, "mouseover", e => {
				polygonData.polygon.setOptions({ fillOpacity: 0.8 });
				/*
				let details = Object.assign({}, this.state.details, polygonData);
				details.x = e.va.clientX + 50;
				details.y = e.va.clientY - 50;
				this.setState({details});
				*/
			});
			gmaps.event.addListener(polygonData.polygon, "mouseout", e => {
				polygonData.polygon.setOptions({ fillOpacity: 0.5 });
				/*
				let details = Object.assign({}, this.state.details, polygonData);
				Object.keys(polygonData).forEach(key => delete details[key]);
				this.setState({details});
				*/
			});

		});
	}


	return (
		<div className="Map">
			<div id="map" ref={(div) => { this.mapDiv = div; }}></div>
			<Details data={this.state.details}/>
		</div>
	);
}

GoogleMap.propTypes = {
	polygons: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string.isRequired,
			dollarConversionRate: PropTypes.string.isRequired,
			count: PropTypes.number.isRequired,
			value: PropTypes.number.isRequired,
			coords: PropTypes.arrayOf(
				PropTypes.arrayOf(
					PropTypes.shape({
						lat: PropTypes.number.isRequired,
						lng: PropTypes.number.isRequired
					}).isRequired
				)
			).isRequired
		}).isRequired
	).isRequired,
	gmaps: PropTypes.shape({})
};

export default GoogleMap;
