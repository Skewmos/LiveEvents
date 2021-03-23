import React from 'react';
import ReactDOM from 'react-dom';

import App from "./App";

console.log("react");

ReactDOM.render(
  <React.StrictMode>
      <App />
      {/* <AppFaq /> */}
  </React.StrictMode>,
  document.getElementById('root')
);
