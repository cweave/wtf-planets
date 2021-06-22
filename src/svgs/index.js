import React from 'react';

import Mercury from './mercury';
import Venus from './venus';
import Mars from './mars';
import Jupiter from './jupiter';
import Saturn from './saturn';
import Uranus from './uranus';
import Neptune from './neptune';
import Pluto from './pluto';
import Asteroid from './asteroid';

const Icon = ({ name, width, height, title }) => {
	switch (name) {
		case 'Mercury':
			return <Mercury name={name} width={width} height={height} title={title} />;
		case 'Venus':
			return <Venus name={name} width={width} height={height} title={title} />;
		case 'Mars':
			return <Mars name={name} width={width} height={height} title={title} />;
		case 'Jupiter':
			return <Jupiter name={name} width={width} height={height} title={title} />;
		case 'Saturn':
			return <Saturn name={name} width={width} height={height} title={title} />;
		case 'Uranus':
			return <Uranus name={name} width={width} height={height} title={title} />;
		case 'Neptune':
			return <Neptune name={name} width={width} height={height} title={title} />;
		case 'Pluto':
			return <Pluto name={name} width={width} height={height} title={title} />;
		case 'Node':
		case 'Lilith':
			return <Asteroid name={name} width={width} height={height} title={title} />;
		default:
			return;
	}
};

export default Icon;
