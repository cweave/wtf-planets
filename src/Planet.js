import React from 'react';

export default function Planet({ name, dates }) {
	return (
		<div className="info">
			<h1>{name}</h1>
			<h2>{`${dates}`}</h2>
		</div>
	);
}
