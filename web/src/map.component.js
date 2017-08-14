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
  map: null
};

function setState(partialState) {
  Object.assign(state, partialState);

  const { areas } = state;

  const minRatio = Math.min(...areas.map(a => a.ratio));
  const maxRatio = Math.max(...areas.map(a => a.ratio));

  loadGoogleMaps().then(gmaps => {
    state.map = new gmaps.Map($map, {
      zoom: 12,
      center: { lng: -58.4537674321647, lat: -34.5966342484152 },
      mapTypeId: "terrain"
    });

    areas.forEach(area => {
      const polygonOpts = getPolygon(area, minRatio, maxRatio);
      const polygon = new gmaps.Polygon(polygonOpts);
      polygon.setMap(state.map);
      gmaps.event.addListener(polygon, "mouseover", e => {
        details.setState({
          show: true,
          name: area.name,
          rent: area.rent,
          price: area.price,
          ratio: area.ratio
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
  });
}

export default {
  element: $container,
  setState
};

function getPolygon({ name, coords, ratio }, minRatio, maxRatio) {
  const x = (ratio - minRatio) / (maxRatio - minRatio);
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
