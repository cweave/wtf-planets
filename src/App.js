import React from 'react';
import { render } from 'react-dom';
import Retrogrades from './Retrogrades';

const App = () => {
	return (
		<div>
			<Retrogrades />
		</div>
	);
};

// render(React.createElement(App), document.getElementById('root'));
render(<App />, document.getElementById('root'));
