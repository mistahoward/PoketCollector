import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import Div100vh from 'react-div-100vh';

import { store } from './store/index';

import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css';

import App from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<Provider store={store}>
			<Div100vh>
				<App />
			</Div100vh>
		</Provider>
	</React.StrictMode>,
);
