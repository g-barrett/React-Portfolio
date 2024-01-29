import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './components/Home';

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