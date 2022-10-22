import state, {subscribe} from "./redux/state";
import reportWebVitals from "./reportWebVitals";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <App state={state}/>
        </React.StrictMode>
    );
}

rerenderEntireTree(state);
subscribe(rerenderEntireTree)

reportWebVitals();