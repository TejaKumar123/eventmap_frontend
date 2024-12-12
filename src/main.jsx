import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { store, persister } from "./store/store.jsx";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from "react-router-dom";
import App from './App.jsx';
import { GoogleOAuthProvider } from '@react-oauth/google';

const root = createRoot(document.getElementById('root'));
root.render(
	<Provider store={store}>
		<PersistGate loading={null} persistor={persister}>
			<BrowserRouter>
				<GoogleOAuthProvider clientId={`${import.meta.env.VITE_CLIENT_ID}`} >
					<App />
				</GoogleOAuthProvider>
			</BrowserRouter>
		</PersistGate>
	</Provider>
)
