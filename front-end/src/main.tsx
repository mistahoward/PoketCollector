import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Div100vh from 'react-div-100vh';

import { store } from './store/index';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'sweetalert2/src/sweetalert2.scss';
import './main.css';

import App from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<Div100vh>
					<App />
				</Div100vh>
			</BrowserRouter>
		</Provider>
	</React.StrictMode>,
);
