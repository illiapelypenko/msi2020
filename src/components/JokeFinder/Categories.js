import React, { useState, useEffect } from 'react';
import './Categories.scss';

const Categories = ({ onCategoriesChange, selectedCategories }) => {
	return (
		<form className='jokeFinder__categories'>
			{Object.keys(selectedCategories).map((category, index) => (
				<label
					className={`jokeFinder__category ${
						selectedCategories[category] === true
							? 'jokeFinder__category--checked'
							: ''
					}`}
					key={index}>
					<input
						type='checkbox'
						onChange={onCategoriesChange}
						checked={selectedCategories[category] === true}
						name='category'
						value={category}
						id={category}
					/>
					<span>{category}</span>
				</label>
			))}
		</form>
	);
};

export default Categories;
