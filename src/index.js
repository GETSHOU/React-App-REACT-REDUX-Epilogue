import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './ReactApp/store/index';
// import './css/clearFix.css';
import './css/index.css';
import { App } from './ReactApp/components/App/App';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
	<Provider store={store}>
		<App />
	</Provider>,
);
