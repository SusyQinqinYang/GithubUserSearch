import React from "react";
import ReactDOM from "react-dom";
import App from './Components/App.jsx';
import { Provider } from 'react-redux';
import store from './store/store.js'

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
)