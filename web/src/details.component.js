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

let $container, $name, $rent, $sale, $ratio;
$container = (
  <div {...containerStyle}>
    <table>
      <tr>
        <th>Barrio</th>
        <td ref={e => ($name = e)} />
      </tr>
      <tr>
        <th>Alquiler</th>
        <td ref={e => ($rent = e)} />
      </tr>
      <tr>
        <th>Venta</th>
        <td ref={e => ($sale = e)} />
      </tr>
      <tr>
        <th>Ratio</th>
        <td ref={e => ($ratio = e)} />
      </tr>
    </table>
  </div>
);

const state = {
  show: false,
  name: null,
  rent: null,
  price: null,
  ratio: null
};

function appendTo(parent) {
  parent.appendChild($container);
}

function setState(partialState) {
  Object.assign(state, partialState);

  const { show, name, rent, price, ratio } = state;
  const display = state.show ? "block" : "none";

  $container.style.display = display;
  $name.innerText = name;
  $rent.innerText = rent;
  $sale.innerText = price;
  $ratio.innerText = ratio;
}

export default {
  element: $container,
  setState
};
