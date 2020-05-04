import React from 'react';
import './Header.scss';

function Header({ children }) {
	return (
		<header className='header'>
			<h2>MSI 2020</h2>
			{children}
		</header>
	);
}

export default Header;
