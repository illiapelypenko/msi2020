import React, { useState, useEffect } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import FavouriteBtn from './components/FavouriteBtn/FavouriteBtn';
import JokeFinder from './components/JokeFinder/JokeFinder';

const categories = ['animal', 'career', 'celebrity', 'dev'];

const App = () => {
	const [favouriteSectionVisible, setFavouriteSectionVisible] = useState(false);

	const handleFavoriteBtnClick = () => {
		setFavouriteSectionVisible(!favouriteSectionVisible);
	};

	return (
		<div className='app'>
			<FavouriteBtn
				onFavoriteBtnClick={handleFavoriteBtnClick}
				favouriteSectionVisible={favouriteSectionVisible}
			/>
			<Header />
			<JokeFinder categories={categories} />
		</div>
	);
};

export default App;
