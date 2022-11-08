import React from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle, FaGithub } from 'react-icons/fa';

const Login = () => {
	return (
		<div style={{ backgroundColor: '#242E37' }} className="">
			<div className="w-25 m-auto py-5 ">
				<form>
					<div className="card text-start p-4 fw-bold">
						<h2 className="text-center fw-bold py-3 fs-1">Login Now!</h2>
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
								Password
							</label>
							<input
								name="password"
								type="password"
								class="form-control"
								id="exampleInputPassword1"
								placeholder="Please Enter your password"
							/>
						</div>
						<div class="mb-3 form-check">
							<input
								type="checkbox"
								class="form-check-input"
								id="exampleCheck1"
							/>
							<label class="form-check-label" for="exampleCheck1">
								Check me out
							</label>
						</div>

						<button type="submit" class="btn btn-primary">
							LOGIN
						</button>
						<div className="text-center py-3">
							<Link className="fs-4 mx-2">
								<FaGoogle></FaGoogle>
							</Link>
							<Link className="fs-4 mx-2">
								<FaGithub></FaGithub>
							</Link>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
