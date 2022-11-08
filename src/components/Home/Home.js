import React from 'react';
import useTitle from '../../hooks/useTitle';
import Banner from '../Header/Banner/Banner';
import HeroSection from './HeroSection/HeroSection';
import ServicesItem from './HeroSection/ServicesItem/ServicesItem';

const Home = () => {
	useTitle('Home');
	return (
		<div>
			<Banner></Banner>
			<HeroSection></HeroSection>
			<ServicesItem></ServicesItem>
		</div>
	);
};

export default Home;
