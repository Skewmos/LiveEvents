import React from 'react';
import ReactDOM from 'react-dom';
import './styles/app.css';

import App from "../src-front/src/App";

console.log("react");

ReactDOM.render(
    <React.StrictMode>
        <App />
        {/* <AppFaq /> */}
    </React.StrictMode>,
    document.getElementById('root')
);
