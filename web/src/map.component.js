import { css } from "glamor";
import loadGoogleMaps from "load-google-maps-api";
import scale from "./colors";
import details from "./details.component";

const style = css({ height: "100%" });

let $map;
let $container = (
  <div {...style}>
    {details.element}
    <div {...style} ref={e => ($map = e)} />
  </div>
);

const state = {
  areas: null,
  map: null,
  gmaps: null,
  mode: null,
  polygons: [],
  clearPolygons: () => {
    state.polygons.forEach(polygon => polygon.setMap(null));
    state.polygons = [];
  }
};

loadGoogleMaps({key: "AIzaSyB6cuVrCJvwyNos7SsUWZ0D1UjiwwvmiZM"}).then(gmaps => {
  state.gmaps = gmaps;
  state.map = new gmaps.Map($map, {
    zoom: 12,
    center: { lng: -58.4537674321647, lat: -34.5966342484152 },
    mapTypeId: "terrain"
  });
  setState({mode: 'ratio'});
});    

function setState(partialState) {
  Object.assign(state, partialState);

  const { areas, mode, map, gmaps } = state;
  const minRatio = Math.min(...areas.map(a => a[mode]));
  const maxRatio = Math.max(...areas.map(a => a[mode]));
  if(!gmaps){
    return;
  }
  state.clearPolygons();
  areas.forEach(area => {
    const polygonOpts = getPolygon(area, area[mode], minRatio, maxRatio);
    const polygon = new gmaps.Polygon(polygonOpts);
    polygon.setMap(map);
    state.polygons.push(polygon);
    gmaps.event.addListener(polygon, "mouseover", e => {
      details.setState({
        show: true,
        name: area.name,
        rent: area.rent,
        price: area.price,
        ratio: area.ratio,
        count: area.count
      });
      polygon.setOptions({ fillOpacity: 0.8 });
    });
    gmaps.event.addListener(polygon, "mouseout", e => {
      details.setState({
        show: false
      });
      polygon.setOptions({ fillOpacity: 0.5 });
    });
  });
}

export default {
  element: $container,
  setState
};

function getPolygon({ name, coords }, ratio, minRatio, maxRatio) {
  const x = (ratio - minRatio) / (maxRatio - minRatio); // 0 - 1
  const color = scale[Math.round(x * (scale.length-1))];
  return {
    paths: coords,
    strokeColor: color,
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: color,
    fillOpacity: 0.5,
    clickable: true,
    name
  };
}
