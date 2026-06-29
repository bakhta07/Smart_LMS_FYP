import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

export default function StudentLayout() {

  return (

    <div className="flex min-h-screen bg-gray-100">

      {/* Existing Dashboard Bar */}
      <Sidebar />


      {/* Page Content */}
      <main className="flex-1 p-6">

        <Outlet />

      </main>


    </div>

  );

}