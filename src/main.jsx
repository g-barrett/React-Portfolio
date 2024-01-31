import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './components/Home';
import App from './App';
import Error from './components/Error';
import Contact from './components/Contact';
import About from './components/About';
import Project from './components/Project';
import Resume from './components/Resume';

const router = createBrowserRouter([
    {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
        {
            index: true,
            element: <Home />,
        },
        {
            path: '/About',
            element: <About />,
        },
        {
            path: '/Projects',
            element: <Project />,
        },
        {
            path: '/Contact',
            element: <Contact />,
        },
        {
            path: '/Resume',
            element: <Resume />,
        }
    ],
    },
    ]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
);