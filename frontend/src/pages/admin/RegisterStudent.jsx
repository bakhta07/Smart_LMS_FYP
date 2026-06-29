export default function RegisterStudent(){


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

Register Student

</h1>



<div className="space-y-4">


<input
className="w-full border rounded-xl p-3"
placeholder="Student Name"
/>


<input
className="w-full border rounded-xl p-3"
placeholder="Email"
/>


<input
className="w-full border rounded-xl p-3"
placeholder="Roll Number"
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

Create Student

</button>



</div>


</div>


)

}