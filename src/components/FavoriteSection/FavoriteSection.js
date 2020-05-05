import React from 'react';
import './FavoriteSection.scss';
import Jokes from '../Jokes/Jokes';
import FavouriteBtn from '../FavouriteBtn/FavouriteBtn';

function FavoriteSection({
	isVisible,
	favoriteJokes,
	onLikeJoke,
	onFavoriteBtnClick,
	favouriteSectionVisible,
}) {
	return (
		<div
			className={`favorite-section ${
				isVisible ? 'favorite-section--visible' : ''
			}`}>
			<span>Favourite</span>
			<FavouriteBtn
				onFavoriteBtnClick={onFavoriteBtnClick}
				favouriteSectionVisible={favouriteSectionVisible}
			/>
			<Jokes
				jokes={favoriteJokes}
				favoriteJokes={favoriteJokes}
				onLikeJoke={onLikeJoke}
			/>
		</div>
	);
}

export default FavoriteSection;
