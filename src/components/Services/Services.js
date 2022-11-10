import React, { useEffect, useState } from 'react';
import useTitle from '../../hooks/useTitle';
import AllServicesItem from './AllServicesItem';

import './Services.css';

const Services = () => {
	useTitle('Services');
	const [services, setServices] = useState([]);

	useEffect(() => {
		fetch('https://povi-server.vercel.app/services')
			.then((res) => res.json())
			.then((data) => setServices(data));
	}, []);

	return (
		<div className="bg-dark text-white py-5">
			<div className="container">
				<div>
					<h5 className="fs-1 text-uppercase">All SERVICES</h5>
					<hr />
				</div>
				<h5 className="text-start text-info">
					Total services: {services.length}
				</h5>
				<div className="servicesItem">
					{services.map((service) => (
						<AllServicesItem
							key={service._id}
							service={service}
						></AllServicesItem>
					))}
				</div>
			</div>
		</div>
	);
};

export default Services;
