import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/img/logo-white.png';

const Navbar = () => {
	return (
		<div>
			<nav className="navbar navbar-expand-lg bg-dark py-3">
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
									className="nav-link active text-light fs-5"
									aria-current="page"
									to="/"
								>
									Home
								</Link>
							</li>
							<li className="nav-item">
								<Link to="/blog" className="nav-link text-white fs-5">
									Blog
								</Link>
							</li>
							<li className="nav-item">
								<Link to="/services" className="nav-link text-white fs-5">
									Services
								</Link>
							</li>
							<li className="nav-item">
								<Link
									to="/myreviews"
									className="nav-link text-white fs-5"
									href="#"
								>
									My Reviews
								</Link>
							</li>
							{/* <li className="nav-item">
								<Link to="/" className="nav-link text-white fs-5" href="#">
									Blog
								</Link>
							</li> */}
						</ul>
						<div className="d-flex" role="search">
							<button className="btn btn-outline-success" type="submit">
								<Link to="/login" className="nav-link text-white " href="#">
									Login
								</Link>
							</button>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
