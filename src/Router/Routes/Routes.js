import { createBrowserRouter } from "react-router-dom";
import Blog from "../../components/Blog/Blog";
import Classes from "../../components/Classes/Classes";
import Home from "../../components/Home/Home";
import Login from "../../components/Login/Login";
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
                loader: (()=> fetch('services.json')),
                element: <Services></Services>
            },
            // {
            //     path: '/classes',
            //     element: <Classes></Classes>
            // },
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
            }
        ]
    }
])

export default router;