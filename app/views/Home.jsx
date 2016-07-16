import React from 'react';

import Landing from '../components/Landing/landing.jsx';

class Home extends React.Component {
	render() {
		return (
			<div>
				<Landing/>
				<p>This is the home page with the landing component</p>
			</div>
		);
	};
};

export default Home;