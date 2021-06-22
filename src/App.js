import React from 'react';
import { render } from 'react-dom';
import './styles/styles.scss';
import Retrogrades from './Retrogrades';

const App = () => {
	return (
		<div className="content-container">
			<h1>What is currently in retrograde that is ruining my life?</h1>
			<p>
				Having a really bad week where nothing seems to be going right? Seem to be in a funk that doesn't make sense?
				Here's the planet(s) to blame!
			</p>
			<Retrogrades />
		</div>
	);
};

// render(React.createElement(App), document.getElementById('root'));
render(<App />, document.getElementById('root'));
