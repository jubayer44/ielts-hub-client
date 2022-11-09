import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddService from "../Pages/AddService/AddService";
import Blog from "../Pages/Blog/Blog";
import Contact from "../Pages/Contact/Contact";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import MyReviews from "../Pages/MyReviews/MyReviews";
import UpdateReview from "../Pages/MyReviews/UpdateReview";
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
                path: '/update/:id',
                loader: ({params}) => fetch(`http://localhost:5000/update/${params.id}`),
                element: <UpdateReview/>
            },
            {
                path: '/add-service',
                element: <PrivateRoutes><AddService/></PrivateRoutes>
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
                path: '/blog',
                element: <Blog/>
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