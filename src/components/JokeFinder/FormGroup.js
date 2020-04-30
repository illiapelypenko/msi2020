import React, { useState, useEffect } from 'react';

const FormGroup = ({ groupValue, currentValue, text, onChange }) => {
	return (
		<label className='jokeFinder__form-group' htmlFor={`${groupValue}`}>
			<div
				className={`jokeFinder__custom-btn ${
					currentValue === groupValue ? 'jokeFinder__custom-btn--checked' : ''
				}`}>
				<div></div>
			</div>
			<input
				onChange={onChange}
				checked={currentValue === groupValue}
				type='radio'
				name='joke'
				value={groupValue}
				id={groupValue}
			/>
			<span>{text}</span>
		</label>
	);
};

export default FormGroup;
