import React, { useEffect, useState } from 'react';
import useTitle from '../../hooks/useTitle';
import Banner from '../Header/Banner/Banner';
import HeroSection from './HeroSection/HeroSection';
import ServicesItem from './HeroSection/ServicesItem/ServicesItem';
import { Link } from 'react-router-dom';
import Packages from './Packages/Packages';

const Home = () => {
	useTitle('Home');

	const [samples, SetSamples] = useState([]);
	useEffect(() => {
		fetch('http://localhost:5000/sampleServices')
			.then((res) => res.json())
			.then((data) => SetSamples(data))
			.catch((error) => console.error(error));
	}, []);
	return (
		<div>
			<Banner></Banner>
			<HeroSection></HeroSection>
			<div className="bg-dark text-white py-5">
				<div className="container">
					<h2 className="text-center text-uppercase  fs-5 fw-bold">
						OUR SERVICES
					</h2>
					<h2 className="text-center text-uppercase pb-3 fs-1 fw-bold">
						We Provide Best Services
					</h2>
					<div className="servicesSample">
						{samples.map((serviceItem) => (
							<ServicesItem
								key={serviceItem._id}
								serviceItem={serviceItem}
							></ServicesItem>
						))}
					</div>

					<Link to="/services" className="btn btn-primary btn-lg my-5">
						SHOW ALL SERVICES
					</Link>
				</div>
			</div>
			<Packages></Packages>
		</div>
	);
};

export default Home;
