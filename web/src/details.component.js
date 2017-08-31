import { css } from "glamor";

const containerStyle = css({
  width: 300,
  zIndex: 10,
  top: 5,
  right: 5,
  backgroundColor: "rgba(255, 255, 255, 0.7)",
  position: "fixed",
  display: "none"
});

let $container, $name, $rent, $price, $ratio, $count;
$container = (
  <div {...containerStyle}>
    <table>
      <tr>
        <th>Barrio</th>
        <td ref={e => ($name = e)} />
      </tr>
      <tr>
        <th>Alquiler</th>
        <td id="rent" ref={e => ($rent = e)} />
      </tr>
      <tr>
        <th>Venta</th>
        <td id="price" ref={e => ($price = e)} />
      </tr>
      <tr>
        <th>Venta/Alquiler</th>
        <td id="ratio" ref={e => ($ratio = e)} />
      </tr>
      <tr>
        <th>Cantidad</th>
        <td ref={e => ($count = e)} />
      </tr>
    </table>
  </div>
);

const state = {
  show: false,
  name: null,
  rent: null,
  price: null,
  ratio: null,
  count: null,
  mode: null
};

function appendTo(parent) {
  parent.appendChild($container);
}

function setState(partialState) {
  Object.assign(state, partialState);

  const { show, name, mode, count } = state;
  const display = state.show ? "block" : "none";

  $container.style.display = display;
  $name.innerText = name;
  let $modes = [$rent, $price, $ratio];
  $modes.forEach($mode => {
    let value = state[mode];
    $mode.innerText = (mode === 'ratio' ? "" :"$") + (value ? Math.round(value).toLocaleString() : "");
    $mode.parentNode.style.display = mode === $mode.id ? "" : "none";
  });
  $count.innerText = count;
}

export default {
  element: $container,
  setState
};
