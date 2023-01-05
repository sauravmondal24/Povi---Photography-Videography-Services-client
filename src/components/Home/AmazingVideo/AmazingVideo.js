import React from 'react';
import { FaStarOfDavid, FaBuilding, FaRing, FaVideo } from 'react-icons/fa';

const AmazingVideo = () => {
	return (
		<div style={{ backgroundColor: '#242E37' }} className="py-5 text-light">
			<div className="container">
				<h2 className="text-center text-uppercase  fs-5 fw-bold">
					OUR SERVICES
				</h2>
				<h2 className="text-center text-uppercase pb-3 fs-1 fw-bold">
					We Create Amazing Video
				</h2>

				<div className="py-5">
					<div className="row">
						<div className="col-md-6 col-lg-3 p-2">
							<div className="card bg-dark py-4 shadow-lg">
								<div className="card-body">
									<FaBuilding className="fs-1 text-danger mb-3"></FaBuilding>
									<h4 className="card-title  text-center">Company Profile</h4>
									<p className="card-text">
										A company profile is a professional summary that describes a
										business.
									</p>
								</div>
							</div>
						</div>
						<div className="col-md-6 col-lg-3 p-2">
							<div className="card bg-dark py-4 shadow-lg">
								<div className="card-body">
									<FaRing className="fs-1 text-danger mb-3"></FaRing>
									<h4 className="card-title  text-center">Wedding Session</h4>
									<p className="card-text">
										Explore Marek Belowski's board "Outdoor Session - Wedding"
										on Pinterest
									</p>
								</div>
							</div>
						</div>
						<div className="col-md-6 col-lg-3 p-2">
							<div className="card bg-dark py-4 shadow-lg">
								<div className="card-body">
									<FaStarOfDavid className="fs-1 text-danger mb-3"></FaStarOfDavid>
									<h4 className="card-title  text-center">Branding Mode</h4>
									<p className="card-text">
										Personal branding; Product branding; Service branding;
										Retail branding
									</p>
								</div>
							</div>
						</div>
						<div className="col-md-6 col-lg-3 p-2">
							<div className="card bg-dark py-4 shadow-lg">
								<div className="card-body">
									<FaVideo className="fs-1 text-danger mb-3"></FaVideo>
									<h4 className="card-title  text-center">Entertainer</h4>
									<p className="card-text">
										a singer, comedian, dancer, reciter, or the like, especially
										a professional one.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AmazingVideo;
