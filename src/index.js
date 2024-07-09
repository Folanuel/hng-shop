import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider, createRoutesFromElements, Route} from 'react-router-dom';
import './index.css';
import Homepage from './pages/Homepage';
import Checkout from './pages/Checkout';
import Layout from './components/Layout';


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/'  element={<Layout />}>
        <Route path=''  element={<Homepage />}/>                
        <Route path='/checkout'  element={<Checkout />}/>                
        </Route>
    )    
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


