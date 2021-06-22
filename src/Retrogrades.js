import React from 'react';
import Planet from './Planet';
//const retrogradeData = require('./static/retrograde-planets.json');
const { retrogrades } = require('./static/manual-data.json');

const Retrogrades = () => {
	console.log(retrogrades);
	return (
		<div className="planets">
			{retrogrades.length === 0 ? (
				<h1>No Planets</h1>
			) : (
				retrogrades.map((planet) => <Planet key={planet.name} name={planet.name} dates={planet.dates} />)
			)}
		</div>
	);
};

export default Retrogrades;
