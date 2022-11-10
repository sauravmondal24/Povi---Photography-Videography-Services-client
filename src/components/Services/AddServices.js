import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';
import './Services.css';

// import { Link } from 'react-router-dom';

const AddServices = () => {
	useTitle('Add Services');
	const { user } = useContext(AuthContext);
	const servicesHandle = (event) => {
		event.preventDefault();
		const form = event.target;
		const name = form.name.value;
		const photoULR = form.photoULR.value;
		const price = form.price.value;
		const email = user?.email || 'Unregister';
		const description = form.description.value;

		const addServices = {
			name,
			email,
			photoULR,
			price,
			description
		};
		// console.log(addServices);

		fetch('http://localhost:5000/addservices', {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify(addServices)
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.acknowledged) {
					alert('New Service Added');

					form.reset();
				}
				console.log(data);
			})
			.catch((error) => console.error(error));
	};
	return (
		<div className="bg-dark">
			<div className="m-auto py-5  addServices">
				<form onSubmit={servicesHandle}>
					<div className="card text-start p-4 fw-bold fs-5">
						<h2 className="text-center fw-bold py-3 fs-1">Add Services</h2>
						<div className="mb-3">
							<label htmlFor="exampleInputName" className="form-label">
								Enter your Services name
							</label>
							<input
								name="name"
								type="text"
								className="form-control"
								id="exampleInputName"
								aria-describedby="emailHelp"
								placeholder="Enter your Name"
							/>
						</div>
						<div className="mb-3">
							<label htmlFor="exampleInputPhoto" className="form-label">
								Services Photo URL
							</label>
							<input
								name="photoULR"
								type="text"
								className="form-control"
								id="exampleInputPhoto"
								aria-describedby="emailHelp"
								placeholder="Enter your Photo URL"
							/>
						</div>
						<div className="mb-3">
							<label htmlFor="exampleInputPrice" className="form-label">
								Services Price
							</label>
							<input
								name="price"
								type="text"
								className="form-control"
								id="exampleInputPrice"
								aria-describedby="emailHelp"
								placeholder="Enter your Services Price"
							/>
						</div>
						<div className="mb-3">
							<label htmlFor="exampleInputDescription" className="form-label">
								Services Description
							</label>
							<textarea
								name="description"
								type="text"
								className="form-control"
								id="exampleInputPhoto"
								style={{ height: '200px' }}
								placeholder="Write services description"
							/>
						</div>

						<button type="submit" className="btn btn-lg btn-danger my-4">
							SUBMIT
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default AddServices;
