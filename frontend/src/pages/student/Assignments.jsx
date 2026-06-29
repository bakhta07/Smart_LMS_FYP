import { useNavigate } from "react-router-dom";
import {
  BookOpen,
  CalendarDays,
  Clock3,
  FileText,
} from "lucide-react";

export default function Assignments() {
  const navigate = useNavigate();

  const assignments = [
    {
      id: 1,
      course: "Database Systems",
      title: "Database Normalization Assignment",
      description:
        "Normalize the given database into 3NF and submit your report in PDF format.",
      instructor: "Dr. Ahmed Ali",
      due: "28 June 2026",
      status: "Pending",
    },
    {
      id: 2,
      course: "Operating Systems",
      title: "CPU Scheduling Report",
      description:
        "Compare FCFS, SJF and Round Robin scheduling algorithms.",
      instructor: "Dr. Sarah Khan",
      due: "30 June 2026",
      status: "Pending",
    },
    {
      id: 3,
      course: "Computer Networks",
      title: "VLAN Configuration Lab",
      description:
        "Configure VLANs using Cisco Packet Tracer and upload the .pkt file.",
      instructor: "Dr. Hassan Raza",
      due: "05 July 2026",
      status: "Submitted",
    },
  ];

  const badge = (status) => {
    switch (status) {
      case "Pending":
        return "bg-amber-100 text-amber-700";
      case "Submitted":
        return "bg-emerald-100 text-emerald-700";
      case "Late":
        return "bg-red-100 text-red-700";
      default:
        return "bg-slate-100 text-slate-700";
    }
  };

  return (
    <div className="space-y-6">

      {/* Header */}

      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-8">
        <h1 className="text-2xl font-bold text-slate-800">
          Assignments
        </h1>

        <p className="mt-2 text-slate-500">
          Keep track of your coursework and upcoming submission deadlines.
        </p>
      </div>

      {/* Assignment Cards */}

      <div className="space-y-5">
        {assignments.map((assignment) => (
          <div
            key={assignment.id}
            className="bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition p-6"
          >
            <div className="flex flex-col lg:flex-row justify-between gap-6">

              {/* Left */}

              <div className="flex-1">

                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <BookOpen size={17} />
                  <span>{assignment.course}</span>
                </div>

                <h2 className="mt-3 text-xl font-semibold text-slate-800">
                  {assignment.title}
                </h2>

                <p className="mt-3 text-slate-600">
                  {assignment.description}
                </p>

                <p className="mt-4 text-sm text-slate-500">
                  Instructor: {assignment.instructor}
                </p>

                <div className="mt-5 flex flex-wrap gap-6 text-sm text-slate-500">

                  <div className="flex items-center gap-2">
                    <CalendarDays size={16} />
                    <span>Due: {assignment.due}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Clock3 size={16} />
                    <span>11:59 PM</span>
                  </div>

                </div>

              </div>

              {/* Right */}

              <div className="flex flex-col items-start lg:items-end justify-between gap-4">

                <span
                  className={`px-4 py-2 rounded-full text-sm font-medium ${badge(
                    assignment.status
                  )}`}
                >
                  {assignment.status}
                </span>

                <div className="flex gap-3">

                  <button
                    onClick={() => navigate("/student/course")}
                    className="flex items-center gap-2 border border-slate-300 rounded-lg px-4 py-2 hover:bg-slate-100 transition"
                  >
                    <FileText size={17} />
                    Details
                  </button>

                  {assignment.status === "Pending" && (
                    <button
                      onClick={() =>
                        navigate("/student/submit-assignment")
                      }
                      className="rounded-lg bg-slate-800 text-white px-5 py-2 hover:bg-slate-700 transition"
                    >
                      Submit
                    </button>
                  )}

                </div>

              </div>

            </div>
          </div>
        ))}
      </div>

    </div>
  );
}