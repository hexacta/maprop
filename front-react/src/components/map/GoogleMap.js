import React from 'react';
import PropTypes from 'prop-types';

import Details from "./../../containers/Details.js";
import Colors from './../../constants/PolygonColors.js';
import './GoogleMap.css';

const GoogleMap = (props) => {
	if(props.gmaps){
		// Create map
		if(!this.map){
			this.map = new props.gmaps.Map(this.mapDiv, {
				zoom: 12,
				center: { 
					lng: -58.4537674321647, 
					lat: -34.5966342484152 
				},
				mapTypeId: 'terrain'
			});
		}
		// Create polygons
		props.polygons.forEach(polygonData => {
			let color = Colors[Math.round(polygonData.scale * (Colors.length-1))];
			polygonData.polygon = new props.gmaps.Polygon({
				paths: polygonData.coords,
				strokeColor: color,
				strokeOpacity: 0.8,
				strokeWeight: 1,
				fillColor: color,
				fillOpacity: 0.5,
				clickable: true
			});
			polygonData.polygon.setMap(this.map);
			// Listeners
			props.gmaps.event.addListener(polygonData.polygon, "mouseover", e => {
				polygonData.polygon.setOptions({ fillOpacity: 0.8 });
				let x = e.va.clientX;
				let y = e.va.clientY;
				props.showDetails(polygonData, x, y);
			});
			props.gmaps.event.addListener(polygonData.polygon, "mouseout", e => {
				polygonData.polygon.setOptions({ fillOpacity: 0.5 });
				props.hideDetails();
			});
		});
	}

	return (
		<div className="Map">
			<div id="map" ref={(div) => { this.mapDiv = div; }}></div>
			<Details/>
		</div>
	);
}

GoogleMap.propTypes = {
	polygons: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string.isRequired,
			dollarConversionRate: PropTypes.string.isRequired,
			count: PropTypes.number.isRequired,
			value: PropTypes.number,
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
	gmaps: PropTypes.object
};

export default GoogleMap;
