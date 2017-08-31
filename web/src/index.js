import { css } from "glamor";
import data from "./info";
import map from "./map.component";
import mode from "./mode.component"

css.global("html, body", { padding: 0, margin: 0, height: "100%" });

document.body.appendChild(mode.element);
document.body.appendChild(map.element);

mode.setState({});
map.setState({
  areas: data
});
