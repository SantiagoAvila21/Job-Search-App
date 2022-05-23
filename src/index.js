import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AuthProvider from './Context/AuthContext';
import JobsProvider from "./Context/JobsContext";


ReactDOM.createRoot(document.getElementById('root'))
.render(
    <AuthProvider>
        <JobsProvider>
            <App />
        </JobsProvider>
    </AuthProvider>
);
