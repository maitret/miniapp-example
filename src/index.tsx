import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import { initMetrika } from './lib/metrika';
import store, { persistor } from './redux';
import App from './PolyfillApp';

import './index.css';

initMetrika();

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <HashRouter>
                <App />
            </HashRouter>
        </PersistGate>
    </Provider>,
    document.getElementById('root')
);
