import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from "./redux/redux-store";
import reportWebVitals from "./reportWebVitals";


// setInterval(() => {
//     store.dispatch({type: "FAKE"})}, 1000
// );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <React.StrictMode>
                <App state={store.getState()} store={store}/>
    // </React.StrictMode>
);
