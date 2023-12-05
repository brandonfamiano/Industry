import Header from "./components/Header/Header";
import SideNav from "./components/SideNav/SideNav";
import { Outlet } from "react-router-dom";
export default function Layout(){
    return(
        <div className="layout">
            <Header />
            <SideNav/>
            <Outlet />
        </div>
    );
}