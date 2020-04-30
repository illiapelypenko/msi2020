import React from 'react';
import './Jokes.scss';
import HeartBlank from './heart-blank-icon';
import HeartFilled from './heart-filled-icon';
import Message from './message-icon';
import Link from './link-icon';

const Jokes = ({ jokes }) => {
	return (
		<div className='jokes'>
			{jokes.map((joke) => (
				<article className='joke'>
					<HeartBlank />
					<HeartFilled />
					<Message />
					<span className='joke__id'>
						<span>ID: </span>
						<a target='_blank' href={joke.url}>
							{joke.id}
						</a>
						<Link />
					</span>
					<span className='joke__value'>{joke.value}</span>
					<span className='joke__last-update'>
						<span>Last update: </span>
						<span>
							{Math.round(
								(new Date() - new Date(joke.updated_at)) / 1000 / 60 / 60
							)}
							&nbsp;hours ago
						</span>
					</span>
				</article>
			))}
		</div>
	);
};

export default Jokes;
