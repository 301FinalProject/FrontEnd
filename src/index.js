import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
    domain="dev-d6vsji4s.us.auth0.com"
    clientId="wnPAeGv1UJqDtpsvlb72pIUgK0bAuamy"
    redirectUri="">
    <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
