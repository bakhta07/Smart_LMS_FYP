import {
  LayoutDashboard,
  BookOpen,
  ClipboardList,
  GraduationCap,
  User,
  LogOut,
} from "lucide-react";

import { useNavigate, useLocation } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const items = [
    {
  name: "Dashboard",
  icon: <LayoutDashboard size={20} />,
  path: "/student/dashboard",
},
    {
      name: "My Courses",
      icon: <BookOpen size={20} />,
      path: "/student/courses",
    },
    {
      name: "Assignments",
      icon: <ClipboardList size={20} />,
      path: "/student/assignments",
    },

  
    {
      name: "Grades",
      icon: <GraduationCap size={20} />,
      path: "/student/grades",
    },
    {
      name: "Profile",
      icon: <User size={20} />,
      path: "/student/profile",
    },
    {
      name: "Logout",
      icon: <LogOut size={20} />,
      path: "/",
    },
  ];

  return (
    <aside className="hidden lg:flex flex-col w-64 bg-slate-200 border-r border-slate-300 shadow-sm">

      {/* Logo */}

      <div className="px-6 py-7 border-b border-slate-300">

        <h1 className="text-2xl font-bold text-slate-800">
          Smart LMS
        </h1>

        <p className="text-sm text-slate-600 mt-1">
          Student Portal
        </p>

      </div>

      {/* Navigation */}

      <nav className="flex-1 p-4 space-y-2">

        {items.map((item) => {

          const active = location.pathname === item.path;

          return (
            <button
              key={item.name}
              onClick={() => navigate(item.path)}
              className={`
                w-full
                flex
                items-center
                gap-3
                px-4
                py-3
                rounded-xl
                font-medium
                transition-all
                duration-200

                ${
                  active
                    ? "bg-slate-700 text-white shadow-sm"
                    : "text-slate-700 hover:bg-slate-300 hover:text-slate-900"
                }
              `}
            >
              {item.icon}

              <span>{item.name}</span>
            </button>
          );
        })}

      </nav>

      {/* Footer */}

      <div className="border-t border-slate-300 p-5">

        <p className="text-xs text-center text-slate-500">
          Smart LMS v1.0
        </p>

      </div>

    </aside>
  );
}