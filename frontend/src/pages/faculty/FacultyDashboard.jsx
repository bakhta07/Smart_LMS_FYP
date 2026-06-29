import {
  BookOpen,
  Users,
  ArrowRight,
  ClipboardCheck,
  GraduationCap,
} from "lucide-react";

import { useNavigate } from "react-router-dom";




export default function FacultyDashboard() {


  const navigate = useNavigate();



  const courses = [

    {
      id: 1,
      code: "CS-301",
      title: "Database Systems",
      students: 52,
    },

    {
      id: 2,
      code: "CS-304",
      title: "Software Engineering",
      students: 48,
    },

    {
      id: 3,
      code: "CS-307",
      title: "Computer Networks",
      students: 46,
    },

    {
      id: 4,
      code: "CS-401",
      title: "Artificial Intelligence",
      students: 41,
    },

  ];




  return (


    <div className="space-y-8">





      {/* Welcome */}


      <div

        className="
        bg-white
        border
        border-slate-200
        rounded-2xl
        shadow-sm
        p-8
        "

      >


        <div className="flex items-center gap-4">



          <div

            className="
            bg-slate-100
            p-3
            rounded-xl
            text-slate-700
            "

          >

            <GraduationCap size={28}/>

          </div>





          <div>


            <h1

            className="
            text-3xl
            font-bold
            text-slate-800
            "

            >

              Faculty Dashboard

            </h1>




            <p

            className="
            text-slate-500
            mt-2
            "

            >

              Manage courses, lectures, assignments and student progress.

            </p>



          </div>



        </div>


      </div>







      {/* Stats */}



      <div

      className="
      grid
      grid-cols-1
      md:grid-cols-3
      gap-6
      "

      >



        <StatCard

        icon={<BookOpen size={22}/>}

        title="Courses Teaching"

        value={courses.length}

        />




        <StatCard

        icon={<Users size={22}/>}

        title="Total Students"

        value="187"

        />





        <StatCard

        icon={<ClipboardCheck size={22}/>}

        title="Pending Reviews"

        value="14"

        />



      </div>









      {/* Courses */}



      <div

      className="
      bg-white
      border
      border-slate-200
      rounded-2xl
      shadow-sm
      p-8
      "

      >



        <h2

        className="
        text-2xl
        font-semibold
        text-slate-800
        mb-6
        "

        >

          My Courses

        </h2>





        <div

        className="
        grid
        md:grid-cols-2
        gap-6
        "

        >




        {
          courses.map((course)=>(



            <div

            key={course.id}

            className="
            border
            border-slate-200
            rounded-xl
            p-6
            hover:shadow-md
            transition
            "

            >





              <div

              className="
              flex
              items-center
              gap-3
              mb-5
              "

              >



                <div

                className="
                bg-slate-100
                p-3
                rounded-lg
                text-slate-700
                "

                >

                  <BookOpen size={22}/>


                </div>





                <div>


                  <h3

                  className="
                  font-semibold
                  text-slate-800
                  "

                  >

                    {course.title}


                  </h3>




                  <p

                  className="
                  text-sm
                  text-slate-500
                  "

                  >

                    {course.code}

                  </p>



                </div>



              </div>







              <div

              className="
              flex
              items-center
              gap-2
              text-slate-500
              mb-6
              "

              >


                <Users size={18}/>


                <span>

                  {course.students} students enrolled

                </span>


              </div>







              <button


              onClick={()=>

                navigate(`/faculty/course/${course.id}`)

              }


              className="
              flex
              items-center
              gap-2
              bg-slate-800
              text-white
              px-5
              py-2
              rounded-lg
              hover:bg-slate-700
              transition
              "


              >


                Manage Course


                <ArrowRight size={18}/>


              </button>





            </div>



          ))

        }




        </div>




      </div>





    </div>


  );

}









function StatCard({icon,title,value}) {



return (


<div

className="
bg-white
border
border-slate-200
rounded-2xl
shadow-sm
p-6
"

>


<div className="flex items-center gap-4">



<div

className="
bg-slate-100
p-3
rounded-xl
text-slate-700
"

>

{icon}


</div>





<div>



<p

className="
text-sm
text-slate-500
"

>

{title}

</p>





<h2

className="
text-3xl
font-bold
text-slate-800
"

>

{value}


</h2>



</div>



</div>



</div>


);


}