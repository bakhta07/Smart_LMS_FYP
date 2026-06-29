import {
  ArrowLeft,
  BookOpen,
  Users,
  ClipboardList,
  FileQuestion,
  CalendarCheck,
  Megaphone,
  Upload,
  Plus,
  Pencil,
  Eye,
} from "lucide-react";

import { useNavigate } from "react-router-dom";
import QuickActions from "./QuickActions";

export default function ViewCourse() {
  const navigate = useNavigate();

  const materials = [
    { id: 1, title: "Lecture 1 - Introduction.pdf", date: "12 June 2026" },
    { id: 2, title: "Lecture 2 - ER Diagrams.pdf", date: "15 June 2026" },
    { id: 3, title: "Lab Manual.pdf", date: "20 June 2026" },
  ];

  const assignments = [
    {
      id: 1,
      title: "Assignment 1",
      due: "10 July 2026",
      submitted: "45/52",
    },
    {
      id: 2,
      title: "Assignment 2",
      due: "22 July 2026",
      submitted: "20/52",
    },
  ];

  const announcements = [
    "Mid Exam on Monday",
    "Project Proposal Deadline Extended",
  ];

  return (
    <div className="space-y-6">
      {/* Back Button */}

      <button
        onClick={() => navigate("/faculty/courses")}
        className="flex items-center gap-2 text-slate-600 hover:text-slate-900 font-medium"
      >
        <ArrowLeft size={18} />
        Back to Courses
      </button>

      {/* Header */}

      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6">
          <div>
            <h1 className="text-3xl font-bold text-slate-800">
              Database Systems
            </h1>

            <p className="text-slate-500 mt-2">
              CS-301 • BS Computer Science • Fall 2026
            </p>
          </div>

          <div className="flex gap-3 flex-wrap">
            <button className="flex items-center gap-2 px-4 py-2 bg-slate-700 text-white rounded-xl hover:bg-slate-800">
              <Pencil size={18} />
              Edit Course
            </button>

            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700">
              <Megaphone size={18} />
              Announcement
            </button>
          </div>
        </div>
      </div>

      {/* Statistics */}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5">
          <Users className="text-blue-600 mb-3" size={30} />
          <h2 className="text-3xl font-bold text-slate-800">52</h2>
          <p className="text-slate-500">Students</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5">
          <ClipboardList className="text-green-600 mb-3" size={30} />
          <h2 className="text-3xl font-bold text-slate-800">5</h2>
          <p className="text-slate-500">Assignments</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5">
          <FileQuestion className="text-purple-600 mb-3" size={30} />
          <h2 className="text-3xl font-bold text-slate-800">3</h2>
          <p className="text-slate-500">Quizzes</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5">
          <CalendarCheck className="text-orange-600 mb-3" size={30} />
          <h2 className="text-3xl font-bold text-slate-800">89%</h2>
          <p className="text-slate-500">Attendance</p>
        </div>
      </div>

      {/* Two Column Layout */}

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Left */}

        <div className="lg:col-span-2 space-y-6">
          {/* Course Description */}

          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <h2 className="text-xl font-bold text-slate-800 mb-4">
              Course Description
            </h2>

            <p className="text-slate-600 leading-7">
              This course introduces relational databases, ER modeling,
              normalization, SQL, transactions, indexing, and database design.
              Students will complete labs, assignments, quizzes, and a semester
              project.
            </p>
          </div>

          {/* Materials */}

          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <div className="flex justify-between items-center mb-5">
              <h2 className="text-xl font-bold text-slate-800">
                Lecture Materials
              </h2>

              <button className="flex items-center gap-2 bg-slate-700 text-white px-4 py-2 rounded-xl hover:bg-slate-800">
                <Upload size={18} />
                Upload
              </button>
            </div>

            <div className="space-y-4">
              {materials.map((file) => (
                <div
                  key={file.id}
                  className="flex justify-between items-center border rounded-xl p-4 hover:bg-slate-50"
                >
                  <div className="flex gap-3 items-center">
                    <BookOpen className="text-blue-600" size={22} />

                    <div>
                      <h3 className="font-semibold text-slate-800">
                        {file.title}
                      </h3>

                      <p className="text-sm text-slate-500">{file.date}</p>
                    </div>
                  </div>

                  <button className="text-slate-600 hover:text-slate-900">
                    <Eye size={20} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Assignments */}

          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <div className="flex justify-between items-center mb-5">
              <h2 className="text-xl font-bold text-slate-800">
                Assignments
              </h2>

              <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700">
                <Plus size={18} />
                Create
              </button>
            </div>

            <div className="space-y-4">
              {assignments.map((assignment) => (
                <div
                  key={assignment.id}
                  className="border rounded-xl p-4 hover:bg-slate-50"
                >
                  <divmkdir p className="flex justify-between items-center">
                    <div>
                      <h3 className="font-semibold text-slate-800">
                        {assignment.title}
                      </h3>

                      <p className="text-sm text-slate-500">
                        Due: {assignment.due}
                      </p>
                    </div>

                    <div className="text-right">
                      <p className="font-semibold text-blue-600">
                        {assignment.submitted}
                      </p>

                      <p className="text-xs text-slate-500">Submitted</p>
                    </div>
                  </divmkdir>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right */}

        <div className="space-y-6">
          {/* Quick Actions */}

          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              </div>








      {/* Quick Actions */}



      <QuickActions />





    </div>

          {/* Announcements */}

          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <h2 className="text-xl font-bold text-slate-800 mb-5">
              Announcements
            </h2>

            <div className="space-y-4">
              {announcements.map((item, index) => (
                <div
                  key={index}
                  className="border-l-4 border-blue-600 pl-4 py-2"
                >
                  <p className="font-medium text-slate-700">{item}</p>

                  <p className="text-xs text-slate-500 mt-1">2 days ago</p>
                </div>
              ))}
            </div>
          </div>

          {/* Course Info */}

          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <h2 className="text-xl font-bold text-slate-800 mb-5">
              Course Information
            </h2>

            <div className="space-y-3 text-slate-600">
              <div className="flex justify-between">
                <span>Course Code</span>
                <span className="font-semibold">CS-301</span>
              </div>

              <div className="flex justify-between">
                <span>Credit Hours</span>
                <span className="font-semibold">3</span>
              </div>

              <div className="flex justify-between">
                <span>Semester</span>
                <span className="font-semibold">Fall 2026</span>
              </div>

              <div className="flex justify-between">
                <span>Enrolled</span>
                <span className="font-semibold">52 Students</span>
              </div>
            </div>
          </div>
        </div>
      </div>

  );
}