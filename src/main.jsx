import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

// step 01
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// route based components
import Home from './components/Home/Home';
import ErrorPage from './components/ErrorPage/ErrorPage';
import About from './components/About/About';
import Note from './components/Notebook/Note';
import Pens from './components/Pens/Pens';
import Mobile from './components/Mobile/Mobile';
import Chargers from './components/Chargers/Chargers';
import Gadgets from './components/Gadgets/Gadgets';
import Frames from './components/Frames/Frames';
import PhotoCopy from './components/PhotoCopy/PhotoCopy';
import Lamination from './components/Lamination/Lamination';
import Wedding from './components/Wedding/Wedding';
import GadgetDetails from './components/Gadgets/GadgetDetails';
import AuthProvider from './ContextProvider/AuthProvider';
import Login from './Authentication/Login';
import Register from './Authentication/Register';
import PrivateRoute from './Authentication/PrivateRoute';
import Introduction from './components/Introduction/Introduction';


// step 02
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <PrivateRoute><Introduction /></PrivateRoute> },
      { path: '/about', element: <About /> },
      { path: '/notes', loader: () => fetch('notebook.json'), element: <PrivateRoute><Note /></PrivateRoute> },
      { path: '/pens', element: <PrivateRoute><Pens /></PrivateRoute> },
      { path: '/mobiles', element: <PrivateRoute><Mobile /></PrivateRoute> },
      { path: '/chargers', element: <PrivateRoute><Chargers /></PrivateRoute> },
      { path: '/gadgets', loader: () => fetch('https://dummyjson.com/products'), element: <Gadgets /> },
      { path: '/frames', element: <PrivateRoute><Frames /></PrivateRoute> },
      { path: '/photocopy', element: <PrivateRoute><PhotoCopy /></PrivateRoute> },
      { path: '/lamination', element: <PrivateRoute><Lamination /></PrivateRoute> },
      { path: '/wedding', element: <PrivateRoute><Wedding /></PrivateRoute> },
      { path: '/login', element: <Login /> },
      { path: '/register', element: <Register /> },
      // dynamic fetching
      {
        path: '/gadgets/:detailsId',
        loader: ({ params }) => fetch(`https://dummyjson.com/products/${params.detailsId}`),
        element: <GadgetDetails />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>,
)