import { useNavigate } from "react-router-dom";

import MenuBookIcon from "@mui/icons-material/MenuBook";
import SchoolIcon from "@mui/icons-material/School";
import GroupsIcon from "@mui/icons-material/Groups";

import PortalCard from "../../components/PortalCard";

export default function Landing() {
  const navigate = useNavigate();
  

  return (
    <div className="min-h-screen px-6 py-8">
      <main className="max-w-7xl mx-auto pt-16">

        {/* Welcome */}
        <div className="text-center mb-14">
          <span
            className="
              inline-block
              rounded-full
              border
              border-slate-300
              bg-white
              px-5
              py-2
              text-xs
              font-semibold
              uppercase
              tracking-[0.15em]
              text-slate-600
            "
          >
            Welcome
          </span>

          <h2 className="mt-6 text-2xl md:text-3xl font-bold text-slate-900">
            Select Your Portal
          </h2>

          <p className="mt-3 text-slate-500">
            Sign in using your university credentials.
          </p>
        </div>

        {/* Portal Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">

          {/* Student Portal */}
          <PortalCard
            icon={<MenuBookIcon fontSize="large" />}
            title="Student Portal"
            description="Access courses, assignments, grades and announcements."
            onClick={() => navigate("/student")}
          />

          {/* Faculty Portal */}
          <PortalCard
            icon={<SchoolIcon fontSize="large" />}
            title="Faculty Portal"
            description="Manage courses, assignments, attendance and AI grading."
            onClick={() => navigate("/faculty")}
          />

          {/* Admin Portal */}
          <PortalCard
            icon={<GroupsIcon fontSize="large" />}
            title="Admin Portal"
            description="Manage users, departments and system settings."
            onClick={() => navigate("/admin")}

          />

        </div>

        {/* Support */}
        <div className="mt-16 text-center">
          <p className="text-sm text-slate-500">
            Need help signing in? Contact your university IT support.
          </p>
        </div>

      </main>
    </div>
  );
}