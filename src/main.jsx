import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';
import router from './Router/router';
import FirebaseProvider from './FirebaseProvider/FirebaseProvider';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirebaseProvider>
    <RouterProvider router={router}> </RouterProvider>
    </FirebaseProvider>
  </React.StrictMode>
);
