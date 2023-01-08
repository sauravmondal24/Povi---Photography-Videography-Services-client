import React from 'react';
import { useLoaderData } from 'react-router-dom';

import ServiceReview from './ServiceReview';

const ServiceDetails = () => {
	const { name, photoULR, description, price } = useLoaderData();

	return (
		<div className=" bg-dark py-5">
			<div className="container">
				<div className="row text-start text-light">
					<div className="col-md-6">
						<div className="card shadow text-start p-4">
							<img
								style={{ height: '350px', width: '100%' }}
								className="img-fluid"
								src={photoULR}
								alt=""
							/>
						</div>
					</div>
					<div className="col-md-6">
						<div className="card-title">
							<h2 className="text-primary">{name}</h2>
							<h5>Price: ${price}</h5>
							<h4>Description</h4>

							<p className="fs-6">{description.slice(0, 300)}</p>
							<button className="btn btn-danger btn-lg">ADD TO CART</button>
						</div>
					</div>
				</div>
				<p className="border my-4 border-1"></p>

				<div>
					<nav>
						<div className="nav nav-tabs " id="nav-tab" role="tablist">
							<button
								className="nav-link active fs-5 text-white bg-primary"
								id="nav-home-tab"
								data-bs-toggle="tab"
								data-bs-target="#nav-home"
								type="button"
								role="tab"
								aria-controls="nav-home"
								aria-selected="true"
							>
								My Review
							</button>
							<button
								className="nav-link fs-5 text-danger "
								id="nav-profile-tab"
								data-bs-toggle="tab"
								data-bs-target="#nav-profile"
								type="button"
								role="tab"
								aria-controls="nav-profile"
								aria-selected="false"
							>
								Description
							</button>
							<button
								className="nav-link fs-5 text-danger "
								id="nav-contact-tab"
								data-bs-toggle="tab"
								data-bs-target="#nav-contact"
								type="button"
								role="tab"
								aria-controls="nav-contact"
								aria-selected="false"
							>
								Additional Information
							</button>
						</div>
					</nav>
					<div className="tab-content" id="nav-tabContent">
						<div
							className="tab-pane fade show active text-white text-start py-4"
							id="nav-home"
							role="tabpanel"
							aria-labelledby="nav-home-tab"
						>
							<ServiceReview></ServiceReview>
						</div>
						<div
							className="tab-pane fade text-white text-start py-4"
							id="nav-profile"
							role="tabpanel"
							aria-labelledby="nav-profile-tab"
						>
							{description}
						</div>
						<div
							className="tab-pane fade text-white text-start py-4"
							id="nav-contact"
							role="tabpanel"
							aria-labelledby="nav-contact-tab"
						>
							{description}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ServiceDetails;
