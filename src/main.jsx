import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Provider } from 'react-redux';
import { FidgetSpinner } from 'react-loader-spinner';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './redux/Store.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    {/* Ensure that FidgetSpinner is being rendered during persistence loading */}
    <PersistGate loading={<FidgetSpinner height={80} width={80} />} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
);
