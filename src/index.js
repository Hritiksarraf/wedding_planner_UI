import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Home from './pages/home';
import About_us from './pages/about_us';
import Gallery from './pages/gallery';
import Events from './pages/Events';
import Our_work from './pages/our_work';
import Contact from './pages/contact';

const router =createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='/' element={<Home/>}/>
      <Route path='/about_us' element={<Home/>}/>
      <Route path='/gallery' element={<Gallery/>}/>
      <Route path='/events' element={<Events/>}/>
      <Route path='/our_work' element={<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>
      

    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
