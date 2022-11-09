import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';

const SignUp = () => {
	useTitle('SignUp');
	const [error, setError] = useState('');
	const { createUser, updateUserProfile } = useContext(AuthContext);
	const navigate = useNavigate();

	const handleSignUp = (event) => {
		event.preventDefault();
		const form = event.target;
		const name = form.name.value;
		const email = form.email.value;
		const photoULR = form.photoULR.value;
		const password = form.password.value;

		createUser(email, password)
			.then((res) => {
				const user = res.user;
				console.log(user);
				form.reset();
				setError('');
				handleUpdateUserProfile(name, photoULR);
				navigate('/');
			})
			.catch((error) => {
				console.error('error', error);
				setError(error.message);
			});
	};

	const handleUpdateUserProfile = (name, photoULR) => {
		const profile = {
			displayName: name,
			photoULR: photoULR
		};
		updateUserProfile(profile)
			.then(() => {})
			.catch((error) => console.error(error));
	};

	return (
		<div style={{ backgroundColor: '#242E37' }} className="">
			<div className="w-25 m-auto py-5 ">
				<form onSubmit={handleSignUp}>
					<div className="card text-start p-4 fw-bold">
						<h2 className="text-center fw-bold py-3 fs-1">SignUp Now!</h2>
						<div className="mb-3">
							<label htmlFor="exampleInputEmail1" className="form-label">
								Your Name
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
							<label htmlFor="exampleInputEmail1" className="form-label">
								Photo URL
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
							<label htmlFor="exampleInputEmail1" className="form-label">
								Email address
							</label>
							<input
								name="email"
								type="email"
								className="form-control"
								id="exampleInputEmail1"
								aria-describedby="emailHelp"
								placeholder="Enter your Email"
							/>
						</div>
						<div className="mb-3">
							<label htmlFor="exampleInputPassword1" className="form-label">
								Password
							</label>
							<input
								name="password"
								type="password"
								className="form-control"
								id="exampleInputPassword1"
								placeholder="Please Enter your password"
							/>
						</div>
						<div className="mb-3 form-check">
							<small>
								Already have an account <Link to="/login">Login here!</Link>
							</small>
						</div>
						<div>
							<small className="text-danger">{error}</small>
						</div>

						<button type="submit" className="btn btn-primary">
							SINGNUP
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default SignUp;
