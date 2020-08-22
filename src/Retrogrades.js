import React from 'react';
import Planet from './Planet';
const retrogradeData = require('./static/retrograde-planets.json');

export default function Retrogrades() {
	return (
		<div className="info">
			{retrogradeData.length === 0 ? (
				<h1>No Planets</h1>
			) : (
				retrogradeData.map((planet) => <Planet name={planet.name} key={planet.name} dates={planet.dates} />)
			)}
		</div>
	);
}
