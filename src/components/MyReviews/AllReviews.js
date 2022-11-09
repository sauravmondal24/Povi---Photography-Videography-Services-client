import React from 'react';
import { Link } from 'react-router-dom';
const AllReviews = ({ review, handleDelete }) => {
	const { _id, name, email, photoURL, comments } = review;

	return (
		<tr>
			<th scope="row">
				<img style={{ height: '50px' }} src={photoURL} alt="" />
			</th>
			<td>{name}</td>
			<td>{email}</td>
			<td>{comments}</td>
			<td>
				<Link to={`/updateReview/${_id}`}>
					<button className="btn btn-info mx-2">UPDATE</button>
				</Link>

				<button onClick={() => handleDelete(_id)} className="btn btn-danger">
					DELETE
				</button>
			</td>
		</tr>
	);
};

export default AllReviews;
