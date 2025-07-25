import {
  createBrowserRouter,
 
} from "react-router";
import App from "../App";
import Menu from "../page/Menu";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App> 
  },
  {
    path : 'menu' ,
    Component : Menu
  }
]);