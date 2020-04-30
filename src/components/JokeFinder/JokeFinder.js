import React, { useState, useEffect } from 'react';
import FormGroup from './FormGroup';
import Categories from './Categories';
import './JokeFinder.scss';

const JokeFinder = ({ categories }) => {
	const [value, setValue] = useState('random');
	const [selectedCategories, setSelectedCategories] = useState({});
	const [searchText, setSearchText] = useState('');

	useEffect(() => {
		const newSelectedCategories = {};
		categories.map((category) => {
			newSelectedCategories[category] = false;
		});
		setSelectedCategories(newSelectedCategories);
	}, [categories]);

	const handleCategoriesChange = (e) => {
		const newSelectedCategories = { ...selectedCategories };
		newSelectedCategories[e.target.value] = !newSelectedCategories[
			e.target.value
		];
		setSelectedCategories(newSelectedCategories);
	};

	const handleChange = (e) => {
		setValue(e.target.value);
	};

	const handleSearchChange = (e) => {
		setSearchText(e.target.value);
	};

	const handleSubmit = () => {};

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
						selectedCategories={selectedCategories}
						onCategoriesChange={handleCategoriesChange}
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
						className='jokeFinder__search'
						type='text'
						placeholder='Free text search...'
						value={searchText}
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
