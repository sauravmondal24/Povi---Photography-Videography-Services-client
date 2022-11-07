import React from 'react';
import { Outlet } from 'react-router-dom';
import Blog from '../../components/Blog/Blog';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Header/Navbar/Navbar';

const Main = () => {
	return (
		<div>
			<Navbar></Navbar>
			<Outlet>
				<Blog></Blog>
			</Outlet>
			<Footer></Footer>
		</div>
	);
};

export default Main;
