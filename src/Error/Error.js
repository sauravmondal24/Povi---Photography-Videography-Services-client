import React from 'react';
import { Link } from 'react-router-dom';
import img from '../assets/img/404-error-page-found.webp';

const Error = () => {
	return (
		<div>
			<div>
				<Link to="/">
					<img style={{ height: '100vh', width: '100%' }} src={img} alt="" />
				</Link>
			</div>
		</div>
	);
};

export default Error;
