import { createBrowserRouter } from "react-router-dom";
import Blog from "../../components/Blog/Blog";
import About from "../../components/Body/About/About";
import Checkout from "../../components/Checkout/Checkout";
import Classes from "../../components/Classes/Classes";
import ErrorPage from "../../components/ErrorPage/ErrorPage";
import Home from "../../components/Home/Home";
import Login from "../../components/Login/Login";
import Orders from "../../components/Orders/Orders";
import Services from "../../components/Services/Services";
import Signup from "../../components/Signup/Signup";
import Main from "../../Layout/Main";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/services',
                loader: (()=> fetch('https://your-online-tutor-server.vercel.app/services')),
                element: <Services></Services>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '*',
                element: <ErrorPage></ErrorPage>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/checkout/:id',
                element: <PrivateRoute><Checkout></Checkout></PrivateRoute>,
                loader: ({params}) => fetch(`https://your-online-tutor-server.vercel.app/services/${params.id}`)
            },
            {
                path: '/orders',
                element: <PrivateRoute><Orders></Orders></PrivateRoute>
            }
        ]
    }
])

export default router;