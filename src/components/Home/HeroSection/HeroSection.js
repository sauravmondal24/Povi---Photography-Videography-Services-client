import React from 'react';

const HeroSection = () => {
	return (
		<div style={{ backgroundColor: '#242E37' }} className="py-5 ">
			<div className="container">
				<div style={{ backgroundColor: '#242E37' }} class="card mb-3">
					<div class="row g-0">
						<div class="col-md-6">
							<div className="d-flex">
								<div>
									<img
										src={
											'https://templates.hibootstrap.com/povi/default/assets/img/about/about-img-4.jpg'
										}
										class="img-fluid rounded m-4"
										alt="..."
									/>
								</div>
								<div>
									<img
										src={
											'https://templates.hibootstrap.com/povi/default/assets/img/about/about-img-5.jpg'
										}
										class="img-fluid rounded"
										alt="..."
									/>
								</div>
							</div>
						</div>
						<div class="col-md-6">
							<div class="card-body text-start text-white ps-5 pt-5">
								<h5 class="card-title">ABOUT US</h5>
								<h2 class="card-title fs-1">
									We Are The Leading Video Studio In The Country
								</h2>
								<p class="card-text">
									Best Strategic planning dolor sit amet consectetur adipiscing
									elit. Scel erus isque ametus odio velit auctor nam elit nulla.{' '}
									<br />
									“Mauris sem quam euismo ac nisi vel sagittis volutpat ipsum
									nulla molestie, lorem ut facilisis dignissim, ante tortor
									posuere urna nec sollicitudin mi eros.”
								</p>
								<p class="card-text">
									<h4>Beckeet Dariel</h4>
									<small class="text-muted">Editor & Videographer</small>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeroSection;
