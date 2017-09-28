import React from 'react';
import PropTypes from 'prop-types';
import Details from "./../../containers/Details.js";
import Colors from './../../constants/PolygonColors.js';
import './GoogleMap.css';

const GoogleMap = ({polygons, gmaps, hideDetails, showDetails}) => {
	if(gmaps){
		// Create map
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
		// Create polygons
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
			// Listeners
			gmaps.event.addListener(polygonData.polygon, "mouseover", e => {
				polygonData.polygon.setOptions({ fillOpacity: 0.8 });
				let x = e.va.clientX;
				let y = e.va.clientY;
				showDetails(polygonData.name, polygonData.value, polygonData.count, x, y);
			});
			gmaps.event.addListener(polygonData.polygon, "mouseout", e => {
				polygonData.polygon.setOptions({ fillOpacity: 0.5 });
				hideDetails();
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
	gmaps: PropTypes.object
};

export default GoogleMap;
