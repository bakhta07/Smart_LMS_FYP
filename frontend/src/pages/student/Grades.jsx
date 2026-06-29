export default function Grades() {
  const currentSemester = [
    {
      course: "Data Structures & Algorithms",
      code: "CS301",
      credits: 3,
      grade: "A",
    },
    {
      course: "Database Management Systems",
      code: "CS305",
      credits: 3,
      grade: "B+",
    },
    {
      course: "Software Engineering",
      code: "CS307",
      credits: 3,
      grade: "A-",
    },
    {
      course: "Computer Networks",
      code: "CS309",
      credits: 3,
      grade: "A",
    },
    {
      course: "Operating Systems",
      code: "CS311",
      credits: 3,
      grade: "B+",
    },
    {
      course: "Artificial Intelligence",
      code: "CS313",
      credits: 3,
      grade: "A",
    },
  ];

  const previousSemesters = [
    {
      semester: "Semester 1",
      gpa: "3.41",
      cgpa: "3.41",
    },
    {
      semester: "Semester 2",
      gpa: "3.55",
      cgpa: "3.48",
    },
    {
      semester: "Semester 3",
      gpa: "3.62",
      cgpa: "3.53",
    },
    {
      semester: "Semester 4",
      gpa: "3.58",
      cgpa: "3.54",
    },
    {
      semester: "Semester 5",
      gpa: "3.61",
      cgpa: "3.56",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-100 p-8">

      {/* Heading */}

      <div className="mb-8">

        <h1 className="text-3xl font-bold text-slate-800">
          Academic Results
        </h1>

        <p className="mt-2 text-slate-600">
          View your semester grades and academic performance.
        </p>

      </div>

      {/* Current Semester */}

      <section className="bg-white border border-slate-200 rounded-2xl shadow-sm p-8">

        <div className="flex justify-between items-center mb-6">

          <h2 className="text-2xl font-bold text-slate-800">
            Current Semester (Semester 6)
          </h2>

          <div className="bg-slate-200 px-5 py-2 rounded-xl font-semibold text-slate-800">
            GPA: 3.54
          </div>

        </div>

        <table className="w-full">

          <thead>

            <tr className="border-b border-slate-200 text-left">

              <th className="py-3">Course Code</th>
              <th>Course</th>
              <th>Credits</th>
              <th>Grade</th>

            </tr>

          </thead>

          <tbody>

            {currentSemester.map((course) => (

              <tr
                key={course.code}
                className="border-b border-slate-100"
              >

                <td className="py-4">{course.code}</td>

                <td>{course.course}</td>

                <td>{course.credits}</td>

                <td className="font-semibold text-slate-800">
                  {course.grade}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </section>

      {/* Previous Semesters */}

      <section className="mt-8 bg-white border border-slate-200 rounded-2xl shadow-sm p-8">

        <h2 className="text-2xl font-bold text-slate-800 mb-6">
          Previous Semester Results
        </h2>

        <table className="w-full">

          <thead>

            <tr className="border-b border-slate-200 text-left">

              <th className="py-3">Semester</th>
              <th>Semester GPA</th>
              <th>CGPA</th>

            </tr>

          </thead>

          <tbody>

            {previousSemesters.map((semester) => (

              <tr
                key={semester.semester}
                className="border-b border-slate-100"
              >

                <td className="py-4">
                  {semester.semester}
                </td>

                <td>{semester.gpa}</td>

                <td>{semester.cgpa}</td>

              </tr>

            ))}

          </tbody>

        </table>

        <div className="mt-8 flex justify-end">

          <div className="bg-slate-700 text-white rounded-xl px-6 py-3 font-semibold">
            Overall CGPA: 3.56 / 4.00
          </div>

        </div>

      </section>

    </div>
  );
}