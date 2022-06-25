import { Outlet } from "react-router-dom";
import NavBar from "../nav-bar/nav-bar.component";
import Sidebar from "../side-bar/side-bar.component";
import Topbar from "../top-bar/top-bar.component";

const Bars = () =>{
  return(
    <>
    <NavBar />
    <Sidebar />
    <Outlet/>
    </>
  )
};
export default Bars;