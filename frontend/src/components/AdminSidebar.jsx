import {
  LayoutDashboard,
  UserPlus,
  GraduationCap,
  LogOut
} from "lucide-react";

import { useNavigate, useLocation } from "react-router-dom";


export default function AdminSidebar(){


const navigate = useNavigate();
const location = useLocation();



const links = [

{
title:"Dashboard",
icon:<LayoutDashboard size={20}/>,
path:"/admin/dashboard"
},


{
title:"Register Student",
icon:<UserPlus size={20}/>,
path:"/admin/register-student"
},


{
title:"Register Teacher",
icon:<GraduationCap size={20}/>,
path:"/admin/register-teacher"
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


<h1 className="
text-2xl
font-bold
text-slate-800
mb-1
">

Smart LMS

</h1>


<p className="
text-sm
text-slate-600
mb-8
">

Admin Portal

</p>





<div className="space-y-3">


{
links.map(link=>{


const active =
location.pathname===link.path;



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

{link.title}


</button>


)


})

}



</div>







<button

onClick={()=>navigate("/")}

className="
mt-8
w-full
flex
items-center
gap-3
px-4
py-3
rounded-xl
hover:bg-slate-300
text-slate-700
font-medium
"

>

<LogOut size={20}/>

Logout

</button>



</aside>


)

}