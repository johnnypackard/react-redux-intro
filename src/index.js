import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

// This is our first reducer
const firstReducer = (state, action) => {
    console.log(`What up, yo? I'm a reducer!`);
    return {};
};

const secondReducer = (state, action) => {
    console.log(`Whoa, lookout, I'm another reducer!`);
    return {};
};

// This is creating the store
// The store is a big JS Object that holds
// all of the information for our app
const storeInstance = createStore(
    combineReducers({
        firstReducer,
        secondReducer
    }),
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
