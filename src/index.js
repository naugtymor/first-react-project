import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
    {id: 1, message: 'I am learning React', likesCount: '15'},
    {id: 2, message: 'Its my first post', likesCount: '23'},
    {id: 3, message: 'Now a know mapping', likesCount: '40'},
    {id: 4, message: 'Cococo', likesCount: '2'},
    {id: 5, message: 'Ole Ole', likesCount: '5'},
]

let dialogs = [
    {id: 1, name: 'Dimazavr'},
    {id: 2, name: 'Hahhah-kayo'},
    {id: 3, name: 'Ecce-homora'},
    {id: 4, name: 'Shotahappens'},
]

let messages = [
    {id: 1, message: 'Lets go cs'},
    {id: 2, message: 'I want energy-drink'},
    {id: 3, message: 'Im eblan'},
    {id: 4, message: 'Check direct'},
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App posts={posts} dialogs={dialogs} messages={messages}/>
    </React.StrictMode>
);

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();

// ServiceWorker.unregister();
// 