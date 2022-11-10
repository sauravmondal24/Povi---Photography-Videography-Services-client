import React from 'react';
import { Link } from 'react-router-dom';
import '../../Home.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const ServicesItem = ({ serviceItem }) => {
	const { _id, name, photoULR } = serviceItem;
	return (
		<PhotoProvider>
			<div>
				<div
					style={{ height: '450px', backgroundColor: '#ededed' }}
					className="card  text-dark my-2 p-3 shadow-lg m-2 "
				>
					<PhotoView src={photoULR}>
						<img
							style={{ height: '400px', width: '100%' }}
							src={photoULR}
							className="img-fluid card-img-top"
							alt="..."
						/>
					</PhotoView>
					<div className="card-body">
						<h5 className="card-title text-dark">{name}</h5>

						<Link to={`/services/${_id}`} className="btn btn-danger my-2">
							VIEW DETAILS
						</Link>
					</div>
				</div>
			</div>
		</PhotoProvider>
	);
};

export default ServicesItem;
