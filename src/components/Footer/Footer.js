import React from 'react';
import logo from '../../assets/img/logo-white.png';
import {
	FaFacebook,
	FaTwitter,
	FaLinkedin,
	FaInstagram,
	FaLocationArrow,
	FaPhone,
	FaEnvelopeOpen
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const Footer = () => {
	return (
		<PhotoProvider>
			<div
				style={{ backgroundColor: '#242E37' }}
				className=" py-5 text-light text-start"
			>
				<div className="container">
					<div className="row">
						<div className="col-md-3">
							<img className="img-fluid " src={logo} alt="" />
							<p>
								Subscribe to our newsletter for discounts and more latest offer.
							</p>
							<div>
								<ul
									className="d-flex justify-content-start "
									style={{ listStyleType: 'none' }}
								>
									<li className="me-2  fs-5 bg-white rounded text-white px-2 py-1 text-decoration-none">
										<Link>
											<FaFacebook></FaFacebook>
										</Link>
									</li>
									<li className="mx-2  fs-5 bg-white rounded text-white px-2 py-1 text-decoration-none">
										<Link>
											<FaTwitter></FaTwitter>
										</Link>
									</li>
									<li className="mx-2  fs-5 bg-white rounded text-white px-2 py-1 text-decoration-none">
										<Link>
											<FaInstagram></FaInstagram>
										</Link>
									</li>
									<li className="mx-2  fs-5 bg-white rounded text-white px-2 py-1 text-decoration-none">
										<Link>
											<FaLinkedin></FaLinkedin>
										</Link>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-md-3">
							<h3>Quick Links</h3>
							<div>
								<ul>
									<li className="my-2 fs-5 text-decoration-none">
										<Link className="text-white text-decoration-none">
											Home
										</Link>
									</li>
									<li className="my-2 fs-5 text-decoration-none">
										<Link className="text-white text-decoration-none">
											Blog
										</Link>
									</li>
									<li className="my-2 fs-5 text-decoration-none">
										<Link className="text-white text-decoration-none">
											Services
										</Link>
									</li>
									<li className="my-2 fs-5 text-decoration-none">
										<Link className="text-white text-decoration-none">
											My Review
										</Link>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-md-3">
							<h3>Follow Instagram</h3>
							<div>
								<div className="row g-3">
									<div className="col-sm-6">
										<PhotoView
											src={
												'https://templates.hibootstrap.com/povi/default/assets/img/instagram/insta-1.jpg'
											}
										>
											<img
												className="img-fluid "
												src={
													'https://templates.hibootstrap.com/povi/default/assets/img/instagram/insta-1.jpg'
												}
												alt=""
											/>
										</PhotoView>
									</div>
									<div className="col-sm-6">
										<PhotoView
											src={
												'https://templates.hibootstrap.com/povi/default/assets/img/instagram/insta-2.jpg'
											}
										>
											<img
												className="img-fluid "
												src={
													'https://templates.hibootstrap.com/povi/default/assets/img/instagram/insta-2.jpg'
												}
												alt=""
											/>
										</PhotoView>
									</div>
									<div className="col-sm-6">
										<PhotoView
											src={
												'https://templates.hibootstrap.com/povi/default/assets/img/instagram/insta-3.jpg'
											}
										>
											<img
												className="img-fluid "
												src={
													'https://templates.hibootstrap.com/povi/default/assets/img/instagram/insta-3.jpg'
												}
												alt=""
											/>
										</PhotoView>
									</div>
									<div className="col-sm-6">
										<PhotoView>
											<img
												className="img-fluid "
												src={
													'https://templates.hibootstrap.com/povi/default/assets/img/instagram/insta-4.jpg'
												}
												alt=""
											/>
										</PhotoView>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-3">
							<h3>Contact Us</h3>
							<div className="d-flex align-items-center">
								<FaLocationArrow className="fs-2"></FaLocationArrow>
								<p className="mx-3">
									5961 De Santa Ave, Mirpur 01, DH 1200, BD
								</p>
							</div>

							<div className="d-flex align-items-center">
								<FaPhone className="fs-4"></FaPhone>
								<div className="mx-3">
									<p> +880 01700223344</p>
									<p> +880 01700443344</p>
								</div>
							</div>
							<div className="d-flex align-items-center">
								<FaEnvelopeOpen className="fs-4"></FaEnvelopeOpen>
								<p className="mx-3">admin@povi.com</p>
							</div>
						</div>
					</div>
					<hr />
					<p className="py-3 text-center">
						@ Povi. All Rights Reserved By{' '}
						<Link to={'https://sauravms.netlify.app/'}>Sauravms IT Group</Link>
					</p>
				</div>
			</div>
		</PhotoProvider>
	);
};

export default Footer;
