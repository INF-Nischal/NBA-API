import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx'
import Games from "./components/Games";
import Teams from "./components/Teams";
import './index.css'
import Home from './components/Home.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <div>Not found</div>,
    children: [
      {
        path: '/',
        element: <Home />,
        errorElement: <div>Not found</div>,
      },
      {
        path: '/games',
        element: <Games />,
        errorElement: <div>Not found</div>,
      },
      {
        path: '/teams',
        element: <Teams />,
        errorElement: <div>Not found</div>,
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
