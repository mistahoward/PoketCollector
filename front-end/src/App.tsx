import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Home from './Home/index';
import Layout from './Layout/index';
import Login from './Login/index';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: 'home',
				element: <Home />
			},
			{
				path: 'login',
				element: <Login />
			}
		]
	}
]);
const App = () => (
	<RouterProvider router={router} />
);

export default App;
