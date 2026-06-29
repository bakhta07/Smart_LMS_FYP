
import StudentNavbar from "../../components/StudentNavbar";
import WelcomeBanner from "../../components/WelcomeBanner";
import OverviewCards from "../../components/OverviewCards";
import QuickActions from "../../components/QuickActions";
import DashboardSection from "../../components/DashboardSection";

export default function StudentDashboard() {
  return (
    <div className="min-h-screen bg-slate-100 flex">

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <StudentNavbar />

        <div className="p-8 space-y-8">
          {/* Welcome Banner */}
          <WelcomeBanner />

          {/* Overview Cards */}
          <OverviewCards />

          {/* Quick Actions */}
          <QuickActions />

          {/* Dashboard Sections */}
          <DashboardSection
            title="Academic Progress"
            text="Track your current CGPA, completed credit hours, assignment completion rate, and overall academic performance throughout the semester."
          />

          <DashboardSection
            title="Recent Activity"
            text="View your latest LMS activities including assignment submissions, quiz attempts, grades released, and newly posted course announcements."
          />
        </div>
      </main>
    </div>
  );
}