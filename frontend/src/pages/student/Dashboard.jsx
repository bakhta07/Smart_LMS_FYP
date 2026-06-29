import {
  BookOpen,
  ClipboardList,
  GraduationCap,
  CalendarDays,
} from "lucide-react";

export default function Dashboard() {
  const stats = [
    {
      title: "Enrolled Courses",
      value: "5",
      icon: <BookOpen size={22} />,
    },
    {
      title: "Pending Assignments",
      value: "3",
      icon: <ClipboardList size={22} />,
    },
    {
      title: "Current GPA",
      value: "3.62",
      icon: <GraduationCap size={22} />,
    },
    {
      title: "Upcoming Quizzes",
      value: "2",
      icon: <CalendarDays size={22} />,
    },
  ];

  const attendance = [
    {
      course: "Database Systems",
      attended: 19,
      total: 20,
      percentage: 95,
    },
    {
      course: "Operating Systems",
      attended: 18,
      total: 20,
      percentage: 90,
    },
    {
      course: "Computer Networks",
      attended: 22,
      total: 25,
      percentage: 88,
    },
    {
      course: "Software Engineering",
      attended: 29,
      total: 30,
      percentage: 97,
    },
    {
      course: "Artificial Intelligence",
      attended: 28,
      total: 30,
      percentage: 93,
    },
  ];

  return (
    <div className="space-y-8">

      {/* Welcome */}

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
        <h1 className="text-2xl font-bold text-slate-800">
          Welcome Back!
        </h1>

        <p className="mt-2 text-slate-500">
          BS Computer Science • Semester 6
        </p>
      </div>

      {/* Statistics */}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {stats.map((item) => (
          <div
            key={item.title}
            className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6"
          >
            <div className="flex items-center justify-between">

              <div>
                <p className="text-sm text-slate-500">
                  {item.title}
                </p>

                <h2 className="text-3xl font-bold text-slate-800 mt-2">
                  {item.value}
                </h2>
              </div>

              <div className="text-slate-500">
                {item.icon}
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* Course Attendance */}

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">

        <h2 className="text-xl font-semibold text-slate-800 mb-6">
          Course Attendance
        </h2>

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead>

              <tr className="border-b border-slate-200 text-left">

                <th className="py-3 text-slate-700 font-semibold">
                  Course
                </th>

                <th className="py-3 text-slate-700 font-semibold">
                  Attended
                </th>

                <th className="py-3 text-slate-700 font-semibold">
                  Total
                </th>

                <th className="py-3 text-slate-700 font-semibold">
                  Attendance
                </th>

                <th className="py-3 text-slate-700 font-semibold">
                  Status
                </th>

              </tr>

            </thead>

            <tbody>

              {attendance.map((course) => (

                <tr
                  key={course.course}
                  className="border-b border-slate-100 hover:bg-slate-50"
                >

                  <td className="py-4 font-medium text-slate-800">
                    {course.course}
                  </td>

                  <td className="py-4 text-slate-600">
                    {course.attended}
                  </td>

                  <td className="py-4 text-slate-600">
                    {course.total}
                  </td>

                  <td className="py-4 text-slate-600">
                    {course.percentage}%
                  </td>

                  <td className="py-4">

                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        course.percentage >= 90
                          ? "bg-green-100 text-green-700"
                          : course.percentage >= 75
                          ? "bg-amber-100 text-amber-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {course.percentage >= 90
                        ? "Excellent"
                        : course.percentage >= 75
                        ? "Good"
                        : "Low"}
                    </span>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}