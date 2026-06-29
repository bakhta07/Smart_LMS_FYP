export default function RegisterTeacher(){


return (

<div className="
bg-white
border
rounded-2xl
shadow-sm
p-8
">


<h1 className="
text-3xl
font-bold
text-slate-800
mb-6
">

Register Teacher

</h1>



<div className="space-y-4">


<input
className="w-full border rounded-xl p-3"
placeholder="Teacher Name"
/>


<input
className="w-full border rounded-xl p-3"
placeholder="Email"
/>


<input
className="w-full border rounded-xl p-3"
placeholder="Department"
/>



<button

className="
bg-slate-800
text-white
px-6
py-3
rounded-xl
"

>

Create Teacher

</button>



</div>


</div>


)

}