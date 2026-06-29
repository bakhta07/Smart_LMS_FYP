import { useState } from "react";
import { ClipboardCheck } from "lucide-react";
import { toast } from "react-toastify";

export default function CreateAssignment() {
  const [title, setTitle] = useState("");
  const [instructions, setInstructions] = useState("");
  const [deadline, setDeadline] = useState("");
  const [file, setFile] = useState(null);

  const handleCreate = () => {
    if (!title.trim() || !instructions.trim() || !deadline || !file) {
      toast.error("Please fill in all the fields and upload an assignment file.");
      return;
    }

    toast.success("Assignment created successfully!");

    setTitle("");
    setInstructions("");
    setDeadline("");
    setFile(null);

    document.getElementById("assignment-file").value = "";
  };

  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-4xl mx-auto bg-white border border-slate-200 rounded-2xl shadow-sm p-8">
        <div className="flex items-center gap-3 mb-6">
          <ClipboardCheck className="text-slate-700" size={28} />
          <h1 className="text-3xl font-bold text-slate-800">
            Create Assignment
          </h1>
        </div>

        <div className="space-y-6">

          {/* Assignment Title */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Assignment Title
            </label>

            <input
              type="text"
              placeholder="Enter assignment title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-slate-400"
            />
          </div>

          {/* Instructions */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Instructions
            </label>

            <textarea
              rows={6}
              placeholder="Enter assignment instructions..."
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
              className="w-full border border-slate-300 rounded-lg px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-slate-400"
            />
          </div>

          {/* Deadline */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Submission Deadline
            </label>

            <input
              type="datetime-local"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
              className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-slate-400"
            />
          </div>

          {/* Assignment File */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Upload Assignment File
            </label>

            <input
              id="assignment-file"
              type="file"
              accept=".pdf,.doc,.docx,.ppt,.pptx,.zip"
              onChange={(e) => setFile(e.target.files[0])}
              className="w-full border border-slate-300 rounded-lg px-4 py-3"
            />

            <p className="text-sm text-slate-500 mt-2">
              Supported formats: PDF, DOC, DOCX, PPT, PPTX, ZIP
            </p>
          </div>

          <button
            onClick={handleCreate}
            className="bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-lg transition"
          >
            Create Assignment
          </button>

        </div>
      </div>
    </div>
  );
}