import React, { useEffect, useState } from 'react';
import useTitle from '../../hooks/useTitle';
import { useLoaderData } from 'react-router-dom';

const MyReviews = () => {
	useTitle('My Reviews');
	const [reviews, setReviews] = useState();

	useEffect(() => {
		fetch('http://localhost:5000/reviews')
			.then((res) => res.json())
			.then((data) => setReviews(data));
	}, []);

	return (
		<div>
			<h2>this is myreviews page </h2>

			<h2>All reviews {reviews.length}</h2>
		</div>
	);
};

export default MyReviews;
