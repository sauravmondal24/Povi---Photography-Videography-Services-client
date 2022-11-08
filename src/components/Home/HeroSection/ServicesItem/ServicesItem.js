import React from 'react';
import { Link } from 'react-router-dom';

const ServicesItem = () => {
	return (
		<div className="bg-dark text-white py-5">
			<div className="container ">
				<h5>OUR SERVICES</h5>
				<h2 className="fs-1 text-uppercase">We Provide Best Services</h2>
				<div>
					<div className="row py-4">
						<div className="col md-3">
							<div class="card bg-dark">
								<img
									src={
										'https://templates.hibootstrap.com/povi/default/assets/img/service/service-1.jpg'
									}
									class="card-img-top"
									alt="..."
								/>
								<div class="card-body">
									<h5 class="card-title">Card title</h5>
									<p class="card-text">
										Some quick example text to build on the card title and make
										up the bulk of the card's content.
									</p>
								</div>

								<div class="card-body">
									<Link href="#" class="card-link">
										Card link
									</Link>
									<Link href="#" class="card-link">
										Another link
									</Link>
								</div>
							</div>
						</div>
						<div className="col md-3">
							<div class="card bg-dark">
								<img
									src={
										'https://templates.hibootstrap.com/povi/default/assets/img/service/service-1.jpg'
									}
									class="card-img-top"
									alt="..."
								/>
								<div class="card-body">
									<h5 class="card-title">Card title</h5>
									<p class="card-text">
										Some quick example text to build on the card title and make
										up the bulk of the card's content.
									</p>
								</div>

								<div class="card-body">
									<Link href="#" class="card-link">
										Card link
									</Link>
									<Link href="#" class="card-link">
										Another link
									</Link>
								</div>
							</div>
						</div>
						<div className="col md-3">
							<div class="card bg-dark">
								<img
									src={
										'https://templates.hibootstrap.com/povi/default/assets/img/service/service-1.jpg'
									}
									class="card-img-top"
									alt="..."
								/>
								<div class="card-body">
									<h5 class="card-title">Card title</h5>
									<p class="card-text">
										Some quick example text to build on the card title and make
										up the bulk of the card's content.
									</p>
								</div>

								<div class="card-body">
									<Link href="#" class="card-link">
										Card link
									</Link>
									<Link href="#" class="card-link">
										Another link
									</Link>
								</div>
							</div>
						</div>
						<div className="col md-3">
							<div class="card bg-dark">
								<img
									src={
										'https://templates.hibootstrap.com/povi/default/assets/img/service/service-1.jpg'
									}
									class="card-img-top"
									alt="..."
								/>
								<div class="card-body">
									<h5 class="card-title">Card title</h5>
									<p class="card-text">
										Some quick example text to build on the card title and make
										up the bulk of the card's content.
									</p>
								</div>

								<div class="card-body">
									<Link href="#" class="card-link">
										Card link
									</Link>
									<Link href="#" class="card-link">
										Another link
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ServicesItem;
