import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { store } from "./app/store";
import { Provider } from "react-redux";
// import Counter from './features/counter/counter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
    {/* <Counter /> */}
  </Provider>
);

