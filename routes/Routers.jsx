import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../src/layout/Main";
import Home from "../src/pages/home/Home";
import NewsLayout from "../src/layout/newslayout/NewsLayout";
import News from "../src/component/news/news/News";
import Category from "../src/pages/home/category/category";
import LoginLayout from "../src/layout/login/LoginLayout";
import Login from "../src/layout/login/Login";
import Register from "../src/layout/login/Register";
const router=createBrowserRouter([
    {
        path:'/',
        element:<LoginLayout></LoginLayout>,
        children:[
            {
                path:'/',
                element:<Navigate to='/category/0' ></Navigate>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            }
        ]
    },
    {
        path:'category',
        element:<Main></Main>,
        children:[
            {
                path:':id',
                element:<Category></Category>,
                loader:({params})=>fetch(`http://localhost:5000/categories/${params.id}`)
            }
        ]
    },
    {
        path:'news',
        element:<NewsLayout></NewsLayout>,
        children:[
            {
                path:':id',
                element:<News></News>,
                loader:({params})=>fetch(`http://localhost:5000/news/${params.id}`)
            }
        ]
    }
]);
export default router;