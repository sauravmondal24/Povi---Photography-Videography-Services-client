import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { useLoaderData } from 'react-router-dom';

const UpdateReview = () => {
	const { user } = useContext(AuthContext);

	const oldReview = useLoaderData();

	const [review, setReview] = useState(oldReview);

	const handleUpdateComments = (event) => {
		event.preventDefault();
		console.log(review);

		fetch(`http://localhost:5000/reviews/${oldReview._id}`, {
			method: 'PUT',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify(review)
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.modifiedCount > 0) {
					alert('Review Updated Complete');
				}
			})
			.catch((error) => console.error(error));
	};
	const handelUpdateReview = (event) => {
		const field = event.target.name;
		const value = event.target.value;
		const newReview = { ...review };
		newReview[field] = value;
		setReview(newReview);
	};
	return (
		<div className="bg-dark p-4 ">
			<div className="container w-50 text-start my-5">
				<div className=" card  border border-white fw-bold p-5">
					<form onSubmit={handleUpdateComments}>
						<h2 className="text-primary text-center">Update Your Comment</h2>
						<hr />
						<div class="mb-3">
							<label for="exampleInputName" class="form-label">
								Update Your Name
							</label>
							<input
								onChange={handelUpdateReview}
								name="name"
								type="text"
								class="form-control"
								id="exampleInputName"
								aria-describedby="emailHelp"
								placeholder="Enter Your Name"
								defaultValue={oldReview.name}
							/>
						</div>
						<div class="mb-3">
							<label for="exampleInputEmail1" class="form-label">
								Update Email address
							</label>
							<input
								onChange={handelUpdateReview}
								name="email"
								type="email"
								class="form-control"
								id="exampleInputEmail1"
								aria-describedby="emailHelp"
								placeholder="Enter your Email"
								defaultValue={oldReview.email}
							/>
						</div>
						<div class="mb-3">
							<label for="exampleInputPassword1" class="form-label">
								Update Your Comments
							</label>
							<textarea
								onChange={handelUpdateReview}
								name="comments"
								type="text"
								class="form-control"
								id="exampleInputPassword1"
								placeholder="Write your comment here"
								style={{ height: '100px' }}
								defaultValue={oldReview.comments}
							/>
						</div>

						<button type="submit" class="btn btn-success btn-lg">
							Update Review
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default UpdateReview;
