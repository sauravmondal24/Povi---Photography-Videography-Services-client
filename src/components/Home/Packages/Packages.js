import React from 'react';
import { FaCheck } from 'react-icons/fa';
import '../Home.css';

const Packages = () => {
	return (
		<div style={{ backgroundColor: '#242E37' }} className="py-5 text-light">
			<div className="container">
				<h2 className="text-center text-uppercase pb-3 fs-1 fw-bold">
					Choose Your Packages
				</h2>
				<p className="text-center packageText m-auto ">
					Packages ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
					minus perferendis repellat facilis numquam rem iure quaerat pariatur.
				</p>

				<div className="py-5">
					<div className="row">
						<div className="col-md-4">
							<div className="card bg-dark p-4 shadow-lg">
								<div className="card-body">
									<h6 className="card-title text-start">Basic Package</h6>
									<h1
										style={{ fontSize: '50px' }}
										className="card-text text-start fw-bold"
									>
										<sup className="fs-6">$</sup> 49.00
										<sub className="text-danger fs-5">/Month</sub>
									</h1>
								</div>
								<div className="text-start pt-4">
									<h6>
										<FaCheck className="text-danger fw-normal"></FaCheck> 1 Hour
										Session
									</h6>
									<hr />
									<h6>
										<FaCheck className="text-danger fw-normal"></FaCheck> 10
										Digital Images
									</h6>
									<hr />
									<h6>
										<FaCheck className="text-danger fw-normal"></FaCheck> Online
										Gallery
									</h6>
									<hr />
									<h6>
										<FaCheck className="text-danger fw-normal"></FaCheck> 1
										Photographer
									</h6>
									<hr />
								</div>
								<div className="card-body">
									<button className="btn btn-lg w-100 btn-outline-danger">
										PURCHASE NOW
									</button>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="card bg-dark p-4 shadow-lg">
								<div className="card-body">
									<h6 className="card-title text-start">Premium Package</h6>
									<h1
										style={{ fontSize: '50px' }}
										className="card-text text-start fw-bold"
									>
										<sup className="fs-6">$</sup> 59.00
										<sub className="text-danger fs-5">/Month</sub>
									</h1>
								</div>
								<div className="text-start pt-4">
									<h6>
										<FaCheck className="text-danger fw-normal"></FaCheck> 2 Hour
										Session
									</h6>
									<hr />
									<h6>
										<FaCheck className="text-danger fw-normal"></FaCheck> 20
										Digital Images
									</h6>
									<hr />
									<h6>
										<FaCheck className="text-danger fw-normal"></FaCheck> Online
										Gallery
									</h6>
									<hr />
									<h6>
										<FaCheck className="text-danger fw-normal"></FaCheck> 2
										Photographer
									</h6>
									<hr />
								</div>
								<div className="card-body">
									<button className="btn btn-lg w-100 btn-outline-danger">
										PURCHASE NOW
									</button>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="card bg-dark p-4 shadow-lg">
								<div className="card-body">
									<h6 className="card-title text-start">
										Professional Package
									</h6>
									<h1
										style={{ fontSize: '50px' }}
										className="card-text text-start fw-bold"
									>
										<sup className="fs-6">$</sup> 99.00
										<sub className="text-danger fs-5">/Month</sub>
									</h1>
								</div>
								<div className="text-start pt-4">
									<h6>
										<FaCheck className="text-danger fw-normal"></FaCheck> 3 Hour
										Session
									</h6>
									<hr />
									<h6>
										<FaCheck className="text-danger fw-normal"></FaCheck> 30
										Digital Images
									</h6>
									<hr />
									<h6>
										<FaCheck className="text-danger fw-normal"></FaCheck> Online
										Gallery
									</h6>
									<hr />
									<h6>
										<FaCheck className="text-danger fw-normal"></FaCheck> 4
										Photographer
									</h6>
									<hr />
								</div>
								<div className="card-body">
									<button className="btn btn-lg w-100 btn-outline-danger">
										PURCHASE NOW
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Packages;
