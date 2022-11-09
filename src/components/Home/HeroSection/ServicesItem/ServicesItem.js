import React from 'react';
import { Link } from 'react-router-dom';
import '../../Home.css';

const ServicesItem = ({ serviceItem }) => {
	const { _id, name, photoULR } = serviceItem;
	return (
		<div>
			<div>
				<div
					style={{ height: '400px', backgroundColor: '#ededed' }}
					className="card  text-dark my-3 p-2 shadow"
				>
					<img
						style={{ height: '300px' }}
						src={photoULR}
						className="img-fluid card-img-top"
						alt="..."
					/>
					<div className="card-body">
						<h5 className="card-title text-dark">{name}</h5>

						<Link to={`/services/${_id}`} className="btn btn-primary">
							ALL SERVICES
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ServicesItem;
