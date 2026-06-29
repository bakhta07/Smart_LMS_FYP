import { useNavigate } from "react-router-dom";

export default function Assignments() {
  const navigate = useNavigate();

  const assignments = [
    {
      title: "Assignment 01",
      course: "Data Structures & Algorithms",
      dueDate: "15 Sept 2026",
      status: "Pending",
    },
    {
      title: "Assignment 02",
      course: "Database Management Systems",
      dueDate: "18 Sept 2026",
      status: "Pending",
    },
    {
      title: "Assignment 03",
      course: "Software Engineering",
      dueDate: "22 Sept 2026",
      status: "Pending",
    },
    {
      title: "Assignment 04",
      course: "Computer Networks",
      dueDate: "25 Sept 2026",
      status: "Pending",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-100 p-8">

      {/* Heading */}

      <div className="mb-8">

        <h1 className="text-3xl font-bold text-slate-800">
          Pending Assignments
        </h1>

        <p className="mt-2 text-slate-600">
          View your pending assignments and upload your submissions before the deadline.
        </p>

      </div>

      {/* Assignment Cards */}

      <div className="space-y-5">

        {assignments.map((assignment) => (

          <div
            key={assignment.title}
            className="
              bg-slate-50
              border
              border-slate-200
              rounded-2xl
              shadow-sm
              p-6
              flex
              flex-col
              md:flex-row
              justify-between
              items-start
              md:items-center
              gap-5
              hover:shadow-md
              transition-all
              duration-300
            "
          >

            {/* Left */}

            <div>

              <h2 className="text-xl font-semibold text-slate-800">
                {assignment.title}
              </h2>

              <p className="mt-1 text-slate-600">
                {assignment.course}
              </p>

              <p className="mt-2 text-sm text-slate-500">
                Due Date: {assignment.dueDate}
              </p>

            </div>

            {/* Right */}

            <div className="flex items-center gap-4">

              <span className="px-4 py-2 rounded-full bg-slate-200 text-slate-700 text-sm font-medium">
                {assignment.status}
              </span>

              <button
                onClick={() => navigate("/student/submit-assignment")}
                className="
                  px-6
                  py-3
                  rounded-xl
                  bg-slate-700
                  text-white
                  font-semibold
                  hover:bg-slate-800
                  transition-all
                  duration-300
                "
              >
                Upload Assignment
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}