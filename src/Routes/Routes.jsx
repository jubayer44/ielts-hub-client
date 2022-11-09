import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddService from "../Pages/AddService/AddService";
import Contact from "../Pages/Contact/Contact";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import MyReviews from "../Pages/MyReviews/MyReviews";
import Register from "../Pages/Register/Register";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import Services from "../Pages/services/Services";
import PrivateRoutes from "./PrivateRoutes";

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
                path: '/services',
                element: <Services/>
            },
            {
                path: '/contact',
                element: <Contact/>
            },
            {
                path: '/my-reviews',
                element: <PrivateRoutes><MyReviews/></PrivateRoutes>
            },
            {
                path: '/add-service',
                element: <AddService/>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/register',
                element: <Register/>
            },
            {
                path: '/services/:id',
                loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`),
                element: <ServiceDetails/>
            }
        ]
    }
]);

export default router;