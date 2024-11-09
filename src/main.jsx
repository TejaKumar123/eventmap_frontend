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
				<GoogleOAuthProvider clientId="41300727469-48r94odbbvo9ahd572dtc7kcq95q2lt0.apps.googleusercontent.com">
					<App />
				</GoogleOAuthProvider>
			</BrowserRouter>
		</PersistGate>
	</Provider>
)
