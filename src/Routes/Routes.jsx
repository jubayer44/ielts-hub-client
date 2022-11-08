import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Contact from "../Pages/Contact/Contact";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Services from "../Pages/services/Services";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        errorElement: <ErrorPage/>,
        children: [
            {
             path: '/',
             element: <Home/>   
            },
            {
                path: 'services',
                element: <Services/>
            },
            {
                path: '/contact',
                element: <Contact/>
            }
        ]
    }
]);

export default router;