import React, { useState, useEffect } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import FavouriteBtn from './components/FavouriteBtn/FavouriteBtn';
import JokeFinder from './components/JokeFinder/JokeFinder';
import Jokes from './components/Jokes/Jokes';
import FavoriteSection from './components/FavoriteSection/FavoriteSection';

const categories = ['animal', 'career', 'celebrity', 'dev'];

const App = () => {
	const [favouriteSectionVisible, setFavouriteSectionVisible] = useState(false);
	const [jokes, setJokes] = useState([]);
	const [favoriteJokes, setFavoriteJokes] = useState([]);

	useEffect(() => {
		if (localStorage.getItem('favoriteJokes')) {
			setFavoriteJokes(JSON.parse(localStorage.getItem('favoriteJokes')));
		}
	}, []);

	const handleLikeJoke = (e, joke) => {
		if (favoriteJokes.find((favoriteJoke) => joke.id === favoriteJoke.id)) {
			const newFavoriteJokes = [...favoriteJokes];
			newFavoriteJokes.splice(
				favoriteJokes.findIndex((favoriteJoke) => joke.id === favoriteJoke.id),
				1
			);
			setFavoriteJokes(newFavoriteJokes);
			localStorage.setItem('favoriteJokes', JSON.stringify(newFavoriteJokes));
		} else {
			setFavoriteJokes([...favoriteJokes, joke]);
			localStorage.setItem(
				'favoriteJokes',
				JSON.stringify([...favoriteJokes, joke])
			);
		}
	};

	const handleFavoriteBtnClick = () => {
		setFavouriteSectionVisible(!favouriteSectionVisible);
	};

	return (
		<div className='app'>
			<Header>
				<FavouriteBtn
					onFavoriteBtnClick={handleFavoriteBtnClick}
					favouriteSectionVisible={favouriteSectionVisible}
				/>
			</Header>
			<FavoriteSection
				isVisible={favouriteSectionVisible}
				jokes={favoriteJokes}
				favoriteJokes={favoriteJokes}
				onLikeJoke={handleLikeJoke}
				onFavoriteBtnClick={handleFavoriteBtnClick}
				favouriteSectionVisible={favouriteSectionVisible}
			/>
			<main
				className={
					favouriteSectionVisible
						? 'main-section'
						: 'main-section main-section--visible'
				}>
				<JokeFinder categories={categories} setJokes={setJokes} />
				<Jokes
					jokes={jokes}
					onLikeJoke={handleLikeJoke}
					favoriteJokes={favoriteJokes}
				/>
			</main>
		</div>
	);
};

export default App;
