import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
	const serviceDetails = useLoaderData();
	// const serviceDetails = useData;
	const { name, description, photoURL } = serviceDetails;
	console.log(serviceDetails);

	const BannerImg2 = {
		backgroundImage:
			"url('https://templates.hibootstrap.com/eduon/default/assets/img/page-bg/page-bg-6.jpg')",
		height: '70vh',
		fontSize: '50px',
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		backgroundColor: 'black',
		opacity: '0.8'
	};
	return (
		<div>
			<div style={BannerImg2}>
				<h2 className="text-center font-bold pt-40 text-6xl text-blue-900">
					Single course
				</h2>
			</div>

			<div className="container py-20">
				<div className="singleCourse">
					<div>
						<div className="card  bg-base-100 shadow">
							<h2 className="card-title text-center pt-5 px-5  text-bolder">
								{name}
							</h2>

							<figure className="px-10 pt-10">
								<img
									src={photoURL}
									alt="Shoes"
									className="rounded-xl min-w-full singleCourseImg"
								/>
							</figure>
							<div className="card-body items-start ">
								<h2 className="card-title text-start text-3xl text-bolder text-warning">
									Overview
								</h2>
								<p>{description}</p>
								<h2 className="card-title text-start text-2xl text-bolder">
									Course Description
								</h2>
								<p>{description}</p>
								<h2 className="card-title text-start text-2xl text-bolder">
									Certification Online
								</h2>
								<p>{description}</p>
								<h2 className="card-title text-start text-2xl text-bolder">
									Who This Course is for
								</h2>
								<p>{description}</p>
							</div>
						</div>
					</div>
					{/* <div>
						<div className="card w-96 bg-base-100 shadow-xl py-7 bg-sky-50">
							<h2 className="text-center font-bold text-2xl text-blue-500">
								Checkout Details
							</h2>
							<div className="card-body">
								<div className="flex justify-between items-center">
									<h2 className="card-title">Price</h2>
								</div>

								<hr />
								<h2 className="card-title">Start</h2>
								<hr />
								<h2 className="card-title">End</h2>
								<hr />
								<h2 className="card-title">Event Category</h2>
								<hr />
								<h2 className="card-title">Total Slot:</h2>
								<hr />
								<h2 className="card-title">Booked Slot:</h2>
								<hr />
								<h2 className="card-title">Website:</h2>
								<hr />

								<div className="card-actions justify-center pt-5">
									<button className="btn btn-primary w-full">Book Now</button>
								</div>
							</div>
						</div>
					</div> */}
				</div>
			</div>
		</div>
	);
};

export default ServiceDetails;
