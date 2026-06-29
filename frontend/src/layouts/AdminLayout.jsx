import {Outlet} from "react-router-dom";
import AdminSidebar from "../components/AdminSidebar";


export default function AdminLayout(){

return (

<div className="flex">

<AdminSidebar/>


<main className="flex-1 p-8">

<Outlet/>

</main>


</div>

)


}