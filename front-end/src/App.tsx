import { Route, Routes } from 'react-router-dom';

import Home from './Home/index';
import Layout from './Layout/index';
import Login from './Login/index';
import Error404 from './Error404';

const App = () => (
	<Routes>
		<Route path="/" element={<Layout />}>
			<Route path="home" element={<Home />} />
			<Route path="login" element={<Login />} />
			<Route path="*" element={<Error404 />} />
		</Route>
	</Routes>
);

export default App;
