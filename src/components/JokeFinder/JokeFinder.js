import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FormGroup from './FormGroup';
import Categories from './Categories';
import './JokeFinder.scss';

const JokeFinder = ({ categories }) => {
	const [value, setValue] = useState('random');
	const [category, setCategory] = useState('animal');
	const [searchedText, setSearchedText] = useState('');

	const handleCategoryChange = (e) => {
		setCategory(e.target.value);
	};

	const handleChange = (e) => {
		setValue(e.target.value);
	};

	const handleSearchChange = (e) => {
		setSearchedText(e.target.value);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		let api = 'https://api.chucknorris.io/jokes/';
		switch (value) {
			case 'random':
				api += 'random';
				break;
			case 'fromCategories':
				api += `random?category=${category}`;
				break;
			case 'search':
				api += `search?query=${searchedText}`;
				break;
		}
		const res = await axios.get(api);
		const data = res.data;
		console.log(data);
	};

	return (
		<main className='jokeFinder'>
			<h1>Hey!</h1>
			<h2>Let’s try to find a joke for you:</h2>
			<form className='jokeFinder__form' onSubmit={handleSubmit}>
				<FormGroup
					groupValue={'random'}
					currentValue={value}
					text={'Random'}
					onChange={handleChange}
				/>
				<FormGroup
					groupValue={'fromCategories'}
					currentValue={value}
					text={'From categories'}
					onChange={handleChange}
				/>
				{value === 'fromCategories' ? (
					<Categories
						categories={categories}
						onCategoryChange={handleCategoryChange}
						selectedCategory={category}
					/>
				) : null}
				<FormGroup
					groupValue={'search'}
					currentValue={value}
					text={'Search'}
					onChange={handleChange}
				/>
				{value === 'search' ? (
					<input
						autoFocus
						className='jokeFinder__search'
						type='text'
						placeholder='Free text search...'
						value={searchedText}
						onChange={handleSearchChange}
					/>
				) : null}
				<input
					className='jokeFinder__submit-btn'
					type='submit'
					value='Get a joke'
				/>
			</form>
		</main>
	);
};

export default JokeFinder;
