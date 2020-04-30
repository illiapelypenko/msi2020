import React, { useState, useEffect } from 'react';
import './Categories.scss';

const Categories = ({ onCategoryChange, categories, selectedCategory }) => {
	return (
		<section className='jokeFinder__categories'>
			{categories.map((category, index) => (
				<label
					className={`jokeFinder__category ${
						category === selectedCategory ? 'jokeFinder__category--checked' : ''
					}`}
					key={index}>
					<input
						type='radio'
						onChange={onCategoryChange}
						checked={category === true}
						name='category'
						value={category}
						id={category}
					/>
					<span>{category}</span>
				</label>
			))}
		</section>
	);
};

export default Categories;
