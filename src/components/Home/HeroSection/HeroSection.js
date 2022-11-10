import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
	return (
		<div style={{ backgroundColor: '#242E37' }} className="py-5 ">
			<div className="container">
				<div style={{ backgroundColor: '#242E37' }} className="card mb-3">
					<div className="row g-0">
						<div className="col-md-6">
							<div className="d-flex">
								<div>
									<img
										src={
											'https://templates.hibootstrap.com/povi/default/assets/img/about/about-img-4.jpg'
										}
										className="img-fluid rounded m-4"
										alt="..."
									/>
								</div>
								<div>
									<img
										src={
											'https://templates.hibootstrap.com/povi/default/assets/img/about/about-img-5.jpg'
										}
										className="img-fluid rounded"
										alt="..."
									/>
								</div>
							</div>
						</div>
						<div className="col-md-6">
							<div className="card-body text-start text-white ps-5 pt-5 heroText">
								<h5 className="card-title">ABOUT US</h5>
								<h2 className="card-title fs-1">
									We Are The Leading Video Studio In The Country
								</h2>
								<p className="card-text">
									Best Strategic planning dolor sit amet consectetur adipiscing
									elit. Scel erus isque ametus odio velit auctor nam elit nulla.{' '}
									<br />
									“Mauris sem quam euismo ac nisi vel sagittis volutpat ipsum
									nulla molestie, lorem ut facilisis dignissim, ante tortor
									posuere urna nec sollicitudin mi eros.”
								</p>
								<div className="card-text">
									<h4>Beckeet Dariel</h4>
									<small className="text-muted">Editor & Videographer</small>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeroSection;
