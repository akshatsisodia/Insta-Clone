import {createBrowserRouter} from "react-router-dom";
import Login from "./features/auth/pages/Login";
import Register from "./features/auth/pages/Register";


export const router = createBrowserRouter([
    {
        path:"/",
        element: <main><h1>Wellcome to the Application.</h1></main>
    },
    {
        path:"/login",
        element:<Login/>
    },
    {
        path:"/register",
        element:<Register/>
    }
])