import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main"
import Home from "../Home"
import About from "../About"
import Favourite from "../Favourite";
import Courses from "../Courses";
import Lesson from "../Lesson"
import Profile from "../Profile";
import Login from "../Login";
import Register from "../Register"
export const router = createBrowserRouter([
    {
        path:"/",
        element:<Main/>,
        children:[{
            path:"",
            element:<Home/>
        },
    {
        path:"about",
        element:<About/>
    },
{
    path:"favourite",
    element:<Favourite/>
},
{
    path:"courses",
    element:<Courses/>
},
{
     path:"lessons",
    element:<Lesson/>
},
{
    path:"profile",
    element:<Profile/>
},
{
    path:"login",
    element:<Login/>
},
{
    path:"register",
    element:<Register/>
},]
    }
])