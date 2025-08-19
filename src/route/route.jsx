import {
  createBrowserRouter,
 
} from "react-router";
import App from "../App";
import Home from "../page/Home";
import Menu from "../page/menu/Menu";


export const router = createBrowserRouter([
  {
    path: "/",
    Component : Home ,
  },
  {
    path : '/menu' ,
    Component : Menu
  }
 
]);