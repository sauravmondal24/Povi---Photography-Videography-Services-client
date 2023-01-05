import React from 'react';
import image1 from '../../../assets/img/project-12.jpg';
import image2 from '../../../assets/img/project-14.jpg';
import image3 from '../../../assets/img/project-13.jpg';
import image4 from '../../../assets/img/project-15.jpg';
import './LatestWork.css';

const LatestWork = () => {
	return (
		<div style={{ backgroundColor: '#242E37' }} className="py-5 text-light">
			<div className="container">
				<h2 className="text-center text-uppercase  fs-5 fw-bold">
					OUR PROJECT
				</h2>
				<h2 className="text-center text-uppercase pb-3 fs-1 fw-bold">
					Browse Our Latest Work
				</h2>

				<div className="py-5">
					<div className="row">
						<div className="col-md-6  p-2">
							<div className=" shadow-lg">
								<div className="card-body">
									<img className="img-fluid" src={image1} alt="" />
								</div>
							</div>
						</div>
						<div className="col-md-6  p-2">
							<div className="shadow-lg">
								<div className="card-body">
									<img className="img-fluid" src={image2} alt="" />
								</div>
							</div>
						</div>
						<div className="col-md-6  p-2">
							<div className=" shadow-lg">
								<div className="card-body">
									<img className="img-fluid img3" src={image3} alt="" />
								</div>
							</div>
						</div>
						<div className="col-md-6  p-2">
							<div className="shadow-lg">
								<div className="card-body">
									<img className="img-fluid" src={image4} alt="" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LatestWork;
