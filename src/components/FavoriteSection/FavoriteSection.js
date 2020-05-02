import React from 'react';
import './FavoriteSection.scss';
import Jokes from '../Jokes/Jokes';

function FavoriteSection({ isVisible, favoriteJokes, onLikeJoke }) {
	return (
		<div
			className={`favorite-section ${
				isVisible ? 'favorite-section--visible' : ''
			}`}>
			<Jokes
				jokes={favoriteJokes}
				favoriteJokes={favoriteJokes}
				onLikeJoke={onLikeJoke}
			/>
		</div>
	);
}

export default FavoriteSection;
