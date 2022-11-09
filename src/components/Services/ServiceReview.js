import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const ServiceReview = () => {
	const { user } = useContext(AuthContext);

	const handleComments = (event) => {
		event.preventDefault();
		const form = event.target;
		const name = form.name.value;
		const email = user?.email || 'Unregister';
		const photoURL = user?.photoURL || 'Unregister';
		const comments = form.comments.value;

		const AddReviews = {
			name,
			email,
			photoURL,
			comments
		};

		fetch('http://localhost:5000/addreviews', {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify(AddReviews)
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.acknowledged) {
					alert('New Review Added');
					form.reset();
				}
				console.log(data);
			})
			.catch((error) => console.error(error));
	};

	return (
		<div>
			<div className="row">
				<div className="col-md-6"></div>
				<div className="col-md-6 card bg-dark p-4 border border-white">
					<form onSubmit={handleComments}>
						<h2 className="text-primary">Write Your Comment</h2>
						<hr />
						<div class="mb-3">
							<label for="exampleInputName" class="form-label">
								Your Name
							</label>
							<input
								name="name"
								type="text"
								class="form-control"
								id="exampleInputName"
								aria-describedby="emailHelp"
								placeholder="Enter Your Name"
							/>
						</div>
						<div class="mb-3">
							<label for="exampleInputEmail1" class="form-label">
								Email address
							</label>
							<input
								name="email"
								type="email"
								class="form-control"
								id="exampleInputEmail1"
								aria-describedby="emailHelp"
								placeholder="Enter your Email"
							/>
						</div>
						<div class="mb-3">
							<label for="exampleInputPassword1" class="form-label">
								Your Comments
							</label>
							<textarea
								name="comments"
								type="text"
								class="form-control"
								id="exampleInputPassword1"
								placeholder="Write your comment here"
								style={{ height: '100px' }}
							/>
						</div>

						<button type="submit" class="btn btn-success btn-lg">
							Submit Review
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default ServiceReview;
