import {
  LayoutDashboard,
  ClipboardList,
  Eye,
  User,
  LogOut,
  CalendarCheck,
} from "lucide-react";

import { useNavigate, useLocation } from "react-router-dom";


export default function FacultySidebar() {


  const navigate = useNavigate();
  const location = useLocation();



  const links = [

    {
      title:"Dashboard",
      icon:<LayoutDashboard size={20}/>,
      path:"/faculty/dashboard"
    },


    {
      title:"Assignments",
      icon:<ClipboardList size={20}/>,
      path:"/faculty/course/1/assignments"
    },


    {
      title:"View Submissions",
      icon:<Eye size={20}/>,
      path:"/faculty/course/1/submissions"
    },


    {
      title:"Attendance",
      icon:<CalendarCheck size={20}/>,
      path:"/faculty/course/1/attendance"
    },


    {
      title:"Profile",
      icon:<User size={20}/>,
      path:"/faculty/profile"
    },

  ];





return (

<aside

className="
w-64
min-h-screen
bg-slate-200
border-r
border-slate-300
p-5
"

>


{/* Logo */}

<div className="mb-8">

<h1 className="text-2xl font-bold text-slate-800">
Smart LMS
</h1>

<p className="text-sm text-slate-600">
Faculty Portal
</p>

</div>





{/* Menu */}

<div className="space-y-3">


{
links.map((link)=>{


const active = location.pathname === link.path;


return (

<button

key={link.title}

onClick={()=>navigate(link.path)}

className={`

w-full
flex
items-center
gap-3
px-4
py-3
rounded-xl
font-medium


${
active

?

"bg-slate-800 text-white"

:

"text-slate-700 hover:bg-slate-300"

}

`}


>


{link.icon}

<span>
{link.title}
</span>


</button>


)


})

}


</div>







{/* Logout */}

<button

onClick={()=>navigate("/")}

className="

mt-6
w-full
flex
items-center
gap-3
px-4
py-3
rounded-xl
font-medium
text-slate-700
hover:bg-slate-300

"


>


<LogOut size={20}/>

<span>
Logout
</span>


</button>



</aside>


);


}