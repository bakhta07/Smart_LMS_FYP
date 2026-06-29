import { useState } from "react";
import {
  FileText,
  ClipboardCheck,
  Sparkles,
  BookOpen
} from "lucide-react";

import { toast } from "react-toastify";


export default function ViewSubmissions() {


  const [course,setCourse] = useState("Database Systems");


  const [submissions,setSubmissions] = useState([

    {
      id:1,
      type:"Assignment",
      title:"Normalization Assignment",
      student:"Ali Khan",
      roll:"22-CS-001",
      marks:"8/10",
      status:"Graded"
    },

    {
      id:2,
      type:"Quiz",
      title:"SQL Quiz #1",
      student:"Ayesha Ahmed",
      roll:"22-CS-002",
      marks:"-",
      status:"Pending"
    },

    {
      id:3,
      type:"Assignment",
      title:"ER Diagram Task",
      student:"Hamza Malik",
      roll:"22-CS-003",
      marks:"-",
      status:"Pending"
    },

    {
      id:4,
      type:"Quiz",
      title:"DBMS Quiz #2",
      student:"Fatima Noor",
      roll:"22-CS-004",
      marks:"9/10",
      status:"Graded"
    }

  ]);






const autoGrade=(id)=>{


setSubmissions(

submissions.map(item=>

item.id===id

?

{
...item,
marks:"10/10",
status:"Graded"
}

:

item

)

);


toast.success("Auto grading completed");


};







return (


<div className="
min-h-screen
bg-slate-50
p-8
">



<div className="
max-w-7xl
mx-auto
bg-white
border
border-slate-200
rounded-3xl
shadow-sm
p-8
">





{/* Header */}


<div className="
flex
items-center
gap-4
mb-10
">


<div className="
bg-slate-800
text-white
p-4
rounded-2xl
">


<FileText size={32}/>


</div>



<div>


<h1 className="
text-3xl
font-bold
text-slate-800
">

View Submissions

</h1>


<p className="
text-slate-500
">

Review student assignments and quizzes

</p>


</div>



</div>







{/* Course */}



<div className="
bg-slate-100
border
border-slate-200
rounded-2xl
p-6
mb-8
">


<div className="
flex
items-center
gap-2
mb-3
">


<BookOpen size={20}/>


<h2 className="
font-semibold
text-slate-700
">

Select Course

</h2>


</div>



<select


value={course}


onChange={(e)=>setCourse(e.target.value)}


className="
w-full
md:w-96
border
border-slate-300
rounded-xl
px-4
py-3
bg-white
outline-none
focus:ring-2
focus:ring-slate-400
"


>


<option>
Database Systems
</option>

<option>
Data Structures
</option>


<option>
Software Engineering
</option>


</select>



</div>








{/* Stats */}



<div className="
grid
md:grid-cols-3
gap-6
mb-10
">



<div className="
border
rounded-2xl
p-6
bg-white
shadow-sm
">


<p className="
text-slate-500
">

Total Submissions

</p>


<h2 className="
text-4xl
font-bold
text-slate-800
mt-2
">

{submissions.length}

</h2>


</div>






<div className="
border
rounded-2xl
p-6
bg-white
shadow-sm
">


<p className="
text-slate-500
">

Assignments

</p>


<h2 className="
text-4xl
font-bold
text-slate-800
mt-2
">


{
submissions.filter(
x=>x.type==="Assignment"
).length
}


</h2>


</div>






<div className="
border
rounded-2xl
p-6
bg-white
shadow-sm
">


<p className="
text-slate-500
">

Quizzes

</p>


<h2 className="
text-4xl
font-bold
text-slate-800
mt-2
">


{
submissions.filter(
x=>x.type==="Quiz"
).length
}


</h2>


</div>




</div>









{/* Table */}



<div className="
overflow-x-auto
border
border-slate-200
rounded-2xl
">



<table className="w-full">



<thead className="
bg-slate-800
text-white
">


<tr>


<th className="
px-6 py-4 text-left
">

Type

</th>


<th className="
px-6 py-4 text-left
">

Title

</th>


<th className="
px-6 py-4 text-left
">

Student

</th>


<th className="
px-6 py-4
">

Marks

</th>


<th className="
px-6 py-4
">

Status

</th>


<th className="
px-6 py-4
">

Action

</th>


</tr>


</thead>






<tbody>


{
submissions.map(item=>(



<tr

key={item.id}

className="
border-b
hover:bg-slate-50
transition
"

>


<td className="
px-6 py-5
">


<div className="
flex
items-center
gap-2
">


{

item.type==="Quiz"

?

<ClipboardCheck size={18}/>

:

<FileText size={18}/>

}


{item.type}


</div>


</td>






<td className="
px-6 py-5
font-semibold
text-slate-800
">


{item.title}


</td>






<td className="
px-6 py-5
">


<p className="font-medium">

{item.student}

</p>


<p className="
text-sm
text-slate-500
">

{item.roll}

</p>


</td>







<td className="
text-center
font-bold
">

{item.marks}

</td>







<td className="text-center">


<span className={`

px-4
py-2
rounded-full
text-sm
font-semibold

${

item.status==="Graded"

?

"bg-green-100 text-green-700"

:

"bg-yellow-100 text-yellow-700"

}

`}>

{item.status}

</span>


</td>







<td className="text-center">


<button

onClick={()=>autoGrade(item.id)}

className="
inline-flex
items-center
gap-2
bg-slate-800
hover:bg-slate-700
text-white
px-5
py-2.5
rounded-xl
transition
"


>


<Sparkles size={16}/>


Auto Grade


</button>


</td>





</tr>


))


}



</tbody>



</table>


</div>





</div>


</div>



);

}