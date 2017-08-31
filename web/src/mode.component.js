import { css } from "glamor";
import details from "./details.component";
import map from "./map.component";

const containerStyle = css({
  width: 150,
  zIndex: 10,
  top: 5,
  left: 5,
  backgroundColor: "rgba(255, 255, 255, 0.7)",
  position: "fixed"
});

let $container, $ratio, $rent, $price;
$container = (
  <form {...containerStyle}>
    <input type="radio" name="mode" value="ratio" ref={e => ($ratio = e)}/> Venta/Alquiler<br/>
    <input type="radio" name="mode" value="rent" ref={e => ($rent = e)}/> Alquiler<br/>
    <input type="radio" name="mode" value="price" ref={e => ($price = e)}/> Venta
  </form>
);

const state = {
  mode: 'ratio'
};

function appendTo(parent) {
  parent.appendChild($container);
}

let $modes = [$ratio, $rent, $price];
$modes.forEach($mode => {
  $mode.checked = state.mode === $mode.value;
  $mode.onclick = () => {
    let newState = {mode: $mode.value};
    setState(newState);
    map.setState(newState);
    details.setState(newState);
  };
});  
details.setState(state);

function setState(partialState) {
  Object.assign(state, partialState);
}

export default {
  element: $container,
  setState
};
