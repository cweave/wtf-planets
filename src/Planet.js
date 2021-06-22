import React, { useEffect, useState } from 'react';
import Icon from './svgs/index';

const Planet = ({ name, dates }) => {
	const [planetIsActive, setPlanetIsActive] = useState(false);
	const currentDate = new Date().toISOString();

	const dateIsActive = (date) => {
		return currentDate >= new Date(date.start).toISOString() && currentDate <= new Date(date.end).toISOString();
	};

	useEffect(() => {
		dates.map((date) => {
			if (dateIsActive(date) && !(name === 'Node' || name === 'Lilith')) {
				setPlanetIsActive(true);
			}
		});
	}, [name, dates, dateIsActive]);

	return planetIsActive ? (
		<div className="planet">
			<Icon name={name} width={300} height={300} title={`${name} is currently in retrograde`} />

			<h2 className="planet-name">{name}</h2>
			{dates.map((date) =>
				dateIsActive(date) ? (
					<p key={`${name}-${new Date(date.start).toISOString()}`} className="retrograde-dates">
						{date.start} &ndash; {date.end}
					</p>
				) : null
			)}
		</div>
	) : null;
};

export default Planet;
