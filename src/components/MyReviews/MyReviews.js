import React, { useEffect, useState } from 'react';
import useTitle from '../../hooks/useTitle';
import { useLoaderData } from 'react-router-dom';
import AllReviews from './AllReviews';

const MyReviews = () => {
	useTitle('My Reviews');
	const [reviews, setReviews] = useState([]);

	useEffect(() => {
		fetch('http://localhost:5000/reviews')
			.then((res) => res.json())
			.then((data) => setReviews(data));
	}, []);

	return (
		<div className="bg-dark py-5 ">
			<div className="container text-white">
				<div className="pb-4">
					<h5 className="fs-1 text-uppercase">All REVIEWS</h5>
					<hr />
				</div>
				<table className="table  table-bordered text-white">
					<thead className="bg-success">
						<tr>
							<th scope="col">User</th>
							<th scope="col">Name</th>
							<th scope="col">Email</th>
							<th scope="col">Comments</th>
							<th scope="col">Action</th>
						</tr>
					</thead>
					<tbody className="text-start">
						{reviews.map((review) => (
							<AllReviews key={review._id} review={review}></AllReviews>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default MyReviews;
