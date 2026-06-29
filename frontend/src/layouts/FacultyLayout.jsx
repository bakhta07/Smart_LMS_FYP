import { Outlet } from "react-router-dom";
import FacultySidebar from "../components/FacultySidebar";


export default function FacultyLayout() {

  return (

    <div
      className="
      flex
      min-h-screen
      bg-slate-50
      "
    >


      {/* Faculty Dashboard Sidebar */}

      <FacultySidebar />



      {/* Page Content */}

      <main
        className="
        flex-1
        p-6
        "
      >

        <Outlet />

      </main>



    </div>

  );

}