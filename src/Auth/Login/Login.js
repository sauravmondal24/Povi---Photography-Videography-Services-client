import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import useTitle from '../../hooks/useTitle';
import '../Auth.css';

const Login = () => {
	useTitle('Login');
	const { signIn, createUserWithGoogle, createUserWithGitHub } =
		useContext(AuthContext);
	const navigate = useNavigate();
	const location = useLocation();
	const from = location.state?.from?.pathname || '/';

	const googleAuthProvider = new GoogleAuthProvider();
	const githubAuthProvider = new GithubAuthProvider();
	const handleLogin = (event) => {
		event.preventDefault();
		const email = event.target.email.value;
		const password = event.target.password.value;

		signIn(email, password)
			.then((result) => {
				const user = result.user;
				console.log(user);
				event.target.reset();
				navigate(from, { replace: true });
			})
			.catch((error) => console.error(error));
	};

	const handleGoogleSignIn = () => {
		createUserWithGoogle(googleAuthProvider)
			.then((result) => {
				const user = result.user;
				console.log(user);
				navigate(from, { replace: true });
			})
			.catch((error) => console.error('error', error));
	};
	const handleGitHubSignIn = () => {
		createUserWithGitHub(githubAuthProvider)
			.then((result) => {
				const user = result.user;
				console.log(user);
				navigate(from, { replace: true });
			})
			.catch((error) => console.error('error', error));
	};
	return (
		<div style={{ backgroundColor: '#242E37' }} className="">
			<div className=" m-auto py-5 loginForm">
				<form onSubmit={handleLogin}>
					<div className="card text-start p-4 fw-bold">
						<h2 className="text-center fw-bold py-3 fs-1">Login Now!</h2>
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
							<input
								type="checkbox"
								className="form-check-input"
								id="exampleCheck1"
							/>
							<label className="form-check-label" htmlFor="exampleCheck1">
								Check me out
							</label>
						</div>
						<div className="mb-3 form-check">
							<small>
								Create a new account <Link to="/signup">Signup here!</Link>
							</small>
						</div>

						<button type="submit" className="btn btn-primary">
							LOGIN
						</button>
						<div className="text-center py-3">
							<Link onClick={handleGoogleSignIn} className="fs-4 mx-2">
								<FaGoogle></FaGoogle>
							</Link>
							<Link onClick={handleGitHubSignIn} className="fs-4 mx-2">
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
