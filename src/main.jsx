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


// step 02
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/about', element: <About /> },
      { path: '/notes', loader: () => fetch('notebook.json'), element: <Note /> },
      { path: '/pens', element: <Pens /> },
      { path: '/mobiles', element: <Mobile /> },
      { path: '/chargers', element: <Chargers /> },
      { path: '/gadgets', loader: () => fetch('https://dummyjson.com/products'), element: <Gadgets /> },
      { path: '/frames', element: <Frames /> },
      { path: '/photocopy', element: <PhotoCopy /> },
      { path: '/lamination', element: <Lamination /> },
      { path: '/wedding', element: <Wedding /> },
      { path: '/gadgets/:detailsId', loader: ({ params }) => fetch(`https://dummyjson.com/products/${params.detailsId}`), element: <GadgetDetails /> }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)