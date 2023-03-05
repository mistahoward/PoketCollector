import { Route, Routes } from 'react-router-dom';

import Home from './Home/index';
import Layout from './Layout/index';
import Login from './Login/index';

const App = () => (
	<Routes>
		<Route path="/" element={<Layout />}>
			<Route index element={<Home />} />
			<Route path="login" element={<Login />} />
		</Route>
	</Routes>
);

export default App;
