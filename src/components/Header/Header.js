import React from 'react';
import './Header.scss';
import FavouriteBtn from '../FavouriteBtn/FavouriteBtn.js';

function Header({ onFavoriteBtnClick, favouriteSectionVisible }) {
	return (
		<header
			className={`header ${favouriteSectionVisible ? 'header--favorite' : ''}`}>
			<h2>MSI 2020</h2>
			<FavouriteBtn
				onFavoriteBtnClick={onFavoriteBtnClick}
				favouriteSectionVisible={favouriteSectionVisible}
			/>
		</header>
	);
}

export default Header;
