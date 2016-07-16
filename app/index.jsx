import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, hashHistory } from 'react-router';

import HeaderBar from './components/Header/Header.jsx';
import Home from './views/Home.jsx';

class App extends React.Component {
	render() {
		return (
			<div>
				<HeaderBar/>
				<Router history={ hashHistory }>
					<Route path="/" component={ Home }/>
				</Router>
			</div>
		);
	};
};

render(<App/>, document.getElementById('app'));