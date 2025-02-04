import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import Investorrelation from './assets/Components/Investorrelation.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


let routes = createBrowserRouter([
  {
    path:'/',
    element: <Investorrelation/>
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes}/>
  </StrictMode>,
)
