import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// This is creating the store
// The store is a big JS Object that holds
// all of the information for our app
const storeInstance = createStore(
    // This is a reducer
    () => {
        console.log(`What up, yo, I'm a reducer`);
    },
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
