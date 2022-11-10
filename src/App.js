import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routers } from './Router/Router';
import 'react-photo-view/dist/react-photo-view.css';

function App() {
	return (
		<div className="App">
			<RouterProvider router={routers}></RouterProvider>
		</div>
	);
}

export default App;
