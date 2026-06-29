import { useNavigate } from "react-router-dom";

const courses = [
  {
    code: "CS301",
    name: "Data Structures & Algorithms",
    instructor: "Dr. Ahmed Khan",
    credits: 3,
    attendance: 93,
  },
  {
    code: "CS305",
    name: "Database Management Systems",
    instructor: "Dr. Sana Ali",
    credits: 3,
    attendance: 88,
  },
  {
    code: "CS307",
    name: "Software Engineering",
    instructor: "Prof. Bilal Ahmed",
    credits: 3,
    attendance: 91,
  },
  {
    code: "CS309",
    name: "Computer Networks",
    instructor: "Dr. Ayesha Malik",
    credits: 3,
    attendance: 95,
  },
  {
    code: "CS311",
    name: "Operating Systems",
    instructor: "Dr. Muhammad Rizwan",
    credits: 3,
    attendance: 84,
  },
  {
    code: "CS313",
    name: "Artificial Intelligence",
    instructor: "Prof. Hina Shaikh",
    credits: 3,
    attendance: 89,
  },
];


export default function MyCourses() {

  const navigate = useNavigate();


  return (

    <div className="min-h-screen bg-slate-100 p-8">


      {/* Heading */}

      <div className="mb-8">

        <h1 className="text-3xl font-bold text-slate-800">
          My Courses
        </h1>

        <p className="text-slate-600 mt-2">
          Courses you are currently enrolled in this semester.
        </p>

      </div>



      {/* Course Cards */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">


        {courses.map((course)=>(


          <div
            key={course.code}
            className="
              bg-white
              rounded-2xl
              border
              border-slate-200
              shadow-sm
              p-6
              hover:shadow-md
              transition
              duration-300
            "
          >


            {/* Course Title */}

            <h2 className="text-xl font-bold text-slate-800">
              {course.name}
            </h2>


            <p className="text-sm text-slate-500 mt-1">
              {course.code}
            </p>



            <div className="border-t border-slate-200 my-5"></div>



            {/* Details */}

            <div className="space-y-4">


              <div className="flex justify-between">

                <span className="text-slate-500">
                  Instructor
                </span>

                <span className="font-medium text-slate-700">
                  {course.instructor}
                </span>

              </div>



              <div className="flex justify-between">

                <span className="text-slate-500">
                  Credit Hours
                </span>

                <span className="font-medium text-slate-700">
                  {course.credits} CH
                </span>

              </div>



              <div className="flex justify-between">

                <span className="text-slate-500">
                  Status
                </span>

                <span className="font-semibold text-green-700">
                  Active
                </span>

              </div>


            </div>



            {/* Attendance */}

            <div className="mt-6">


              <div className="flex justify-between mb-2">

                <span className="text-sm text-slate-600">
                  Attendance
                </span>


                <span className="text-sm font-semibold text-slate-700">
                  {course.attendance}%
                </span>


              </div>



              <div className="w-full h-2 bg-slate-200 rounded-full">

                <div

                  className="h-2 rounded-full bg-slate-700"

                  style={{
                    width:`${course.attendance}%`
                  }}

                ></div>


              </div>


            </div>




            {/* View Course */}

            <button

              onClick={()=>navigate("/student/course")}

              className="
                w-full
                mt-7
                py-3
                rounded-xl
                bg-slate-800
                text-white
                font-semibold
                hover:bg-slate-900
                transition
              "

            >

              View Course

            </button>



          </div>


        ))}


      </div>


    </div>

  );
}