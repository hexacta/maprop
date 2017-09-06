import Colors from './PolygonColors.js';

class Polygon {
	constructor(data){
		Object.assign(this, data);
		this.color = Colors[Math.round(this.scale * (Colors.length-1))];
	}
	attachToMap(map, gmaps){
		this.polygon = new gmaps.Polygon(this.getPolygonOptions());
		this.polygon.setMap(map);
		gmaps.event.addListener(this.polygon, "mouseover", e => {
			this.polygon.setOptions({ fillOpacity: 0.8 });
		});
		gmaps.event.addListener(this.polygon, "mouseout", e => {
			this.polygon.setOptions({ fillOpacity: 0.5 });
		});
	}
	getPolygonOptions(){
		return {
			paths: this.coords,
			strokeColor: this.color,
			strokeOpacity: 0.8,
			strokeWeight: 2,
			fillColor: this.color,
			fillOpacity: 0.5,
			clickable: true
		}
	}
	detachFromMap(){
		this.polygon.setMap(null);
	}
}

export default Polygon;
