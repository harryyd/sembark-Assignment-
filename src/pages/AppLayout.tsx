import { Outlet } from "react-router-dom";
import Header from "../component/Header";
const AppLayout = () =>{
    return(
        <>
           <Header />
            <Outlet />
            {/* <div> footer </div> */}
        </>
    )
}

export default AppLayout ; 