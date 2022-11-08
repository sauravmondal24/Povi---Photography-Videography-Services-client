import Login from '../Auth/Login/Login';
import SignUp from '../Auth/SignUp/SignUp';
import Blog from '../components/Blog/Blog';
import Home from '../components/Home/Home';
import MyReviews from '../components/MyReviews/MyReviews';
import AddServices from '../components/Services/AddServices';
import ServiceDetails from '../components/Services/ServiceDetails';
import Services from '../components/Services/Services';
import Error from '../Error/Error';
import Main from '../Layout/Main/Main';
import PrivateRoute from './Private/PrivateRoute';

const { createBrowserRouter } = require('react-router-dom');

export const routers = createBrowserRouter([
	{
		path: '/',
		element: <Main></Main>,
		children: [
			{
				path: '/',
				element: <Home></Home>
			},
			{
				path: '/blog',
				element: <Blog></Blog>
			},
			{
				path: '/services',
				element: <Services></Services>
			},
			{
				path: '/myreviews',
				element: (
					<PrivateRoute>
						<MyReviews></MyReviews>
					</PrivateRoute>
				)
			},
			{
				path: '/login',
				element: <Login></Login>
			},
			{
				path: '/signup',
				element: <SignUp></SignUp>
			},
			{
				path: '/addservices',
				element: (
					<PrivateRoute>
						<AddServices></AddServices>
					</PrivateRoute>
				)
			},
			{
				path: '/services/:id',
				element: <ServiceDetails></ServiceDetails>,
				loader: ({ params }) =>
					fetch(`http://localhost:5000/services/${params.id}`)
			}
		]
	},
	{
		path: '*',
		element: <Error></Error>
	}
]);
