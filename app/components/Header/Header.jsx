import React from 'react';

require('./Header.css');

class HeaderBar extends React.Component {
	render() {
		return (
			<div className="heading">
				This is the main header
			</div>
		);
	};
};

export default HeaderBar;