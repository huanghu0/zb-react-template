import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import { store,persistor } from '@/store/index';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PersistGate loading={ null } persistor={ persistor }>
      <BrowserRouter>
        <React.Suspense>
          <App></App>
        </React.Suspense>      
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
