import './index.css';
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"
import { Provider } from './context/books';

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider value={5}>
        <App />
    </Provider>
);