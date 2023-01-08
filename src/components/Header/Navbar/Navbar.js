import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/img/logo-white.png';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import { FaUser } from 'react-icons/fa';

const Navbar = () => {
	const { user, logOut } = useContext(AuthContext);

	const handleLogOut = () => {
		logOut()
			.then(() => {})
			.catch((error) => {
				console.error(error);
			});
	};
	return (
		<div>
			<nav
				style={{ backgroundColor: '#242E37' }}
				className="navbar navbar-expand-lg  py-3"
			>
				<div className="container">
					<Link to="/" className="navbar-brand" href="#">
						<img className="img-fluid" src={Logo} alt="" />
					</Link>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarTogglerDemo02"
						aria-controls="navbarTogglerDemo02"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarTogglerDemo02">
						<ul className="navbar-nav m-auto mb-2 mb-lg-0 ">
							<li className="nav-item">
								<Link
									className="nav-link active text-light fs-5 px-3"
									aria-current="page"
									to="/"
								>
									Home
								</Link>
							</li>
							<li className="nav-item">
								<Link to="/blog" className="nav-link text-white fs-5 px-3">
									Blog
								</Link>
							</li>
							<li className="nav-item">
								<Link to="/services" className="nav-link text-white fs-5 px-3">
									Services
								</Link>
							</li>
							<li className="nav-item">
								<Link
									to="/addservices"
									className="nav-link text-white fs-5 px-3"
								>
									Add Services
								</Link>
							</li>
							<li className="nav-item">
								<Link
									to="/myreviews"
									className="nav-link text-white fs-5 px-3"
									href="#"
								>
									My Reviews
								</Link>
							</li>
						</ul>
						<div className="d-flex align-items-center" role="search">
							<div>
								{user ? (
									<>
										<span>{user?.displayName}</span>
										<button onClick={handleLogOut} className="btn btn-danger">
											LogOut
										</button>
									</>
								) : (
									<>
										<div className="btn-group ">
											<Link to="/login" className="btn  btn-active btn-success">
												LogIn
											</Link>
											<Link to="/signup" className="btn btn-primary">
												SignUp
											</Link>
										</div>
									</>
								)}
							</div>

							<div className="text-center px-2">
								<Link>
									{user?.photoURL ? (
										<img
											className="img-fluid circle"
											style={{ height: '35px', borderRadius: '20px' }}
											src={user?.photoURL}
											alt=""
										/>
									) : (
										<FaUser className="fs-3 mx-2"></FaUser>
									)}
								</Link>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
