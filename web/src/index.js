import { css } from "glamor";
import data from "./info";
import map from "./map.component";

css.global("html, body", { padding: 0, margin: 0, height: "100%" });

document.body.appendChild(map.element);

map.setState({
  areas: data
});
