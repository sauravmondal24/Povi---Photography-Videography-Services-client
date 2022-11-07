import Blog from '../components/Blog/Blog';
import Home from '../components/Home/Home';
import Main from '../Layout/Main/Main';

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
			}
		]
	}
]);
