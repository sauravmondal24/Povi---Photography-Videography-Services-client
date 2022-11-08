import React from 'react';
import { Link } from 'react-router-dom';

const AllServicesItem = ({ service }) => {
	const { _id, name, photoULR, description } = service;
	return (
		<div>
			<div className="container">
				<div
					style={{ height: '480px' }}
					className="card bg-white text-dark my-3 p-3 shadow"
				>
					<img
						style={{ height: '250px' }}
						src={photoULR}
						className="img-fluid card-img-top"
						alt="..."
					/>
					<div className="card-body ">
						<h5 className="card-title">{name.slice(0, 20) + '...'}</h5>
						<p className="card-text">{description.slice(0, 100) + '...'}</p>
					</div>

					<div className="card-footer">
						<button className="btn btn-outline-success">
							<Link
								to={`/serviceDetails/${_id}`}
								className="text-info text-decoration-none"
							>
								MORE DETAILS
							</Link>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AllServicesItem;
