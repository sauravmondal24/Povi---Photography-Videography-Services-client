import React, { useEffect, useState } from 'react';
import useTitle from '../../hooks/useTitle';
import AllReviews from './AllReviews';

const MyReviews = () => {
	useTitle('My Reviews');
	const [reviews, setReviews] = useState([]);

	useEffect(() => {
		fetch('https://povi-server.vercel.app/reviews')
			.then((res) => res.json())
			.then((data) => setReviews(data));
	}, []);

	const handleDelete = (id) => {
		const proceed = window.confirm(
			'Are you sure, you want to delete your Review'
		);
		if (proceed) {
			fetch(`https://povi-server.vercel.app/reviews/${id}`, {
				method: 'DELETE'
			})
				.then((res) => res.json())
				.then((data) => {
					console.log(data);
					if (data.deletedCount > 0) {
						alert('Deleted Successfully');
						const remaining = reviews.filter((rev) => rev._id !== id);
						setReviews(remaining);
					}
				})
				.catch((error) => console.error(error));
		}
	};

	return (
		<div className="bg-dark py-5 ">
			<div className="container text-white">
				<div className="pb-4">
					<h5 className="fs-1 text-uppercase">All REVIEWS</h5>
					<hr />
				</div>
				<div className="table-responsive">
					<table className="table align-middle table-bordered text-white">
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
								<AllReviews
									key={review._id}
									review={review}
									handleDelete={handleDelete}
								></AllReviews>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default MyReviews;
