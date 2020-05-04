import React from 'react';
import './FavouriteBtn.scss';

const FavouriteBtn = ({ onFavoriteBtnClick, favouriteSectionVisible }) => {
	return (
		<div
			className={`favourite-btn ${
				favouriteSectionVisible ? 'favourite-btn--favorite-section-visible' : ''
			}`}
			onClick={onFavoriteBtnClick}>
			<div
				className={`favourite-btn__icon-group ${
					favouriteSectionVisible
						? 'favourite-btn__icon-group--transformed'
						: ''
				}`}>
				<div className='favourite-btn__icon-stick favourite-btn__icon-stick--1'></div>
				<div className='favourite-btn__icon-stick favourite-btn__icon-stick--2'></div>
			</div>
			<span className='favourite-btn__text'>Favourite</span>
		</div>
	);
};

export default FavouriteBtn;
