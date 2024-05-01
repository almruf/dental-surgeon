import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Home/Login/Login";
import Appointment from "../../Pages/Appointment/Appointment/Appointment";
import Contact from "../../Pages/Contact/Contact";
import Testimonial from "../../Pages/Home/Testimonial/Testimonial";
import SignUp from "../../Pages/Home/SignUp/SignUp";
import Dashboard from "../../Pages/Dashboard/Dashboard";

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
                path: 'signUp',
                element: <SignUp></SignUp>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            
            {
                path: '/appointment',
                element: <Appointment></Appointment>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/testimonial',
                element: <Testimonial></Testimonial>
            }
        ]
    },
    {
        path: '/dashboard',
        element:<Dashboard></Dashboard>
    }
])
export default router;
