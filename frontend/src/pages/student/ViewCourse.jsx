import { Download, FileQuestion } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function ViewCourse() {

  const navigate = useNavigate();

  const [showToast, setShowToast] = useState(false);


  const handleDownload = () => {

    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
    }, 3000);

  };


  const lectureNotes = [
    {
      week: "Week 1",
      title: "Introduction to Data Structures",
      date: "12 Aug 2026",
      size: "2.4 MB",
    },
    {
      week: "Week 2",
      title: "Arrays & Linked Lists",
      date: "19 Aug 2026",
      size: "3.1 MB",
    },
    {
      week: "Week 3",
      title: "Stacks & Queues",
      date: "26 Aug 2026",
      size: "2.8 MB",
    },
    {
      week: "Week 4",
      title: "Trees",
      date: "02 Sep 2026",
      size: "4.0 MB",
    },
  ];


  return (

    <div className="min-h-screen bg-gray-100 p-8">


      {/* Toast */}

      {showToast && (

        <div
          className="
          fixed
          top-6
          right-6
          bg-white
          border
          border-gray-200
          text-gray-700
          px-5
          py-3
          rounded-xl
          shadow-md
          z-50
          flex
          items-center
          gap-2
          transition
          "
        >

          <Download size={17} className="text-gray-500"/>

          <span className="text-sm font-medium">
            Downloading lecture notes...
          </span>

        </div>

      )}



      {/* Header */}

      <div className="mb-8">

        <h1 className="text-3xl font-bold text-gray-800">
          Data Structures & Algorithms
        </h1>

        <p className="mt-2 text-gray-500">
          CS301 • Lecture Notes & AI Quiz
        </p>

      </div>



      {/* Notes Section */}

      <section
        className="
        bg-white
        border
        border-gray-200
        rounded-2xl
        shadow-sm
        p-8
        "
      >


        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Lecture Notes
        </h2>



        <div className="space-y-5">


        {lectureNotes.map((note)=>(


          <div
            key={note.title}
            className="
            bg-gray-50
            border
            border-gray-200
            rounded-xl
            p-5
            hover:bg-gray-100
            transition
            "
          >


            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">


              <div>


                <p className="text-sm text-gray-400">
                  {note.week}
                </p>


                <h3 className="text-lg font-semibold text-gray-800 mt-1">
                  {note.title}
                </h3>


                <p className="text-sm text-gray-500 mt-1">
                  {note.date} • {note.size}
                </p>


              </div>




              <div className="flex gap-3">



                <button

                  onClick={handleDownload}

                  className="
                  flex
                  items-center
                  gap-2
                  px-5
                  py-3
                  rounded-xl
                  bg-gray-200
                  text-gray-700
                  font-medium
                  hover:bg-gray-300
                  transition
                  "

                >

                  <Download size={18}/>
                  Download

                </button>




                <button

                  onClick={() => navigate("/student/quizzes")}

                  className="
                  flex
                  items-center
                  gap-2
                  px-5
                  py-3
                  rounded-xl
                  bg-gray-700
                  text-white
                  font-medium
                  hover:bg-gray-800
                  transition
                  "

                >

                  <FileQuestion size={18}/>
                  Take AI Quiz

                </button>



              </div>



            </div>


          </div>


        ))}


        </div>



      </section>



    </div>

  );
}