import React, { Component } from 'react';
import './Details.css';

class Details extends Component {
	render() {
		return (
			<div className="Details" style={{top: this.props.data.y + 'px', left: this.props.data.x + 'px', visibility: this.props.data.name?'visible':'hidden'}}>
				<table>
					<tbody>
						<tr>
							<th>Barrio</th>
							<td>{this.props.data.name}</td>
						</tr>
						<tr>
							<th>Alquiler</th>
							<td>${Math.ceil(this.props.data.rent)}</td>
						</tr>
						<tr>
							<th>Venta</th>
							<td>${Math.ceil(this.props.data.price)}</td>
						</tr>
						<tr>
							<th>Venta/Alquiler</th>
							<td>{Math.ceil(this.props.data.ratio)}</td>
						</tr>
						<tr>
							<th>Cantidad</th>
							<td>{this.props.data.count}</td>
						</tr>
					</tbody>
				</table>
			</div>
		);
	}
}

export default Details;
