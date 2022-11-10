import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const Contact = () => {
	return (
		<PhotoProvider>
			<div className="bg-dark py-5 text-white">
				<div className="container">
					<div className="row">
						<div className="col-md-6">
							<PhotoView src="https://templates.hibootstrap.com/povi/default/assets/img/contact-bg-1.jpg">
								<img
									src="https://templates.hibootstrap.com/povi/default/assets/img/contact-bg-1.jpg"
									alt=""
									className="img-fluid"
								/>
							</PhotoView>
						</div>
						<div className="col-md-6">
							<h2 className="text-start text-uppercase  fs-5 fw-bold">
								GET IN TOUCH
							</h2>
							<h2 className="text-start text-uppercase pb-3 fs-1 fw-bold">
								Still Have A Questions?
							</h2>

							<div className="text-start fs-5">
								<form>
									<hr />
									<div className="mb-3">
										<label htmlFor="exampleInputName" className="form-label">
											Your Name
										</label>
										<input
											name="name"
											type="text"
											className="form-control bg-dark border border-1 border-primary p-3"
											id="exampleInputName"
											aria-describedby="emailHelp"
											placeholder="Enter Your Name"
										/>
									</div>
									<div className="mb-3">
										<label htmlFor="exampleInputEmail1" className="form-label">
											Email address
										</label>
										<input
											name="email"
											type="email"
											className="form-control bg-dark border border-1 border-primary p-3"
											id="exampleInputEmail1"
											aria-describedby="emailHelp"
											placeholder="Enter your Email"
										/>
									</div>
									<div className="mb-3">
										<label
											htmlFor="exampleInputPassword1"
											className="form-label"
										>
											Your Comments
										</label>
										<textarea
											name="comments"
											type="text"
											className="form-control bg-dark border border-1 border-primary p-3"
											id="exampleInputPassword1"
											placeholder="Write your comment here"
											style={{ height: '100px' }}
										/>
									</div>

									<button type="submit" className="btn btn-danger btn-lg w-100">
										SEND MESSAGE
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</PhotoProvider>
	);
};

export default Contact;
