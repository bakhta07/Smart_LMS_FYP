import { Upload } from "lucide-react";

export default function UploadAssignment() {
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-8">

      <section className="w-full max-w-2xl bg-white border border-slate-200 rounded-2xl shadow-sm p-8">

        {/* Heading */}

        <div className="mb-8 text-center">

          <h1 className="text-3xl font-bold text-slate-800">
            Upload Assignment
          </h1>

          <p className="mt-2 text-slate-600">
            Upload your assignment before the submission deadline.
          </p>

        </div>

        <div className="space-y-6">

          {/* Assignment */}

          <div>

            <label className="block mb-2 text-sm font-medium text-slate-700">
              Assignment
            </label>

            <select
              className="
                w-full
                rounded-xl
                border
                border-slate-300
                px-4
                py-3
                bg-slate-50
                focus:outline-none
                focus:ring-2
                focus:ring-slate-400
              "
            >
              <option>Assignment 01 - Data Structures</option>
              <option>Assignment 02 - Database Systems</option>
              <option>Assignment 03 - Software Engineering</option>
              <option>Assignment 04 - Computer Networks</option>
            </select>

          </div>

          {/* File */}

          <div>

            <label className="block mb-2 text-sm font-medium text-slate-700">
              Choose File
            </label>

            <input
              type="file"
              className="
                w-full
                rounded-xl
                border
                border-slate-300
                bg-slate-50
                px-4
                py-3
              "
            />

            <p className="mt-2 text-sm text-slate-500">
              Accepted formats: PDF, DOCX, ZIP
            </p>

          </div>

          {/* Button */}

          <button
            className="
              w-full
              flex
              items-center
              justify-center
              gap-2
              rounded-xl
              bg-slate-700
              py-3
              font-semibold
              text-white
              transition
              hover:bg-slate-800
            "
          >
            <Upload size={18} />
            Upload Assignment
          </button>

        </div>

      </section>

    </div>
  );
}