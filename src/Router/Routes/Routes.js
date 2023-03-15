import { createBrowserRouter } from "react-router-dom";
import Blog from "../../components/Blog/Blog";
import About from "../../components/Body/About/About";
import Checkout from "../../components/Checkout/Checkout";
import Classes from "../../components/Classes/Classes";
import Home from "../../components/Home/Home";
import Login from "../../components/Login/Login";
import Orders from "../../components/Orders/Orders";
import Services from "../../components/Services/Services";
import Signup from "../../components/Signup/Signup";
import Main from "../../Layout/Main";


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
                loader: (()=> fetch('http://localhost:5001/services')),
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
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/checkout/:id',
                element: <Checkout></Checkout>,
                loader: ({params}) => fetch(`http://localhost:5001/services/${params.id}`)
            },
            {
                path: '/orders',
                element: <Orders></Orders>
            }
        ]
    }
])

export default router;