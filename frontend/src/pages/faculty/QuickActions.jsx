import {
  Upload,
  Plus,
  FileQuestion,
  CalendarCheck,
  Megaphone,
  Eye,
} from "lucide-react";

import { useNavigate, useParams } from "react-router-dom";

export default function QuickActions() {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div
      className="
      bg-white
      border
      border-slate-200
      rounded-xl
      shadow-sm
      p-6
      "
    >

      <h2
        className="
        text-xl
        font-bold
        text-slate-800
        mb-5
        "
      >
        Quick Actions
      </h2>


      <div className="space-y-3">


        <button
          onClick={() => navigate(`/faculty/course/${id}/lectures`)}
          className="
          w-full flex items-center gap-3
          bg-slate-700 text-white
          py-3 px-4 rounded-xl
          hover:bg-slate-800 transition
          "
        >
          <Upload size={18}/>
          Upload Lecture
        </button>



        <button
          onClick={() => navigate(`/faculty/course/${id}/assignments`)}
          className="
          w-full flex items-center gap-3
          bg-blue-600 text-white
          py-3 px-4 rounded-xl
          hover:bg-blue-700 transition
          "
        >
          <Plus size={18}/>
          Create Assignment
        </button>




        <button
          onClick={() => navigate(`/faculty/course/${id}/quizzes`)}
          className="
          w-full flex items-center gap-3
          bg-purple-600 text-white
          py-3 px-4 rounded-xl
          hover:bg-purple-700 transition
          "
        >
          <FileQuestion size={18}/>
          Create Quiz
        </button>





        <button
          onClick={() => navigate(`/faculty/course/${id}/attendance`)}
          className="
          w-full flex items-center gap-3
          bg-green-600 text-white
          py-3 px-4 rounded-xl
          hover:bg-green-700 transition
          "
        >
          <CalendarCheck size={18}/>
          Mark Attendance
        </button>





        <button
          onClick={() => navigate(`/faculty/course/${id}/submissions`)}
          className="
          w-full flex items-center gap-3
          bg-indigo-600 text-white
          py-3 px-4 rounded-xl
          hover:bg-indigo-700 transition
          "
        >
          <Eye size={18}/>
          View Submissions
        </button>





        <button
          onClick={() => navigate(`/faculty/course/${id}/announcements`)}
          className="
          w-full flex items-center gap-3
          bg-orange-600 text-white
          py-3 px-4 rounded-xl
          hover:bg-orange-700 transition
          "
        >
          <Megaphone size={18}/>
          Post Announcement
        </button>


      </div>

    </div>
  );
}