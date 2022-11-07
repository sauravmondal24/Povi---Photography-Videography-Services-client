import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routers } from './Router/Router';

function App() {
	return (
		<div className="App">
			<RouterProvider router={routers}></RouterProvider>
		</div>
	);
}

export default App;
